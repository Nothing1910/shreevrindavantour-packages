import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Luggage, Shirt, Sun, PartyPopper, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import heroImg from "@/assets/hero-temple.webp";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const };

const sections = [
  {
    icon: Luggage, title: "Travel Essentials",
    items: [
      "Valid government ID (Aadhaar / Passport) — required for hotel check-in and some temples",
      "Comfortable walking shoes — Vrindavan's lanes are narrow and you'll walk a lot",
      "A small backpack or sling bag for daily excursions",
      "Reusable water bottle — stay hydrated, especially during summer months",
      "Portable phone charger — long days of sightseeing drain your battery fast",
      "Cash in small denominations for temple donations, auto-rickshaws, and street food",
      "Prescribed medicines and a basic first-aid kit",
      "Copies of hotel booking confirmations and tour itinerary",
    ],
  },
  {
    icon: Shirt, title: "Temple Dress Code",
    items: [
      "Wear modest, traditional clothing — salwar kameez, sarees, or kurta pyjama are ideal",
      "Avoid shorts, sleeveless tops, and revealing clothing inside temple premises",
      "Carry a dupatta or scarf to cover your head (required in some temples)",
      "Remove shoes before entering any temple — carry a bag to keep them safe",
      "Leather belts and accessories may need to be removed at some temples",
      "Avoid black clothing at Banke Bihari Temple — it is considered inauspicious by locals",
      "Wear clean, light-colored clothes for the best spiritual experience",
    ],
  },
  {
    icon: Sun, title: "Weather Preparation",
    items: [
      "October to March (winter): Pack light woolens, a jacket, and comfortable layers",
      "April to June (summer): Carry cotton clothes, sunscreen (SPF 50+), sunglasses, and a hat",
      "July to September (monsoon): Pack a lightweight raincoat, umbrella, and quick-dry clothing",
      "Mornings can be cool even in summer — a light shawl is useful for early temple visits",
      "Evenings by the Yamuna can get breezy — carry a light wrap",
    ],
  },
  {
    icon: PartyPopper, title: "Festival Travel Tips",
    items: [
      "Book accommodation well in advance during Holi, Janmashtami, and Kartik Purnima",
      "Expect significantly larger crowds during festival weeks — patience is essential",
      "Wear clothes you don't mind getting colored during Holi celebrations",
      "Carry waterproof bags for your phone and valuables during Holi",
      "Temple timings change during festivals — confirm schedules with your tour guide",
      "Start your day early during peak seasons to avoid the heaviest crowds",
      "Lathmar Holi in Barsana is a unique experience — wear white for the best color effect",
    ],
  },
  {
    icon: HeartPulse, title: "Health & Safety Tips",
    items: [
      "Drink only bottled or purified water — avoid tap water",
      "Try local vegetarian food from reputable shops (Mathura's pedas are a must-try!)",
      "Carry hand sanitizer and wet wipes — hygiene facilities vary between temples",
      "If you have mobility issues, inform your tour operator in advance for accessible routes",
      "Keep your valuables secure, especially in crowded temple areas",
      "Stay with your group during festival celebrations and large gatherings",
      "Emergency numbers: Police (100), Ambulance (108), Tourist Helpline (1363)",
    ],
  },
];

const PackingTips = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Packing Tips for Vrindavan Trip | Travel Guide</title>
      <link rel="canonical" href="https://www.shreevrindavantourandpackages.com/packing-tips-mathura-vrindavan" />
    </Helmet>
    <Navbar />
    <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Packing Tips for Mathura Vrindavan" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      <motion.div {...fade} className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Packing Tips for Mathura Vrindavan</h1>
        <p className="text-primary-foreground/80 mt-3 text-lg">Everything you need to know before your Braj pilgrimage</p>
      </motion.div>
    </section>

    <section className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl space-y-10">
      {sections.map((s, i) => (
        <motion.div key={s.title} {...fade} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-saffron-light flex items-center justify-center"><s.icon className="text-primary" size={24} /></div>
            <h2 className="font-heading font-bold text-xl text-foreground">{s.title}</h2>
          </div>
          <ul className="space-y-3">
            {s.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>

    <Footer />
    <FloatingButtons />
  </div>
);

export default PackingTips;