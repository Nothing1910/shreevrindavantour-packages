import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, Send } from "lucide-react";
import heroImg from "@/assets/hero-temple.webp";
import heroMobileImg from "@/assets/hero-mobile.webp";
import { shouldReduceMotion } from "@/lib/animation";

const HeroSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const updateField = useCallback((key: string, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSubmit = useCallback((evt: React.FormEvent) => {
    evt.preventDefault();
    const msg = `Hi! I'm interested in Mathura Vrindavan Tour.
Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone}
Date: ${formState.date}`;

    window.open(
      `https://wa.me/918923427393?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [formState]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      role="region"
      aria-label="Hero section with travel introduction and enquiry form"
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: 1.04 }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
        aria-hidden="true"
      >
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobileImg} />
          <source media="(min-width: 769px)" srcSet={heroImg} />
          <img
            src={heroImg}
            alt="Prem Mandir Vrindavan temple view"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-card/40 via-card/25 to-transparent" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4">
              Mathura Vrindavan<br />
              <span className="text-primary">Tour Packages</span>
            </h1>

            <p className="text-lg text-muted-foreground text-black mb-8 max-w-lg">
              Avail best discount on Mathura Vrindavan Packages today! Experience the divine journey with expert guides.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-6 py-3 rounded-full font-heading font-semibold hover:bg-saffron-light transition-colors"
              >
                Travel The Braj With Experts
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                { icon: "⭐", text: "500+ Successful Tours" },
                { icon: "🙏", text: "50K+ Happy Devotees" },
                { icon: "🕉", text: "Local Braj Experts" },
                { icon: "📞", text: "24/7 Customer Support" },
              ].map((badgeItem) => (
                <div
                  key={badgeItem.text}
                  className="flex items-center gap-2 bg-card/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50"
                >
                  <span className="text-lg" aria-hidden="true">{badgeItem.icon}</span>
                  <span className="text-xs font-semibold text-foreground">
                    {badgeItem.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border">
              <h3 className="text-primary font-heading font-semibold text-lg text-center mb-1">
                Planning a Trip?
              </h3>
              <p className="text-accent font-heading font-medium text-center mb-1">
                Let's See What Discount You Get!
              </p>
              <p className="text-xs text-muted-foreground text-center mb-6 uppercase tracking-wider font-semibold">
                Enquire and get VIP passes
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="heroName" className="sr-only">Your Name</label>
                  <input
                    id="heroName"
                    type="text"
                    required
                    aria-required="true"
                    value={formState.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="heroEmail" className="sr-only">Email address</label>
                  <input
                    id="heroEmail"
                    type="email"
                    required
                    aria-required="true"
                    value={formState.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent transition-all"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="heroPhone" className="sr-only">Phone number</label>
                  <input
                    id="heroPhone"
                    type="tel"
                    required
                    aria-required="true"
                    value={formState.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent transition-all"
                    placeholder="Phone"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="heroDate" className="sr-only">Travel date</label>
                  <input
                    id="heroDate"
                    type="date"
                    required
                    aria-required="true"
                    value={formState.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent transition-all"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" size={18} aria-hidden="true" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-saffron py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Send size={18} aria-hidden="true" />
                  Submit
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;