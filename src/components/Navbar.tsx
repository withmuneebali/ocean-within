import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const logoIcon = "/favicon.ico";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "AROYA Cruises", path: "/aroya-cruises" },
  { label: "Stay & Sail", path: "/packages" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoIcon}
            alt="The Ocean Within Travel logo"
            className={`w-8 h-8 transition-all ${scrolled ? "" : "brightness-200"}`}
          />
          <span className={`font-serif text-xl font-semibold tracking-wide transition-colors ${scrolled ? "text-primary" : "text-accent"}`}>
            The Ocean Within
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                    location.pathname === item.path
                      ? scrolled ? "text-secondary" : "text-accent"
                      : scrolled ? "text-foreground/80" : "text-accent/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle scrolled={scrolled} />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle scrolled={scrolled} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition-colors ${scrolled ? "text-primary" : "text-accent"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-6 py-3 font-sans text-sm font-medium transition-colors hover:bg-accent/50 ${
                    location.pathname === item.path ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
