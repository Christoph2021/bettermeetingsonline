import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Knowledge Base", path: "/knowledge-base" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const StandardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-bold text-foreground">
            BetterMeetings<span className="text-primary">.Online</span>
          </Link>
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 md:py-12">{children}</div>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BetterMeetings.Online
        </div>
      </footer>
    </div>
  );
};

export default StandardLayout;
