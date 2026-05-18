import Footer from "@/components/Footer";
import { useEffect } from "react";

const courses = [
  {
    id: "basic",
    name: "Basic Makeup Artistry",
    duration: "30 Days",
    fee: "₹12,000",
    level: "Beginner",
    icon: "🎨",
    topics: [
      "Skin types & preparation",
      "Foundation & concealer",
      "Eye makeup basics",
      "Lip color techniques",
      "Day & evening looks",
    ],
  },
  {
    id: "bridal",
    name: "Bridal Makeup Master",
    duration: "60 Days",
    fee: "₹28,000",
    level: "Intermediate",
    icon: "👰",
    topics: [
      "Bridal skin consultation",
      "Airbrush techniques",
      "Traditional & modern bridal looks",
      "Hair setting for brides",
      "Business & client management",
      "Portfolio shoot",
    ],
  },
  {
    id: "professional",
    name: "Professional Artist Program",
    duration: "90 Days",
    fee: "₹45,000",
    level: "Advanced",
    icon: "⭐",
    topics: [
      "Celebrity & fashion makeup",
      "Contouring & highlighting mastery",
      "Editorial & print techniques",
      "Film & stage makeup",
      "Building your brand",
      "Hands-on celebrity shoot",
    ],
  },
  {
    id: "online",
    name: "Online Certification",
    duration: "21 Days",
    fee: "₹6,500",
    level: "All Levels",
    icon: "💻",
    topics: [
      "Video lessons — self-paced",
      "Makeup theory & color science",
      "Step-by-step tutorials",
      "Live Q&A sessions",
      "Certification upon completion",
    ],
  },
];

const placements = [
  { stat: "200+", label: "Students Trained" },
  { stat: "92%", label: "Placement Rate" },
  { stat: "35+", label: "Cities Reached" },
  { stat: "4.9★", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Priya Wankhede",
    from: "Nagpur",
    course: "Bridal Makeup Master",
    text: "Snehal madam's teaching transformed my life. I'm now running my own salon in Nagpur with 5-star reviews!",
  },
  {
    name: "Anita Shinde",
    from: "Pune",
    course: "Professional Artist Program",
    text: "The hands-on training and the celebrity shoot experience gave me the confidence to charge premium rates.",
  },
  {
    name: "Monika Desai",
    from: "Amravati",
    course: "Basic Makeup Artistry",
    text: "Even as a complete beginner, the course was so structured. I found a job at a top parlour within 2 weeks!",
  },
];

export default function AcademyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main
        data-ocid="academy.page"
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
              top: "-80px",
              left: "-80px",
              width: "350px",
              height: "350px",
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
            Learn from the Best
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
            Beauty &amp; Bridal Academy
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
            Unlock your potential with professional makeup courses led by Snehal
            Pawar — a celebrity makeup artist with 10+ years of experience.
          </p>
        </section>

        {/* Stats */}
        <section
          style={{
            background: "linear-gradient(135deg, #C9A96E, #B8865C)",
            padding: "3rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {placements.map((p) => (
              <div key={p.label}>
                <div
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "#C9A96E",
                  }}
                >
                  {p.stat}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
          }}
        >
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
              Programs
            </p>
            <h2
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#2C1810",
                fontWeight: 700,
              }}
            >
              Choose Your Course
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {courses.map((course, idx) => (
              <div
                key={course.id}
                data-ocid={`academy.course.item.${idx + 1}`}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(201,169,110,0.25)",
                  boxShadow: "0 4px 24px rgba(107,58,42,0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  {course.icon}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    padding: "0.2rem 0.75rem",
                    borderRadius: "99px",
                    background: "rgba(201,169,110,0.15)",
                    color: "#8B5E3C",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {course.level}
                </div>
                <h3
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "1.25rem",
                    color: "#2C1810",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {course.name}
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    fontSize: "0.8rem",
                    color: "#8B5E3C",
                  }}
                >
                  <span>⏱ {course.duration}</span>
                  <span style={{ color: "#C9A96E", fontWeight: 700 }}>
                    {course.fee}
                  </span>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        fontSize: "0.85rem",
                        color: "#6B3A2A",
                      }}
                    >
                      <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.name)}%20course!`}
                  target="_blank"
                  rel="noreferrer"
                  data-ocid={`academy.course.enroll_button.${idx + 1}`}
                  style={{
                    display: "block",
                    marginTop: "1.5rem",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
                    color: "#FFF8F0",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    padding: "0.8rem",
                    borderRadius: "8px",
                    letterSpacing: "0.03em",
                  }}
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Student Testimonials */}
        <section
          style={{
            background: "linear-gradient(180deg, #FAF0E6, #F5EDE0)",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
                Alumni Voices
              </p>
              <h2
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#2C1810",
                  fontWeight: 700,
                }}
              >
                What Our Students Say
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={t.name}
                  data-ocid={`academy.testimonial.item.${idx + 1}`}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "1.75rem",
                    border: "1px solid rgba(201,169,110,0.2)",
                    boxShadow: "0 4px 16px rgba(107,58,42,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      color: "#C9A96E",
                      marginBottom: "1rem",
                      lineHeight: 1,
                    }}
                  >
                    ❝
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#6B3A2A",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {t.text}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(201,169,110,0.2)",
                      paddingTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        color: "#2C1810",
                        fontSize: "0.9rem",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#8B5E3C" }}>
                      {t.course} · {t.from}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
