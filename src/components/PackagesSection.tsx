import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { packages } from "@/data/tourData";
import TourModal from "./TourModal";
import type { TourPackage } from "@/data/tourData";
import { shouldReduceMotion } from "@/lib/animation";

const PackagesSection = () => {
  const [activeTour, setActiveTour] = useState<TourPackage | null>(null);

  const openModal = useCallback((tourItem: TourPackage) => {
    setActiveTour(tourItem);
  }, []);

  const closeModal = useCallback(() => {
    setActiveTour(null);
  }, []);

  return (
    <>
      <section id="packages" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Our Best <span className="text-primary">Mathura Vrindavan</span> Packages
            </h2>
            <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkgItem, indexVal) => (
              <motion.div
                key={pkgItem.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                onClick={() => openModal(pkgItem)}
                className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkgItem.img}
                    alt={`${pkgItem.title} tour package`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Duration{" "}
                      <span className="font-semibold text-primary">
                        {pkgItem.duration}
                      </span>
                    </p>

                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-accent text-accent" aria-hidden="true" />
                      <span className="text-sm font-semibold text-foreground">
                        {pkgItem.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({pkgItem.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Location{" "}
                    <span className="font-semibold text-foreground">
                      {pkgItem.location}
                    </span>
                  </p>

                  <h3 className="font-heading font-semibold text-primary mt-2 text-sm leading-snug">
                    {pkgItem.title}
                  </h3>

                  <div className="flex gap-3 mt-4">
                    <a
                      href={`https://wa.me/918923427393?text=${encodeURIComponent(
                        `Hi! I want to enquire about ${pkgItem.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${pkgItem.title}`}
                      className="flex-1 text-center py-2 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-saffron-light transition-colors"
                    >
                      Enquire Now
                    </a>

                    <button
                      type="button"
                      onClick={() => openModal(pkgItem)}
                      aria-label={`View details of ${pkgItem.title}`}
                      className="flex-1 text-center py-2 rounded-lg bg-gradient-saffron text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/mathura-vrindavan-tour-packages"
              className="inline-block px-6 py-4 rounded-xl bg-gradient-to-r from-saffron/70 to-saffron/40 border border-border shadow-sm hover:shadow-md transition-all text-primary-foreground font-medium text-sm text-gray-800"
              aria-label="Read complete Mathura Vrindavan travel guide"
            >
              Read our complete Mathura Vrindavan Travel Guide →
            </a>
          </div>
        </div>
      </section>

      <TourModal tour={activeTour} onClose={closeModal} />
    </>
  );
};

export default PackagesSection;