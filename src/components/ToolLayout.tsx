import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface ToolLayoutProps {
  title: string;
  children: React.ReactNode;
}

const ToolLayout = ({ title, children }: ToolLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border shadow-card text-sm font-medium text-foreground hover:shadow-card-hover transition-all"
        >
          <span className="hidden sm:inline">Close</span>
          <X className="h-4 w-4" />
        </button>
      </div>
      <main className="flex-1 flex flex-col">
        <div className="container max-w-4xl py-16 md:py-24 flex-1 flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default ToolLayout;
