import { motion } from "motion/react";
import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: `particle-${i}`,
  width: `${((i * 3.7) % 8) + 2}px`,
  height: `${((i * 3.7) % 8) + 2}px`,
  left: `${(i * 5.3) % 100}%`,
  top: `${(i * 7.1) % 100}%`,
  animationDelay: `${(i * 0.4) % 4}s`,
  animationDuration: `${3 + ((i * 0.3) % 4)}s`,
}));

const quotes = [
  {
    text: "A true maestro of makeup — she made me look absolutely ethereal for my film shoot.",
    name: "Riya Mehra",
    title: "Film Actress",
  },
  {
    text: "I trusted no one but Snehal for my wedding day look. Perfection is an understatement.",
    name: "Anushka Rane",
    title: "Television Personality",
  },
  {
    text: "Snehal transformed my entire bridal party — each one of us looked breathtakingly beautiful.",
    name: "Prerna Saxena",
    title: "Social Media Influencer",
  },
];

const stats = [
  { target: 500, suffix: "+", label: "Happy Brides" },
  { target: 10, suffix: "+", label: "Years Experience" },
  { target: 50, suffix: "+", label: "Celebrity Clients" },
  { target: 100, suffix: "+", label: "Academy Students" },
];

function CountUpNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}</span>;
}

export default function CelebritySection() {
  return (
    <section
      id="celebrity"
      className="py-20 bg-[#FAF0E6] relative overflow-hidden"
      data-ocid="celebrity.section"
    >
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#C9A96E]/15 animate-float"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A] text-center"
        >
          Trusted by Celebrities &amp; Elite Clients
        </motion.h2>

        {/* Gold divider */}
        <div className="flex items-center gap-4 my-8 max-w-sm mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A96E]" />
          <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A96E]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#2C1810] text-center max-w-3xl mx-auto text-base leading-relaxed mb-12"
        >
          Snehal Pawar has transformed brides into queens and worked alongside
          top-tier celebrities from Maharashtra's vibrant entertainment
          industry. Her artistry has graced fashion shows, Bollywood-adjacent
          productions, and high-profile weddings across India.
        </motion.p>

        {/* Celebrity quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border border-[#C9A96E]/40 rounded-2xl p-6 relative shadow-sm"
              data-ocid={`celebrity.quote.${index + 1}`}
            >
              <div className="text-5xl text-[#C9A96E]/50 font-display leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-[#2C1810] text-sm italic leading-relaxed mb-4">
                {quote.text}
              </p>
              <div>
                <p className="text-[#6B3A2A] font-bold">{quote.name}</p>
                <p className="text-[#C9A96E] text-xs uppercase tracking-wider">
                  {quote.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#F5EDE0] to-[#FAF0E6] border border-[#C9A96E]/40 rounded-2xl p-8 shadow-sm"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
              data-ocid={`celebrity.stat.${stat.label.toLowerCase().replace(/ /g, "_")}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#6B3A2A]">
                <CountUpNumber target={stat.target} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-[#8B5E3C] text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
