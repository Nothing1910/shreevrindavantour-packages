import { motion } from "framer-motion";
import { shouldReduceMotion } from "@/lib/animation";

const CTABanner = () => (
  <section id="ctabanner" className="py-12 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        role="region"
        aria-label="Call to action for travel enquiry"
        className="border-2 border-primary rounded-2xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-2">
          Enquire Now and get free itinerary plan!
        </h2>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-accent mb-4">
          Best Deals Guaranteed
        </h3>
        <div className="w-24 h-1 bg-gradient-saffron mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground mb-2">
          Plan your next pilgrimage to Mathura Vrindavan with us!
        </p>
        <p className="text-muted-foreground mb-6">
          Our Team of Experts is just a call away. Connect Today!
        </p>
        <a
          href="#contact"
          className="inline-flex bg-gradient-saffron text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:opacity-90 transition-opacity"
          aria-label="Go to contact section to avail travel offer"
        >
          Avail Offer Now!
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;