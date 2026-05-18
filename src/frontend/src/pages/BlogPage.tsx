import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

type BlogTag = "All" | "Bridal Tips" | "Skincare" | "Trends" | "Tutorial";

const blogTags: BlogTag[] = [
  "All",
  "Bridal Tips",
  "Skincare",
  "Trends",
  "Tutorial",
];

const posts = [
  {
    id: 1,
    tag: "Bridal Tips" as BlogTag,
    title:
      "10 Secrets Every Maharashtrian Bride Must Know Before Her Wedding Day",
    excerpt:
      "From choosing the right foundation shade to how to keep your makeup fresh through the entire ceremony — Snehal shares her insider bridal prep tips.",
    readTime: "5 min read",
    emoji: "👰",
    accentColor: "#C9A96E",
    date: "March 14, 2026",
  },
  {
    id: 2,
    tag: "Skincare" as BlogTag,
    title:
      "The 30-Day Pre-Bridal Skin Routine That Will Transform Your Complexion",
    excerpt:
      "Start one month before your wedding. This step-by-step guide covers hydration, exfoliation, and the one serum every bride needs.",
    readTime: "7 min read",
    emoji: "✨",
    accentColor: "#8B5E3C",
    date: "February 28, 2026",
  },
  {
    id: 3,
    tag: "Trends" as BlogTag,
    title:
      "2026 Bridal Makeup Trends: What Indian Brides Are Wearing This Year",
    excerpt:
      "Glazed skin, earth tones, and maximalist eyes — here is what is trending for wedding season 2026 in Maharashtra and beyond.",
    readTime: "4 min read",
    emoji: "🌸",
    accentColor: "#6B3A2A",
    date: "February 10, 2026",
  },
  {
    id: 4,
    tag: "Tutorial" as BlogTag,
    title: "How to Achieve the Perfect Airbrush Foundation Look at Home",
    excerpt:
      "A professional-grade airbrush finish is now possible without the machine. Snehal reveals her pro tips for a flawless base using only a beauty sponge.",
    readTime: "6 min read",
    emoji: "💄",
    accentColor: "#C9A96E",
    date: "January 22, 2026",
  },
  {
    id: 5,
    tag: "Bridal Tips" as BlogTag,
    title:
      "How to Find the Right Makeup Artist for Your Wedding: A Bride's Guide",
    excerpt:
      "Portfolio, trial sessions, contracts — everything you need to know before you book your wedding makeup artist.",
    readTime: "5 min read",
    emoji: "💍",
    accentColor: "#8B5E3C",
    date: "January 5, 2026",
  },
  {
    id: 6,
    tag: "Skincare" as BlogTag,
    title:
      "Glow From Within: The Ingredients That Give You Lit-From-Within Skin",
    excerpt:
      "Vitamin C, niacinamide, hyaluronic acid — Snehal breaks down which ingredients actually work for Indian skin types.",
    readTime: "4 min read",
    emoji: "🌟",
    accentColor: "#6B3A2A",
    date: "December 18, 2025",
  },
];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<BlogTag>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filtered =
    activeTag === "All" ? posts : posts.filter((p) => p.tag === activeTag);

  return (
    <>
      <main
        data-ocid="blog.page"
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
              top: "-60px",
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
            Beauty Insights
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
            Blog &amp; Beauty Tips
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
            Bridal prep advice, skincare secrets, and trend reports — straight
            from Snehal\'s decade of expertise.
          </p>
        </section>

        {/* Tag Filter */}
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
            {blogTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                data-ocid={`blog.filter.${tag.toLowerCase().replace(/\s+/g, "_")}_tab`}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "99px",
                  border: "1px solid rgba(201,169,110,0.5)",
                  background:
                    activeTag === tag
                      ? "linear-gradient(135deg, #6B3A2A, #8B5E3C)"
                      : "white",
                  color: activeTag === tag ? "#FFF8F0" : "#6B3A2A",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow:
                    activeTag === tag
                      ? "0 4px 16px rgba(107,58,42,0.25)"
                      : "none",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {activeTag === "All" && (
          <section
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 1.5rem 2rem",
            }}
          >
            <div
              data-ocid="blog.featured.item.1"
              style={{
                background: "linear-gradient(135deg, #FAF0E6 0%, #F5EDE0 100%)",
                borderRadius: "20px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                minHeight: "260px",
              }}
            >
              <div
                style={{
                  padding: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.75rem",
                    borderRadius: "99px",
                    background: "rgba(201,169,110,0.2)",
                    color: "#C9A96E",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                    width: "fit-content",
                  }}
                >
                  Featured Post
                </div>
                <h2
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                    color: "#6B3A2A",
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: "1rem",
                  }}
                >
                  {posts[0].title}
                </h2>
                <p
                  style={{
                    color: "#8B5A3A",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {posts[0].excerpt}
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#A07850",
                    }}
                  >
                    {posts[0].date}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#C9A96E" }}>
                    ⏱ {posts[0].readTime}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "7rem",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {posts[0].emoji}
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
              gap: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {(activeTag === "All" ? filtered.slice(1) : filtered).map(
              (post, idx) => (
                <article
                  key={post.id}
                  data-ocid={`blog.post.item.${idx + 1}`}
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid rgba(201,169,110,0.2)",
                    boxShadow: "0 4px 20px rgba(107,58,42,0.07)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 12px 36px rgba(107,58,42,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 20px rgba(107,58,42,0.07)";
                  }}
                >
                  <div
                    style={{
                      height: "160px",
                      background: `linear-gradient(135deg, ${post.accentColor}33, ${post.accentColor}88)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                      position: "relative",
                    }}
                  >
                    {post.emoji}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0.5rem",
                        left: "0.75rem",
                        fontSize: "0.65rem",
                        background: "rgba(255,248,240,0.92)",
                        color: "#6B3A2A",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "99px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {post.tag}
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "Playfair Display, Georgia, serif",
                        fontSize: "1.05rem",
                        color: "#2C1810",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#8B5E3C",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(201,169,110,0.2)",
                        paddingTop: "0.75rem",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", color: "#8B5E3C" }}>
                        {post.date}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "#C9A96E",
                          fontWeight: 600,
                        }}
                      >
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          {filtered.length === 0 && (
            <div
              data-ocid="blog.posts.empty_state"
              style={{ textAlign: "center", padding: "4rem", color: "#8B5E3C" }}
            >
              No posts in this category yet.
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section
          style={{
            background: "linear-gradient(135deg, #FAF0E6, #F5EDE0)",
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
              marginBottom: "0.75rem",
            }}
          >
            Get Beauty Tips in Your WhatsApp
          </h2>
          <p
            style={{ color: "#8B5E3C", marginBottom: "2rem", fontSize: "1rem" }}
          >
            Join 1,000+ women who receive Snehal\'s exclusive beauty tips and
            bridal advice.
          </p>
          <a
            href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20please%20add%20me%20to%20your%20beauty%20tips%20group!"
            target="_blank"
            rel="noreferrer"
            data-ocid="blog.subscribe_button"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "white",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
            }}
          >
            💬 Join on WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
