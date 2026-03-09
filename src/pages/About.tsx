import { useEffect } from "react";
import { Shield, Users, Heart, Compass } from "lucide-react";

const whyChooseUs = [
  "Exclusive expertise in AROYA Cruises and Red Sea destinations",
  "Handcrafted Stay & Sail packages combining premium hotels with cruise voyages",
  "Alcohol-free, family-friendly environment welcoming all backgrounds",
  "UK-based support with 24/7 availability during your trip",
  "Deep cultural knowledge and respect for diverse traditions",
  "Transparent pricing with no hidden fees",
];

const About = () => {
  useEffect(() => { document.title = "About The Ocean Within Travel — Specialists in AROYA Cruises"; }, []);
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About The Ocean Within
          </h1>
          <p className="text-primary-foreground/80 text-lg sm:text-xl leading-relaxed">
            More than a travel agency — a philosophy of journeying with purpose, stillness, and discovery.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Our Philosophy
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              At The Ocean Within Travel, we believe that travel is not merely a journey across oceans—it is a journey within. Our name reflects a deeper philosophy: the vastness of the sea mirrors the vastness within each of us, and we are here to help you explore both.
            </p>
            <p>
              We understand that for many travellers, a holiday is more than sightseeing—it is a chance to pause, reflect, reconnect with family and faith, and experience the world in a way that feels authentic and respectful.
            </p>
            <p>
              That is why we have built our entire offering around AROYA Cruises, the pioneering Arabian cruise line that shares our values of excellence, hospitality, and inclusivity. Every voyage we create is designed to be a sanctuary — whether you are a family seeking quality time, a couple marking a milestone, or a group embarking on a transformative retreat.
            </p>
          </div>
        </div>
      </section>

      {/* AROYA Connection */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The AROYA Connection
            </h2>
            <p className="text-secondary font-serif text-xl italic">
              Ar-Roya (الرؤيا) — "The Vision"
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              The name AROYA comes from the Arabic word "Ar-Roya" meaning "The Vision." It represents a new way of experiencing the sea — one rooted in Arabian hospitality, world-class service, and a deep respect for culture and tradition.
            </p>
            <p>
              AROYA Cruises offers an entirely alcohol-free cruise experience, with gourmet dining, state-of-the-art entertainment, luxurious spa facilities, and itineraries that explore the breathtaking Red Sea coastline and beyond. It is a cruise line designed for everyone — families, couples, and solo travellers alike.
            </p>
            <p>
              That is why we have built our entire offering around AROYA Cruises, the pioneering Arabian cruise line that shares our values of excellence, hospitality, and inclusivity. Every voyage we create is designed to be a sanctuary—whether you are a family seeking quality time, a couple celebrating a milestone, or a group embarking on a transformative retreat.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-14 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Individual & Family Sanctuaries
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We create bespoke holiday experiences for individuals, couples, and families. Every Stay & Sail package is tailored to your needs — from selecting the perfect cabin to arranging premium hotel stays and private transfers. Whether it's a honeymoon, a multi-generational family reunion, or a solo retreat, we ensure every detail reflects your vision.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Group Tours & Organisation Retreats
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with mosques, community organisations, schools, charities, and corporate groups to arrange group cruise experiences. From Umrah-adjacent sailings to team-building retreats and educational excursions, our group packages include dedicated coordination, group dining arrangements, and tailored on-board and on-shore activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
            Why The Ocean Within Travel
          </h2>
          <ul className="space-y-4">
            {whyChooseUs.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            Our founder's passion for the sea and commitment to inclusive, meaningful travel drives every voyage we create. Full team profiles coming soon.
          </p>
          <div className="w-32 h-32 mx-auto rounded-full bg-muted flex items-center justify-center">
            <Compass className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
