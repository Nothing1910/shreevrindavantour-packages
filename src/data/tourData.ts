import temple1 from "@/assets/tourimages/temple-1.webp";
import temple2 from "@/assets/tourimages/temple-2.webp";
import temple3 from "@/assets/tourimages/temple-3.webp";
import temple4 from "@/assets/tourimages/temple-4.webp";
import temple5 from "@/assets/tourimages/temple-5.webp";
import temple6 from "@/assets/tourimages/temple-6.webp";
import temple7 from "@/assets/tourimages/temple-7.webp";
import temple8 from "@/assets/tourimages/temple-8.webp";

import dest1 from "@/assets/destinationimages/destination1.webp";
import dest2 from "@/assets/destinationimages/destination2.webp";
import dest3 from "@/assets/destinationimages/destination3.webp";
import dest4 from "@/assets/destinationimages/destination4.webp";
import dest5 from "@/assets/destinationimages/destination5.webp";
import dest6 from "@/assets/destinationimages/destination6.webp";
import dest7 from "@/assets/destinationimages/destination7.webp";
import dest8 from "@/assets/destinationimages/destination8.webp";

export interface TourPackage {
  img: string;
  duration: string;
  location: string;
  title: string;
  overview: string;
  highlights: string[];
  itinerary: { day: string; description: string }[];
  tips: string[];
  rating: number;
  reviews: number;
}

export const packages: TourPackage[] = [
  {
    img: temple1,
    duration: "1 Day",
    location: "Gokul Mathura Vrindavan",
    title: "Gokul Mathura Vrindavan Tour",
    overview: "This tour explores the sacred towns connected with the life of Lord Krishna, including his birthplace and childhood locations.",
    highlights: ["Nand Bhavan", "Raman Reti", "Chaurasi Khamba Temple", "Shri Krishna Janmabhoomi", "Dwarkadhish Temple", "Vishram Ghat", "Gita Mandir", "Banke Bihari Temple", "Prem Mandir", "ISKCON Temple", "Seva Kunj", "Nidhivan", "Radha Raman Temple"],
    itinerary: [
      { day: "Gokul Visit", description: "Visit Nand Bhavan where Lord Krishna spent his childhood. Explore Raman Reti where Krishna used to play. Visit Chaurasi Khamba Temple known for its 84 pillars." },
      { day: "Mathura Visit", description: "Visit Shri Krishna Janmabhoomi Temple – the birthplace of Lord Krishna. Visit Dwarkadhish Temple. Visit Vishram Ghat on Yamuna river. Visit Gita Mandir." },
      { day: "Vrindavan Visit", description: "Visit Banke Bihari Temple. Visit ISKCON Temple. Visit Radha Raman Temple. Visit Seva Kunj and Nidhivan. Visit Prem Mandir during evening light show." },
    ],
    tips: ["Wear modest clothing for temple visits", "Carry water and comfortable shoes", "Photography may be restricted inside some temples"],
    rating: 4.8, reviews: 432,
  },
  {
    img: temple2,
    duration: "2 Days & 1 Night",
    location: "Goverdhan Barsana Nandgaon",
    title: "Goverdhan Barsana Nandgaon Tour",
    overview: "A spiritual journey covering Govardhan Hill parikrama, Barsana (Radha Rani's birthplace), and Nandgaon — the village of Nand Maharaj.",
    highlights: ["Govardhan Parikrama", "Govind Kund", "Mansi Ganga", "Daan Ghati Temple", "Radha Rani Temple", "Kusum Sarovar", "Sankari Khor", "Maan Mandir", "Nand Bhavan", "Yashoda Kund", "Ter Kadamba", "Rangili Mahal"],
    itinerary: [
      { day: "Govardhan Visit", description: "Arrive at Govardhan Hill. Visit Daan Ghati Temple. Visit Govardhan Parikrama Marg. Visit Mansi Ganga Lake. Visit Govind Kund. Visit Radha Kund and Shyam Kund." },
      { day: "Barsana Visit", description: "Visit Shri Radha Rani Temple (Ladli Mahal). Visit Kusum Sarovar. Visit Sankari Khor. Visit Maan Mandir." },
      { day: "Nandgaon Visit", description: "Visit Nand Bhavan – Krishna's childhood home. Visit Yashoda Kund. Visit Ter Kadamba. Visit Rangili Mahal. Return journey." },
    ],
    tips: ["Govardhan Parikrama is ~21 km; wear comfortable footwear", "Best visited during Holi season for Lathmar Holi in Barsana"],
    rating: 4.7, reviews: 318,
  },
  {
    img: temple3,
    duration: "1 Day",
    location: "Khatu Shyam Rajasthan",
    title: "Khatu Shyam Ji Tour",
    overview: "Visit the famous Khatu Shyam Ji temple in Rajasthan, dedicated to Barbarik (grandson of Bheem). A deeply spiritual experience for devotees.",
    highlights: ["Khatu Shyam Temple", "Shyam Kund", "Temple Market Area"],
    itinerary: [
      { day: "Departure", description: "Early morning departure for Khatu Shyam Ji Temple in Rajasthan." },
      { day: "Khatu Shyam Darshan", description: "Perform darshan at Khatu Shyam Temple. Visit sacred Shyam Kund. Participate in temple aarti if available." },
      { day: "Explore & Return", description: "Explore temple market for devotional items. Return journey to Jaipur / Delhi." },
    ],
    tips: ["Sundays and Ekadashi are very crowded", "Carry prasad offerings"],
    rating: 4.6, reviews: 215,
  },
  {
    img: temple4,
    duration: "1 Day",
    location: "Mehandipur Rajasthan",
    title: "Mehandipur Balaji Tour",
    overview: "Visit the powerful Mehandipur Balaji temple known for spiritual healing. A deeply revered pilgrimage for Hanuman devotees.",
    highlights: ["Balaji Temple", "Pret Raj Sarkar Temple", "Bhairav Baba Temple"],
    itinerary: [
      { day: "Departure & Arrival", description: "Early morning departure. Arrive at Mehandipur Balaji Temple." },
      { day: "Temple Visits", description: "Visit Balaji Temple dedicated to Lord Hanuman. Visit Pret Raj Sarkar Temple. Visit Bhairav Baba Temple." },
      { day: "Rituals & Return", description: "Participate in temple rituals and offerings. Lunch at local satvik bhojanalaya. Return journey." },
    ],
    tips: ["Follow temple rules strictly", "Do not carry non-veg food or alcohol", "Photography is not allowed inside the temple"],
    rating: 4.5, reviews: 178,
  },
  {
    img: temple5,
    duration: "2 Days & 1 Night",
    location: "Agra Uttar Pradesh",
    title: "Agra Fatehpur Sikri Tour",
    overview: "Explore the Mughal heritage city of Agra including the iconic Taj Mahal, Agra Fort, and the ghost city of Fatehpur Sikri.",
    highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Itimad-ud-Daulah (Baby Taj)", "Buland Darwaza", "Jama Masjid", "Salim Chishti Tomb", "Panch Mahal", "Diwan-i-Khas"],
    itinerary: [
      { day: "Agra Visit", description: "Visit Taj Mahal at sunrise. Breakfast in Agra. Visit Agra Fort including Jahangir Palace, Diwan-i-Khas, and Musamman Burj. Visit Itimad-ud-Daulah (Baby Taj). Visit Mehtab Bagh for sunset Taj Mahal view." },
      { day: "Fatehpur Sikri Visit", description: "Visit Buland Darwaza. Visit Jama Masjid. Visit Salim Chishti Tomb. Visit Panch Mahal. Visit Diwan-i-Khas. Return journey." },
    ],
    tips: ["Taj Mahal is closed on Fridays", "Early morning visit for fewer crowds", "Carry ID proof for ticket booking"],
    rating: 4.9, reviews: 567,
  },
  {
    img: temple7,
    duration: "5 Days & 4 Nights",
    location: "Ayodhya Varanasi",
    title: "Ayodhya Varanasi (Kashi) Tour",
    overview: "A grand spiritual tour covering Ayodhya's Ram Mandir and Varanasi's ancient ghats, temples, and the mesmerizing Ganga Aarti.",
    highlights: ["Ram Janmabhoomi Temple", "Hanuman Garhi", "Kanak Bhawan", "Saryu River", "Ram Ki Paidi", "Nageshwarnath Temple", "Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Assi Ghat", "Sarnath", "Manikarnika Ghat"],
    itinerary: [
      { day: "Ayodhya Day 1", description: "Visit Ram Janmabhoomi Temple. Visit Hanuman Garhi Temple. Breakfast at local restaurant. Visit Kanak Bhawan. Visit Nageshwarnath Temple. Take holy dip at Saryu River. Attend evening aarti at Ram Ki Paidi." },
      { day: "Travel to Varanasi", description: "Depart Ayodhya for Varanasi. Check in and rest." },
      { day: "Varanasi Day 1", description: "Sunrise at Assi Ghat. Visit Kashi Vishwanath Temple. Visit Sankat Mochan Temple. Lunch and shopping for Banarasi silk sarees. Attend evening Ganga Aarti at Dashashwamedh Ghat. Boat ride on Ganges." },
      { day: "Varanasi Day 2", description: "Visit Sarnath (Dhamek Stupa). Visit Bharat Mata Mandir. Visit Tulsi Manas Mandir. Lunch and local shopping." },
      { day: "Departure", description: "Final morning at the ghats. Departure." },
    ],
    tips: ["Book Kashi Vishwanath darshan online in advance", "Varanasi lanes are narrow — wear comfortable shoes", "Best during Dev Deepawali festival"],
    rating: 4.8, reviews: 389,
  },
  {
    img: temple6,
    duration: "1 Day",
    location: "Kaila Devi Rajasthan",
    title: "Kaila Devi Temple Tour",
    overview: "Visit the revered Kaila Devi temple in Karauli, Rajasthan. A powerful Shakti Peeth known for fulfilling devotees' wishes.",
    highlights: ["Kaila Devi Temple", "Kalisil River", "Temple Surroundings"],
    itinerary: [
      { day: "Departure & Arrival", description: "Early morning departure. Arrive at Kaila Devi Temple in Rajasthan." },
      { day: "Darshan & Exploration", description: "Perform darshan of Goddess Kaila Devi. Visit Kalisil River area. Attend temple aarti. Explore temple surroundings." },
      { day: "Return", description: "Return journey." },
    ],
    tips: ["Navratri is the peak pilgrimage season", "Temple gets crowded on weekends"],
    rating: 4.4, reviews: 142,
  },
  {
    img: temple8,
    duration: "1 Day",
    location: "Jaipur Rajasthan",
    title: "Jaipur Temple Tour",
    overview: "Explore the Pink City's magnificent temples. A comprehensive temple tour covering Jaipur's most revered spiritual sites.",
    highlights: ["Govind Dev Ji Temple", "Birla Mandir", "Moti Dungri Ganesh Temple", "Galta Ji Temple", "ISKCON Jaipur", "Akshardham Temple", "Tarkeshwar Mahadev Temple", "Sun Temple", "Jagat Shiromani Temple", "Shila Devi Temple (Amer Fort)"],
    itinerary: [
      { day: "Morning Temples", description: "Visit Govind Dev Ji Temple. Visit Birla Mandir. Visit Moti Dungri Ganesh Temple." },
      { day: "Midday Temples", description: "Visit Galta Ji Temple. Visit Sun Temple." },
      { day: "Afternoon Temples", description: "Visit ISKCON Jaipur. Visit Akshardham Temple." },
      { day: "Evening Temples", description: "Visit Tarkeshwar Mahadev Temple. Visit Jagat Shiromani Temple. Visit Shila Devi Temple inside Amer Fort. Return to hotel." },
    ],
    tips: ["Carry sunscreen — Jaipur gets very hot", "Bargain at local markets", "Evening light show at Amber Fort is worth attending"],
    rating: 4.7, reviews: 256,
  },
];

export interface Destination {
  img: string;
  name: string;
  description: string;
  significance: string;
  bestTime: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    img: dest1,
    name: "Prem Mandir",
    description: "Prem Mandir is a stunning white marble temple in Vrindavan dedicated to Radha Krishna and Sita Ram. Built by Jagadguru Kripalu Maharaj, it features intricate carvings and a mesmerizing light show.",
    significance: "Symbolizes divine love between Radha and Krishna. The temple's architecture represents the spiritual journey of devotion.",
    bestTime: "Evening Aarti (7:00 PM) for the spectacular fountain & light show.",
    highlights: ["Evening light & fountain show", "Beautiful Italian marble carvings", "Lush gardens", "54-acre spiritual complex"],
  },
  {
    img: dest2,
    name: "Banke Bihari Temple",
    description: "One of the most revered temples in Vrindavan, Banke Bihari Temple houses the deity of Lord Krishna in his 'Tribhanga' posture. The temple has a unique darshan tradition.",
    significance: "The deity was discovered by Swami Haridas in Nidhivan. The curtain (jhaki) darshan is unique to this temple.",
    bestTime: "Morning darshan (7:45 AM – 12:00 PM). Visit during Janmashtami for grand celebrations.",
    highlights: ["Unique curtain darshan", "Janmashtami celebrations", "Ancient spiritual atmosphere", "Located in heart of Vrindavan"],
  },
  {
    img: dest3,
    name: "ISKCON Temple",
    description: "ISKCON Vrindavan (Krishna Balaram Mandir) was established by Srila Prabhupada. It is a center for spiritual learning and Bhakti yoga practice.",
    significance: "Founded by the Hare Krishna movement, this temple promotes Bhagavad Gita teachings worldwide.",
    bestTime: "Morning & Evening Aarti sessions. Year-round pleasant atmosphere.",
    highlights: ["Krishna Balaram deities", "Srila Prabhupada's samadhi", "Govinda's restaurant", "Spiritual lectures & kirtans"],
  },
  {
    img: dest4,
    name: "Ram Mandir Ayodhya",
    description: "The grand Ram Mandir in Ayodhya marks the birthplace of Lord Rama. The newly constructed temple is a marvel of Indian temple architecture.",
    significance: "Believed to be the exact birthplace (Janmabhoomi) of Lord Rama, one of the most important Hindu pilgrimage sites.",
    bestTime: "Early morning for peaceful darshan. Ram Navami for grand festivities.",
    highlights: ["Magnificent Nagara-style architecture", "Ram Lalla deity", "Saryu River Ghat", "Newly developed pilgrimage complex"],
  },
  {
    img: dest5,
    name: "Agra Fort",
    description: "A UNESCO World Heritage Site, Agra Fort is a massive red sandstone fortress showcasing the grandeur of Mughal architecture and history.",
    significance: "Served as the main residence of Mughal emperors. Houses beautiful palaces, mosques, and audience halls.",
    bestTime: "October to March for pleasant weather. Morning visits recommended.",
    highlights: ["Diwan-i-Am & Diwan-i-Khas", "Jahangir Palace", "Taj Mahal view from Musamman Burj", "Sound & light show"],
  },
  {
    img: dest6,
    name: "Hanuman Garhi",
    description: "Hanuman Garhi is a 10th-century temple in Ayodhya dedicated to Lord Hanuman. Perched on a hillock, it is accessed by climbing 76 steps.",
    significance: "Believed to be the place where Hanuman guarded Ayodhya. One of the most visited temples in Ayodhya.",
    bestTime: "Tuesday and Saturday for special prayers. Visit during Hanuman Jayanti.",
    highlights: ["Ancient hilltop temple", "76 steps to the shrine", "Powerful spiritual energy", "Panoramic city views"],
  },
  {
    img: dest7,
    name: "Char Dham Mandir",
    description: "Char Dham Temple in Vrindavan recreates all four holy Dhams — Badrinath, Dwarka, Jagannath Puri, and Rameswaram — in one location.",
    significance: "Allows devotees to experience the spiritual essence of all four Dhams without traveling across India.",
    bestTime: "Year-round. Festivals like Janmashtami and Diwali see special decorations.",
    highlights: ["Four Dhams in one complex", "Beautiful temple architecture", "Peaceful meditation areas", "Spiritual shopping market nearby"],
  },
  {
    img: dest8,
    name: "Manikarnika Ghat",
    description: "Manikarnika Ghat is the most sacred cremation ground in Varanasi. It is believed that cremation here grants moksha (liberation from the cycle of rebirth).",
    significance: "Considered the holiest of all ghats. The eternal flame here has been burning for thousands of years.",
    bestTime: "Evening for witnessing the ancient rituals. Boat ride at dawn for a serene experience.",
    highlights: ["Eternal cremation flame", "Ancient spiritual rituals", "Boat rides on the Ganges", "Deep cultural & spiritual significance"],
  },
];