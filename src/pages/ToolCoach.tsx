import { useState, useRef, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const WORKER_URL = "https://bettermeetingchatworker.bettermeetings.workers.dev/";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const LINK_PLACEHOLDER = "\u0000LINK\u0000";

function renderMarkdown(md: string): string {
  const links: string[] = [];
  const stash = (html: string) => {
    links.push(html);
    return `${LINK_PLACEHOLDER}${links.length - 1}${LINK_PLACEHOLDER}`;
  };

  let out = md;

  // 1. Markdown links [text](url)
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_m, text, url) =>
    stash(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary underline">${text}</a>`)
  );

  // 2. Bare URLs
  out = out.replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"])/g, (url) =>
    stash(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary underline">${url}</a>`)
  );

  // 3. Escape remaining HTML
  out = out
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");

  // 4. Restore links
  out = out.replace(new RegExp(`${LINK_PLACEHOLDER}(\\d+)${LINK_PLACEHOLDER}`, "g"), (_m, i) => links[Number(i)]);

  return out;
}

const TypingIndicator = () => (
  <div className="flex gap-1.5 items-center py-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce"
        style={{ animationDelay: `${i * 150}ms` }}
      />
    ))}
  </div>
);

const ChatBubble = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 border ${
          isUser
            ? "bg-primary text-primary-foreground border-primary/50"
            : "bg-card border-border"
        }`}
      >
        <div className={`text-xs font-semibold mb-1 ${isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {isUser ? "You" : "Meeting Coach"}
        </div>
        <div
          className="text-sm leading-relaxed [&_a]:text-primary [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
        />
      </div>
    </div>
  );
};

const ToolCoach = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! How can I help making your meetings better." },
  ]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollBottom = useCallback(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollBottom();
  }, [messages, waiting, scrollBottom]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || waiting) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setWaiting(true);

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const raw = await res.text();
      if (!res.ok) throw new Error(raw);

      const data = JSON.parse(raw);
      const answer = data.answer || "I don't have that information.";

      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `**Error:** ${err.message}` },
      ]);
    } finally {
      setWaiting(false);
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <ToolLayout title="AI Meeting Coach">
      <div className="flex-1 flex flex-col gap-3 min-h-0">
        {/* Chat area */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto rounded-xl border border-border bg-muted/30 p-4"
        >
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}
          {waiting && (
            <div className="flex justify-start mb-3">
              <div className="max-w-[80%] rounded-2xl px-4 py-3 border bg-card border-border">
                <div className="text-xs font-semibold mb-1 text-muted-foreground">Meeting Coach</div>
                <TypingIndicator />
              </div>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="flex gap-3 rounded-xl border border-border bg-card p-3">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question…"
            disabled={waiting}
            className="min-h-[46px] max-h-[160px] resize-none flex-1 border-input"
            rows={1}
          />
          <Button
            onClick={sendMessage}
            disabled={waiting || !input.trim()}
            size="icon"
            className="shrink-0 h-auto aspect-square"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ToolCoach;
