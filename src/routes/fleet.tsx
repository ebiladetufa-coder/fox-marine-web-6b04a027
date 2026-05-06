import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-vessel.jpg";
import portImg from "@/assets/services-port.jpg";
import offshoreImg from "@/assets/offshore.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — Fox Marine Nigeria Limited" },
      { name: "description", content: "Explore Fox Marine's modern fleet of supply vessels, tugs, and offshore support craft." },
    ],
  }),
  component: FleetPage,
});

const fleet = [
  { img: heroImg, name: "Platform Supply Vessels", spec: "60–80m | DP2 | Multi-purpose" },
  { img: offshoreImg, name: "Anchor Handling Tugs", spec: "BHP 5,000+ | FiFi-1 | Towage" },
  { img: portImg, name: "Crew & Cargo Boats", spec: "High-speed | 30–60 PAX | Coastal" },
];

function FleetPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Fleet"
        subtitle="Modern, well-maintained vessels built to handle every offshore and coastal challenge."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {fleet.map((f) => (
            <article key={f.name} className="group rounded-lg overflow-hidden bg-card border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-primary">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.spec}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
