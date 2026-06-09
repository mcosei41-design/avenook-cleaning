import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Sparkles, HeartHandshake, ShieldCheck, Users, Target, Leaf } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Avenook Cleaning Services — Modern, Trusted UK Cleaners" },
      { name: "description", content: "Avenook is a modern UK cleaning company building long-term relationships with homeowners, agencies and businesses through reliable, professional service." },
      { property: "og:title", content: "About Avenook Cleaning Services" },
      { property: "og:description", content: "Reliable, modern and professional cleaning services across the UK." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A modern cleaning company built on trust"
        subtitle="Avenook helps people enjoy cleaner spaces and better living — through reliable, modern and professional cleaning services that grow with the communities we serve."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/90">
          <p>
            Avenook Cleaning Services was founded with a clear purpose: to help people enjoy cleaner
            spaces and better living through reliable, modern, and professional cleaning — while
            building a trusted brand that grows across communities.
          </p>
          <p className="mt-5">
            We blend modern systems with old-fashioned standards. That means easy online quotes,
            clear communication and uniformed cleaners who actually care. We serve busy
            professionals, families, landlords, estate agents, offices and Airbnb hosts across the
            UK — and we'd love to serve you too.
          </p>
        </div>
      </Section>

      <Section eyebrow="Our values" title="What we stand for">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { i: HeartHandshake, t: "Customer-first", d: "Exceptional service, honest pricing and a satisfaction guarantee on every job." },
            { i: Sparkles, t: "Attention to detail", d: "60-point checklists, training and pride in the small things — that's where great cleaning lives." },
            { i: ShieldCheck, t: "Trust & safety", d: "Vetted, insured, uniformed teams. Your home and workplace are in safe hands." },
            { i: Users, t: "Long-term relationships", d: "We're building a brand that grows with homeowners, agencies and businesses across the UK." },
            { i: Target, t: "Reliability", d: "We turn up when we say we will, ready to work, and we communicate every step." },
            { i: Leaf, t: "Responsible products", d: "Eco-friendly options available, with safe, low-residue products that protect your space." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="inline-flex rounded-xl gradient-brand p-2.5 text-white"><v.i className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who we serve" title="Built for residential & commercial clients">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold">Residential</h3>
            <p className="mt-2 text-sm text-muted-foreground">Homes that feel cared for.</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {["Busy professionals","Families","Elderly homeowners","Students","Landlords","Tenants"].map((x) => (
                <li key={x} className="rounded-lg bg-secondary px-3 py-2">{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold">Commercial</h3>
            <p className="mt-2 text-sm text-muted-foreground">Workspaces that present beautifully.</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {["Offices","Airbnb hosts","Shops & retail","Gyms","Estate agencies","Salons & clinics"].map((x) => (
                <li key={x} className="rounded-lg bg-secondary px-3 py-2">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl gradient-hero p-10 text-white shadow-glow sm:p-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">"Reliable, modern, professional — and a pleasure to deal with."</h2>
            <p className="mt-4 text-white/80">
              That's the standard we hold ourselves to on every job. If we don't meet it, we'll
              re-clean for free — no questions asked.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-white/90"
            >
              Get your free quote
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
