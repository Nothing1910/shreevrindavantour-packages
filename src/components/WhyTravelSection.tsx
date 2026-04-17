import { motion } from "framer-motion";
import { useMemo } from "react";
import { Heart, IndianRupee, ShieldCheck } from "lucide-react";
import { shouldReduceMotion } from "@/lib/animation";

const rawFeatures = [
  {
    icon: Heart,
    title: "Spiritual & Hassle-Free Experience",
    desc: "Focus on your devotion while we handle all logistics — transport, accommodation, darshan schedules, and guided tours. Your spiritual journey, our responsibility.",
  },
  {
    icon: IndianRupee,
    title: "Best Price & Customized Packages",
    desc: "Flexible itineraries tailored to your dates, budget, and preferences. Transparent pricing with no hidden costs. Get the best value for your pilgrimage.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    desc: "With 500+ successful tours and thousands of happy devotees, our experienced team ensures every trip is safe, well-organized, and memorable.",
  },
];

const WhyTravelSection = () => {
  const features = useMemo(() => rawFeatures, []);

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-cream"
      role="region"
      aria-label="Reasons to travel with us"
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
            Why <span className="text-primary">Travel</span> With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((featureItem, indexVal) => (
            <motion.div
              key={featureItem.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-saffron-light flex items-center justify-center">
                <featureItem.icon
                  className="text-primary"
                  size={28}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {featureItem.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {featureItem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTravelSection;