import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

type Category = "All" | "Bridal" | "Celebrity" | "Party" | "Editorial";

const categories: Category[] = [
  "All",
  "Bridal",
  "Celebrity",
  "Party",
  "Editorial",
];

const portfolioItems = [
  {
    id: 1,
    category: "Bridal" as Category,
    title: "Royal Bridal Look",
    subtitle: "Heavy floral with gold accents",
    emoji: "👰",
    gradient: "linear-gradient(135deg, #F5EDE0, #E8C76A)",
  },
  {
    id: 2,
    category: "Celebrity" as Category,
    title: "Red Carpet Glam",
    subtitle: "Marathi film premiere",
    emoji: "🌟",
    gradient: "linear-gradient(135deg, #2C1810, #6B3A2A)",
  },
  {
    id: 3,
    category: "Bridal" as Category,
    title: "Maharashtrian Traditional",
    subtitle: "Nauvari drape & nath",
    emoji: "💎",
    gradient: "linear-gradient(135deg, #FAF0E6, #C9A96E)",
  },
  {
    id: 4,
    category: "Party" as Category,
    title: "Festive Evening Look",
    subtitle: "Diwali gala party",
    emoji: "✨",
    gradient: "linear-gradient(135deg, #8B5E3C, #C9A96E)",
  },
  {
    id: 5,
    category: "Celebrity" as Category,
    title: "TV Serial Look",
    subtitle: "Lead actress styling",
    emoji: "🎬",
    gradient: "linear-gradient(135deg, #4A2418, #8B5E3C)",
  },
  {
    id: 6,
    category: "Editorial" as Category,
    title: "Fashion Magazine Shoot",
    subtitle: "Regional fashion spread",
    emoji: "📸",
    gradient: "linear-gradient(135deg, #6B3A2A, #E8C76A)",
  },
  {
    id: 7,
    category: "Bridal" as Category,
    title: "Engagement Glam",
    subtitle: "Dewy skin, bold lip",
    emoji: "💍",
    gradient: "linear-gradient(135deg, #F5EDE0, #8B5E3C)",
  },
  {
    id: 8,
    category: "Party" as Category,
    title: "Cocktail Party Look",
    subtitle: "Smoky eyes & glow",
    emoji: "🥂",
    gradient: "linear-gradient(135deg, #2C1810, #C9A96E)",
  },
  {
    id: 9,
    category: "Celebrity" as Category,
    title: "Award Function",
    subtitle: "Bollywood guest styling",
    emoji: "🏆",
    gradient: "linear-gradient(135deg, #C9A96E, #FFF8F0)",
  },
  {
    id: 10,
    category: "Editorial" as Category,
    title: "Bridal Magazine Cover",
    subtitle: "Cover story feature",
    emoji: "📖",
    gradient: "linear-gradient(135deg, #FAF0E6, #6B3A2A)",
  },
  {
    id: 11,
    category: "Bridal" as Category,
    title: "Fusion Modern Bride",
    subtitle: "Indo-western blend",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #F5EDE0, #C9A96E)",
  },
  {
    id: 12,
    category: "Party" as Category,
    title: "Mehndi Ceremony",
    subtitle: "Fresh & dewy finish",
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #8B5E3C, #FAF0E6)",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      <main
        data-ocid="portfolio.page"
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
              bottom: "-60px",
              right: "-60px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,169,110,0.18), transparent 70%)",
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
            Snehal\'s Work
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
            Portfolio &amp; Gallery
          </h1>
          <p
            style={{
              color: "#8B5E3C",
              fontSize: "1.05rem",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A curated collection of Snehal\'s most stunning bridal, celebrity,
            and editorial makeup looks.
          </p>
        </section>

        {/* Filter Tabs */}
        <section
          style={{
            padding: "2.5rem 1.5rem 0",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                data-ocid={`portfolio.filter.${cat.toLowerCase()}_tab`}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "99px",
                  border: "1px solid rgba(201,169,110,0.5)",
                  background:
                    active === cat
                      ? "linear-gradient(135deg, #6B3A2A, #8B5E3C)"
                      : "white",
                  color: active === cat ? "#FFF8F0" : "#6B3A2A",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow:
                    active === cat ? "0 4px 16px rgba(107,58,42,0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                data-ocid={`portfolio.gallery.item.${idx + 1}`}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(107,58,42,0.1)",
                  background: "white",
                  border: "1px solid rgba(201,169,110,0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 40px rgba(107,58,42,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 20px rgba(107,58,42,0.1)";
                }}
              >
                {/* Image placeholder with gradient */}
                <div
                  style={{
                    height: "220px",
                    background: item.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                    position: "relative",
                  }}
                >
                  {item.emoji}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.5rem",
                      right: "0.75rem",
                      fontSize: "0.65rem",
                      background: "rgba(255,248,240,0.9)",
                      color: "#8B5E3C",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "99px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <div
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      fontSize: "1rem",
                      color: "#2C1810",
                      fontWeight: 700,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#8B5E3C" }}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              data-ocid="portfolio.gallery.empty_state"
              style={{ textAlign: "center", padding: "4rem", color: "#8B5E3C" }}
            >
              No items in this category yet.
            </div>
          )}
        </section>

        {/* CTA */}
        <section
          style={{
            background: "linear-gradient(135deg, #F5EDE0, #FAF0E6)",
            padding: "4rem 1.5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(201,169,110,0.25)",
          }}
        >
          <h2
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#2C1810",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Love What You See?
          </h2>
          <p
            style={{ color: "#8B5E3C", marginBottom: "2rem", fontSize: "1rem" }}
          >
            Book Snehal for your next look — bridal, party, or editorial.
          </p>
          <a
            href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20loved%20your%20portfolio%20and%20want%20to%20book%20you!"
            target="_blank"
            rel="noreferrer"
            data-ocid="portfolio.cta_button"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
              color: "#FFF8F0",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 20px rgba(107,58,42,0.3)",
            }}
          >
            Book Your Look
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
