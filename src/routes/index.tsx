import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import {
  ShieldCheck, Sparkles, Clock, Star, CheckCircle2, ArrowRight,
  Home, Building2, KeyRound, Hammer, Sofa, Wind, BedDouble, Briefcase,
} from "lucide-react";
import hero from "@/assets/hero-cleaner.jpg";
import domestic from "@/assets/service-domestic.jpg";
import office from "@/assets/service-office.jpg";
import deep from "@/assets/service-deep.jpg";
import airbnb from "@/assets/service-airbnb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avenook Cleaning Services — Trusted UK Cleaners for Homes & Businesses" },
      { name: "description", content: "Reliable, insured, professional cleaning across the UK. Domestic, end-of-tenancy, office and Airbnb cleaning. Get a free, no-obligation quote in minutes." },
      { property: "og:title", content: "Avenook Cleaning Services — Trusted UK Cleaners" },
      { property: "og:description", content: "Domestic, deep, end-of-tenancy, office and Airbnb cleaning across the UK. Fully insured and vetted teams." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home_,
});

const services = [
  { icon: Home, title: "Domestic Cleaning", desc: "Weekly, fortnightly or one-off cleans tailored to your home.", hash: "domestic" },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Top-to-bottom restoration cleans that bring every surface back to life.", hash: "deep" },
  { icon: KeyRound, title: "End of Tenancy", desc: "Deposit-back guaranteed cleans for tenants, landlords and agents.", hash: "end-of-tenancy" },
  { icon: Building2, title: "Office Cleaning", desc: "Discreet, scheduled cleans that keep your workplace spotless.", hash: "office" },
  { icon: Briefcase, title: "Commercial Cleaning", desc: "Shops, gyms, salons and retail — bespoke contracts and frequencies.", hash: "commercial" },
  { icon: Sofa, title: "Carpet Cleaning", desc: "Hot-water extraction for carpets, rugs and upholstery.", hash: "carpet" },
  { icon: Wind, title: "Window Cleaning", desc: "Streak-free internal and external window cleaning.", hash: "window" },
  { icon: Hammer, title: "After Builders", desc: "Dust, debris and paint removal — handover-ready in one visit.", hash: "after-builders" },
  { icon: BedDouble, title: "Airbnb Turnaround", desc: "Same-day changeovers with linen, restock and 5-star presentation.", hash: "airbnb" },
];

const trust = [
  { icon: ShieldCheck, title: "Fully insured", desc: "£2m public liability cover on every job." },
  { icon: Star, title: "5-star service", desc: "Vetted, trained, friendly cleaners you can trust." },
  { icon: Clock, title: "Flexible scheduling", desc: "Evenings, weekends and one-off bookings welcome." },
  { icon: Sparkles, title: "Satisfaction guarantee", desc: "Not happy? We'll re-clean for free, no questions." },
];

function Home_() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-orange-accent/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
              <Sparkles className="h-3.5 w-3.5" /> Modern cleaning, done properly
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Cleaner spaces.{" "}
              <span className="block text-gradient-brand">Better living.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Avenook is a modern UK cleaning company helping homeowners, landlords and businesses
              enjoy spotless, stress-free spaces. Reliable people, modern systems, exceptional results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
              >
                Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> Fully insured</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> Vetted cleaners</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> Satisfaction guarantee</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-glow">
              <img
                src={hero}
                alt="Professional Avenook cleaner polishing a marble kitchen counter"
                width={1536}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-navy/80 p-4 backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-navy gradient-brand" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-teal text-teal" />
                    ))}
                  </div>
                  <p className="text-xs text-white/80">Loved by 200+ households & businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trust.map((t) => (
            <div key={t.title} className="flex items-start gap-3">
              <div className="rounded-xl gradient-brand p-2.5 text-white">
                <t.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <Section
        eyebrow="What we clean"
        title="A complete cleaning service, however you need it"
        subtitle="From weekly housekeeping to one-off deep cleans and Airbnb turnarounds — one trusted team for every space."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              hash={s.hash}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-teal/60"
            >
              <div className="mb-4 inline-flex rounded-xl gradient-brand p-2.5 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-semibold text-teal-foreground">
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* SHOWCASE / WHY US */}
      <Section
        eyebrow="Why Avenook"
        title="The cleaning company you'll actually want to call back"
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <img src={domestic} alt="Bright clean living room" width={1024} height={768} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" />
              <div className="grid gap-4">
                <img src={deep} alt="Spotless bathroom" width={1024} height={768} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-soft" />
                <img src={airbnb} alt="Freshly turned over Airbnb bedroom" width={1024} height={768} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-soft" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ul className="space-y-5">
              {[
                ["Modern systems, traditional care", "Online booking and clear communication — paired with people who genuinely care about your space."],
                ["Trained, vetted, uniformed teams", "Every cleaner is background-checked, trained on our 60-point checklist, and easily identifiable on arrival."],
                ["Eco-friendly products available", "Tell us your preferences — we use safe, low-residue products that work on the toughest grime."],
                ["Transparent, fair pricing", "Fixed quotes with no surprises. Pay only for what you book."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <h4 className="font-semibold">{t}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center text-sm font-semibold text-teal-foreground"
            >
              More about us <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="How it works" title="From quote to sparkle in 3 simple steps">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["01", "Tell us what you need", "Share your postcode, property and preferred service. Takes under a minute."],
            ["02", "Get a free quote", "We reply with a fixed, fair price — usually within a few hours."],
            ["03", "Relax. We clean.", "Your insured Avenook team arrives uniformed, on time and ready to impress."],
          ].map(([n, t, d]) => (
            <div key={n} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-gradient-brand font-display text-4xl font-bold">{n}</div>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Loved by clients" title="What our customers say">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { q: "Avenook turned our end-of-tenancy panic into a five-minute job. Deposit back in full.", a: "Priya R.", t: "Tenant, London" },
            { q: "Our Airbnb reviews jumped to 5 stars after switching to Avenook. They never miss a turnover.", a: "Mark D.", t: "Airbnb host, Manchester" },
            { q: "Reliable, friendly and properly thorough — finally a cleaner we recommend to friends.", a: "Sarah & Tom", t: "Homeowners, Birmingham" },
          ].map((r) => (
            <figure key={r.a} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-teal text-teal" />
                ))}
              </div>
              <blockquote className="mt-4 text-base text-foreground">"{r.q}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold">{r.a}</div>
                <div className="text-muted-foreground">{r.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA + FORM */}
      <Section
        eyebrow="Get started"
        title="Ready for a cleaner space?"
        subtitle="Tell us a little about your property and we'll send you a fixed, no-obligation quote."
      >
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <img src={office} alt="Modern clean office" width={1024} height={768} loading="lazy" className="h-44 w-full rounded-xl object-cover" />
              <h3 className="mt-5 text-xl font-semibold">Talk to a human</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer to chat? Email us at{" "}
                <a className="font-medium text-teal-foreground underline" href="mailto:Info@avenook.co.uk">Info@avenook.co.uk</a>{" "}
                or request a callback through the form — we reply quickly, 7 days a week.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> Free, no-obligation quotes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> Same-week availability</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> Friendly, professional team</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
