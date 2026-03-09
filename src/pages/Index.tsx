import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Compass, Shield, Users, Clock, Star } from "lucide-react";
import heroCruise from "@/assets/hero-cruise.jpg";
import staySail1 from "@/assets/stay-sail-1.jpg";
import staySail2 from "@/assets/stay-sail-2.jpg";
import staySail3 from "@/assets/stay-sail-3.jpg";

const packages = [
  {
    title: "Jeddah Discovery & Cruise",
    duration: "10 Nights",
    hotel: "Assila, A Luxury Collection Hotel",
    price: "From £2,499",
    image: staySail1,
    description: "3 nights in Jeddah + 7-night AROYA Red Sea cruise. Experience the vibrant culture of Saudi Arabia before setting sail.",
  },
  {
    title: "Red Sea Pearl Explorer",
    duration: "7 Nights",
    hotel: "The Ritz-Carlton, Jeddah",
    price: "From £1,899",
    image: staySail2,
    description: "2 nights coastal resort + 5-night AROYA cruise. Crystal-clear waters and stunning coral reefs await.",
  },
  {
    title: "Arabian Sunset Voyage",
    duration: "12 Nights",
    hotel: "Park Hyatt Jeddah",
    price: "From £3,199",
    image: staySail3,
    description: "5 nights luxury hotel + 7-night AROYA cruise. The ultimate Stay & Sail experience for discerning travellers.",
  },
];

const features = [
  {
    icon: Compass,
    title: "Specialised Expertise",
    description: "Deep knowledge of AROYA Cruises and the Red Sea region, curating journeys that go beyond the ordinary.",
  },
  {
    icon: Users,
    title: "Universal Inclusivity",
    description: "Alcohol-free, family-friendly voyages welcoming travellers of every background and belief.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "From the moment you book to the moment you return, our dedicated team is always here for you.",
  },
];

const reviews = [
  { text: "An exceptional experience from start to finish. The attention to detail and personal service made our family holiday truly unforgettable.", author: "Sarah & James T.", location: "Manchester" },
  { text: "We were nervous about booking our first cruise but the team made everything so easy. The Stay & Sail package was seamless — hotel, transfers, everything taken care of.", author: "Amira K.", location: "Birmingham" },
  { text: "Incredible value for a luxury experience. The AROYA cruise exceeded all expectations and the pre-cruise hotel was stunning. Already planning our next voyage!", author: "The Patel Family", location: "London" },
];

const Index = () => {
  useEffect(() => {
    document.title = "The Ocean Within Travel | Luxury AROYA Cruises & Stay & Sail Packages";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroCruise}
          alt="Luxury AROYA Cruise ship sailing the Red Sea at sunset"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight">
            Journey Beyond the Surface
          </h1>
          <p className="font-sans text-lg sm:text-xl text-accent/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Luxury AROYA Cruises with handcrafted land packages. Discover the Red Sea like never before.
          </p>
          <Link
            to="/packages"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-sans font-semibold text-base rounded-md hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Voyages
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8">
            The Ocean Within Philosophy
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
            At The Ocean Within Travel, we believe that travel is not merely a journey across oceans, it is a journey within. Our name reflects a deeper philosophy: that the vastness of the sea mirrors the vastness within each of us. We are here to help you explore both.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            We specialise exclusively in AROYA Cruises, the pioneering Arabian cruise line, combined with premium "Stay & Sail" land packages. Every voyage we craft is designed to be a sanctuary, a space for families, individuals, and groups to reconnect with themselves and each other, surrounded by the beauty of the Red Sea.
          </p>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Stay & Sail Packages
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Handcrafted combinations of luxury hotel stays and AROYA Red Sea cruises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-sans font-semibold px-3 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{pkg.hotel}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-secondary text-lg">{pkg.price}</span>
                    <Link
                      to="/packages"
                      className="text-sm font-sans font-medium text-primary hover:text-secondary transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose The Ocean Within
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center px-4">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Travellers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-sans">5.0 on Trustpilot</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card rounded-lg p-8 shadow-sm text-left">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-sans font-semibold text-foreground text-sm">— {review.author}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://trustpilot.com" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-medium text-secondary hover:underline">
              Read more reviews on Trustpilot →
            </a>
            <a href="https://trustpilot.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-sans font-medium border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-secondary-foreground transition-colors">
              Write a Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Ready to Set Sail?
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-10 leading-relaxed">
            Let us craft your perfect Stay & Sail voyage. Contact our expert team today for a personalised quote.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-sans font-semibold rounded-md hover:bg-secondary/90 transition-all shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
