import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import logo from "@/assets/avenook-logo.jpg";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Avenook Cleaning Services" className="h-12 w-auto brightness-0 invert-0" />
            <p className="mt-4 text-sm text-white/70">
              Reliable, modern, and professional cleaning for homes and businesses across the UK.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4 text-teal" />
              <span>Fully insured · Vetted cleaners</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/services" hash="domestic" className="hover:text-teal">Domestic Cleaning</Link></li>
              <li><Link to="/services" hash="deep" className="hover:text-teal">Deep Cleaning</Link></li>
              <li><Link to="/services" hash="end-of-tenancy" className="hover:text-teal">End of Tenancy</Link></li>
              <li><Link to="/services" hash="office" className="hover:text-teal">Office Cleaning</Link></li>
              <li><Link to="/services" hash="airbnb" className="hover:text-teal">Airbnb Turnaround</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-teal">About us</Link></li>
              <li><Link to="/areas" className="hover:text-teal">Service areas</Link></li>
              <li><Link to="/faq" className="hover:text-teal">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-teal">Get a quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-teal" />
                <a href="mailto:Info@avenook.co.uk" className="hover:text-teal">Info@avenook.co.uk</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-teal" />
                <a href="tel:+447000000000" className="hover:text-teal">Request a callback</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-teal" />
                <span>Serving homes & businesses, UK-wide</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Avenook Cleaning Services. All rights reserved.</p>
          <p>Built for homes, offices, lets and Airbnb hosts across the UK.</p>
        </div>
      </div>
    </footer>
  );
}
