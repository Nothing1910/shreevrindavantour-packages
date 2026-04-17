import { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, Sparkles, Users } from "lucide-react";
import { shouldReduceMotion } from "@/lib/animation";

const stats = [
  { icon: MapPin, value: 500, suffix: "+", label: "Trips and Tours" },
  { icon: Globe, value: 30, suffix: "+", label: "Destinations Covered" },
  { icon: Sparkles, value: 50, suffix: "+", label: "Pilgrimage Experiences" },
  { icon: Users, value: 50, suffix: "K+", label: "Happy Devotees" },
];

const Counter = memo(({ target, suffix }: { target: number; suffix: string }) => {
  const [countVal, setCountVal] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observerInstance = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;

          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let currentVal = 0;

          const timerId = setInterval(() => {
            currentVal += increment;
            if (currentVal >= target) {
              setCountVal(target);
              clearInterval(timerId);
            } else {
              setCountVal(Math.floor(currentVal));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observerInstance.observe(containerRef.current);

    return () => observerInstance.disconnect();
  }, [target]);

  return (
    <div
      ref={containerRef}
      className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground"
      aria-live="polite"
    >
      {countVal}
      {suffix}
    </div>
  );
});

Counter.displayName = "Counter";

const StatsSection = () => (
  <section
    className="py-16 bg-gradient-saffron"
    role="region"
    aria-label="Company statistics and achievements"
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((statItem) => (
          <motion.div
            key={statItem.label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            className="text-center"
          >
            <statItem.icon
              className="mx-auto mb-3 text-primary-foreground/80"
              size={36}
              aria-hidden="true"
            />
            <Counter target={statItem.value} suffix={statItem.suffix} />
            <p className="text-primary-foreground/80 font-medium mt-1">
              {statItem.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;