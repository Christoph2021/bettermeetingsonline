import { useState } from "react";
import StandardLayout from "@/components/StandardLayout";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

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
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Thank You!</h1>
          <p className="text-muted-foreground mb-6">
            Your message has been sent. We'll get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
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
