import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fox Marine Nigeria Limited" },
      { name: "description", content: "Learn about Fox Marine Nigeria Limited, our mission, values and commitment to maritime excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="About Fox Marine"
        subtitle="A proudly Nigerian marine services company committed to excellence, safety, and partnership."
      />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 prose prose-lg">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fox Marine Nigeria Limited was founded with a single ambition: to deliver
            world-class marine services to clients operating in the Gulf of Guinea.
            Today, we serve oil & gas majors, shipping operators, and government
            agencies with a modern fleet, expert crews, and an unwavering commitment
            to safety.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-20 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, t: "Our Mission", d: "To deliver dependable, safe, and innovative marine solutions that empower our clients' operations." },
            { icon: Eye, t: "Our Vision", d: "To be West Africa's most trusted name in offshore marine services." },
            { icon: Heart, t: "Our Values", d: "Integrity, excellence, safety, and a deep respect for the people and oceans we serve." },
          ].map((v) => (
            <div key={v.t} className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-2xl font-display font-semibold text-primary">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
