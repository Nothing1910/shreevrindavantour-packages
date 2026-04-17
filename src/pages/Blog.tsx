import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Blog1 from "@/assets/blogimages/Blog1.webp"
import Blog2 from "@/assets/blogimages/Blog2.webp"
import Blog3 from "@/assets/blogimages/Blog3.webp"
import Blog4 from "@/assets/blogimages/Blog4.webp"
import Blog5 from "@/assets/blogimages/Blog5.webp"
import Blog6 from "@/assets/blogimages/Blog6.webp"
import Blog7 from "@/assets/blogimages/Blog7.webp"

const posts = [
  {
    img: Blog1, title: "Best Time to Visit Vrindavan",
    desc: "Discover the ideal months for a peaceful pilgrimage to Vrindavan, from cool winters to vibrant festival seasons. Plan your Braj journey with confidence.",
    slug: "/blog/best-time-to-visit-vrindavan",
  },
  {
    img: Blog2, title: "Top 10 Temples in Mathura Vrindavan",
    desc: "A curated guide to the most sacred and beautiful temples across Mathura and Vrindavan — from Banke Bihari to Prem Mandir and beyond.",
    slug: "/blog/top-temples-in-mathura",
  },
  {
    img: Blog3, title: "Guide to Barsana Holi",
    desc: "Experience the world-famous Lathmar Holi of Barsana — learn about the traditions, what to wear, and how to plan your visit during this colorful festival.",
    slug: "/blog/braj-holi-guide",
  },
  {
    img: Blog4, title: "History of Banke Bihari Temple",
    desc: "Explore the fascinating 500-year history of Vrindavan's most beloved temple, its unique curtain darshan tradition, and the story of Swami Haridas.",
    slug: "/blog/history-banke-bihari",
  },
  {
    img: Blog5, title: "Complete Vrindavan Travel Guide",
    desc: "Everything you need to know before visiting Vrindavan — from packing essentials and temple etiquette to food recommendations and transportation tips.",
    slug: "/blog/vrindavan-travel-guide",
  },
  {
    img: Blog6, title: "Janmashtami in Mathura: A Complete Guide",
    desc: "How is Lord Krishna's birthday celebrated in his birthplace? Discover the midnight prayers, grand processions, and spiritual atmosphere of Janmashtami.",
    slug: "/blog/janmashtami-guide",
  },
  {
    img: Blog7, title: "Complete Mathura Vrindavan Travel Guide",
    desc: "A detailed guide covering temples, sightseeing, spiritual history, and travel tips for Braj.",
    slug: "/mathura-vrindavan-tour-packages",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      <img src={Blog1} alt="Blog" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Blog & Travel Guides</h1>
        <p className="text-primary-foreground/80 mt-3 text-lg">Stories, tips, and insights from the sacred land of Braj</p>
      </motion.div>
    </section>

    <section className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.div key={post.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" decoding="async" width="400" height="300" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-foreground text-lg leading-snug">{post.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">{post.desc}</p>
              <Link to={post.slug} className="inline-block mt-4 text-primary font-semibold text-sm hover:underline">Read More →</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
    <FloatingButtons />
  </div>
);

export default Blog;