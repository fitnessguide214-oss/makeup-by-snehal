import Footer from "@/components/Footer";
import { useEffect } from "react";

const milestones = [
  {
    year: "2012",
    title: "The Beginning",
    desc: "Started her makeup journey with a passion for enhancing natural beauty in Amravati.",
  },
  {
    year: "2015",
    title: "Professional Training",
    desc: "Completed advanced bridal makeup training from Mumbai's top academies.",
  },
  {
    year: "2017",
    title: "Celebrity Collaborations",
    desc: "First major assignment with Marathi film celebrities and regional stars.",
  },
  {
    year: "2019",
    title: "Academy Launch",
    desc: "Founded the Beauty & Bridal Academy to train the next generation of makeup artists.",
  },
  {
    year: "2021",
    title: "Bollywood Recognition",
    desc: "Featured in leading fashion publications and worked with national-level celebrities.",
  },
  {
    year: "2024",
    title: "500+ Brides",
    desc: "Celebrated milestone of 500+ bridal transformations and 200+ trained students.",
  },
];

const skills = [
  { name: "Bridal Makeup", level: 98 },
  { name: "Airbrush Technique", level: 95 },
  { name: "Contouring & Highlighting", level: 97 },
  { name: "Eye Artistry", level: 96 },
  { name: "Skin Prep & Care", level: 92 },
  { name: "Hair Styling", level: 88 },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main
        data-ocid="about.page"
        style={{ backgroundColor: "#FFF8F0", minHeight: "100vh" }}
      >
        {/* Hero Banner */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #F5EDE0 0%, #FAF0E6 40%, #FFF8F0 100%)",
            padding: "5rem 1.5rem 4rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,169,110,0.18), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(107,58,42,0.1), transparent 70%)",
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
            The Artist Behind the Magic
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#2C1810",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            About Snehal Pawar
          </h1>
          <p
            style={{
              color: "#8B5E3C",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A visionary makeup artist who transforms faces into masterpieces,
            blending art with emotion for over a decade.
          </p>
        </section>

        {/* Story Section */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "#C9A96E",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Her Story
              </p>
              <h2
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#2C1810",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  lineHeight: 1.3,
                }}
              >
                Passion Turned into Profession
              </h2>
              <p
                style={{
                  color: "#6B3A2A",
                  lineHeight: 1.85,
                  marginBottom: "1rem",
                  fontSize: "0.98rem",
                }}
              >
                Growing up in Amravati, Snehal always had an eye for beauty and
                detail. What started as a childhood fascination with colors and
                textures evolved into a lifelong passion and a celebrated
                career.
              </p>
              <p
                style={{
                  color: "#6B3A2A",
                  lineHeight: 1.85,
                  marginBottom: "1rem",
                  fontSize: "0.98rem",
                }}
              >
                After rigorous training in Mumbai's finest academies, she
                returned to Maharashtra with a vision — to bring world-class
                bridal artistry to every woman, regardless of budget. Her style
                blends traditional Indian aesthetics with contemporary global
                trends.
              </p>
              <p
                style={{
                  color: "#6B3A2A",
                  lineHeight: 1.85,
                  fontSize: "0.98rem",
                }}
              >
                Today, Snehal is not just a makeup artist — she is a
                transformation specialist who has worked with Marathi film
                celebrities, fashion models, and has been featured in regional
                fashion publications. Her academy has trained 200+ students
                across Maharashtra.
              </p>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  ["500+", "Brides"],
                  ["200+", "Students"],
                  ["10+", "Years"],
                  ["50+", "Celebs"],
                ].map(([num, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "Playfair Display, Georgia, serif",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#6B3A2A",
                      }}
                    >
                      {num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#8B5E3C",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,237,224,0.9), rgba(250,240,230,0.8))",
                borderRadius: "16px",
                padding: "2.5rem",
                border: "1px solid rgba(201,169,110,0.3)",
                boxShadow: "0 8px 40px rgba(107,58,42,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "1.3rem",
                  color: "#2C1810",
                  marginBottom: "2rem",
                  fontWeight: 700,
                }}
              >
                Expertise &amp; Skills
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} style={{ marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "#6B3A2A",
                        fontWeight: 500,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#C9A96E",
                        fontWeight: 600,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "6px",
                      background: "rgba(201,169,110,0.2)",
                      borderRadius: "99px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        background: "linear-gradient(90deg, #8B5E3C, #C9A96E)",
                        borderRadius: "99px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          style={{
            background: "linear-gradient(180deg, #FAF0E6 0%, #F5EDE0 100%)",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "#C9A96E",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Journey
              </p>
              <h2
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#2C1810",
                  fontWeight: 700,
                }}
              >
                Milestones That Define Her
              </h2>
            </div>
            <div style={{ position: "relative" }}>
              {/* Center line */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background:
                    "linear-gradient(180deg, rgba(201,169,110,0.6), rgba(107,58,42,0.3))",
                  transform: "translateX(-50%)",
                }}
                className="hidden md:block"
              />

              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  data-ocid={`about.milestone.item.${idx + 1}`}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginBottom: "2.5rem",
                    alignItems: "flex-start",
                    flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                  }}
                  className="flex-col md:flex-row"
                >
                  <div
                    style={{
                      flex: 1,
                      textAlign: idx % 2 === 0 ? "right" : "left",
                    }}
                    className="text-left md:text-right"
                  >
                    <div
                      style={{
                        background: "white",
                        borderRadius: "12px",
                        padding: "1.25rem 1.5rem",
                        border: "1px solid rgba(201,169,110,0.3)",
                        boxShadow: "0 4px 16px rgba(107,58,42,0.08)",
                        display: "inline-block",
                        maxWidth: "320px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#C9A96E",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {m.year}
                      </div>
                      <div
                        style={{
                          fontFamily: "Playfair Display, Georgia, serif",
                          fontSize: "1.1rem",
                          color: "#2C1810",
                          fontWeight: 700,
                          marginBottom: "0.4rem",
                        }}
                      >
                        {m.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          color: "#8B5E3C",
                          lineHeight: 1.6,
                        }}
                      >
                        {m.desc}
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "#C9A96E",
                      border: "3px solid #FFF8F0",
                      boxShadow: "0 0 0 2px #C9A96E",
                      flexShrink: 0,
                      marginTop: "1rem",
                    }}
                    className="hidden md:block"
                  />

                  <div style={{ flex: 1 }} className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Philosophy
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#2C1810",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Beauty is Personal
          </h2>
          <p
            style={{
              color: "#6B3A2A",
              fontSize: "1.1rem",
              lineHeight: 1.85,
              maxWidth: "700px",
              margin: "0 auto 2.5rem",
            }}
          >
            "Every face tells a story. My job is to make sure that story shines
            on the most important days of your life. I believe in enhancing your
            natural beauty, not masking it."
          </p>
          <div
            style={{
              display: "inline-block",
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "1.1rem",
              color: "#C9A96E",
              fontStyle: "italic",
            }}
          >
            — Snehal Pawar
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
