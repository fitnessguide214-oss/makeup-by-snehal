import { motion } from "motion/react";

const reviews = [
  {
    name: "Priya Sharma",
    review:
      "Snehal didi transformed me into the most beautiful bride! Every guest complimented my makeup throughout the day.",
    stars: 5,
  },
  {
    name: "Ananya Kulkarni",
    review:
      "Pre-bridal and bridal both done by Snehal ji. She is an absolute genius with makeup brushes — truly magical!",
    stars: 5,
  },
  {
    name: "Ritu Deshmukh",
    review:
      "Came from Nagpur specially for my wedding day makeup and it was worth every kilometer of the journey!",
    stars: 5,
  },
  {
    name: "Kavya Joshi",
    review:
      "The beauty academy training is absolutely world-class. Snehal mam taught me professional techniques I never knew existed.",
    stars: 5,
  },
  {
    name: "Deepika Patil",
    review:
      "My sister and I both had our bridal makeup done here. Snehal madam is incredibly talented and so warm-hearted.",
    stars: 5,
  },
  {
    name: "Sunita Bhosale",
    review:
      "Professional, punctual, and absolute perfection! My reception look lasted all night and looked gorgeous in every photo.",
    stars: 5,
  },
  {
    name: "Meera Gaikwad",
    review:
      "My guests genuinely thought I had hired a celebrity Mumbai makeup artist — she is THAT incredible!",
    stars: 5,
  },
  {
    name: "Pooja Nair",
    review:
      "The studio atmosphere is so premium and welcoming. Snehal ji made me feel like a Bollywood queen on my wedding day!",
    stars: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 bg-[#F5EDE0]"
      data-ocid="reviews.section"
    >
      <div className="text-center px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A]"
        >
          What Our Brides Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8B5E3C] mt-4 text-base"
        >
          Real stories from real brides across Amravati and beyond
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {reviews.map((r, index) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-[#C9A96E]/25 rounded-2xl p-6 hover:border-[#C9A96E]/60 transition-all duration-300 hover:shadow-lg"
            style={{ boxShadow: "0 2px 14px rgba(107,58,42,0.08)" }}
            data-ocid={`reviews.item.${index + 1}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full bg-[#C9A96E]/20 flex items-center justify-center text-[#6B3A2A] font-bold text-xl flex-shrink-0"
                style={{ border: "1.5px solid #C9A96E" }}
              >
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="text-[#6B3A2A] font-bold">{r.name}</p>
                <p className="text-sm">
                  {Array.from({ length: r.stars })
                    .map(() => "⭐")
                    .join("")}
                </p>
              </div>
            </div>
            <p className="text-[#5A3828] text-sm italic leading-relaxed">
              &ldquo;{r.review}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
