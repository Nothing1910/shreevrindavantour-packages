import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import heroImg from "@/assets/hero-temple.webp";
import logoImg from "@/assets/Logo.webp";
import temple1 from "@/assets/galleryimages/temple1.webp";
import temple6 from "@/assets/galleryimages/temple6.webp";
import temple8 from "@/assets/galleryimages/temple8.webp";
import temple10 from "@/assets/galleryimages/temple10.webp";
import temple19 from "@/assets/galleryimages/temple19.webp";
import temple20 from "@/assets/galleryimages/temple20.webp";
import temple21 from "@/assets/galleryimages/temple21.webp";
import temple22 from "@/assets/galleryimages/temple22.webp";
import temple23 from "@/assets/galleryimages/temple23.webp";
import temple24 from "@/assets/galleryimages/temple24.webp";
import temple25 from "@/assets/galleryimages/temple25.webp";
import temple26 from "@/assets/galleryimages/temple26.webp";

const temples = [
  {
    img: temple6, name: "Banke Bihari Temple",
    short: "The heart of Vrindavan's devotion with its unique curtain darshan tradition.",
    bestTime: "Morning 7:45 AM – 12:00 PM, Janmashtami for grand celebrations",
    description: "Banke Bihari Temple is one of the most revered temples in Vrindavan. The deity of Lord Krishna in his 'Tribhanga' (three-bend) posture was discovered by Swami Haridas in Nidhivan. The temple follows a unique curtain darshan where the curtain is periodically opened and closed, giving devotees brief but intense glimpses of the deity. The atmosphere inside is electric with devotion, especially during festivals.",
    highlights: ["Unique curtain (jhaki) darshan", "Janmashtami & Holi celebrations", "Ancient spiritual atmosphere", "Heart of Vrindavan"],
  },
  {
    img: temple19, name: "Prem Mandir",
    short: "A stunning white marble temple dedicated to Radha Krishna with an evening light show.",
    bestTime: "Evening Aarti at 7:00 PM for the spectacular fountain & light show",
    description: "Prem Mandir is a magnificent white marble temple built by Jagadguru Shri Kripalu Maharaj. Dedicated to Radha Krishna and Sita Ram, it features intricate Italian marble carvings depicting divine pastimes. The temple comes alive in the evening with a mesmerizing musical fountain and light show that draws visitors from across the world. The 54-acre complex includes beautiful gardens and meditation spaces.",
    highlights: ["Evening light & fountain show", "Italian marble carvings", "54-acre spiritual complex", "Beautiful gardens"],
  },
  {
    img: temple8, name: "ISKCON Temple",
    short: "Krishna Balaram Mandir – a global center for Bhakti yoga and spiritual learning.",
    bestTime: "Morning & evening aarti sessions. Year-round",
    description: "ISKCON Vrindavan, also known as Krishna Balaram Mandir, was established by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the founder of the International Society for Krishna Consciousness. The temple serves as a center for spiritual learning, Bhakti yoga practice, and the study of Bhagavad Gita. The temple houses beautiful deities and Srila Prabhupada's samadhi.",
    highlights: ["Krishna Balaram deities", "Srila Prabhupada's samadhi", "Govinda's restaurant", "Spiritual lectures & kirtans"],
  },
  {
    img: temple20, name: "Radha Raman Temple",
    short: "One of the most sacred temples in Vrindavan, known for its self-manifested deity of Lord Krishna.",
    bestTime: "Morning darshan, especially during Kartik month",
    description: "Radha Raman Temple houses a self-manifested (swayam-prakash) deity of Lord Krishna that appeared from a Shaligram shila for the great saint Gopal Bhatta Goswami in the 16th century. The temple follows ancient Gaudiya Vaishnav traditions and has very beautiful darshan rituals. The deity is unique because it has a flute carved naturally in the stone. The temple maintains strict Vaishnava worship traditions and is considered one of the most important temples of Vrindavan.",
    highlights: ["Self-manifested deity", "500-year-old traditions", "Strict Vaishnava worship", "Gopal Bhatta Goswami's temple"],
  },
  {
    img: temple10, name: "Dwarkadhish Temple",
    short: "One of the most important temples in Mathura known for its intricate architecture.",
    bestTime: "Morning darshan, festivals like Janmashtami and Holi",
    description: "Dwarkadhish Temple, also known as the Jagat Mandir, is one of the most prominent temples in Mathura. Built in 1814 by Seth Gokul Das Parikh, the temple showcases beautiful Rajasthani-style architecture with intricate carvings and paintings. The temple is dedicated to Lord Krishna as the King of Dwarka and comes alive during the grand Holi and Janmashtami celebrations.",
    highlights: ["Rajasthani architectural style", "Intricate paintings & carvings", "Grand festival celebrations", "Historic significance"],
  },
  {
    img: temple20, name: "Sri Krishna Janmabhoomi Temple",
    short: "The sacred birthplace of Lord Krishna — one of Hinduism's holiest sites.",
    bestTime: "Early morning for peaceful darshan, Janmashtami for grand festivities",
    description: "Shri Krishna Janmabhoomi is the most sacred site in Mathura, believed to be the exact place where Lord Krishna was born in a prison cell to Devaki and Vasudeva. The temple complex houses the underground prison cell (garbha griha) and multiple shrines. Despite being destroyed and rebuilt several times throughout history, the devotion of pilgrims to this site has never diminished. It remains the spiritual anchor of Mathura.",
    highlights: ["Sacred birth chamber", "Underground prison cell", "Multiple shrines", "Janmashtami epicenter"],
  },
  {
    img: temple21, name: "Seva Kunj",
    short: "A sacred grove where Lord Krishna is believed to have performed Raas Leela with Radha and the Gopis.",
    bestTime: "Morning hours, closed after sunset",
    description: "Seva Kunj is a sacred grove in Vrindavan where Lord Krishna is believed to have performed the divine Raas Leela with Radha and the Gopis. The temple area is filled with deep spiritual energy. The trees here are said to transform into Gopis at night to participate in Krishna's divine dance. No one is allowed to remain inside after sunset as it is believed that Krishna and Radha still perform their Raas Leela here every night.",
    highlights: ["Divine Raas Leela site", "Sacred grove with ancient trees", "Deep spiritual energy", "Closed after sunset"],
  },
  {
    img: temple22, name: "Nidhivan",
    short: "A mysterious and spiritually significant place where devotees believe Lord Krishna performs Raas Leela every night.",
    bestTime: "Morning darshan only, entry restricted after sunset",
    description: "Nidhivan is a mysterious and spiritually significant place in Vrindavan where devotees believe Lord Krishna performs Raas Leela every night. The trees here grow in pairs, symbolizing the Gopis. Entry is strictly restricted after sunset. Legend says that anyone who stays inside after dark loses their eyesight or mental balance. The place carries a deeply mystical and powerful spiritual energy that is felt by every visitor.",
    highlights: ["Mysterious spiritual energy", "Trees grow in pairs", "Entry restricted after sunset", "Ancient Raas Leela site"],
  },
  {
    img: temple23, name: "Rangaji Temple",
    short: "One of the largest temples in Vrindavan built in South Indian architectural style.",
    bestTime: "Morning darshan, Brahmotsavam festival (March–April)",
    description: "Rangaji Temple is one of the largest temples in Vrindavan, built in the South Indian Dravidian architectural style. The temple is dedicated to Lord Ranganatha, a form of Lord Vishnu. It features a massive gopuram (tower gate), a golden dhwaja stambh (flag pole), and beautiful temple tanks. The annual Brahmotsavam festival here attracts thousands of devotees from across the country.",
    highlights: ["South Indian Dravidian architecture", "Massive gopuram tower", "Golden dhwaja stambh", "Annual Brahmotsavam festival"],
  },
  {
    img: temple24, name: "Radha Vallabh Temple",
    short: "An ancient temple known for its unique worship tradition where Radha is worshipped along with Krishna.",
    bestTime: "Morning and evening darshan",
    description: "Radha Vallabh Temple is an ancient and revered temple in Vrindavan known for its unique worship tradition. In this temple, Radha is given primary importance and is worshipped alongside Krishna. Founded by Shri Hit Harivansh Mahaprabhu in the 16th century, the temple follows the Radha Vallabh Sampradaya tradition. The original deity was hidden during Mughal invasions and later reinstalled. The temple atmosphere reflects deep devotion to the divine love of Radha and Krishna.",
    highlights: ["Radha given primary importance", "Radha Vallabh Sampradaya", "16th century heritage", "Unique worship tradition"],
  },
  {
    img: temple25, name: "Gokul Nath Temple",
    short: "Located in Gokul and associated with Lord Krishna's childhood pastimes.",
    bestTime: "Morning darshan, Janmashtami celebrations",
    description: "Gokul Nath Temple is located in the ancient town of Gokul, closely associated with Lord Krishna's childhood. It is believed that after his birth in the prison of Mathura, Krishna was secretly brought to Gokul where he was raised by Nand Baba and Yashoda. The temple celebrates the playful and loving childhood pastimes of Lord Krishna and is an important stop for pilgrims visiting the Braj region.",
    highlights: ["Krishna's childhood town", "Nand Baba's Gokul", "Important Braj pilgrimage stop", "Janmashtami celebrations"],
  },
  {
    img: temple26, name: "Madan Mohan Temple",
    short: "One of the oldest temples in Vrindavan located on a hill near the Yamuna River.",
    bestTime: "Early morning for peaceful darshan and Yamuna views",
    description: "Madan Mohan Temple is one of the oldest and most historically significant temples in Vrindavan. Located on top of Dvadashaditya Tila near the Yamuna River, the temple was established by Advaita Acharya and later rebuilt by Kapur Ram Das of Multan. The original deity was moved to Karauli in Rajasthan during Aurangzeb's rule. The temple offers stunning views of the Yamuna and surrounding Vrindavan landscape.",
    highlights: ["One of Vrindavan's oldest temples", "Hilltop location near Yamuna", "Historical significance", "Stunning river views"],
  },
  {
    img: temple1, name: "Vishram Ghat",
    short: "A sacred ghat where Lord Krishna is believed to have rested after defeating Kansa.",
    bestTime: "Evening aarti, early morning for holy dip",
    description: "Vishram Ghat is the most sacred ghat on the banks of the Yamuna River in Mathura. It is believed that Lord Krishna rested here after slaying the tyrannical King Kansa. The word 'Vishram' means rest. The ghat is the starting point of the Mathura Parikrama and hosts beautiful evening aarti ceremonies. Pilgrims come here to take a holy dip in the Yamuna and offer prayers to Lord Krishna.",
    highlights: ["Krishna rested here after defeating Kansa", "Starting point of Mathura Parikrama", "Evening Yamuna aarti", "Sacred holy dip site"],
  },
];

interface Temple { img: string; name: string; short: string; bestTime: string; description: string; highlights: string[] }

const TempleModal = ({ temple, onClose }: { temple: Temple; onClose: () => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={onClose}>
    <Helmet>
      <title>Top Temples in Mathura Vrindavan | Complete Guide</title>
      <link rel="canonical" href="https://www.shreevrindavantourandpackages.com/temples-mathura-vrindavan" />
    </Helmet>
    <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      <div className="relative">
        <img src={temple.img} alt={temple.name} className="w-full h-64 object-cover rounded-t-2xl" loading="lazy" decoding="async" width="800" height="400" />
        <button onClick={onClose} className="absolute top-3 right-3 bg-card/80 backdrop-blur rounded-full p-2"><X size={20} /></button>
      </div>
      <div className="p-6">
        <h2 className="font-heading font-bold text-2xl text-foreground">{temple.name}</h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">{temple.description}</p>
        <h3 className="font-heading font-semibold text-lg text-foreground mt-5 mb-2">Key Highlights</h3>
        <ul className="space-y-1.5">
          {temple.highlights.map((h) => <li key={h} className="text-sm text-muted-foreground flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{h}</li>)}
        </ul>
        <div className="bg-saffron-light rounded-xl p-4 mt-5">
          <p className="text-sm font-semibold text-foreground">Best Time to Visit</p>
          <p className="text-sm text-muted-foreground mt-1">{temple.bestTime}</p>
        </div>
        <a href="/#contact" className="block text-center mt-6 py-3 rounded-xl bg-gradient-saffron text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Plan Your Visit</a>
      </div>
    </motion.div>
  </motion.div>
);

const TemplesMathuraVrindavan = () => {
  const [selected, setSelected] = useState<Temple | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Temples of Mathura Vrindavan" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Temples of Mathura & Vrindavan</h1>
          <p className="text-primary-foreground/80 mt-3 text-lg">Discover the sacred temples of Lord Krishna's divine land</p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="bg-saffron-light border border-primary/20 rounded-xl p-5 mb-10 text-center">
          <p className="text-foreground/80 text-sm md:text-base">
            <img
              src={logoImg}
              alt="Logo"
              className="inline w-5 h-5 align-text-bottom mr-1"
              width="20"
              height="20"
              loading="lazy"
              decoding="async"
            />
            Planning your Braj pilgrimage? Read our{" "}
            <a href="/mathura-vrindavan-tour-packages" className="text-primary font-semibold hover:underline">
              Mathura Vrindavan Travel Guide
            </a>{" "}
            to understand the spiritual significance of Mathura and Vrindavan before your visit.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {temples.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" decoding="async" width="400" height="300" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.short}</p>
                <p className="text-xs text-primary mt-2 font-medium">🕐 {t.bestTime}</p>
                <button onClick={() => setSelected(t)} className="w-full mt-4 py-2.5 rounded-lg bg-gradient-saffron text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Know More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>{selected && <TempleModal temple={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TemplesMathuraVrindavan;
