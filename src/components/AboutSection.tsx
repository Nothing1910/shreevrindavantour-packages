import { motion } from "framer-motion";
import { useMemo } from "react";
import { shouldReduceMotion } from "@/lib/animation";

const AboutSection = () => {
  const optimizedHeroImg = useMemo(() => {
    return new URL("@/assets/hero-temple.webp", import.meta.url).href;
  }, []);

  return (
    <section id="about" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={optimizedHeroImg}
              alt="Vrindavan temple view representing travel packages and spiritual tourism"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground leading-tight">
                Shree Vrindavan Packages: Your Local Experts for Pan-India Travel
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-2">
                A Unit of Experience My India
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h2 className="text-primary font-heading font-bold text-2xl mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Based in Mathura, Shree Vrindavan Packages is a full-service travel management company.
              While our roots are in the spiritual heart of Braj, our operations span the entire country.
              We bridge the gap between a local tour operator's pricing and a national agency's professionalism.
            </p>

            <h2 className="text-primary font-heading font-bold text-2xl mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in simplifying travel logistics. Whether you are planning a Char Dham Yatra
              for your parents, a Holi trip in Vrindavan, or a leisure trip to Kashmir, we handle the
              entire process — transport, accommodation, and guided experiences with a focus on safety
              and transparency.
            </p>
            <section>
              <h1>Mathura Vrindavan Tour & Packages</h1>

              <p>
                Mathura and Vrindavan are among the most sacred destinations in India, known for their spiritual significance and divine atmosphere.
                Our tour packages are designed to give you a complete and peaceful experience, covering all major temples, ghats, and nearby holy places like Govardhan and Barsana.
                Whether you are planning a family trip, pilgrimage, or a short spiritual getaway, we ensure comfortable travel, proper guidance, and memorable experiences throughout your journey.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;