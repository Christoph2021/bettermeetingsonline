import { useState, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WORKER_URL = "https://bettermeetingchatworker.bettermeetings.workers.dev/";

const ALLOWED_TAGS = new Set(["SECTION", "H3", "P", "UL", "LI", "STRONG", "A"]);
const ALLOWED_ATTRS: Record<string, Set<string>> = {
  A: new Set(["href", "title", "target", "rel"]),
  SECTION: new Set(["class"]),
};

function sanitizeMeetingHtml(htmlString: string): string {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  const body = doc.body;
  const walker = doc.createTreeWalker(body, NodeFilter.SHOW_ELEMENT);
  const toUnwrap: Element[] = [];

  while (walker.nextNode()) {
    const el = walker.currentNode as Element;
    if (!ALLOWED_TAGS.has(el.tagName)) {
      toUnwrap.push(el);
      continue;
    }
    [...el.attributes].forEach((attr) => {
      const tagAllowed = ALLOWED_ATTRS[el.tagName];
      if (!tagAllowed || !tagAllowed.has(attr.name.toLowerCase())) {
        el.removeAttribute(attr.name);
      }
    });
    if (el.tagName === "A") {
      const href = (el.getAttribute("href") || "").trim().toLowerCase();
      if (href.startsWith("javascript:") || href.startsWith("data:")) {
        el.removeAttribute("href");
      }
      if ((el.getAttribute("target") || "").toLowerCase() === "_blank") {
        const relParts = new Set((el.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
        relParts.add("noopener");
        relParts.add("noreferrer");
        el.setAttribute("rel", [...relParts].join(" "));
      }
    }
  }
  toUnwrap.forEach((node) => node.replaceWith(...node.childNodes));
  const sections = body.querySelectorAll("section");
  if (sections.length > 4) {
    for (let i = 4; i < sections.length; i++) sections[i].remove();
  }
  return body.innerHTML;
}

function buildPrompt(payload: Record<string, string>): string {
  return (
    `You are a ${payload.role}.\n` +
    `You need to organize a virtual meeting to: ${payload.reason}.\n` +
    `The goal of the meeting is to: ${payload.goal}.\n` +
    `Attendees are always asked to listen; based on the meeting goal and the reason, participants might also be asked to contribute, make decisions and come prepared.\n` +
    `The meeting duration is ${payload.duration}.\n\n` +
    `Create an agenda that helps with facilitation and preparation. Do not include durations for each item. Ensure that the agenda is realistic for the meeting duration. Ignore items or combine items that would take less than 10% of ${payload.duration}\n` +
    `Create a list of recommended roles to be invited to the meeting based on the reason and goal description. This list is just a suggestion.\n` +
    `Create a meeting invitation which includes the reason for the meeting, the goal of the meeting, the agenda and the expected participation of the attendees. Keep the invitation brief and casual. Do not explicitely write 'goal' or 'reason' but incorporate both in the text.\n` +
    `Create a recommendation checklist for you to prepare for your meeting. This list is just a suggestion.\n` +
    `Share 3 tips about meeting preparation, facilitation and wrapping up. Link them directly to posts on https://bettermeetings.online. If you don't have direct links to posts, don't reference bettermeetings.online. Call this section 'Meeting Tips'.\n` +
    `Return HTML with EXACTLY four <section> blocks, in this order:\n` +
    `1) Meeting Invitation\n` +
    `2) Recommended Participants\n` +
    `3) Preparation Checklist\n` +
    `4) Meeting Tips\n\n` +
    `Rules:\n` +
    `- Each section must begin with <h3>Title</h3> and use only <p>, <ul>, <li>, <strong>, <a> inside.\n` +
    `- No inline styles.\n` +
    `- Make each part fit well on a website.\n\n`
  );
}

const ToolPrep = () => {
  const [form, setForm] = useState({ role: "", duration: "", reason: "", goal: "" });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [resultHtml, setResultHtml] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const allFilled = form.role && form.duration && form.reason && form.goal;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allFilled) {
      setStatus("Please complete all fields.");
      return;
    }

    setBusy(true);
    setStatus("Thinking…");
    setResultHtml("");

    try {
      const messages = [
        { role: "system", content: "You write clear, web-ready HTML with <section>, <h3>, <p>, <ul>, <li>, <strong>, <a> only." },
        { role: "user", content: buildPrompt(form) },
      ];

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });

      const raw = await res.text();
      if (!res.ok) throw new Error(raw);

      const data = JSON.parse(raw);
      const rawHtml = data.answer || "";
      if (!rawHtml) {
        setStatus("No answer returned.");
        return;
      }

      const safeHtml = sanitizeMeetingHtml(rawHtml);
      setResultHtml(safeHtml);
      setStatus("");

      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (err: any) {
      setStatus("Error: " + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleCopy = async () => {
    try {
      const text = outputRef.current?.innerText || "";
      await navigator.clipboard.writeText(text.trim());
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Copy failed");
    }
  };

  return (
    <ToolLayout title="AI Meeting Preparation Assistant">
      <div className="flex-1 flex flex-col gap-4 min-h-0 overflow-y-auto">
        {/* Form card */}
        <div className="rounded-xl border border-border bg-card p-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="role">Your Role</Label>
                <Input id="role" value={form.role} onChange={update("role")} placeholder="e.g., Manager, Team Lead" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="duration">Meeting Duration</Label>
                <Input id="duration" value={form.duration} onChange={update("duration")} placeholder="e.g., 20 minutes" required />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="reason">Meeting Reason</Label>
                <Input id="reason" value={form.reason} onChange={update("reason")} placeholder="e.g., Annual performance review" required />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="goal">Meeting Goal</Label>
                <Input id="goal" value={form.goal} onChange={update("goal")} placeholder="e.g., Align on performance and growth opportunities" required />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <Button type="submit" disabled={busy}>
                {busy && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Generate
              </Button>
              {status && <span className="text-sm text-muted-foreground font-medium">{status}</span>}
            </div>
          </form>
        </div>

        {/* Results */}
        {resultHtml && (
          <div className="flex flex-col gap-4" ref={outputRef}>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="h-4 w-4 mr-2" />
                Copy All
              </Button>
            </div>
            <div
              className="grid gap-4 [&_section]:rounded-xl [&_section]:border [&_section]:border-border [&_section]:bg-card [&_section]:p-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-3 [&_h3]:pb-2 [&_h3]:border-b [&_h3]:border-border [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-2 [&_p]:text-foreground [&_ul]:text-sm [&_ul]:leading-relaxed [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:mb-3 [&_ul]:text-foreground [&_li]:mb-1 [&_a]:text-primary [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: resultHtml }}
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default ToolPrep;
