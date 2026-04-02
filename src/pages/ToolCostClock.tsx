import { useState, useRef, useCallback, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";

function formatCurrency(n: number): string {
  return (n || 0).toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const ToolCostClock = () => {
  const [hourlyRate, setHourlyRate] = useState("35.00");
  const [attendees, setAttendees] = useState("3");
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [cost, setCost] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const computeCost = useCallback(() => {
    const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
    setSeconds(elapsed);
    const d = parseFloat(hourlyRate) || 0;
    const p = parseFloat(attendees) || 0;
    setCost((d * p * elapsed) / 3600);
  }, [hourlyRate, attendees]);

  const start = () => {
    if (running) return;
    startTimeRef.current = Date.now();
    setSeconds(0);
    setCost(0);
    setRunning(true);
  };

  const stop = () => {
    if (!running) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(computeCost, 1000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [running, computeCost]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !running) start();
  };

  return (
    <ToolLayout title="Meeting Cost Clock">
      <p className="text-muted-foreground mb-6">
        Enter an estimate of the average hourly rate of each attendee and the number of attendees.
        When you click <strong className="text-foreground">Start</strong>, the cost updates every
        second as: <em>(hourly rate × attendees × seconds) ÷ 3600</em>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="dollar" className="block text-sm font-semibold text-muted-foreground mb-1.5">
            Average hourly rate
          </label>
          <input
            id="dollar"
            type="number"
            inputMode="decimal"
            step="0.01"
            min="0"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            disabled={running}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2.5 rounded-xl border bg-background text-foreground text-base outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="people" className="block text-sm font-semibold text-muted-foreground mb-1.5">
            Attendees
          </label>
          <input
            id="people"
            type="number"
            inputMode="numeric"
            step="1"
            min="0"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            disabled={running}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2.5 rounded-xl border bg-background text-foreground text-base outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={start}
          disabled={running}
          className="px-5 py-2.5 rounded-xl font-bold bg-primary text-primary-foreground hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start
        </button>
        <button
          onClick={stop}
          disabled={!running}
          className="px-5 py-2.5 rounded-xl font-bold border bg-card text-foreground hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Stop
        </button>
        <span className="text-sm text-muted-foreground">
          Seconds elapsed: <span className="font-mono">{seconds}</span>
        </span>
      </div>

      <div
        className="mt-3 p-5 rounded-xl border bg-muted/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        role="status"
        aria-live="polite"
      >
        <div>
          <div className="text-sm text-muted-foreground">Current Meeting Cost</div>
          <div className="text-3xl font-bold text-primary tabular-nums">
            {formatCurrency(cost)}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ToolCostClock;
