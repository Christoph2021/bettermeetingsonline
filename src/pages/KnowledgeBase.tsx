import StandardLayout from "@/components/StandardLayout";
import { BookOpen } from "lucide-react";

const KnowledgeBase = () => (
  <StandardLayout>
    <h1 className="text-3xl md:text-4xl font-bold mb-8">Knowledge Base</h1>
    <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 min-h-[300px]">
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-foreground">Coming Soon</h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          Practical tips and articles for running better meetings will live here.
        </p>
      </div>
    </div>
  </StandardLayout>
);

export default KnowledgeBase;
