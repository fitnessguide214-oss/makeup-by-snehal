const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      data-ocid="footer.section"
      style={{
        background: "linear-gradient(180deg, #F5EDE0 0%, #EDE0CC 100%)",
        borderTop: "1px solid rgba(201,169,110,0.4)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold glow orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: "15%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* About */}
          <div>
            <h3
              className="font-display text-2xl font-bold"
              style={{ color: "#6B3A2A" }}
            >
              Snehal Pawar
            </h3>
            <p
              className="text-sm mt-3 leading-relaxed"
              style={{ color: "#2C1810" }}
            >
              Celebrity makeup artist &amp; beauty academy founder based in
              Amravati, Maharashtra. Transforming brides into queens since 2014.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C9A96E]" />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#C9A96E" }}
              >
                Est. 2014
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold uppercase tracking-wider mb-4 text-sm"
              style={{ color: "#C9A96E" }}
            >
              Our Services
            </h4>
            <ul className="text-sm space-y-2" style={{ color: "#2C1810" }}>
              {[
                "Bridal Makeup",
                "Party Makeup",
                "Pre-Wedding",
                "Academy Training",
                "Hair Styling",
                "Personal Grooming",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C9A96E]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold uppercase tracking-wider mb-4 text-sm"
              style={{ color: "#C9A96E" }}
            >
              Contact Us
            </h4>
            <div className="text-sm space-y-3" style={{ color: "#2C1810" }}>
              <p>
                📍 Kondeshwar Vidyut Colony, near Radhey Radhey Milk Dairy, Sai
                Nagar, Amravati, MH 444607
              </p>
              <p>
                📞{" "}
                <a
                  href="tel:09561548151"
                  style={{
                    color: "#2C1810",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#C9A96E";
                    (e.currentTarget as HTMLAnchorElement).style.textShadow =
                      "0 0 8px rgba(201,169,110,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#2C1810";
                    (e.currentTarget as HTMLAnchorElement).style.textShadow =
                      "none";
                  }}
                >
                  09561548151
                </a>
              </p>
              <p>
                📸{" "}
                <a
                  href="https://www.instagram.com/makeupbysnehalpawar"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#2C1810",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#C9A96E";
                    (e.currentTarget as HTMLAnchorElement).style.textShadow =
                      "0 0 8px rgba(201,169,110,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#2C1810";
                    (e.currentTarget as HTMLAnchorElement).style.textShadow =
                      "none";
                  }}
                >
                  @makeupbysnehalpawar
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8"
          style={{
            borderTop: "1px solid rgba(107,58,42,0.2)",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{
            color: "rgba(44,24,16,0.65)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span>
            © {year} Makeup by Snehal Pawar &amp; Academy. All rights reserved.
          </span>
          <span>Crafted with luxury in Amravati, Maharashtra</span>
        </div>

        {/* Caffeine branding */}
        <div
          className="text-center mt-4 text-xs"
          style={{
            color: "rgba(44,24,16,0.55)",
            position: "relative",
            zIndex: 1,
          }}
        >
          Built with love using
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#C9A96E",
              textDecoration: "underline",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#6B3A2A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E";
            }}
          >
      
          </a>
        </div>
      </div>
    </footer>
  );
}
