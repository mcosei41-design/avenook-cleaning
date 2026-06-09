import type { ReactNode } from "react";

export function PageHeader({
  eyebrow, title, subtitle, children,
}: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-orange-accent/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
