import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { shouldReduceMotion } from "@/lib/animation";

const reviews = [
  { name: "Rohit Mehta", location: "Pune", text: "Amazing experience with well-planned itinerary and smooth travel arrangements.", rating: 4.5 },
  { name: "Neha Kapoor", location: "Chandigarh", text: "The temple visits were peaceful and guides explained everything beautifully.", rating: 5 },
  { name: "Suresh Yadav", location: "Patna", text: "Comfortable stay and excellent service throughout the trip.", rating: 4 },
  { name: "Anjali Desai", location: "Ahmedabad", text: "Loved the spiritual vibe and hassle-free arrangements.", rating: 3.5 },
  { name: "Vikas Singh", location: "Kanpur", text: "Everything was perfectly organized and on time.", rating: 4.5 },
  { name: "Pooja Mishra", location: "Varanasi", text: "A divine journey with great hospitality and support.", rating: 5 },
  { name: "Deepak Kumar", location: "Ranchi", text: "Well-managed trip with comfortable transport and hotels.", rating: 4 },
  { name: "Ritu Sharma", location: "Noida", text: "Highly satisfying experience with excellent coordination.", rating: 4.5 },
  { name: "Arjun Patel", location: "Surat", text: "Great service and memorable temple visits.", rating: 5 },
  { name: "Meena Joshi", location: "Udaipur", text: "Everything was smooth and enjoyable throughout the journey.", rating: 3.5 }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timerId = setInterval(goNextSlide, 3000);
    return () => clearInterval(timerId);
  }, [goNextSlide]);

  const visibleReviews = useMemo(() => {
    const tempArr = [];
    for (let i = 0; i < 3; i++) {
      tempArr.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return tempArr;
  }, [currentIndex]);

  const renderStars = useCallback((ratingValue: number) => {
    const full = Math.floor(ratingValue);
    const hasHalf = ratingValue % 1 !== 0;
    const starArr = [];

    for (let i = 0; i < full; i++) {
      starArr.push(<Star key={`f-${i}`} size={16} className="fill-accent text-accent" aria-hidden="true" />);
    }

    if (hasHalf) {
      starArr.push(<StarHalf key="h" size={16} className="fill-accent text-accent" aria-hidden="true" />);
    }

    const remaining = 5 - Math.ceil(ratingValue);
    for (let i = 0; i < remaining; i++) {
      starArr.push(<Star key={`e-${i}`} size={16} className="text-border" aria-hidden="true" />);
    }

    return starArr;
  }, []);

  return (
    <section
      className="py-16 lg:py-24 bg-background overflow-hidden"
      role="region"
      aria-label="Customer reviews and testimonials"
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
            What Our <span className="text-primary">Devotees</span> Say
          </h2>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative">
          <button
            onClick={goPrevSlide}
            aria-label="Previous review"
            className="absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          >
            ‹
          </button>

          <button
            onClick={goNextSlide}
            aria-label="Next review"
            className="absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          >
            ›
          </button>

          <div className="md:hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card mx-8"
                role="group"
                aria-roledescription="slide"
              >
                <div className="flex gap-1 mb-3">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                <p className="font-heading font-semibold text-foreground text-sm">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {reviews[currentIndex].location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6 mx-8">
            {visibleReviews.map((itemObj, idxVal) => (
              <motion.div
                key={itemObj.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <div className="flex gap-1 mb-3">
                  {renderStars(itemObj.rating)}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">
                  "{itemObj.text}"
                </p>
                <p className="font-heading font-semibold text-foreground text-sm">
                  {itemObj.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {itemObj.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => {
                setDirection(dotIndex > currentIndex ? 1 : -1);
                setCurrentIndex(dotIndex);
              }}
              aria-label={`Go to review ${dotIndex + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${dotIndex === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;