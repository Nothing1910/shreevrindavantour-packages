import { motion } from "framer-motion";
import { MapPin, Clock, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import main from "@/assets/toursfrom/main.webp";
import delhi from "@/assets/toursfrom/delhi.webp";
import jaipur from "@/assets/toursfrom/jaipur.webp";
import agra from "@/assets/toursfrom/agra.webp";
import mumbai from "@/assets/toursfrom/mumbai.webp";

const cities = [
  {
    id: "delhi", img: delhi, city: "Delhi", distance: "160 km", duration: "3–4 hours by road",
    packages: [
      { title: "Delhi → Mathura Vrindavan (1 Day)", price: "₹2,999/person", highlights: ["AC transport", "Krishna Janmabhoomi", "Banke Bihari", "Prem Mandir", "Evening Aarti"] },
      { title: "Delhi → Mathura Vrindavan (2 Days)", price: "₹5,499/person", highlights: ["Hotel stay", "All major temples", "Govardhan Parikrama", "Yamuna boat ride"] },
      { title: "Delhi → Braj Yatra (3 Days)", price: "₹7,999/person", highlights: ["Mathura + Vrindavan + Govardhan + Barsana", "Premium hotel", "All meals included"] },
    ],
  },
  {
    id: "jaipur", img: jaipur, city: "Jaipur", distance: "240 km", duration: "4–5 hours by road",
    packages: [
      { title: "Jaipur → Mathura Vrindavan (2 Days)", price: "₹5,999/person", highlights: ["AC transport", "Hotel stay", "All temple darshan", "Guide included"] },
      { title: "Jaipur → Braj + Agra (3 Days)", price: "₹8,999/person", highlights: ["Mathura Vrindavan + Taj Mahal", "Premium stay", "All meals"] },
    ],
  },
  {
    id: "agra", img: agra, city: "Agra", distance: "60 km", duration: "1–1.5 hours by road",
    packages: [
      { title: "Agra → Mathura Vrindavan (1 Day)", price: "₹1,999/person", highlights: ["Quick getaway", "Major temple visits", "Evening Aarti", "AC transport"] },
      { title: "Agra → Braj Darshan (2 Days)", price: "₹4,499/person", highlights: ["Comprehensive Braj tour", "Hotel included", "Govardhan visit"] },
    ],
  },
  {
    id: "mumbai", img: mumbai, city: "Mumbai", distance: "1,400 km", duration: "2-hour flight + 3-hour drive",
    packages: [
      { title: "Mumbai → Braj Yatra (4 Days)", price: "₹12,999/person", highlights: ["Flight coordination", "Premium hotel", "Complete Braj circuit", "All meals + transport"] },
      { title: "Mumbai → Mathura + Agra (5 Days)", price: "₹15,999/person", highlights: ["Braj + Taj Mahal + Fatehpur Sikri", "Luxury stay", "Personal guide"] },
    ],
  },
];

const PackagesFrom = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <img src={main} alt="Tour Packages from Major Cities" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Tour Packages From Your City</h1>
        <p className="text-primary-foreground/80 mt-3 text-lg">Customized Braj pilgrimage tours from Delhi, Jaipur, Agra & Mumbai</p>
      </motion.div>
    </section>

    <section className="container mx-auto px-4 py-12 lg:py-20 space-y-16">
      {cities.map((city, ci) => (
        <motion.div key={city.id} id={city.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }} className="scroll-mt-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              <img src={city.img} alt={`Packages from ${city.city}`} className="w-full h-48 object-cover" loading="lazy" decoding="async" width="800" height="400" />
              <div className="p-5">
                <h2 className="font-heading font-bold text-xl text-foreground">Packages from {city.city}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2"><MapPin size={14} className="text-primary" />{city.distance} from Mathura</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1"><Clock size={14} className="text-primary" />{city.duration}</div>
              </div>
            </div>
            <div className="space-y-4">
              {city.packages.map((pkg) => (
                <div key={pkg.title} className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{pkg.title}</h3>
                      <p className="text-primary font-bold mt-1 flex items-center gap-1"><IndianRupee size={14} />{pkg.price}</p>
                    </div>
                    <a href={`https://wa.me/918923427393?text=${encodeURIComponent(`Hi! I want to enquire about ${pkg.title}`)}`} target="_blank" rel="noopener noreferrer" className="shrink-0 px-6 py-2.5 rounded-lg bg-gradient-saffron text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Enquire Now</a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {pkg.highlights.map((h) => <span key={h} className="text-xs bg-saffron-light text-primary px-2.5 py-1 rounded-md font-medium">{h}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>

    <Footer />
    <FloatingButtons />
  </div>
);

export default PackagesFrom;