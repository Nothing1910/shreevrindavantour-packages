import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Lightbulb, CalendarDays } from "lucide-react";
import { useEffect, useCallback } from "react";
import type { TourPackage } from "@/data/tourData";
import { shouldReduceMotion } from "@/lib/animation";

interface TourModalProps {
  tour: TourPackage | null;
  onClose: () => void;
}

const TourModal = ({ tour, onClose }: TourModalProps) => {
  const handleEscClose = useCallback((evt: KeyboardEvent) => {
    if (evt.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (tour) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscClose);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [tour, handleEscClose]);

  return (
    <AnimatePresence>
      {tour && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${tour.title} details`}
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
            className="relative bg-card rounded-2xl shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-border"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img
                src={tour.img}
                alt={`${tour.title} tour destination`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="font-heading font-bold text-xl text-primary-foreground">
                  {tour.title}
                </h2>

                <div className="flex items-center gap-3 mt-1 text-primary-foreground/80 text-sm">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} aria-hidden="true" /> {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" /> {tour.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Overview
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tour.overview}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Highlights
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {tour.highlights.map((itemVal) => (
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

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Itinerary
                </h3>
                <div className="space-y-3">
                  {tour.itinerary.map((dayItem) => (
                    <div key={dayItem.day} className="bg-muted rounded-lg p-3">
                      <p className="font-heading font-semibold text-primary text-sm">
                        {dayItem.day}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {dayItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Lightbulb size={16} className="text-accent" aria-hidden="true" />
                  Tour Tips
                </h3>
                <ul className="space-y-1">
                  {tour.tips.map((tipVal) => (
                    <li
                      key={tipVal}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent">•</span> {tipVal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex-1 text-center py-3 rounded-lg bg-gradient-saffron text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
                  aria-label={`Enquire about ${tour.title}`}
                >
                  Enquire Now
                </a>

                <a
                  href={`https://wa.me/919084397393?text=${encodeURIComponent(
                    `Hi! I want to book ${tour.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-lg border-2 border-primary text-primary font-heading font-semibold hover:bg-saffron-light transition-colors"
                  aria-label={`Book ${tour.title} via WhatsApp`}
                >
                  Booking
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TourModal;