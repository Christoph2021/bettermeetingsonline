import ToolLayout from "@/components/ToolLayout";
import { FileText } from "lucide-react";

const ToolPrep = () => (
  <ToolLayout title="Preparation Assistant">
    <div className="flex-1 flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30">
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-foreground">Preparation Assistant</h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          Structured agendas and preparation steps will be generated here. Coming soon.
        </p>
      </div>
    </div>
  </ToolLayout>
);

export default ToolPrep;
