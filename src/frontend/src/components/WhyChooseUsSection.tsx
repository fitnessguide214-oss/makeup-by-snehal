import { motion } from "motion/react";

const reasons = [
  {
    icon: "⭐",
    title: "Celebrity-Grade Expertise",
    desc: "Trusted by celebrities, worked on high-profile fashion events and Bollywood-adjacent productions across India.",
  },
  {
    icon: "🏆",
    title: "10+ Years of Mastery",
    desc: "Over a decade of professional experience transforming brides, models, and celebrities into works of art.",
  },
  {
    icon: "💞",
    title: "500+ Happy Brides",
    desc: "Hundreds of brides have walked down the aisle radiating confidence wearing Snehal's signature artistry.",
  },
  {
    icon: "💎",
    title: "Premium Products Only",
    desc: "Exclusively using international luxury brands — MAC, Charlotte Tilbury, NARS, and premium skincare.",
  },
  {
    icon: "🎓",
    title: "Academy-Certified Team",
    desc: "Our entire team is trained at Snehal's prestigious academy ensuring consistent excellence.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 bg-[#FFF8F0]"
      data-ocid="why_choose_us.section"
    >
      <div className="text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A]"
        >
          Why Choose Snehal Pawar?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8B5E3C] mt-4 text-base"
        >
          Experience luxury that transcends ordinary makeup artistry
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-[#C9A96E]/30 hover:border-[#C9A96E] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl"
            style={{ boxShadow: "0 2px 16px rgba(107,58,42,0.07)" }}
            data-ocid={`why_choose_us.card.${index + 1}`}
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-xl text-[#6B3A2A] font-bold mb-3 font-display">
              {reason.title}
            </h3>
            <p className="text-[#5A3828] text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
