import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";
import domestic from "@/assets/service-domestic.jpg";
import deep from "@/assets/service-deep.jpg";
import office from "@/assets/service-office.jpg";
import airbnb from "@/assets/service-airbnb.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning Services — Domestic, Deep, End of Tenancy & More | Avenook" },
      { name: "description", content: "Explore Avenook's full range of cleaning services: domestic, deep, end of tenancy, office, commercial, carpet, window, after-builders and Airbnb cleaning." },
      { property: "og:title", content: "Avenook Cleaning Services — Full Service Range" },
      { property: "og:description", content: "Domestic, deep, end of tenancy, office, Airbnb and more — fully insured cleaning across the UK." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const items = [
  {
    id: "domestic", title: "Domestic Cleaning", image: domestic,
    intro: "Weekly, fortnightly or one-off cleans for busy households who'd rather spend the weekend doing anything else.",
    includes: ["Kitchens, bathrooms & living spaces", "Hoovering, mopping & dusting", "Bin emptying & surface sanitising", "Bed-making & laundry on request"],
  },
  {
    id: "deep", title: "Deep Cleaning", image: deep,
    intro: "A meticulous top-to-bottom reset for homes that need more than a regular clean — perfect seasonally or before guests arrive.",
    includes: ["Inside ovens, fridges & microwaves", "Limescale removal in bathrooms", "Skirting boards, doors & light switches", "Behind & under furniture where accessible"],
  },
  {
    id: "end-of-tenancy", title: "End of Tenancy Cleaning", image: deep,
    intro: "Deposit-back guaranteed cleans for tenants, landlords and letting agents. Inventory-ready, every time.",
    includes: ["Full property deep clean", "Inside cupboards, drawers & appliances", "Steam-cleaned carpets (on request)", "Re-clean guarantee if the inventory flags anything"],
  },
  {
    id: "office", title: "Office Cleaning", image: office,
    intro: "Discreet, scheduled cleans that keep your workplace spotless and your team focused.",
    includes: ["Daily, weekly or evening schedules", "Desks, kitchens & meeting rooms", "Washroom hygiene & restocking", "DBS-checked, uniformed cleaners"],
  },
  {
    id: "commercial", title: "Commercial Cleaning", image: office,
    intro: "Bespoke cleaning contracts for shops, gyms, salons, clinics and retail spaces — built around your opening hours.",
    includes: ["Tailored frequency & scope", "High-traffic floor care", "Front-of-house presentation", "Out-of-hours availability"],
  },
  {
    id: "carpet", title: "Carpet & Upholstery Cleaning", image: domestic,
    intro: "Hot-water extraction cleaning that lifts dirt, stains and odours from carpets, rugs and soft furnishings.",
    includes: ["Pre-treatment of stains", "Deep extraction wash", "Pet & odour treatment available", "Fast drying turnaround"],
  },
  {
    id: "window", title: "Window Cleaning", image: office,
    intro: "Streak-free internal and external window cleaning for homes and businesses.",
    includes: ["Internal & external glass", "Frames & sills wiped", "Reach-and-wash for upper floors", "One-off or scheduled"],
  },
  {
    id: "after-builders", title: "After Builders Cleaning", image: deep,
    intro: "Post-renovation cleans that remove dust, debris and paint splatter — leaving your space handover-ready.",
    includes: ["Heavy dust removal", "Paint & plaster spots", "Inside windows, frames & sockets", "Final polish & detailing"],
  },
  {
    id: "airbnb", title: "Airbnb Turnaround Cleaning", image: airbnb,
    intro: "Same-day changeovers with hotel-grade presentation that keep your reviews glowing.",
    includes: ["Linen change & laundry", "Restocking essentials", "Photo-ready styling", "Flexible same-day windows"],
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="One trusted team for every kind of clean"
        subtitle="From a weekly housekeep to a full end-of-tenancy or Airbnb turnaround — Avenook covers residential and commercial cleaning across the UK."
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-90"
        >
          Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </PageHeader>

      <Section>
        <div className="space-y-20">
          {items.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <img src={s.image} alt={s.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-foreground">
                  {s.title}
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.intro}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.includes.map((t) => (
                    <li key={t} className="flex gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Quote for {s.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
