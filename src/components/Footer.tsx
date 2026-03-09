import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="The Ocean Within Travel logo" className="h-9 w-auto brightness-200" />
              <span className="font-serif text-lg font-semibold">The Ocean Within</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Luxury AROYA Cruises with handcrafted Stay & Sail land packages. Your journey beyond the surface starts here.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/theoceanwithintravel" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/theoceanwithintravel" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/the-ocean-within-travel" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "AROYA Cruises", path: "/aroya-cruises" },
                { label: "Stay & Sail Packages", path: "/packages" },
                { label: "Resources", path: "/resources" },
                { label: "Book Now", path: "/booking" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:oceanswithintravel@gmail.com" className="hover:text-secondary transition-colors">
                  info@oceanwithin.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="tel:07771415896" className="hover:text-secondary transition-colors">
                  07771 415 896
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/complaints" className="hover:text-secondary transition-colors">Complaints Policy</Link></li>
              <li><Link to="/visa-guide" className="hover:text-secondary transition-colors">Visa Guide</Link></li>
            </ul>
            <div className="mt-4 text-xs text-primary-foreground/50 space-y-1">
              <p>Company No: 17065978</p>
              <p>VAT: TBC</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-primary-foreground/5 rounded-md text-xs text-primary-foreground/60 text-center">
          🚢 Flights are not included, clients are responsible for arranging their own flights to the departure city.
        </div>

        {/* Trust badges */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex flex-wrap items-center justify-center gap-6">
          {/* <div className="bg-primary-foreground/10 rounded-md px-4 py-2 text-xs text-primary-foreground/70 font-sans font-medium">
            🛡️ Protected Trust Services (PTS) Member
          </div> */}
          <div className="bg-primary-foreground/10 rounded-md px-4 py-2 text-xs text-primary-foreground/70 font-sans font-medium">
            🚢 AROYA Cruises Preferred Partner
          </div>
          <div className="bg-primary-foreground/10 rounded-md px-4 py-2 text-xs text-primary-foreground/70 font-sans font-medium">
            ATOL/ABTA — Status TBC
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          <p>© 2026 The Ocean Within Travel Ltd. All rights reserved.</p>
          <p className="mt-1">Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
