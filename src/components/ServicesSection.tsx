import { motion } from "framer-motion";
import { useMemo } from "react";
import { MapPin, BadgePercent, Headphones, Car, Hotel, Users } from "lucide-react";
import { shouldReduceMotion } from "@/lib/animation";

const rawServices = [
  { icon: MapPin, title: "Handpicked Destinations", desc: "Carefully curated spiritual and cultural destinations across India." },
  { icon: BadgePercent, title: "Best Price Guaranteed", desc: "Competitive pricing with no hidden charges. Best value for your journey." },
  { icon: Headphones, title: "24/7 Customer Service", desc: "Round-the-clock support before, during, and after your trip." },
  { icon: Car, title: "Private Car & Coach Rentals", desc: "Safe, sanitized vehicles from sedans to tempo travellers for all group sizes." },
  { icon: Hotel, title: "Hotel & Resort Bookings", desc: "Accommodation options from budget guest houses to 5-star resorts." },
  { icon: Users, title: "Expert Local Guides", desc: "Hindi and English speaking licensed guides who are true storytellers." },
];

const ServicesSection = () => {
  const services = useMemo(() => rawServices, []);

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-background"
      role="region"
      aria-label="Travel services offered"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            What We Offer: <span className="text-primary">360° Travel</span> Solutions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From single-service bookings to complete tour management, we handle every aspect of your journey.
          </p>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((serviceItem, indexVal) => (
            <motion.div
              key={serviceItem.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-saffron-light flex items-center justify-center mb-4 group-hover:bg-gradient-saffron transition-colors">
                <serviceItem.icon
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                  size={24}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-heading font-semibold text-foreground mb-2">
                {serviceItem.title}
              </h3>

              <p className="text-muted-foreground text-sm">
                {serviceItem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;