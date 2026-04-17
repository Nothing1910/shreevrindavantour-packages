import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Wifi, Car, Coffee, Wind, MapPin, X, ChevronLeft, ChevronRight, SlidersHorizontal, Trees, Dumbbell, Users, Flower2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Hotel1 from "@/assets/hotelimages/Hotel1.webp";
import Hotel2 from "@/assets/hotelimages/Hotel2.webp";
import Hotel3 from "@/assets/hotelimages/Hotel3.webp";
import Hotel4 from "@/assets/hotelimages/Hotel4.webp";
import Hotel5 from "@/assets/hotelimages/Hotel5.webp";
import Hotel6 from "@/assets/hotelimages/Hotel6.webp";
import Hotel7 from "@/assets/hotelimages/Hotel7.webp";
import Hotel8 from "@/assets/hotelimages/Hotel8.webp";
import Hotel9 from "@/assets/hotelimages/Hotel9.webp";
import Hotel10 from "@/assets/hotelimages/Hotel10.webp";
import Hotel11 from "@/assets/hotelimages/Hotel11.webp";
import Hotel12 from "@/assets/hotelimages/Hotel12.webp";
import Hotel13 from "@/assets/hotelimages/Hotel13.webp";
import Hotel14 from "@/assets/hotelimages/Hotel14.webp";
import Destination1 from "@/assets/destinationimages/destination1.webp";

const amenityIcons: Record<string, React.ElementType> = {
  Wifi, Parking: Car, Restaurant: Coffee, AC: Wind, "Temple Nearby": MapPin,
  "Swimming Pool": Dumbbell, "Travel Desk": Users, "Conference Hall": Users,
  "Garden Area": Trees, "Meditation Area": Flower2, Garden: Trees,
  "Free WiFi": Wifi, "Travel Assistance": Users, "AC Rooms": Wind,
};

interface Hotel {
  img: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  amenities: string[];
  templeDistance: string;
  rooms: { type: string; price: number; facilities: string[] }[];
}

const hotels: Hotel[] = [
  {
    img: Hotel1, name: "Vrindavan Palace Resort", location: "Vrindavan, Near Prem Mandir", price: 2500, rating: 4.5, templeDistance: "0.5 km",
    amenities: ["Wifi", "Parking", "Restaurant", "AC", "Temple Nearby"],
    rooms: [
      { type: "Standard", price: 2500, facilities: ["AC", "TV", "Attached Bathroom", "Daily Housekeeping"] },
      { type: "Deluxe", price: 3800, facilities: ["AC", "TV", "Mini Fridge", "Room Service", "Balcony"] },
      { type: "Suite", price: 5500, facilities: ["AC", "TV", "Living Area", "Premium Toiletries", "Temple View"] },
    ],
  },
  {
    img: Hotel2, name: "Radha Krishna Residency", location: "Mathura, Near Janmabhoomi", price: 1800, rating: 4.2, templeDistance: "0.3 km",
    amenities: ["Wifi", "Restaurant", "AC", "Temple Nearby"],
    rooms: [
      { type: "Standard", price: 1800, facilities: ["AC", "TV", "Attached Bathroom"] },
      { type: "Deluxe", price: 2800, facilities: ["AC", "TV", "Room Service", "City View"] },
    ],
  },
  {
    img: Hotel3, name: "Braj Dham Guest House", location: "Vrindavan, Parikrama Marg", price: 1200, rating: 4.0, templeDistance: "1 km",
    amenities: ["Wifi", "Parking"],
    rooms: [
      { type: "Standard", price: 1200, facilities: ["Fan/AC", "Attached Bathroom", "Hot Water"] },
      { type: "Deluxe", price: 2000, facilities: ["AC", "TV", "Room Service"] },
    ],
  },
  {
    img: Hotel4, name: "Krishna Heritage Hotel", location: "Mathura, Dampier Nagar", price: 3200, rating: 4.6, templeDistance: "1.5 km",
    amenities: ["Wifi", "Parking", "Restaurant", "AC"],
    rooms: [
      { type: "Deluxe", price: 3200, facilities: ["AC", "TV", "Mini Bar", "Laundry", "Room Service"] },
      { type: "Suite", price: 5000, facilities: ["AC", "TV", "Jacuzzi", "Living Room", "Temple View"] },
    ],
  },
  {
    img: Hotel5, name: "The Radha Ashok", location: "Mathura", price: 4500, rating: 4.7, templeDistance: "2 km",
    amenities: ["Swimming Pool", "Restaurant", "Parking", "Free WiFi"],
    rooms: [
      { type: "Standard", price: 4500, facilities: ["AC", "TV", "Attached Bathroom", "Room Service", "Pool Access"] },
      { type: "Deluxe", price: 6000, facilities: ["AC", "TV", "Mini Bar", "Balcony", "Pool Access", "Laundry"] },
      { type: "Suite", price: 8500, facilities: ["AC", "TV", "Living Area", "Jacuzzi", "Premium Toiletries", "Butler Service"] },
    ],
  },
  {
    img: Hotel6, name: "Hotel Kridha Residency", location: "Vrindavan", price: 3500, rating: 4.4, templeDistance: "0.8 km",
    amenities: ["Restaurant", "AC Rooms", "Parking", "Travel Desk"],
    rooms: [
      { type: "Standard", price: 3500, facilities: ["AC", "TV", "Attached Bathroom", "Daily Housekeeping"] },
      { type: "Deluxe", price: 5000, facilities: ["AC", "TV", "Room Service", "Balcony", "Temple View"] },
    ],
  },
  {
    img: Hotel7, name: "Hotel Nidhivan Sarovar Portico", location: "Vrindavan", price: 5500, rating: 4.8, templeDistance: "0.5 km",
    amenities: ["Restaurant", "Conference Hall", "Parking", "Free WiFi"],
    rooms: [
      { type: "Superior", price: 5500, facilities: ["AC", "TV", "Mini Fridge", "Room Service", "Attached Bathroom"] },
      { type: "Deluxe", price: 7000, facilities: ["AC", "TV", "Mini Bar", "Balcony", "Laundry", "Room Service"] },
      { type: "Suite", price: 9500, facilities: ["AC", "TV", "Living Area", "Premium Toiletries", "Butler Service", "Temple View"] },
    ],
  },
  {
    img: Hotel8, name: "Hotel Goverdhan Palace", location: "Mathura", price: 2200, rating: 4.1, templeDistance: "1.5 km",
    amenities: ["Restaurant", "Parking", "Travel Assistance"],
    rooms: [
      { type: "Standard", price: 2200, facilities: ["AC", "TV", "Attached Bathroom", "Hot Water"] },
      { type: "Deluxe", price: 3200, facilities: ["AC", "TV", "Room Service", "City View"] },
    ],
  },
  {
    img: Hotel9, name: "Hotel Shubham Majesty", location: "Mathura", price: 1800, rating: 3.9, templeDistance: "1.2 km",
    amenities: ["Free WiFi", "Restaurant", "AC Rooms"],
    rooms: [
      { type: "Standard", price: 1800, facilities: ["AC", "TV", "Attached Bathroom"] },
      { type: "Deluxe", price: 2800, facilities: ["AC", "TV", "Room Service", "Mini Fridge"] },
    ],
  },
  {
    img: Hotel10, name: "Govardhan Retreat Hotel", location: "Govardhan, Near Parikrama Path", price: 2200, rating: 4.3, templeDistance: "0.8 km",
    amenities: ["Wifi", "Parking", "AC", "Temple Nearby"],
    rooms: [
      { type: "Standard", price: 2200, facilities: ["AC", "TV", "Hot Water", "Garden View"] },
      { type: "Deluxe", price: 3500, facilities: ["AC", "TV", "Balcony", "Room Service"] },
    ],
  },
  {
    img: Hotel11, name: "Hotel Basera Brij Bhoomi", location: "Vrindavan", price: 1600, rating: 4.0, templeDistance: "1 km",
    amenities: ["Garden Area", "Restaurant", "Parking"],
    rooms: [
      { type: "Standard", price: 1600, facilities: ["AC", "TV", "Attached Bathroom", "Garden View"] },
      { type: "Deluxe", price: 2500, facilities: ["AC", "TV", "Room Service", "Balcony"] },
    ],
  },
  {
    img: Hotel12, name: "Ananda Krishna Van", location: "Vrindavan", price: 3000, rating: 4.5, templeDistance: "1.5 km",
    amenities: ["Meditation Area", "Garden", "Restaurant"],
    rooms: [
      { type: "Cottage", price: 3000, facilities: ["AC", "Meditation Space", "Garden View", "Organic Meals"] },
      { type: "Premium Cottage", price: 4500, facilities: ["AC", "Private Garden", "Yoga Deck", "Organic Meals", "Spiritual Library"] },
    ],
  },
  {
    img: Hotel13, name: "Hotel Wingston", location: "Mathura", price: 2500, rating: 4.2, templeDistance: "2 km",
    amenities: ["Restaurant", "Conference Hall", "Parking"],
    rooms: [
      { type: "Standard", price: 2500, facilities: ["AC", "TV", "Attached Bathroom", "Room Service"] },
      { type: "Deluxe", price: 3800, facilities: ["AC", "TV", "Mini Bar", "Laundry", "City View"] },
    ],
  },
  {
    img: Hotel14, name: "Mathura Comfort Inn", location: "Mathura, Station Road", price: 1500, rating: 3.9, templeDistance: "2 km",
    amenities: ["Wifi", "AC"],
    rooms: [
      { type: "Standard", price: 1500, facilities: ["AC", "TV", "Attached Bathroom"] },
    ],
  },
];

const RoomModal = ({ hotel, onClose }: { hotel: Hotel; onClose: () => void }) => {
  const [idx, setIdx] = useState(0);
  const room = hotel.rooms[idx];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-heading font-bold text-xl text-foreground truncate">
            {hotel.name}
          </h3>

          <div className="flex items-center gap-2">
            {hotel.rooms.length > 1 && (
              <>
                <button onClick={() => setIdx(Math.max(0, idx - 1))} className="bg-card/80 backdrop-blur rounded-full p-1.5">
                  <ChevronLeft size={18} />
                </button>

                <span className="bg-card/80 backdrop-blur rounded-full px-3 py-1 text-sm font-medium">
                  {idx + 1}/{hotel.rooms.length}
                </span>

                <button onClick={() => setIdx(Math.min(hotel.rooms.length - 1, idx + 1))} className="bg-card/80 backdrop-blur rounded-full p-1.5">
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            <button
              aria-label="Close modal"
              onClick={onClose}
              className="bg-card/80 backdrop-blur rounded-full p-2"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-xl text-foreground">{hotel.name}</h3>
          <p className="text-primary font-semibold mt-1">{room.type} Room</p>
          <p className="text-2xl font-bold text-foreground mt-2">₹{room.price}<span className="text-sm text-muted-foreground font-normal"> / night</span></p>
          <h4 className="font-heading font-semibold mt-4 mb-2 text-foreground">Facilities</h4>
          <ul className="grid grid-cols-2 gap-2">
            {room.facilities.map((f) => <li key={f} className="text-sm text-muted-foreground flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{f}</li>)}
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="/#contact" className="flex-1 text-center py-3 rounded-xl bg-gradient-saffron text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Enquire Now</a>
            <a href={`https://wa.me/918923427393?text=${encodeURIComponent(`Hi! I want to book ${room.type} room at ${hotel.name}`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-saffron-light transition-colors">WhatsApp</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HotelBooking = () => {
  const [selected, setSelected] = useState<Hotel | null>(null);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [minRating, setMinRating] = useState(0);
  const [amenityFilter, setAmenityFilter] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allAmenities = ["Wifi", "Free WiFi", "Parking", "Restaurant", "AC", "Temple Nearby", "Swimming Pool", "Garden Area"];

  const toggleAmenity = (a: string) => {
    setAmenityFilter((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);
  };

  const filtered = useMemo(() => {
    return hotels.filter((h) => {
      if (search && !h.name.toLowerCase().includes(search.toLowerCase()) && !h.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (h.price < priceRange[0] || h.price > priceRange[1]) return false;
      if (h.rating < minRating) return false;
      if (amenityFilter.length > 0 && !amenityFilter.every((a) => h.amenities.includes(a))) return false;
      return true;
    });
  }, [search, priceRange, minRating, amenityFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={Destination1} alt="Hotels in Mathura Vrindavan" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground text-white">Hotel Booking</h1>
          <p className="text-primary-foreground/80 mt-3 text-lg text-white">Comfortable stays near sacred temples of Braj</p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-card rounded-2xl shadow-lg p-6 border border-border space-y-4">
          <div className="flex gap-3">
            <label htmlFor="hotelSearch" className="sr-only">Search hotels by name or location</label>
            <input id="hotelSearch" type="text" placeholder="Search hotels by name or location..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none" />
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-background text-foreground hover:bg-muted transition-colors">
              <SlidersHorizontal size={18} />
              <span className="hidden sm:inline text-sm font-medium">Filters</span>
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <label htmlFor="priceRange" className="text-sm font-semibold text-foreground mb-2 block">Price Range (₹{priceRange[0]} - ₹{priceRange[1]})</label>
                    <input id="priceRange" type="range" min={0} max={10000} step={500} value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-full accent-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Minimum Rating</label>
                    <div className="flex gap-2">
                      {[0, 3.5, 4, 4.5].map((r) => (
                        <button key={r} onClick={() => setMinRating(r)} className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${minRating === r ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-muted"}`}>
                          {r === 0 ? "All" : `${r}+`}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Amenities</label>
                    <div className="flex flex-wrap gap-2">
                      {allAmenities.map((a) => {
                        const Icon = amenityIcons[a];
                        return (
                          <button key={a} onClick={() => toggleAmenity(a)} className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${amenityFilter.includes(a) ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-muted"}`}>
                            {Icon && <Icon size={12} />}{a}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((hotel, i) => (
            <motion.div key={hotel.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" loading="lazy" decoding="async" width="400" height="300" />
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur rounded-lg px-2.5 py-1 flex items-center gap-1">
                  <Star size={14} className="text-accent fill-accent" />
                  <span className="text-sm font-semibold text-foreground">{hotel.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin size={14} />{hotel.location}</p>
                <p className="text-xs text-muted-foreground mt-1">Temple distance: {hotel.templeDistance}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {hotel.amenities.map((a) => {
                    const Icon = amenityIcons[a];
                    return <span key={a} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">{Icon && <Icon size={12} />}{a}</span>;
                  })}
                </div>
                <p className="text-xl font-bold text-primary mt-3">₹{hotel.price}<span className="text-sm text-muted-foreground font-normal"> / night</span></p>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setSelected(hotel)} className="flex-1 text-center py-2 rounded-lg bg-gradient-saffron text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">View details →</button>
                  <a href="/#contact" className="flex-1 text-center py-2 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-saffron-light transition-colors">Enquire Now</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No hotels found matching your filters.</p>}
      </section>

      <AnimatePresence>{selected && <RoomModal hotel={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default HotelBooking;