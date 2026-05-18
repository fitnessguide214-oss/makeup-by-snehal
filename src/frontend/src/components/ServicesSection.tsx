import { motion } from "motion/react";

const services = [
  {
    icon: "💄",
    title: "Bridal Makeup",
    desc: "Ethereal bridal looks — traditional, contemporary, or fusion. Every bride deserves to feel legendary.",
  },
  {
    icon: "✨",
    title: "Party & Occasion Makeup",
    desc: "Dazzling looks for sangeet, parties, anniversaries, and every celebration in between.",
  },
  {
    icon: "💍",
    title: "Pre-Wedding Makeup",
    desc: "Engagement, mehendi, haldi — look stunning at every pre-wedding ceremony.",
  },
  {
    icon: "🎓",
    title: "Beauty Academy",
    desc: "Professional makeup artist certification — learn from a celebrity artist and launch your career.",
  },
  {
    icon: "🌸",
    title: "Mehendi & Hair Styling",
    desc: "Traditional mehendi artistry and wedding-perfect hair styling included in bridal packages.",
  },
  {
    icon: "💎",
    title: "Personal Grooming",
    desc: "Premium facials, skincare, and grooming treatments using luxury products only.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-[#FAF0E6]"
      data-ocid="services.section"
    >
      <div className="text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A]"
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8B5E3C] mt-4 text-lg"
        >
          Artistry crafted for your most special moments
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ rotateY: 8, rotateX: -5, scale: 1.05 }}
            className="bg-white border border-[#C9A96E]/30 rounded-2xl p-6 cursor-pointer hover:border-[#C9A96E] transition-all duration-300 hover:shadow-lg"
            style={{
              boxShadow: "0 2px 16px rgba(107,58,42,0.07)",
              transformStyle: "preserve-3d",
            }}
            data-ocid={`services.card.${index + 1}`}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#6B3A2A] mb-2 font-display">
              {service.title}
            </h3>
            <p className="text-[#5A3828] text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
