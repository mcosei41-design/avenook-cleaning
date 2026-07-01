import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Domestic Cleaning",
  "Deep Cleaning",
  "End of Tenancy",
  "Office / Commercial",
  "Carpet Cleaning",
  "Window Cleaning",
  "After Builders",
  "Airbnb Turnaround",
  "Other",
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const subject = `Quote request — ${data.get("service") || "Cleaning"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Postcode: ${data.get("postcode")}`,
      `Property: ${data.get("property")}`,
      "",
      `Message:`,
      `${data.get("message") || "-"}`,
    ].join("\n");
    window.location.href = `mailto:Info@avenook.co.uk?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email — we'll reply within a few hours.");
    setTimeout(() => setSubmitting(false), 500);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Full name" name="name" required placeholder="Jane Smith" />
        <Field label="Phone" name="phone" type="tel" required placeholder="07…" />
        <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
        <Field label="Postcode" name="postcode" required placeholder="SW1A 1AA" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-foreground">Service</label>
          <select
            name="service"
            required
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-foreground">Property type</label>
          <select
            name="property"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option>1-bed flat</option>
            <option>2-bed flat / house</option>
            <option>3-bed house</option>
            <option>4+ bed house</option>
            <option>Office / Commercial</option>
            <option>Airbnb / Short let</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-foreground">Anything we should know?</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Preferred date, frequency, special requests…"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Request my free quote"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        We reply within a few hours, 7 days a week. No obligation, no spam.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
