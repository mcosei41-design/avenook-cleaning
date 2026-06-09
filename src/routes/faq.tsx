import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Cleaning Service Questions Answered | Avenook" },
      { name: "description", content: "Answers to common questions about Avenook Cleaning Services: pricing, booking, supplies, insurance, end-of-tenancy guarantees and more." },
      { property: "og:title", content: "Avenook Cleaning Services — FAQ" },
      { property: "og:description", content: "Common questions about our cleaning services answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How much does a clean cost?", a: "Pricing depends on the size of your property, the service and frequency. Most regular domestic cleans start from £18/hour, and we always provide a fixed quote up front — no surprises." },
  { q: "Are you insured?", a: "Yes — Avenook carries £2m public liability insurance, and every cleaner is vetted and trained before they ever set foot in your space." },
  { q: "Do I need to provide cleaning products?", a: "No. We bring everything needed as standard. If you prefer eco-friendly products or have allergies, just let us know — we'll adapt." },
  { q: "Do you offer an end-of-tenancy guarantee?", a: "Yes. If your inventory flags anything we cleaned, we'll come back and re-clean it free of charge within 72 hours." },
  { q: "How do I book?", a: "Send us your details through our quote form, by email or by requesting a callback. We'll confirm a fixed price and a time that suits you." },
  { q: "Can I get the same cleaner each time?", a: "Whenever possible, yes. For regular cleans we assign a primary cleaner so they get to know your home and preferences." },
  { q: "Do you clean evenings and weekends?", a: "Absolutely — including evenings, weekends and same-day Airbnb turnarounds, subject to availability." },
  { q: "What happens if I'm not happy with the clean?", a: "Tell us within 24 hours and we'll return to put it right at no extra cost. Customer satisfaction is the whole point." },
  { q: "Do you offer discounts?", a: "We run a customer referral discount — recommend us to a friend and you both get money off your next clean." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Everything you need to know"
        subtitle="The questions we hear most — answered honestly. Still curious about something? Drop us a message and we'll come back to you the same day."
      />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-6 py-5 text-left transition hover:bg-secondary/40"
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold sm:text-lg">{f.q}</h3>
                  <span className="mt-1 rounded-full gradient-brand p-1.5 text-white">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </div>
                {isOpen && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{f.a}</p>}
              </button>
            );
          })}
        </div>
      </Section>
    </>
  );
}
