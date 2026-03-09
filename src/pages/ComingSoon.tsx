import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

const ComingSoon = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `${title} — The Ocean Within Travel | Coming Soon`;
  }, [title]);

  return (
    <div>
      <section className="relative py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-primary-foreground/80 text-lg sm:text-xl leading-relaxed">
            This page is coming soon.
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary/10 flex items-center justify-center">
            <Compass className="w-12 h-12 text-secondary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Coming Soon
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
            We're working hard to bring you this page. In the meantime, feel free to explore the rest of our site or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-sans font-semibold text-base rounded-md hover:bg-secondary/90 transition-all shadow-lg"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border border-secondary text-secondary font-sans font-semibold text-base rounded-md hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
