import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { destinations } from "@/data/tourData";
import DestinationModal from "./DestinationModal";
import type { Destination } from "@/data/tourData";
import { shouldReduceMotion } from "@/lib/animation";

const DestinationsSection = () => {
  const [activeDest, setActiveDest] = useState<Destination | null>(null);

  const openModal = useCallback((destObj: Destination) => {
    setActiveDest(destObj);
  }, []);

  const closeModal = useCallback(() => {
    setActiveDest(null);
  }, []);

  return (
    <>
      <section id="destinations" className="py-16 lg:py-24 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Popular <span className="text-primary">Pilgrimage</span> Destinations
            </h2>
            <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {destinations.map((destItem, indexVal) => (
              <motion.div
                key={destItem.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${destItem.name}`}
                onKeyDown={(evt) => {
                  if (evt.key === "Enter" || evt.key === " ") openModal(destItem);
                }}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={destItem.img}
                  alt={`${destItem.name} pilgrimage destination`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading font-semibold text-primary-foreground text-sm md:text-base">
                    {destItem.name}
                  </h3>

                  <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#contact"
                      className="text-xs bg-gradient-saffron text-primary-foreground px-3 py-1.5 rounded-full font-semibold"
                      aria-label={`Enquire about ${destItem.name}`}
                    >
                      Enquire Now
                    </a>

                    <button
                      type="button"
                      onClick={() => openModal(destItem)}
                      className="text-xs bg-card/90 text-foreground px-3 py-1.5 rounded-full font-semibold hover:bg-card transition-colors"
                      aria-label={`Know more about ${destItem.name}`}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DestinationModal destination={activeDest} onClose={closeModal} />
    </>
  );
};

export default DestinationsSection;