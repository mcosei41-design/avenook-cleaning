import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Avenook Cleaning Services — Free Quotes & Bookings" },
      { name: "description", content: "Get a free, no-obligation cleaning quote from Avenook. Email, request a callback or fill out our booking form. We reply within hours, 7 days a week." },
      { property: "og:title", content: "Contact Avenook Cleaning Services" },
      { property: "og:description", content: "Free quotes and bookings for domestic and commercial cleaning across the UK." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free, no-obligation quote"
        subtitle="Tell us about your space and we'll come back with a fixed price — usually within a few hours."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={Mail} title="Email us" lines={[<a key="e" href="mailto:Info@avenook.co.uk" className="text-teal-foreground underline">Info@avenook.co.uk</a>, "Replies within a few hours, 7 days a week."]} />
            <InfoCard icon={Phone} title="Request a callback" lines={["Add your number to the form and we'll ring you straight back."]} />
            <InfoCard icon={Clock} title="Hours" lines={["Mon–Fri: 7am – 8pm","Sat–Sun: 8am – 6pm","Out-of-hours by arrangement"]} />
            <InfoCard icon={MapPin} title="Where we work" lines={["Serving homes & businesses across the UK — London, Manchester, Birmingham, Leeds, Bristol and beyond."]} />
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: any; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <div className="rounded-xl gradient-brand p-2.5 text-white"><Icon className="h-5 w-5" /></div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
            {lines.map((l, i) => <div key={i}>{l}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
