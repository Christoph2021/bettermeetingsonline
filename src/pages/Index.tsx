import { useNavigate } from "react-router-dom";
import { MessageCircle, FileText, BookOpen, Info, Mail, Clock } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  featured?: boolean;
}

const ToolCard = ({ title, description, icon, onClick, featured }: ToolCardProps) => (
  <button
    onClick={onClick}
    className={`group text-left rounded-xl border p-6 md:p-8 transition-all duration-200 ${
      featured
        ? "bg-primary text-primary-foreground shadow-featured hover:shadow-lg col-span-full lg:col-span-2"
        : "bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
    }`}
  >
    <div
      className={`inline-flex items-center justify-center rounded-lg p-3 mb-4 ${
        featured ? "bg-primary-foreground/15" : "bg-primary/10"
      }`}
    >
      {icon}
    </div>
    <h2 className={`text-xl font-bold mb-2 ${featured ? "" : "text-foreground"}`}>{title}</h2>
    <p className={`text-sm leading-relaxed ${featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
      {description}
    </p>
  </button>
);

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container py-12 md:py-20 flex-1">
        <div className="max-w-2xl mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Run better meetings{" "}
            <span className="text-primary">with AI support</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tools and knowledge to make every meeting count.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          style={{ animationDelay: "0.1s" }}
        >
          <ToolCard
            featured
            title="AI Meeting Coach"
            description="Get real-time guidance to run effective meetings"
            icon={<MessageCircle className="h-6 w-6" />}
            onClick={() => navigate("/tool/coach")}
          />
          <ToolCard
            title="Preparation Assistant"
            description="Generate structured agendas and preparation steps"
            icon={<FileText className="h-5 w-5 text-primary" />}
            onClick={() => navigate("/tool/prep")}
          />
          <ToolCard
            title="Meeting Cost Clock"
            description="Create focus through cost awareness"
            icon={<Clock className="h-5 w-5 text-primary" />}
            onClick={() => navigate("/tool/cost-clock")}
          />
          <ToolCard
            title="Knowledge Base"
            description="Browse practical tips for better meetings"
            icon={<BookOpen className="h-5 w-5 text-primary" />}
            onClick={() => navigate("/knowledge-base")}
          />
          <ToolCard
            title="About"
            description="Learn about this page and us"
            icon={<Info className="h-5 w-5 text-primary" />}
            onClick={() => navigate("/about")}
          />
          <ToolCard
            title="Contact"
            description="Tell us your meeting tip or just say hi"
            icon={<Mail className="h-5 w-5 text-primary" />}
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BetterMeetings.Online
        </div>
      </footer>
    </div>
  );
};

export default Index;
