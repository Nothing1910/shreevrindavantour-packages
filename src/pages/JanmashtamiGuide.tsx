import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import heroImg from "@/assets/hero-temple.webp";
import temple6 from "@/assets//galleryimages/temple6.webp";
import temple13 from "@/assets//galleryimages/temple13.webp";
import temple20 from "@/assets//galleryimages/temple20.webp";

const fade = { initial: { opacity: 0, y: 20 } as const, whileInView: { opacity: 1, y: 0 } as const, viewport: { once: true } as const };

const celebrations = [
  { img: temple20, name: "Krishna Janmabhoomi", desc: "The epicenter of Janmashtami. Midnight prayers at the exact birthplace of Lord Krishna draw lakhs of devotees. The prison cell is decorated, and special abhishek ceremonies continue through the night." },
  { img: temple6, name: "Banke Bihari Temple", desc: "The temple opens its curtains for extended darshan during Janmashtami. The deity is dressed in magnificent new clothes, and the hall resonates with ecstatic kirtans from evening until midnight." },
  { img: temple13, name: "Dwarkadhish Temple", desc: "A grand Dahi Handi celebration takes place here, recreating Krishna's playful butter-stealing pastimes. The temple is illuminated with thousands of lamps and decorated with elaborate flower arrangements." },
];

const JanmashtamiGuide = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Janmashtami in Vrindavan | Festival Guide</title>
      <link rel="canonical" href="https://www.shreevrindavantourandpackages.com/janmashtami-vrindavan" />
    </Helmet>
    <Navbar />
    <section className="relative h-[50vh] min-h-[340px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Janmashtami in Vrindavan" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      <motion.div {...fade} className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Janmashtami in Mathura & Vrindavan</h1>
        <p className="text-primary-foreground/80 mt-4 text-lg">Experience the divine birthday celebration of Lord Krishna at his birthplace</p>
      </motion.div>
    </section>

    <article className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl space-y-16">
      <motion.div {...fade}>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">The Most Sacred Night in Braj</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>Janmashtami — the celebration of Lord Krishna's birth — transforms Mathura and Vrindavan into a realm of pure devotion. Unlike Janmashtami celebrations elsewhere in India, witnessing it in Krishna's own birthplace carries a significance that words struggle to capture.</p>
          <p>The celebrations begin days before the actual date. Temples are scrubbed clean and decorated with marigolds and jasmine. Streets are illuminated with oil lamps and electric lights. The entire town hums with anticipation. As midnight approaches on the main day — the exact time of Krishna's birth — the energy reaches its crescendo. Thousands gather at Krishna Janmabhoomi, their voices rising in unison: "Nand Gher Anand Bhayo, Jai Kanhaiya Lal Ki!"</p>
          <p>The fast observed by devotees throughout the day breaks only after midnight, when the birth moment is celebrated with abhishek (ritual bathing of the deity), aarti, and distribution of prasadam. The atmosphere is electric — a mixture of devotion, joy, and a deeply felt sense of the divine presence.</p>
        </div>
      </motion.div>

      <motion.div {...fade}>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Temple Celebrations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {celebrations.map((c) => (
            <div key={c.name} className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
              <img src={c.img} alt={c.name} className="w-full h-40 object-cover" loading="lazy" decoding="async" width="400" height="300" />
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fade}>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Travel Tips for Janmashtami</h2>
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
          <ul className="space-y-4">
            {[
              "Book your accommodation at least 2–3 months in advance — Mathura and Vrindavan hotels fill up completely during Janmashtami week",
              "Arrive at least one day before Janmashtami to settle in and explore the pre-festival atmosphere",
              "Expect massive crowds at Krishna Janmabhoomi — our guided tours include strategic timing to maximize darshan comfort",
              "Wear comfortable cotton clothes and carry a light shawl for the cool midnight hours",
              "Stay hydrated and carry snacks — you may be fasting and temple queues can be long",
              "Keep your phone charged and carry a portable charger — you'll want to capture the midnight celebrations",
              "Traffic restrictions apply near major temples — use auto-rickshaws or walk for the last stretch",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div {...fade} className="text-center bg-gradient-cream rounded-2xl p-8 md:p-12 border border-border">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Janmashtami <span className="text-primary">Special Tour Packages</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Experience Janmashtami with expert guidance, comfortable stays, and priority temple access. Limited spots available — enquire early.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" className="inline-flex items-center justify-center bg-gradient-saffron text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:opacity-90 transition-opacity">Enquire Now</a>
          <a href="https://wa.me/919084397393?text=Hi!%20I%20want%20to%20book%20a%20Janmashtami%20tour%20package" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-heading font-semibold hover:bg-saffron-light transition-colors">WhatsApp Us</a>
        </div>
      </motion.div>
    </article>

    <Footer />
    <FloatingButtons />
  </div>
);

export default JanmashtamiGuide;