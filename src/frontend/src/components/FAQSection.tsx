import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    q: "How early should I book bridal makeup?",
    a: "We recommend booking 3-6 months in advance to secure your preferred date, especially for peak wedding season.",
  },
  {
    q: "Do you offer bridal trial sessions?",
    a: "Yes, we strongly recommend a trial session 2-4 weeks before the wedding to finalize your perfect look.",
  },
  {
    q: "What makeup products do you use?",
    a: "We exclusively use premium international brands — MAC, Charlotte Tilbury, NARS, and luxury skincare for flawless results.",
  },
  {
    q: "Do you provide on-location makeup services?",
    a: "Yes! We provide doorstep makeup services across Amravati and can travel to nearby cities for bridal bookings.",
  },
  {
    q: "What does the bridal package include?",
    a: "Our bridal packages include makeup, hair styling, saree/lehenga draping assistance, and a touch-up kit for the day.",
  },
  {
    q: "Do you offer professional makeup courses?",
    a: "Absolutely! We offer comprehensive makeup artist certification courses from basic to advanced professional levels.",
  },
  {
    q: "How can I view your portfolio?",
    a: "Visit our gallery above or follow us on Instagram @makeupbysnehalpawar for our latest bridal and fashion work.",
  },
  {
    q: "What is the starting price for bridal makeup?",
    a: "Bridal makeup packages start from ₹8,000 and vary based on complexity. Contact us for a personalized quote.",
  },
  {
    q: "Do you work on celebrity and fashion shoots?",
    a: "Yes! Snehal has extensive experience in editorial shoots, fashion shows, and celebrity event makeup artistry.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call or WhatsApp us at 09561548151 or visit our studio at Kondeshwar Vidyut Colony, Sai Nagar, Amravati.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-[#FFF8F0]" data-ocid="faq.section">
      <div className="text-center px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A]"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8B5E3C] mt-4 text-base"
        >
          Everything you need to know before your booking
        </motion.p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto px-6 space-y-3"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.q.slice(0, 30)}
            value={`item-${index + 1}`}
            className="bg-white border border-[#C9A96E]/30 rounded-xl px-2 hover:border-[#C9A96E]/70 transition-colors duration-200"
            style={{ boxShadow: "0 1px 8px rgba(107,58,42,0.06)" }}
            data-ocid={`faq.item.${index + 1}`}
          >
            <AccordionTrigger className="text-[#2C1810] hover:text-[#6B3A2A] text-left px-4 py-4 font-medium">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-[#5A3828] text-sm leading-relaxed px-4 pb-4 bg-[#FAF0E6]/60 rounded-b-xl">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
