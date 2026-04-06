import { useState } from "react";
import StandardLayout from "@/components/StandardLayout";
import { toast } from "sonner";
import { CheckCircle, ArrowLeft } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjowary";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  if (submitted) {
    return (
      <StandardLayout>
        <div className="max-w-lg flex flex-col items-center text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-scale-in">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Message Sent!</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Thank you for reaching out. We'll review your message and get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity hover-scale"
          >
            <ArrowLeft className="w-4 h-4" />
            Send Another Message
          </button>
        </div>
      </StandardLayout>
    );
  }

  return (
    <StandardLayout>
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have a meeting tip to share or just want to say hi? Drop us a line.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Name", field: "name", type: "text" },
            { label: "Email", field: "email", type: "email" },
            { label: "Subject", field: "subject", type: "text" },
          ].map(({ label, field, type }) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1.5 text-foreground">{label}</label>
              <input
                type={type}
                required
                value={(form as any)[field]}
                onChange={update(field)}
                className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </StandardLayout>
  );
};

export default Contact;
