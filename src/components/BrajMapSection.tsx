import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { shouldReduceMotion } from "@/lib/animation";

const locations = [
  { name: "Mathura", x: 52, y: 45, desc: "Birthplace of Lord Krishna. Home to Krishna Janmabhoomi and Dwarkadhish Temple." },
  { name: "Vrindavan", x: 58, y: 30, desc: "Land of Krishna's childhood leelas. Famous for Banke Bihari, Prem Mandir, and ISKCON Temple." },
  { name: "Govardhan", x: 35, y: 38, desc: "Sacred hill lifted by Lord Krishna. Pilgrims perform the 21 km Govardhan Parikrama." },
  { name: "Barsana", x: 28, y: 22, desc: "Birthplace of Radha Rani. Famous for the Lathmar Holi festival and Radha Rani Temple." },
  { name: "Nandgaon", x: 38, y: 18, desc: "Village of Nand Maharaj, Krishna's foster father. Known for Nand Bhawan Temple." },
  { name: "Gokul", x: 60, y: 62, desc: "Where Krishna was secretly raised by Nand Baba and Yashoda. Ancient ghats line the Yamuna." },
];

const BrajMapSection = () => {
  const [activeLocationName, setActiveLocationName] = useState<string | null>(null);

  const selectedLocation = useMemo(
    () => locations.find((item) => item.name === activeLocationName),
    [activeLocationName]
  );

  const toggleLocation = useCallback((placeName: string) => {
    setActiveLocationName((prev) => (prev === placeName ? null : placeName));
  }, []);

  return (
    <section id="maps" className="py-16 lg:py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Explore the Sacred Land of <span className="text-primary">Braj</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div
            className="relative bg-card rounded-2xl border border-border p-6 shadow-card aspect-[4/3]"
            role="region"
            aria-label="Interactive map showing key locations in Braj region"
          >
            <div className="absolute inset-6 opacity-10" aria-hidden="true">
              {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div
                  key={`horizontal-${rowIndex}`}
                  className="absolute w-full border-t border-foreground"
                  style={{ top: `${(rowIndex + 1) * 14.2}%` }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, colIndex) => (
                <div
                  key={`vertical-${colIndex}`}
                  className="absolute h-full border-l border-foreground"
                  style={{ left: `${(colIndex + 1) * 11.1}%` }}
                />
              ))}
            </div>

            <svg
              className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 50 0 Q 55 25, 48 40 Q 42 55, 55 70 Q 62 80, 55 100"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.8"
                opacity="0.25"
                strokeDasharray="2 2"
              />
            </svg>

            <p className="absolute top-2 right-4 text-xs text-muted-foreground italic">
              Yamuna River ↓
            </p>

            {locations.map((place) => (
              <motion.button
                key={place.name}
                type="button"
                aria-pressed={activeLocationName === place.name}
                aria-label={`View details about ${place.name}`}
                className={`absolute flex flex-col items-center gap-0.5 -translate-x-1/2 -translate-y-full group z-10 ${activeLocationName === place.name ? "z-20" : ""
                  }`}
                style={{ left: `${place.x}%`, top: `${place.y}%` }}
                onClick={() => toggleLocation(place.name)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs font-heading font-semibold text-foreground bg-card/90 backdrop-blur px-2 py-0.5 rounded-md border border-border shadow-sm whitespace-nowrap">
                  {place.name}
                </span>
                <MapPin
                  size={24}
                  aria-hidden="true"
                  className={`transition-colors ${activeLocationName === place.name
                    ? "text-primary fill-primary/20"
                    : "text-primary/70 group-hover:text-primary"
                    }`}
                />
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedLocation && (
              <motion.div
                key={selectedLocation.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 bg-card rounded-xl border border-border p-5 shadow-card"
                role="region"
                aria-live="polite"
              >
                <h3 className="font-heading font-bold text-primary text-lg">
                  {selectedLocation.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {selectedLocation.desc}
                </p>
                <a
                  href="#packages"
                  className="inline-block mt-3 text-sm font-semibold text-primary hover:underline"
                  aria-label={`View travel packages for ${selectedLocation.name}`}
                >
                  View Packages →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BrajMapSection;