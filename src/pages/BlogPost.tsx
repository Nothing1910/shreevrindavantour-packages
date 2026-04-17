import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Blog1 from "@/assets/blogimages/Blog1.webp";
import Blog2 from "@/assets/blogimages/Blog2.webp";
import Blog3 from "@/assets/blogimages/Blog3.webp";
import Blog4 from "@/assets/blogimages/Blog4.webp";
import Blog5 from "@/assets/blogimages/Blog5.webp";
import Blog6 from "@/assets/blogimages/Blog6.webp"
import { Helmet } from "react-helmet-async";

const blogData: Record<string, { title: string; img: string; content: string[] }> = {
  "best-time-to-visit-vrindavan": {
    title: "Best Time to Visit Vrindavan",
    img: Blog1,
    content: [
      "Vrindavan, the land of Lord Krishna's childhood pastimes, welcomes pilgrims throughout the year. However, the experience varies significantly depending on when you visit. Understanding the seasonal rhythms of this sacred town can help you plan a more fulfilling pilgrimage.",
      "**October to March** is widely considered the best time to visit Vrindavan. The weather is pleasantly cool, making it comfortable to walk through the narrow lanes, visit temples, and perform parikrama. Temperatures range from 8°C to 25°C, and the clear skies create a serene atmosphere perfect for darshan.",
      "**Holi (February-March)** transforms Vrindavan into a riot of colors. The Lathmar Holi of Barsana and the Phoolon ki Holi at Banke Bihari Temple are world-famous celebrations. If you want to experience the most vibrant festival in Braj, this is the time to visit.",
      "**Janmashtami (August-September)** marks Krishna's birthday and is the grandest celebration in Mathura and Vrindavan. Temples are decorated magnificently, midnight prayers fill the air with devotion, and the entire town pulsates with spiritual energy.",
      "**April to June** brings intense heat, with temperatures often exceeding 45°C. While temple visits are still possible during early morning and evening hours, the heat can be challenging for extended sightseeing.",
      "**July to September** is the monsoon season. While the rains bring lush greenery to the Yamuna floodplains, some areas may become waterlogged. However, the reduced crowds during monsoon offer a more intimate darshan experience.",
      "For first-time visitors, we recommend the **November to February** window for the most comfortable and spiritually enriching experience. Our Mathura Vrindavan tour packages are designed to make the most of each season's unique offerings.",
    ],
  },
  "top-temples-in-mathura": {
    title: "Top 10 Temples in Mathura Vrindavan",
    img: Blog2,
    content: [
      "Mathura and Vrindavan together house over 5,000 temples, each with its own history and spiritual significance. Here are the ten most revered temples that every pilgrim should visit.",
      "**1. Banke Bihari Temple, Vrindavan** — The most visited temple in Vrindavan, known for its unique curtain darshan. The deity of Krishna in the Tribhanga posture was discovered by Swami Haridas in Nidhivan. The temple atmosphere is electrifying, especially during Janmashtami.",
      "**2. Prem Mandir, Vrindavan** — This magnificent white marble temple, built by Jagadguru Kripalu Maharaj, is a modern architectural marvel. The evening light and fountain show is a must-see experience that draws thousands of visitors daily.",
      "**3. Krishna Janmabhoomi, Mathura** — The birthplace of Lord Krishna, this temple complex holds immense historical and spiritual significance. The prison cell where Krishna was born is preserved as a sacred shrine.",
      "**4. ISKCON Temple, Vrindavan** — The Krishna Balaram Mandir established by Srila Prabhupada is a center for spiritual learning. The beautiful deities, daily kirtans, and Govinda's restaurant make it a complete spiritual experience.",
      "**5. Dwarkadhish Temple, Mathura** — Built in 1814, this temple is dedicated to Lord Krishna as the King of Dwarka. The intricate Rajasthani-style architecture and the swing festival during Holi are highlights.",
      "**6. Radha Raman Temple, Vrindavan** — One of the oldest temples in Vrindavan, housing a self-manifested deity of Krishna. The temple follows strict Vaishnava traditions and offers an authentic spiritual experience.",
      "**7. Seva Kunj, Vrindavan** — This sacred grove is believed to be where Radha and Krishna performed their Raas Leela. The gardens close at sunset as per tradition, adding to its mystical aura.",
      "**8. Nidhivan, Vrindavan** — A dense sacred forest where it is believed Krishna and Radha still perform their divine pastimes every night. The twisted tulsi trees and the closed rooms at night create an atmosphere of deep mystery.",
      "**9. Govind Dev Temple, Vrindavan** — Originally a seven-story masterpiece, this temple was partially demolished during Mughal invasions. The remaining three stories still showcase extraordinary architectural grandeur.",
      "**10. Radha Vallabh Temple, Vrindavan** — Dedicated to Radha as the supreme deity, this temple is unique in Vrindavan. The emphasis on Radha's devotion makes it a distinctive spiritual experience.",
      "Our temple tour packages cover all these sacred sites with knowledgeable local guides who share the stories and traditions behind each temple.",
    ],
  },
  "braj-holi-guide": {
    title: "Guide to Barsana Holi — The Lathmar Holi Experience",
    img: Blog3,
    content: [
      "Holi in Braj is not just a festival — it is a weeks-long celebration that begins days before the rest of India lights its first bonfire. The most famous of all Braj Holi celebrations is the Lathmar Holi of Barsana.",
      "**What is Lathmar Holi?** In this unique tradition, women of Barsana (Radha's village) playfully beat men from Nandgaon (Krishna's village) with sticks (lathis) while the men try to shield themselves. It recreates the playful dynamic between Radha and Krishna.",
      "**When does it happen?** Lathmar Holi typically falls a week before the main Holi festival. The celebration in Barsana happens first, followed by a similar celebration in Nandgaon the next day.",
      "**The Radha Rani Temple** in Barsana becomes the epicenter of celebrations. Thousands gather to watch the colorful spectacle as women in traditional attire chase men through the temple courtyard.",
      "**Phoolon ki Holi at Banke Bihari** is another extraordinary event where flower petals rain down in the temple during a special Holi celebration. The entire temple turns into a fragrant, colorful paradise.",
      "**Practical Tips for Visiting:** Wear clothes you don't mind getting stained permanently. Natural colors are used, but they can be intense. Protect your camera and phone with waterproof covers. Stay hydrated and carry snacks. Book accommodation well in advance as Braj gets extremely crowded during Holi.",
      "Our special Holi tour packages include guided visits to Barsana, Nandgaon, and Vrindavan with comfortable transportation and pre-booked accommodations, ensuring you experience the magic without the stress of logistics.",
    ],
  },
  "vrindavan-travel-guide": {
    title: "Complete Vrindavan Travel Guide",
    img: Blog4,
    content: [
      "Vrindavan is not just a destination — it is a spiritual experience that transforms every visitor. This comprehensive guide covers everything you need to know before embarking on your Braj pilgrimage.",
      "**Getting There:** Vrindavan is well-connected by road from Delhi (160 km), Agra (70 km), and Jaipur (280 km). The nearest railway station is Mathura Junction, about 12 km away. The nearest airport is Delhi's Indira Gandhi International Airport.",
      "**Where to Stay:** Vrindavan offers accommodations ranging from simple ashram stays (₹500-1000/night) to comfortable hotels (₹1500-5000/night). Areas near Prem Mandir and ISKCON Temple offer the most convenient locations for temple visits.",
      "**What to Wear:** Modest clothing is recommended for all temple visits. Women should carry a dupatta or shawl. Remove footwear before entering temples. Leather items may need to be left outside certain temples.",
      "**Food:** Vrindavan is a strictly vegetarian town. The food is delicious — from street-side kachoris and lassi to the famous ISKCON Govinda's restaurant. Onion and garlic are avoided in most temple prasad.",
      "**Temple Etiquette:** Photography is prohibited in most temples, especially Banke Bihari Temple. Mobile phones should be on silent mode. Follow the queue system during peak darshan hours. Respect the temple priests and traditions.",
      "**Must-Carry Items:** Comfortable walking shoes, water bottle, sunscreen, modest clothing, small cash for donations, a bag for temple offerings, and any prescribed medicines. Our packing tips guide covers everything in detail.",
      "**Safety:** Vrindavan is generally very safe for all travelers including solo women. The spiritual atmosphere and helpful locals make it a welcoming destination. However, be mindful of your belongings in crowded temple areas.",
      "**Duration:** While a day trip is possible, we recommend at least 2-3 days to truly experience the spiritual depth of Vrindavan. This allows time for morning and evening aartis, temple visits, and quiet reflection by the Yamuna.",
      "Our Mathura Vrindavan tour packages handle all logistics so you can focus entirely on your spiritual journey.",
    ],
  },
  "history-banke-bihari": {
    title: "History of Banke Bihari Temple",
    img: Blog5,
    content: [
      "Banke Bihari Temple stands as the spiritual heart of Vrindavan, drawing millions of devotees every year. Its history stretches back over five centuries, intertwined with divine legend and unwavering devotion.",
      "**The Discovery by Swami Haridas:** In the 16th century, Swami Haridas, a great devotee and musician, was performing devotional music in Nidhivan when Radha and Krishna appeared before him in their divine form. They merged into a single deity — the Banke Bihari we see today.",
      "**The Name 'Banke Bihari':** 'Banke' means 'bent in three places' (the Tribhanga posture), and 'Bihari' means 'one who enjoys.' The deity stands in this graceful three-bend pose, playing an invisible flute, embodying divine playfulness.",
      "**The Unique Curtain Darshan:** Unlike any other temple in India, the curtain (jhaki) before the deity is opened and closed every few seconds. Legend says that the gaze of the deity is so powerful that a continuous view could cause devotees to lose consciousness in divine ecstasy.",
      "**The Temple Through History:** The current temple structure was built in 1864 by Seth Jugal Kishore Birla's family. Before this, the deity was worshipped in Nidhivan. The temple's architecture follows a simple, intimate design that brings devotees close to the deity.",
      "**Festival Celebrations:** Janmashtami at Banke Bihari is the grandest celebration in Vrindavan. The temple is decorated with flowers and lights, and the midnight celebration draws lakhs of devotees. The Phoolon ki Holi (flower Holi) during the Holi season is another spectacular event.",
      "**Visiting Today:** The temple opens for morning darshan around 7:45 AM (varies by season) and evening darshan at 5:30 PM. The narrow lanes leading to the temple are lined with shops selling religious items and prasad. Our guided temple tours ensure you reach the temple at the best time for darshan.",
    ],
  },
  "janmashtami-guide": {
    title: "Janmashtami in Mathura: A Complete Guide",
    img: Blog6,
    content: [
      "Janmashtami, the celebration of Lord Krishna's birth, reaches its most magnificent expression in Mathura — the very city where Krishna was born over 5,000 years ago. Experiencing Janmashtami in Mathura is a once-in-a-lifetime spiritual event.",
      "**The Midnight Celebration:** Krishna was born at midnight, and this is when the celebrations reach their peak. At Krishna Janmabhoomi temple, thousands gather for the midnight aarti. The atmosphere is electric with devotion, music, and collective chanting.",
      "**Temple Decorations:** Every temple in Mathura and Vrindavan is decorated splendidly. From flower arrangements to light installations, the entire twin cities transform into a divine spectacle. Banke Bihari, Prem Mandir, and ISKCON temples have particularly grand celebrations.",
      "**Dahi Handi:** The day after Janmashtami features the famous Dahi Handi celebrations, recreating young Krishna's butter-stealing adventures. Teams form human pyramids to break clay pots hung at heights, accompanied by music and cheering crowds.",
      "**Planning Your Visit:** Book your accommodation and tour package at least 2-3 months in advance. Janmashtami attracts millions of visitors, and last-minute arrangements are nearly impossible. Our festival special tour packages include pre-booked hotels, guided temple visits, and comfortable transportation.",
      "**What to Expect:** Expect large crowds, extended temple hours, and heightened security. Most temples offer special darshan arrangements during Janmashtami. The emotional and spiritual intensity of celebrating Krishna's birthday at his birthplace is truly unparalleled.",
      "Our Janmashtami special packages are designed to give you the best possible festival experience with VIP darshan arrangements, comfortable stays, and knowledgeable guides who understand the significance of every ritual.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Blog Details | Vrindavan Travel Guide</title>
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">Post Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold mt-4 inline-block hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl mx-auto">{post.title}</h1>
        </motion.div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/blog" className="text-primary font-semibold text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        <div className="space-y-5">
          {post.content.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>'),
              }}
            />
          ))}
        </div>

        <div className="mt-12 bg-card rounded-2xl border border-border p-6 text-center">
          <h3 className="font-heading font-bold text-foreground text-lg">Ready to Plan Your Braj Pilgrimage?</h3>
          <p className="text-muted-foreground text-sm mt-2">Let our local experts create the perfect spiritual journey for you.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <Link to="/#packages" className="bg-gradient-saffron text-primary-foreground px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity">View Packages</Link>
            <Link to="/#contact" className="border-2 border-primary text-primary px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-saffron-light transition-colors">Get Free Quote</Link>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPost;