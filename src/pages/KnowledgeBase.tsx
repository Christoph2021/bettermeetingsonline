import { useState, useRef, useEffect, forwardRef } from "react";
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ToolLayout from "@/components/ToolLayout";
import { categories, tips, type Tip } from "@/data/knowledge-base";
import {
  ClipboardList,
  Users,
  CheckCircle,
  Monitor,
  Heart,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  CheckCircle: <CheckCircle className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Heart: <Heart className="h-4 w-4" />,
  Clock: <Clock className="h-4 w-4" />,
};

const TipCard = forwardRef<HTMLDivElement, { tip: Tip; isInitiallyExpanded?: boolean }>(
  ({ tip, isInitiallyExpanded = false }, ref) => {
    const [open, setOpen] = useState(isInitiallyExpanded);
    const tipCategories = categories.filter((c) => tip.categories.includes(c.id));

    return (
      <div ref={ref} className="rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {tipCategories.map((cat) => (
              <span key={cat.id} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                {iconMap[cat.icon]}
                {cat.label}
              </span>
            ))}
          </div>
          <h3 className="text-base font-semibold text-foreground leading-snug mb-1">
            {tip.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {tip.summary}
          </p>
        </div>
        <span className="mt-1 shrink-0 text-muted-foreground">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="mt-4 pt-4 border-t text-sm text-muted-foreground leading-relaxed prose prose-sm prose-neutral dark:prose-invert max-w-none [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-3 [&_li]:mb-1 [&_strong]:text-foreground">
          <ReactMarkdown
            components={{
              a: ({ children, href, ...props }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (href) window.open(href, '_blank', 'noopener,noreferrer');
                  }}
                  {...props}
                >
                  {children}
                </a>
              ),
            }}
          >
            {tip.body}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
);

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const tipIdToExpand = searchParams.get("tip");
  const tipRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to expanded card when component mounts or tipIdToExpand changes
  useEffect(() => {
    if (tipIdToExpand && tipRefs.current[tipIdToExpand]) {
      setTimeout(() => {
        tipRefs.current[tipIdToExpand]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [tipIdToExpand]);

  const filtered = activeCategory
    ? tips.filter((t) => t.categories.includes(activeCategory))
    : tips;

  return (
    <ToolLayout title="Knowledge Base">
      <div className="max-w-3xl">
        
        <p className="text-muted-foreground mb-8">
          Practical tips to prepare, run, and follow up on meetings that actually matter.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? null : cat.id)
              }
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {iconMap[cat.icon]}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tips list */}
        <div className="space-y-4">
          {filtered.map((tip) => (
            <TipCard
              key={tip.id}
              tip={tip}
              ref={(el) => {
                if (el) tipRefs.current[tip.id] = el;
              }}
              isInitiallyExpanded={tipIdToExpand === tip.id}
            />
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default KnowledgeBase;
