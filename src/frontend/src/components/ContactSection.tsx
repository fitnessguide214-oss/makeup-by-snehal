import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#F5EDE0] to-[#FAF0E6]"
      data-ocid="contact.section"
    >
      <div className="text-center px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#6B3A2A]"
        >
          Find Us &amp; Book Today
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFAF5] border border-[#C9A96E]/40 rounded-2xl p-8 space-y-6"
        >
          <div>
            <p className="text-2xl mb-2">📍</p>
            <h3 className="text-[#6B3A2A] font-bold text-lg mb-1">
              Our Studio
            </h3>
            <p className="text-[#2C1810] text-sm leading-relaxed">
              Kondeshwar Vidyut Colony, near Radhey Radhey Milk Dairy,
              <br />
              Sai Nagar, Amravati, Maharashtra 444607
            </p>
          </div>

          <div>
            <p className="text-2xl mb-2">📞</p>
            <h3 className="text-[#6B3A2A] font-bold text-lg mb-1">
              Phone &amp; WhatsApp
            </h3>
            <p className="text-[#2C1810] text-sm">09561548151</p>
          </div>

          <div>
            <p className="text-2xl mb-2">🕐</p>
            <h3 className="text-[#6B3A2A] font-bold text-lg mb-1">
              Studio Hours
            </h3>
            <p className="text-[#2C1810] text-sm">Mon–Sat: 9:00 AM – 7:00 PM</p>
            <p className="text-[#2C1810] text-sm">Sun: 10:00 AM – 5:00 PM</p>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="tel:09561548151"
              className="flex-1 text-center py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #C9A84C, #E8C76A)" }}
              data-ocid="contact.call_button"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919561548151"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
              data-ocid="contact.whatsapp_button"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-[#C9A96E]/40"
        >
          <iframe
            src="https://maps.google.com/maps?q=Sai+Nagar%2C+Amravati%2C+Maharashtra+444607&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "1rem", display: "block" }}
            loading="lazy"
            title="Studio Location"
            allowFullScreen
          />
        </motion.div>
      </div>

      {/* Full-width CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto mt-12 px-6"
      >
        <div className="rounded-2xl p-8 text-center bg-[#FFFAF5] border border-[#C9A96E]/40">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#6B3A2A] mb-3">
            Book Your Dream Bridal Look Today
          </h3>
          <p className="text-[#2C1810] text-sm mb-6 leading-relaxed">
            Limited bridal slots available — secure your date now and step into
            your most beautiful chapter.
          </p>
          <a
            href="https://wa.me/919561548151?text=Hello!%20I%20would%20like%20to%20book%20a%20bridal%20makeup%20appointment."
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #C9A84C, #E8C76A, #C9A84C)",
              boxShadow: "0 0 30px rgba(201,168,76,0.4)",
            }}
            data-ocid="contact.book_now_button"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
