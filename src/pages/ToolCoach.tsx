import ToolLayout from "@/components/ToolLayout";
import { MessageCircle } from "lucide-react";

const ToolCoach = () => (
  <ToolLayout title="AI Meeting Coach">
    <div className="flex-1 flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30">
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
          <MessageCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-foreground">Meeting Coach</h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          Real-time AI guidance will appear here. This feature is coming soon.
        </p>
      </div>
    </div>
  </ToolLayout>
);

export default ToolCoach;
