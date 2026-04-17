import { motion } from "framer-motion";
import { useMemo } from "react";
import { shouldReduceMotion } from "@/lib/animation";

import temple1 from "@/assets/galleryimages/temple1.webp";
import temple2 from "@/assets/galleryimages/temple2.webp";
import temple3 from "@/assets/galleryimages/temple3.webp";
import temple4 from "@/assets/galleryimages/temple4.webp";
import temple5 from "@/assets/galleryimages/temple5.webp";
import temple6 from "@/assets/galleryimages/temple6.webp";
import temple7 from "@/assets/galleryimages/temple7.webp";
import temple8 from "@/assets/galleryimages/temple8.webp";
import temple9 from "@/assets/galleryimages/temple9.webp";
import temple10 from "@/assets/galleryimages/temple10.webp";
import temple11 from "@/assets/galleryimages/temple11.webp";
import temple12 from "@/assets/galleryimages/temple12.webp";
import temple13 from "@/assets/galleryimages/temple13.webp";
import temple14 from "@/assets/galleryimages/temple14.webp";
import temple15 from "@/assets/galleryimages/temple15.webp";
import temple16 from "@/assets/galleryimages/temple16.webp";
import temple17 from "@/assets/galleryimages/temple17.webp";
import temple18 from "@/assets/galleryimages/temple18.webp";
import temple19 from "@/assets/galleryimages/temple19.webp";

const rawGallery = [
  { img: temple1, label: "Yamuna Ghat", span: "col-span-2 row-span-2" },
  { img: temple2, label: "Shiv Murti (CharDham)", span: "row-span-2" },
  { img: temple3, label: "Iskcon Temple Courtyard", span: "" },
  { img: temple4, label: "CharDham Spiritual Complex", span: "" },
  { img: temple5, label: "Banke Bihari Darshan", span: "" },
  { img: temple6, label: "Banke Bihari Temple", span: "col-span-2" },
  { img: temple7, label: "Vaishno Mata", span: "" },
  { img: temple8, label: "Iskcon Mandir", span: "" },
  { img: temple9, label: "Banke Bihari Mandir", span: "" },
  { img: temple10, label: "Dwarkadhish", span: "row-span-2" },
  { img: temple11, label: "Tilak Dwar", span: "row-span-2" },
  { img: temple12, label: "CharDham Mandir", span: "" },
  { img: temple13, label: "Dwarkadhish Temple Entrance", span: "" },
  { img: temple14, label: "God Dwarkadhish", span: "col-span-2" },
  { img: temple15, label: "Decorated Dwarkadhish Mandir", span: "" },
  { img: temple16, label: "Dwarkadhish Mandir Ceiling Art", span: "" },
  { img: temple17, label: "Prem Mandir", span: "row-span-2" },
  { img: temple18, label: "Goverdhan Parvat Krishna Leela", span: "col-span-2 row-span-2" },
  { img: temple19, label: "Prem Mandir (Night)", span: "row-span-2" },
];

const ExperienceBrajSection = () => {
  const galleryItems = useMemo(() => rawGallery, []);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience the <span className="text-primary">Divine Braj</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="hidden md:grid grid-cols-4 auto-rows-[200px] gap-4">

          {galleryItems.map((item, indexVal) => (
            <div
              key={indexVal}
              className={`relative group rounded-2xl overflow-hidden ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.label}
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-300" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                <p className="text-white text-sm font-semibold">
                  {item.label}
                </p>
              </div>

              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition" />
            </div>
          ))}

        </div>

        <div className="text-center mt-14">
          <a
            href="#packages"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Explore All Tours
          </a>
        </div>

      </div>
    </section>
  );
};

export default ExperienceBrajSection;