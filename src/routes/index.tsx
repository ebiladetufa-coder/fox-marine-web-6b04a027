import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Anchor, Ship, Compass, ShieldCheck, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-vessel.jpg";
import portImg from "@/assets/services-port.jpg";
import offshoreImg from "@/assets/offshore.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fox Marine Nigeria Limited — Trusted Marine Services" },
      {
        name: "description",
        content:
          "Fox Marine Nigeria Limited delivers offshore support, vessel chartering, and integrated marine logistics across the Gulf of Guinea.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Marine supply vessel at sea"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean/95 via-deep-ocean/70 to-deep-ocean/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs uppercase tracking-[0.25em] mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Marine Excellence Since Inception
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.05]">
              Navigating Nigeria's <span className="text-gold">Maritime</span> Future.
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
              Fox Marine Nigeria Limited delivers world-class offshore support,
              vessel chartering, and integrated marine logistics across the
              Gulf of Guinea.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gold text-deep-ocean font-semibold hover:bg-gold-glow transition-colors"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/30 hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: "15+", l: "Years of Excellence" },
            { n: "50+", l: "Vessels Operated" },
            { n: "200+", l: "Successful Missions" },
            { n: "24/7", l: "Operational Support" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-display font-semibold text-gold">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">About Us</div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary leading-tight">
              A trusted partner in Nigerian maritime operations.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From the bustling ports of Lagos to the depths of the Gulf of Guinea,
              Fox Marine has built a reputation for safety, reliability, and operational
              excellence. Our skilled crews and modern fleet are at the heart of every mission.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: ShieldCheck, t: "Safety First", d: "Industry-leading HSE standards." },
                { icon: Compass, t: "Local Expertise", d: "Deep knowledge of regional waters." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <f.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={offshoreImg}
              alt="Offshore platform with supply vessel"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-lg shadow-[0_20px_60px_-20px_oklch(0.16_0.05_245/0.4)] aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold text-deep-ocean p-6 rounded-lg max-w-[200px] hidden md:block">
              <div className="font-display text-3xl font-semibold">15+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years building trust at sea</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-secondary relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">What We Do</div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary">
                Comprehensive marine solutions.
              </h2>
            </div>
            <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 hover:text-accent">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Ship, t: "Offshore Support", d: "Crew transfers, supply runs and platform support across regional waters." },
              { icon: Anchor, t: "Vessel Chartering", d: "A modern fleet ready for short and long-term charter contracts." },
              { icon: Compass, t: "Marine Logistics", d: "Integrated logistics solutions tailored to your operations." },
            ].map((s) => (
              <div key={s.t} className="group bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors">
                <div className="h-12 w-12 rounded-md bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                  <s.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="mt-6 text-xl font-display font-semibold text-primary">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-32 text-white overflow-hidden">
        <img src={portImg} alt="Port at blue hour" width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-deep-ocean/80" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Let's chart your next voyage together.
          </h2>
          <p className="mt-5 text-white/70 text-lg">
            Speak to our marine specialists for a tailored quote.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-md bg-gold text-deep-ocean font-semibold hover:bg-gold-glow transition-colors">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
