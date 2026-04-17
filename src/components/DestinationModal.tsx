import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock, Star } from "lucide-react";
import { useEffect, useCallback } from "react";
import type { Destination } from "@/data/tourData";
import { shouldReduceMotion } from "@/lib/animation";

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

const DestinationModal = ({ destination, onClose }: DestinationModalProps) => {
  const handleKeyClose = useCallback((evt: KeyboardEvent) => {
    if (evt.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (destination) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyClose);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyClose);
    };
  }, [destination, handleKeyClose]);

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${destination.name} details`}
        >
          <div
            className="absolute inset-0 bg-foreground/60"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative bg-card rounded-2xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto z-10 border border-border"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="relative h-52 overflow-hidden rounded-t-2xl">
              <img
                src={destination.img}
                alt={`${destination.name} temple or destination view`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <h2 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-primary-foreground">
                {destination.name}
              </h2>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Description
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-accent" aria-hidden="true" />
                  Spiritual Significance
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {destination.significance}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-primary" aria-hidden="true" />
                  Best Time to Visit
                </h3>
                <p className="text-muted-foreground text-sm">
                  {destination.bestTime}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Star size={16} className="text-accent" aria-hidden="true" />
                  Key Highlights
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {destination.highlights.map((itemVal) => (
                    <li
                      key={itemVal}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {itemVal}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="block text-center py-3 rounded-lg bg-gradient-saffron text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
                aria-label={`Book tour for ${destination.name}`}
              >
                Book Vrindavan Tour
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DestinationModal;