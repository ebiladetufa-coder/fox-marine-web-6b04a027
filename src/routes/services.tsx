import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Ship, Anchor, Compass, Users, Package, Wrench } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fox Marine Nigeria Limited" },
      { name: "description", content: "Offshore support, vessel chartering, marine logistics, crew services and more from Fox Marine Nigeria." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Ship, t: "Offshore Support", d: "Platform supply, crew change, and standby vessels for offshore operations." },
  { icon: Anchor, t: "Vessel Chartering", d: "Flexible short and long-term charter agreements across our modern fleet." },
  { icon: Compass, t: "Marine Logistics", d: "End-to-end coordination for cargo movement, port calls, and clearances." },
  { icon: Users, t: "Crew Services", d: "Certified, experienced crews available for deployment on demand." },
  { icon: Package, t: "Cargo Handling", d: "Specialised handling for project cargo, containers, and bulk goods." },
  { icon: Wrench, t: "Marine Engineering", d: "Maintenance, repair, and technical consultancy for vessels and equipment." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Services"
        subtitle="A complete portfolio of marine services engineered for Nigeria's most demanding maritime operations."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.t} className="group bg-card border border-border rounded-lg p-8 hover:border-accent hover:shadow-[0_20px_40px_-20px_oklch(0.16_0.05_245/0.2)] transition-all">
              <div className="h-14 w-14 rounded-md bg-primary text-white group-hover:bg-accent group-hover:text-deep-ocean flex items-center justify-center transition-colors">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-primary">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
