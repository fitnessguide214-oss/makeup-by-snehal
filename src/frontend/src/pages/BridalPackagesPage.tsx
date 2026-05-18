import Footer from "@/components/Footer";
import { useEffect } from "react";

const packages = [
  {
    id: "haldi",
    tier: "Haldi & Mehendi",
    price: "₹4,999",
    popular: false,
    color: "#F5EDE0",
    accentColor: "#C9A96E",
    description:
      "A fresh, natural glow look perfect for your pre-wedding festivities.",
    includes: [
      "Full face natural makeup",
      "Flower-inspired eye look",
      "Light contouring",
      "Setting spray finish",
      "Hair pinning/styling",
    ],
    duration: "1.5 hrs",
  },
  {
    id: "engagement",
    tier: "Engagement Special",
    price: "₹8,999",
    popular: false,
    color: "#FAF0E6",
    accentColor: "#8B5E3C",
    description: "A sophisticated, photo-ready look for your ring ceremony.",
    includes: [
      "Airbrush foundation",
      "Dramatic eye artistry",
      "Full contouring & sculpting",
      "Long-lasting lip color",
      "Blow-dry & styling",
      "Touch-up kit provided",
    ],
    duration: "2 hrs",
  },
  {
    id: "royal-bridal",
    tier: "Royal Bridal",
    price: "₹18,999",
    popular: true,
    color: "#2C1810",
    accentColor: "#C9A96E",
    description: "The complete luxury bridal experience for your biggest day.",
    includes: [
      "Skin consultation & prep",
      "HD airbrush makeup",
      "Celebrity-grade contouring",
      "Customized eye artistry",
      "Lash application",
      "Bridal hair setting",
      "Pre-wedding trial included",
      "Touch-up artist for 4 hrs",
    ],
    duration: "4–5 hrs",
  },
  {
    id: "reception",
    tier: "Reception Glam",
    price: "₹12,999",
    popular: false,
    color: "#F5EDE0",
    accentColor: "#6B3A2A",
    description: "Bold, glamorous look for the reception party.",
    includes: [
      "Full HD makeup",
      "Smokey or dramatic eyes",
      "Contouring & highlighting",
      "Hair blow-dry & curls",
      "Lash application",
      "Setting mist finish",
    ],
    duration: "2.5 hrs",
  },
];

const addOns = [
  { name: "Pre-Bridal Facial", price: "₹2,500" },
  { name: "Bridal Trial Makeup", price: "₹3,500" },
  { name: "Bridesmaid Makeup (per person)", price: "₹2,999" },
  { name: "Draping (Saree/Lehenga)", price: "₹1,500" },
  { name: "Floral Hairstyling", price: "₹2,000" },
  { name: "Party Makeup", price: "₹2,500" },
];

export default function BridalPackagesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main
        data-ocid="bridal.page"
        style={{ backgroundColor: "#FFF8F0", minHeight: "100vh" }}
      >
        {/* Banner */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #F5EDE0 0%, #FAF0E6 50%, #FFF8F0 100%)",
            padding: "5rem 1.5rem 4rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Curated for Your Big Day
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#2C1810",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Bridal Packages
          </h1>
          <p
            style={{
              color: "#8B5E3C",
              fontSize: "1.05rem",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every bride deserves to feel like royalty. Choose the package that
            speaks to your dream look.
          </p>
        </section>

        {/* Packages Grid */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {packages.map((pkg, idx) => (
              <div
                key={pkg.id}
                data-ocid={`bridal.package.item.${idx + 1}`}
                style={{
                  background: pkg.popular
                    ? "linear-gradient(145deg, #2C1810, #4A2418)"
                    : "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: pkg.popular
                    ? "none"
                    : "1px solid rgba(201,169,110,0.25)",
                  boxShadow: pkg.popular
                    ? "0 20px 60px rgba(44,24,16,0.3)"
                    : "0 4px 24px rgba(107,58,42,0.08)",
                  transform: pkg.popular ? "scale(1.03)" : "scale(1)",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "linear-gradient(135deg, #C9A96E, #E8C76A)",
                      color: "#2C1810",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "99px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: pkg.popular ? "#C9A96E" : "#8B5E3C",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pkg.tier}
                  </div>
                  <div
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: pkg.popular ? "#FFF8F0" : "#2C1810",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {pkg.price}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: pkg.popular ? "rgba(255,248,240,0.6)" : "#8B5E3C",
                      marginBottom: "1.25rem",
                    }}
                  >
                    ⏱ {pkg.duration}
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: pkg.popular ? "rgba(255,248,240,0.8)" : "#6B3A2A",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                      borderBottom: `1px solid ${pkg.popular ? "rgba(201,169,110,0.2)" : "rgba(201,169,110,0.3)"}`,
                      paddingBottom: "1.25rem",
                    }}
                  >
                    {pkg.description}
                  </p>

                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          marginBottom: "0.6rem",
                          fontSize: "0.875rem",
                          color: pkg.popular
                            ? "rgba(255,248,240,0.85)"
                            : "#6B3A2A",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: "#C9A96E", flexShrink: 0 }}>
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.tier)}%20package!`}
                    target="_blank"
                    rel="noreferrer"
                    data-ocid={`bridal.package.book_button.${idx + 1}`}
                    style={{
                      display: "block",
                      marginTop: "1.75rem",
                      textAlign: "center",
                      background: pkg.popular
                        ? "linear-gradient(135deg, #C9A96E, #E8C76A)"
                        : "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
                      color: pkg.popular ? "#2C1810" : "#FFF8F0",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      padding: "0.85rem 1.5rem",
                      borderRadius: "8px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section
          style={{
            background: "linear-gradient(180deg, #FAF0E6, #F5EDE0)",
            padding: "4rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "#C9A96E",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Enhance Your Look
              </p>
              <h2
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#2C1810",
                  fontWeight: 700,
                }}
              >
                Add-On Services
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {addOns.map((addon, idx) => (
                <div
                  key={addon.name}
                  data-ocid={`bridal.addon.item.${idx + 1}`}
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid rgba(201,169,110,0.2)",
                    boxShadow: "0 2px 8px rgba(107,58,42,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#6B3A2A",
                      fontWeight: 500,
                    }}
                  >
                    {addon.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "#C9A96E",
                      fontWeight: 700,
                    }}
                  >
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "linear-gradient(135deg, #FAF0E6, #F5EDE0)",
            padding: "5rem 1.5rem",
            textAlign: "center",
            border: "1px solid rgba(201,169,110,0.25)",
          }}
        >
          <h2
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#6B3A2A",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Ready to Begin Your Bridal Journey?
          </h2>
          <p
            style={{
              color: "#8B5A3A",
              marginBottom: "2rem",
              fontSize: "1.05rem",
            }}
          >
            Book a free consultation call to discuss your dream look.
          </p>
          <a
            href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20would%20like%20to%20discuss%20bridal%20packages!"
            target="_blank"
            rel="noreferrer"
            data-ocid="bridal.cta_button"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #C9A96E, #E8C76A)",
              color: "#2C1810",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 24px rgba(201,169,110,0.4)",
            }}
          >
            💬 Get a Free Consultation
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
