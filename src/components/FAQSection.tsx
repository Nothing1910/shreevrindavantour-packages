import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { shouldReduceMotion } from "@/lib/animation";

const rawFaqs = [
  {
    q: "What is the best time to visit Mathura and Vrindavan?",
    a: "The best time to visit is from October to March when the weather is pleasant. However, festivals like Holi (Feb-March), Janmashtami (Aug-Sep), and Kartik Purnima make the experience even more special.",
  },
  {
    q: "Do you provide transportation for the tours?",
    a: "Yes! We provide a vetted fleet of vehicles including sedans (Dzire/Etios), SUVs (Innova Crysta), and Urbania/Tempo Travellers (12-26 seater) for all group sizes.",
  },
  {
    q: "Can tour packages be customized?",
    a: "Absolutely! All our packages are fully customizable. You can adjust the itinerary, duration, accommodation type, and add or remove destinations based on your preferences.",
  },
  {
    q: "How can I book a tour package?",
    a: "You can enquire through our contact form, WhatsApp, or call us directly. Our team will create a customized itinerary and share the best quote within 24 hours.",
  },
  {
    q: "Do you provide hotel booking?",
    a: "Yes, we provide accommodation options ranging from budget guest houses to 5-star resorts. Our direct contracts with property owners ensure you get the best market rates.",
  },
];

const FAQSection = () => {
  const faqs = useMemo(() => rawFaqs, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto mt-4 rounded-full" />
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="space-y-3"
          role="region"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faqItem, idxVal) => (
            <AccordionItem
              key={idxVal}
              value={`faq-${idxVal}`}
              className="bg-card border border-border rounded-xl px-6 shadow-card"
            >
              <AccordionTrigger
                className="font-heading font-semibold text-foreground text-left py-4 hover:text-primary"
                aria-label={`Toggle answer for: ${faqItem.q}`}
              >
                {faqItem.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faqItem.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;