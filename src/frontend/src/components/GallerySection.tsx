import { motion } from "motion/react";
import { useState } from "react";

const images = [
  {
    src: "/assets/screenshot_2026-05-18_003109-019e3754-b737-72e8-9396-af650e187d44.png",
    alt: "Bridal Makeup 1",
  },
  {
    src: "/assets/screenshot_2026-05-18_003219-019e3754-bad4-705c-9165-d69a5f8b23e0.png",
    alt: "Bridal Makeup 2",
  },
  {
    src: "/assets/screenshot_2026-05-18_003134-019e3754-bb23-70b8-997c-1c823ad71754.png",
    alt: "Bridal Makeup 3",
  },
  {
    src: "/assets/screenshot_2026-05-18_003147-019e3754-bafe-7583-b3af-346c8dfe3907.png",
    alt: "Bridal Makeup 4",
  },
  {
    src: "/assets/screenshot_2026-05-18_003153-019e3754-bb71-7019-b0e8-01c1e30830f6.png",
    alt: "Bridal Makeup 5",
  },
  {
    src: "/assets/screenshot_2026-05-18_003225-019e3754-bb6a-762d-b882-97a703959d24.png",
    alt: "Bridal Makeup 6",
  },
  {
    src: "/assets/screenshot_2026-05-18_003208-019e3754-bbb7-73ea-9e4f-3df30688278b.png",
    alt: "Bridal Makeup 7",
  },
  {
    src: "/assets/screenshot_2026-05-18_003141-019e3754-bb94-7179-8e47-e955b94ddf48.png",
    alt: "Bridal Makeup 8",
  },
  {
    src: "/assets/screenshot_2026-05-18_003127-019e3754-bbda-777c-94bf-d8404d6e2f15.png",
    alt: "Bridal Makeup 9",
  },
  {
    src: "/assets/screenshot_2026-05-18_003120-019e3754-bd83-7602-a2cb-49a14b265081.png",
    alt: "Bridal Makeup 10",
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 bg-[#FFF8F0]"
      data-ocid="gallery.section"
    >
      <div className="text-center px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A]"
        >
          Portfolio Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8B5E3C] mt-4 text-base"
        >
          Each look is a masterpiece crafted with precision and passion
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">
        {images.map((img, index) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.04, rotateY: 3 }}
            onClick={() => setSelected(img.src)}
            className="overflow-hidden rounded-xl cursor-pointer relative group"
            style={{ transformStyle: "preserve-3d" }}
            data-ocid={`gallery.item.${index + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover border-2 border-transparent group-hover:border-[#C9A96E] transition-all duration-300 rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B3A2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
              <span className="text-white text-sm font-semibold">
                {img.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <button
          type="button"
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer w-full"
          onClick={() => setSelected(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelected(null)}
          aria-label="Close gallery"
          data-ocid="gallery.lightbox"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selected}
            alt="Gallery enlarged"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl glow-gold"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-6 right-6 text-amber-200 text-3xl hover:text-yellow-400 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close lightbox"
            data-ocid="gallery.close_button"
          >
            &times;
          </button>
        </button>
      )}
    </section>
  );
}
