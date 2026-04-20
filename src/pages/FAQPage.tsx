import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import heroImg from "@/assets/hero-temple.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the best time to visit Mathura and Vrindavan?", a: "The best time to visit is October to March when the weather is pleasant. However, visiting during festivals like Holi (February/March) and Janmashtami (August/September) offers an extraordinary spiritual experience. Summers (April–June) can be very hot, while monsoons (July–September) bring humidity but also lush greenery." },
  { q: "How can I book a tour package with Shree Vrindavan Tour Packages?", a: "You can enquire through our website contact form, WhatsApp us directly, or call our team. We'll discuss your requirements — travel dates, group size, budget, and preferences — and create a customized itinerary for you. There are no booking charges for enquiry." },
  { q: "What is the dress code for visiting temples in Mathura Vrindavan?", a: "Modest traditional clothing is recommended. Women can wear sarees, salwar kameez, or long skirts with covered shoulders. Men should wear kurta pyjama or formal trousers with shirts. Avoid shorts, sleeveless tops, and revealing clothing. Some temples require head covering. Remove shoes before entering any temple." },
  { q: "Are hotel accommodations available near the temples?", a: "Yes, there are many accommodation options ranging from budget dharamshalas to luxury hotels. We help arrange stays based on your budget — from simple guest houses (₹800–1,500/night) to premium hotels (₹2,500–6,000/night). Most are within walking distance of major temples." },
  { q: "Do you provide transportation during the tour?", a: "Yes, all our tour packages include comfortable AC vehicle transportation from pickup to drop-off. Our drivers are experienced locals who know the narrow lanes and temple parking areas of Mathura and Vrindavan very well." },
  { q: "Can I customize the tour package according to my needs?", a: "Absolutely! Every group has different needs. We customize itineraries based on your travel dates, temple priorities, mobility requirements, budget, and group composition. Whether you're a family with elderly members, solo traveler, or a group of devotees, we adjust the plan accordingly." },
  { q: "Is photography allowed inside the temples?", a: "Photography rules vary by temple. Banke Bihari Temple strictly prohibits photography and mobile phones inside. Prem Mandir allows photography in the exterior gardens. ISKCON Temple allows photography in some areas. Your guide will inform you about the specific rules at each temple." },
  { q: "What are the important festivals celebrated in Vrindavan?", a: "Major festivals include Holi (Lathmar Holi in Barsana, Phoolon ki Holi in Banke Bihari), Janmashtami (Krishna's birthday), Radha Ashtami, Kartik Purnima, Guru Purnima, and Diwali. Each festival transforms the town with special decorations, extended darshan timings, and unique celebrations." },
  { q: "How many days are ideal for a Mathura Vrindavan trip?", a: "A minimum of 2 days is recommended to cover the major temples of both Mathura and Vrindavan. For a more relaxed experience including Govardhan, Barsana, and Nandgaon, 3–4 days is ideal. If you want to include Agra or Ayodhya, plan for 5–7 days." },
  { q: "Is Vrindavan safe for solo female travelers?", a: "Yes, Vrindavan is generally very safe for solo female travelers. The town has a strong spiritual and community atmosphere. However, standard precautions apply — avoid isolated areas at night, keep valuables secure, and stay in well-reviewed accommodations. Our guided tours add an extra layer of safety and comfort." },
  { q: "What local food should I try in Mathura Vrindavan?", a: "Mathura is famous for its pedas (milk sweets), lassi, and kachori-sabzi. Vrindavan's temple prasadam is a must-try. ISKCON's Govinda's restaurant serves excellent sattvic food. Street food near Banke Bihari Temple — especially the chaat and jalebis — is authentic and delicious." },
  { q: "Do you offer festival-specific tour packages?", a: "Yes, we offer special packages for Holi, Janmashtami, Radha Ashtami, and other major festivals. These packages include preferred darshan timing, festival event access, and accommodation booked well in advance (essential during peak festival periods)." },
  { q: "What is the Govardhan Parikrama and how long does it take?", a: "Govardhan Parikrama is a 21-kilometer circumambulation of Govardhan Hill, considered sacred as Lord Krishna lifted the hill to protect the people of Braj. Walking the full parikrama takes 5–7 hours. Many devotees complete it barefoot. We provide vehicle support for those who cannot walk the entire distance." },
  { q: "Are your tour packages suitable for elderly travelers?", a: "Yes, we specialize in planning comfortable tours for elderly travelers. We select accessible temples, provide comfortable vehicles with easy boarding, plan adequate rest periods, and maintain a relaxed pace. Our guides assist elderly visitors at temples with stairs or uneven surfaces." },
  { q: "What is the cancellation policy?", a: "Our cancellation policy depends on the package type and how far in advance you cancel. Generally, cancellations 7+ days before departure receive a full refund minus processing fees. Cancellations within 3–7 days receive a 50% refund. Less than 3 days advance notice is non-refundable. Festival packages may have stricter terms." },
  { q: "How do I reach Mathura from Delhi?", a: "Mathura is approximately 160 km from Delhi (3–4 hours by road). Options include: AC buses from ISBT Kashmere Gate, trains from New Delhi Railway Station (2–2.5 hours by Shatabdi/Express), or private cab. We also offer pickup from Delhi as part of our tour packages." },
];

const FAQPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>FAQ | Vrindavan Tour Packages Questions</title>
      <link rel="canonical" href="https://www.shreevrindavantourandpackages.com/faq" />
    </Helmet>
    <Navbar />
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Frequently Asked Questions" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Frequently Asked Questions</h1>
        <p className="text-primary-foreground/80 mt-3 text-lg">Everything you need to know about visiting Braj</p>
      </motion.div>
    </section>

    <section className="container mx-auto px-4 py-12 lg:py-20 max-w-3xl">
      <h1 className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">Frequently Asked Questions</h1>
      <p className="text-muted-foreground leading-relaxed pb-5">
        Find answers to common questions about traveling to Mathura and Vrindavan,
        including best time to visit, travel tips, accommodation, and temple visits.
        This section is designed to help you plan your trip easily and confidently.
      </p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-card-hover transition-shadow">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

    <Footer />
    <FloatingButtons />
  </div>
);

export default FAQPage;