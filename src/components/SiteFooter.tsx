import { Link } from "@tanstack/react-router";
import { Anchor, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-deep-ocean text-white relative overflow-hidden">
      {/* decorative gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              Ready to set sail with us?
            </h3>
            <p className="mt-2 text-white/70">
              Reliable marine logistics across the Gulf of Guinea and beyond.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md bg-gold text-deep-ocean font-semibold hover:bg-gold-glow transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-md border border-white/20 bg-white/5 flex items-center justify-center text-[10px] uppercase tracking-widest text-white/50">
              Logo
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Fox Marine</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Nigeria Limited</div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            A trusted Nigerian marine services company providing offshore support,
            vessel chartering, and integrated logistics solutions.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-white/15 hover:bg-gold hover:text-deep-ocean hover:border-gold transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-base font-semibold mb-5 text-gold">Explore</h4>
          <ul className="space-y-3 text-sm text-white/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/fleet", label: "Our Fleet" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base font-semibold mb-5 text-gold">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><Anchor className="h-4 w-4 mt-0.5 text-gold" /> Offshore Support</li>
            <li className="flex gap-2"><Anchor className="h-4 w-4 mt-0.5 text-gold" /> Vessel Chartering</li>
            <li className="flex gap-2"><Anchor className="h-4 w-4 mt-0.5 text-gold" /> Marine Logistics</li>
            <li className="flex gap-2"><Anchor className="h-4 w-4 mt-0.5 text-gold" /> Crew Services</li>
            <li className="flex gap-2"><Anchor className="h-4 w-4 mt-0.5 text-gold" /> Cargo Handling</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold mb-5 text-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <span>Marine House, Victoria Island, Lagos, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <a href="tel:+2340000000000" className="hover:text-gold">+234 (0) 000 000 0000</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <a href="mailto:info@foxmarine.ng" className="hover:text-gold">info@foxmarine.ng</a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Fox Marine Nigeria Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
