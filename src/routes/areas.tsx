import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Cleaning Across the UK | Avenook" },
      { name: "description", content: "Avenook Cleaning Services covers homes and businesses across London, Manchester, Birmingham, Leeds and the surrounding regions. See if we cover your postcode." },
      { property: "og:title", content: "Avenook Service Areas Across the UK" },
      { property: "og:description", content: "Cleaning services across London, Manchester, Birmingham, Leeds and more." },
      { property: "og:url", content: "/areas" },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
  component: Areas,
});

const regions = [
  { name: "Greater London", towns: ["Westminster","Camden","Hackney","Islington","Wandsworth","Croydon","Ealing","Greenwich"] },
  { name: "South East", towns: ["Reading","Brighton","Guildford","Oxford","Watford","Slough","Milton Keynes"] },
  { name: "Midlands", towns: ["Birmingham","Coventry","Leicester","Nottingham","Wolverhampton","Derby"] },
  { name: "North West", towns: ["Manchester","Liverpool","Salford","Stockport","Bolton","Warrington"] },
  { name: "Yorkshire", towns: ["Leeds","Sheffield","Bradford","York","Wakefield","Huddersfield"] },
  { name: "South West", towns: ["Bristol","Bath","Exeter","Plymouth","Swindon","Cheltenham"] },
];

function Areas() {
  return (
    <>
      <PageHeader
        eyebrow="Service areas"
        title="Cleaning homes & businesses across the UK"
        subtitle="We cover major cities and surrounding towns. Not sure if we reach you? Send us your postcode and we'll confirm in a few minutes."
      >
        <Link to="/contact" className="inline-flex items-center rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft">
          Check my postcode
        </Link>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-2">
                <div className="rounded-lg gradient-brand p-2 text-white"><MapPin className="h-4 w-4" /></div>
                <h3 className="text-lg font-semibold">{r.name}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {r.towns.map((t) => (
                  <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local, but with national standards" title="Why local matters">
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p>
            Our cleaners live in the communities they serve — which means faster response times,
            local know-how and friendly faces you'll recognise. Every team follows the same Avenook
            standards, so whether we're in London, Leeds or Bristol, you get the same five-star service.
          </p>
        </div>
      </Section>
    </>
  );
}
