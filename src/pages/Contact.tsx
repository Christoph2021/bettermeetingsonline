import { useState } from "react";
import StandardLayout from "@/components/StandardLayout";
import { toast } from "sonner";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { z } from "zod";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjowary";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be under 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field: string, value: string): string | undefined => {
    const partial = { ...form, [field]: value };
    const result = contactSchema.shape[field as keyof typeof contactSchema.shape].safeParse(partial[field as keyof typeof partial]);
    return result.success ? undefined : result.error.errors[0]?.message;
  };

  const handleBlur = (field: string) => () => {
    setTouched((prev) => new Set(prev).add(field));
    const error = validateField(field, (form as any)[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched.has(field)) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setTouched(new Set(["name", "email", "subject", "message"]));
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTouched(new Set());
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

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

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
      errors[field as keyof FormErrors]
        ? "border-destructive bg-destructive/5 focus:ring-destructive/30"
        : "bg-card focus:ring-ring"
    }`;

  return (
    <StandardLayout>
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have a meeting tip to share or just want to say hi? Drop us a line.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {[
            { label: "Name", field: "name", type: "text", placeholder: "Your name" },
            { label: "Email", field: "email", type: "email", placeholder: "you@example.com" },
            { label: "Subject", field: "subject", type: "text", placeholder: "What's this about?" },
          ].map(({ label, field, type, placeholder }) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1.5 text-foreground">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={(form as any)[field]}
                onChange={update(field)}
                onBlur={handleBlur(field)}
                className={inputClass(field)}
              />
              {errors[field as keyof FormErrors] && (
                <p className="mt-1.5 text-xs text-destructive animate-fade-in">
                  {errors[field as keyof FormErrors]}
                </p>
              )}
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Message</label>
            <textarea
              rows={5}
              placeholder="Your message…"
              value={form.message}
              onChange={update("message")}
              onBlur={handleBlur("message")}
              className={`${inputClass("message")} resize-none`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-destructive animate-fade-in">
                {errors.message}
              </p>
            )}
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
