import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Heart, Building, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import heroImg from "@/assets/hero-temple.webp";
import Desti1 from "@/assets/destinationimages/Desti1.webp";
import Desti2 from "@/assets/destinationimages/Desti2.webp";
import Desti3 from "@/assets/destinationimages/Desti3.webp";

const fade = { initial: { opacity: 0, y: 20 } as const, whileInView: { opacity: 1, y: 0 } as const, viewport: { once: true } as const };

const venues = [
  { img: Desti1, name: "Prem Mandir Garden Venue", location: "Near Prem Mandir, Vrindavan", capacity: "200–500 guests", desc: "A stunning outdoor venue with views of the illuminated Prem Mandir. Perfect for evening ceremonies with the temple's light show as a divine backdrop." },
  { img: Desti2, name: "Yamuna Riverside Resort", location: "Yamuna Bank, Vrindavan", capacity: "100–300 guests", desc: "A serene riverside location offering sunset ceremonies by the sacred Yamuna. Traditional boat decoration and floating diya arrangements available." },
  { img: Desti3, name: "Braj Heritage Banquet", location: "Mathura, Near Vishram Ghat", capacity: "150–400 guests", desc: "A heritage-themed banquet hall combining Braj's traditional architecture with modern amenities. Ideal for grand traditional weddings with a spiritual touch." },
];

const packages = [
  { icon: Heart, title: "Temple Wedding Ceremony", desc: "Traditional Vedic wedding ceremony at a sacred temple in Vrindavan with experienced pandits, complete with all rituals, mantras, and sacred fire ceremony.", features: ["Pandit & ritual arrangements", "Mandap decoration", "Sacred fire (havan)", "Traditional music"] },
  { icon: Building, title: "Full Wedding Package", desc: "Complete wedding planning including venue, decoration, catering, accommodation, and coordination — all handled by our experienced team.", features: ["Venue booking", "Catering (pure vegetarian)", "Floral decoration", "Photography & videography"] },
  { icon: Users, title: "Guest Accommodation", desc: "Comfortable stay arrangements for all guests near the wedding venue with transport, meals, and Braj sightseeing options.", features: ["Hotel room blocks", "Airport/station pickup", "Group meals", "Optional Braj tour for guests"] },
];

const DestinationWedding = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Destination Wedding in Vrindavan | Plan Your Wedding</title>
      <link rel="canonical" href="https://www.shreevrindavantourandpackages.com/destination-wedding" />
    </Helmet>
    <Navbar />
    <section className="relative h-[50vh] min-h-[340px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Destination Wedding in Vrindavan" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      <motion.div {...fade} className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Destination Wedding in Vrindavan</h1>
        <p className="text-primary-foreground/80 mt-4 text-lg">Begin your sacred journey of marriage in the land of divine love</p>
      </motion.div>
    </section>

    <section className="container mx-auto px-4 py-12 lg:py-20 space-y-20">
      <motion.div {...fade} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">A Wedding Blessed by Radha Krishna</h2>
        <p className="text-muted-foreground leading-relaxed">Vrindavan — the land of eternal love between Radha and Krishna — is the most auspicious place to begin your married life. A wedding here is not just an event; it is a spiritual experience that blesses your union with divine grace. Our team handles every detail so you can focus on what matters most: celebrating love.</p>
      </motion.div>

      <div>
        <motion.h2 {...fade} className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Wedding <span className="text-primary">Venues</span></motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {venues.map((v, i) => (
            <motion.div key={v.name} {...fade} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
              <img src={v.img} alt={v.name} className="w-full h-48 object-cover" loading="lazy" decoding="async" width="600" height="400" />
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground text-lg">{v.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1"><MapPin size={14} className="text-primary" />{v.location}</p>
                <p className="text-sm text-primary font-medium flex items-center gap-1.5 mt-1"><Users size={14} />{v.capacity}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
                <a href="/#contact" className="block text-center mt-4 py-2.5 rounded-lg bg-gradient-saffron text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Enquire Now</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <motion.h2 {...fade} className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Wedding <span className="text-primary">Packages</span></motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div key={p.title} {...fade} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-saffron-light flex items-center justify-center">
                <p.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <ul className="text-left space-y-2">
                {p.features.map((f) => <li key={f} className="text-sm text-muted-foreground flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div {...fade} className="text-center bg-gradient-cream rounded-2xl p-8 md:p-12 border border-border">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Plan Your <span className="text-primary">Dream Wedding</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">Share your vision with us and let our team create a wedding experience that blends sacred traditions with modern elegance.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" className="inline-flex items-center justify-center bg-gradient-saffron text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:opacity-90 transition-opacity">Get a Free Quote</a>
          <a href="https://wa.me/918923427393?text=Hi!%20I%20want%20to%20plan%20a%20destination%20wedding%20in%20Vrindavan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-heading font-semibold hover:bg-saffron-light transition-colors">WhatsApp Us</a>
        </div>
      </motion.div>
    </section>

    <Footer />
    <FloatingButtons />
  </div>
);

export default DestinationWedding;