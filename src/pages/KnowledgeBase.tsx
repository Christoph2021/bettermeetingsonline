import { useState } from "react";
import StandardLayout from "@/components/StandardLayout";
import { categories, tips, type Tip } from "@/data/knowledge-base";
import {
  ClipboardList,
  Users,
  CheckCircle,
  Monitor,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  CheckCircle: <CheckCircle className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Heart: <Heart className="h-4 w-4" />,
};

const TipCard = ({ tip }: { tip: Tip }) => {
  const [open, setOpen] = useState(false);
  const cat = categories.find((c) => c.id === tip.category);

  return (
    <div className="rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-3"
      >
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary mb-2">
            {cat && iconMap[cat.icon]}
            {cat?.label}
          </span>
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
        <p className="mt-4 pt-4 border-t text-sm text-muted-foreground leading-relaxed">
          {tip.body}
        </p>
      )}
    </div>
  );
};

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? tips.filter((t) => t.category === activeCategory)
    : tips;

  return (
    <StandardLayout>
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Knowledge Base</h1>
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
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </StandardLayout>
  );
};

export default KnowledgeBase;
