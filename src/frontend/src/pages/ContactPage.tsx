import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Mesh } from "three";

// ─── 3D Floating Shapes ──────────────────────────────────────────────────────
function FloatingTorus({
  position,
  speed,
}: { position: [number, number, number]; speed: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.4;
      ref.current.rotation.y += delta * speed * 0.6;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.2, 0.35, 16, 50]} />
      <meshStandardMaterial
        color="#C9A96E"
        transparent
        opacity={0.1}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingSphere({
  position,
  speed,
}: { position: [number, number, number]; speed: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed * 0.5;
      ref.current.position.y =
        position[1] + Math.sin(Date.now() * 0.001 * speed) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#B8865C"
        transparent
        opacity={0.09}
        roughness={0.4}
        metalness={0.7}
      />
    </mesh>
  );
}

function FloatingOctahedron({
  position,
  speed,
}: { position: [number, number, number]; speed: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.7;
      ref.current.rotation.z += delta * speed * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial
        color="#C9A96E"
        transparent
        opacity={0.08}
        roughness={0.3}
        metalness={0.9}
      />
    </mesh>
  );
}

function FloatingRing({
  position,
  speed,
}: { position: [number, number, number]; speed: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.3;
      ref.current.rotation.y += delta * speed * 0.5;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.8, 0.12, 8, 40]} />
      <meshStandardMaterial
        color="#D4A76A"
        transparent
        opacity={0.1}
        roughness={0.2}
        metalness={1}
      />
    </mesh>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#C9A96E" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8B5E3C" />
      <FloatingTorus position={[-4, 2, -3]} speed={0.5} />
      <FloatingSphere position={[4, -1, -4]} speed={0.7} />
      <FloatingOctahedron position={[-3, -2, -5]} speed={0.6} />
      <FloatingRing position={[3, 3, -3]} speed={0.4} />
      <FloatingTorus position={[0, -3, -6]} speed={0.3} />
    </>
  );
}

// ─── Intersection Observer Hook ──────────────────────────────────────────────
function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Tilt Card ───────────────────────────────────────────────────────────────
function TiltCard({
  children,
  className,
  style: externalStyle,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  }
  function onMouseLeave() {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  }
  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ transition: "transform 0.2s ease-out", ...externalStyle }}
    >
      {children}
    </div>
  );
}

// ─── Service Options ─────────────────────────────────────────────────────────
const SERVICES = [
  "Select a Service",
  "Bridal Makeup",
  "Party & Event Makeup",
  "Academy Enrollment",
  "Pre-Wedding Shoot Makeup",
  "Reception & Engagement Makeup",
  "Mehndi / Haldi Look",
  "Other",
];

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "By Appointment Only" },
  { day: "Festival & Wedding Season", time: "Extended Hours Available" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const heroReveal = useReveal();
  const cardsReveal = useReveal();
  const hoursReveal = useReveal();
  const formReveal = useReveal();
  const mapReveal = useReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    weddingDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      e.email = "Valid email is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.service || formData.service === "Select a Service")
      e.service = "Please select a service";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setSubmitted(true);
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field])
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
  }

  const glassCard = {
    background: "rgba(255,248,240,0.9)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(201,169,110,0.3)",
    boxShadow:
      "0 8px 32px rgba(107,58,42,0.08), 0 2px 8px rgba(201,169,110,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    background: "rgba(255,248,240,0.95)",
    border: "1.5px solid rgba(201,169,110,0.3)",
    color: "#2C1810",
    fontSize: "15px",
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
    fontFamily: "'Cormorant Garamond', serif",
  };

  return (
    <div
      style={{
        background: "#FFF8F0",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Canvas Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Radial Gradient Blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "5%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(184,134,92,0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, paddingTop: "90px" }}>
        {/* ── Hero Header ── */}
        <section
          ref={heroReveal.ref}
          style={{ textAlign: "center", padding: "72px 24px 56px" }}
          className={heroReveal.visible ? "animate-fade-up" : "opacity-0"}
        >
          <p
            style={{
              color: "#C9A96E",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "15px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ✦ MAKEUP BY SNEHAL PAWAR ✦
          </p>
          <h1
            className="shimmer-text"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              lineHeight: 1.1,
              marginBottom: "24px",
              fontWeight: 700,
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              color: "#8B5E3C",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              maxWidth: 580,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            We'd love to hear from you. Reach out to book your dream look or
            enquire about our luxury beauty services.
          </p>
          {/* Sparkle separator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 60,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C9A96E)",
              }}
            />
            <span style={{ color: "#C9A96E", fontSize: "20px" }}>✦</span>
            <div
              style={{
                width: 8,
                height: 8,
                background: "#C9A96E",
                borderRadius: "50%",
                boxShadow: "0 0 12px rgba(201,169,110,0.7)",
              }}
            />
            <span style={{ color: "#C9A96E", fontSize: "20px" }}>✦</span>
            <div
              style={{
                width: 60,
                height: 1,
                background: "linear-gradient(90deg, #C9A96E, transparent)",
              }}
            />
          </div>
        </section>

        {/* ── Contact Info Cards ── */}
        <section
          ref={cardsReveal.ref}
          style={{
            padding: "24px 24px 64px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {/* Location Card */}
            <TiltCard
              className={cardsReveal.visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "0.1s" } as React.CSSProperties}
            >
              <div
                style={{
                  ...glassCard,
                  borderRadius: 20,
                  padding: "36px 28px",
                  textAlign: "center",
                }}
                className="luxury-card"
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                  }}
                >
                  <span style={{ fontSize: 28 }}>📍</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "#6B3A2A",
                    fontSize: "1.3rem",
                    marginBottom: 12,
                    fontWeight: 700,
                  }}
                >
                  Studio Location
                </h3>
                <p
                  style={{
                    color: "#2C1810",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  Kondeshwar Vidyut Colony,
                  <br />
                  Near Radhey Radhey Milk Dairy,
                  <br />
                  Sai Nagar, Amravati,
                  <br />
                  Maharashtra 444607
                </p>
                <a
                  data-ocid="contact.directions_link"
                  href="https://maps.google.com?q=Sai+Nagar+Amravati+Maharashtra+444607"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                    color: "#FFF8F0",
                    borderRadius: 50,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "1px",
                    boxShadow: "0 4px 15px rgba(201,169,110,0.3)",
                  }}
                  className="transition-smooth"
                >
                  Get Directions →
                </a>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard
              className={cardsReveal.visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "0.2s" } as React.CSSProperties}
            >
              <div
                style={{
                  ...glassCard,
                  borderRadius: 20,
                  padding: "36px 28px",
                  textAlign: "center",
                }}
                className="luxury-card"
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                  }}
                >
                  <span style={{ fontSize: 28 }}>📞</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "#6B3A2A",
                    fontSize: "1.3rem",
                    marginBottom: 12,
                    fontWeight: 700,
                  }}
                >
                  Call / WhatsApp
                </h3>
                <p
                  style={{
                    color: "#2C1810",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  +91 95615 48151
                </p>
                <p
                  style={{
                    color: "#8B5E3C",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.95rem",
                    marginBottom: 20,
                    lineHeight: 1.7,
                  }}
                >
                  Mon–Sat: 9 AM – 8 PM
                  <br />
                  Sunday: By Appointment Only
                </p>
                <a
                  data-ocid="contact.call_link"
                  href="tel:+919561548151"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                    color: "#FFF8F0",
                    borderRadius: 50,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "1px",
                    boxShadow: "0 4px 15px rgba(201,169,110,0.3)",
                  }}
                  className="transition-smooth"
                >
                  Call Now →
                </a>
              </div>
            </TiltCard>

            {/* Social Card */}
            <TiltCard
              className={cardsReveal.visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "0.3s" } as React.CSSProperties}
            >
              <div
                style={{
                  ...glassCard,
                  borderRadius: 20,
                  padding: "36px 28px",
                  textAlign: "center",
                }}
                className="luxury-card"
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                  }}
                >
                  <span style={{ fontSize: 28 }}>✨</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "#6B3A2A",
                    fontSize: "1.3rem",
                    marginBottom: 12,
                    fontWeight: 700,
                  }}
                >
                  Follow & Connect
                </h3>
                <p
                  style={{
                    color: "#8B5E3C",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1rem",
                    marginBottom: 20,
                    lineHeight: 1.7,
                  }}
                >
                  Stay inspired with our latest bridal looks, behind-the-scenes
                  moments & celebrity work.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <a
                    data-ocid="contact.instagram_link"
                    href="https://instagram.com/makeupbysnehalpawar"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "10px 20px",
                      background: "linear-gradient(135deg,#E1306C,#C13584)",
                      color: "#fff",
                      borderRadius: 50,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    📸 Instagram
                  </a>
                  <a
                    data-ocid="contact.whatsapp_link"
                    href="https://wa.me/919561548151"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "10px 20px",
                      background: "linear-gradient(135deg,#25D366,#128C7E)",
                      color: "#fff",
                      borderRadius: 50,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* ── Business Hours ── */}
        <section
          ref={hoursReveal.ref}
          style={{ padding: "64px 24px", background: "rgba(255,244,232,0.7)" }}
        >
          <div
            style={{ maxWidth: 700, margin: "0 auto" }}
            className={hoursReveal.visible ? "animate-fade-up" : "opacity-0"}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p
                style={{
                  color: "#C9A96E",
                  letterSpacing: 4,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontFamily: "'Cormorant Garamond',serif",
                }}
              >
                STUDIO HOURS
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#6B3A2A",
                  fontSize: "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 700,
                }}
                className="text-glow"
              >
                When We're Available
              </h2>
            </div>
            <div style={{ ...glassCard, borderRadius: 20, overflow: "hidden" }}>
              {HOURS.map((row, i) => (
                <div
                  key={row.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 32px",
                    borderBottom:
                      i < HOURS.length - 1
                        ? "1px solid rgba(201,169,110,0.15)"
                        : "none",
                    background:
                      i % 2 === 0
                        ? "rgba(255,248,240,0.8)"
                        : "rgba(253,240,220,0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      color: "#6B3A2A",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                    }}
                  >
                    {row.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      color: "#C9A96E",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                textAlign: "center",
                color: "#8B5E3C",
                fontFamily: "'Cormorant Garamond',serif",
                marginTop: 20,
                fontSize: "0.95rem",
              }}
            >
              ✦ For urgent bookings, WhatsApp us directly for immediate response
              ✦
            </p>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section
          ref={formReveal.ref}
          style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto" }}
          className={formReveal.visible ? "animate-fade-up" : "opacity-0"}
        >
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                color: "#C9A96E",
                letterSpacing: 4,
                fontSize: "13px",
                textTransform: "uppercase",
                marginBottom: 8,
                fontFamily: "'Cormorant Garamond',serif",
              }}
            >
              BOOK YOUR LOOK
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                color: "#6B3A2A",
                fontSize: "clamp(1.8rem,4vw,2.8rem)",
                fontWeight: 700,
              }}
              className="text-glow"
            >
              Send Us a Message
            </h2>
            <p
              style={{
                color: "#8B5E3C",
                fontFamily: "'Cormorant Garamond',serif",
                marginTop: 12,
                fontSize: "1.1rem",
              }}
            >
              We typically respond within 24 hours
            </p>
          </div>

          {submitted ? (
            <div
              data-ocid="contact.success_state"
              style={{
                ...glassCard,
                borderRadius: 24,
                padding: "60px 40px",
                textAlign: "center",
                border: "2px solid rgba(201,169,110,0.5)",
                boxShadow: "0 0 40px rgba(201,169,110,0.2)",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 24 }}>✨</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#6B3A2A",
                  fontSize: "2rem",
                  marginBottom: 16,
                  fontWeight: 700,
                }}
              >
                Thank You!
              </h3>
              <p
                style={{
                  color: "#2C1810",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                  maxWidth: 480,
                  margin: "0 auto 32px",
                }}
              >
                Your message has been received. Snehal will personally get back
                to you within 24 hours to discuss your dream look.
              </p>
              <p
                style={{
                  color: "#C9A96E",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.05rem",
                  marginBottom: 32,
                }}
              >
                — Makeup by Snehal Pawar ✦ Beauty & Bridal Studio
              </p>
              <button
                type="button"
                data-ocid="contact.reset_button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    weddingDate: "",
                    message: "",
                  });
                }}
                style={{
                  padding: "12px 32px",
                  background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                  color: "#FFF8F0",
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              data-ocid="contact.form"
              onSubmit={handleSubmit}
              style={{
                ...glassCard,
                borderRadius: 24,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Name + Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: 20,
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      color: "#6B3A2A",
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    data-ocid="contact.name_input"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1.5px solid #C9A96E";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(201,169,110,0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border =
                        "1.5px solid rgba(201,169,110,0.3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.name && (
                    <p
                      data-ocid="contact.name_field_error"
                      style={{
                        color: "#B8462A",
                        fontSize: "0.82rem",
                        marginTop: 4,
                        fontFamily: "'Cormorant Garamond',serif",
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      color: "#6B3A2A",
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    data-ocid="contact.email_input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1.5px solid #C9A96E";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(201,169,110,0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border =
                        "1.5px solid rgba(201,169,110,0.3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.email && (
                    <p
                      data-ocid="contact.email_field_error"
                      style={{
                        color: "#B8462A",
                        fontSize: "0.82rem",
                        marginTop: 4,
                        fontFamily: "'Cormorant Garamond',serif",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Service */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: 20,
                }}
              >
                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: "block",
                      color: "#6B3A2A",
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    data-ocid="contact.phone_input"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1.5px solid #C9A96E";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(201,169,110,0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border =
                        "1.5px solid rgba(201,169,110,0.3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.phone && (
                    <p
                      data-ocid="contact.phone_field_error"
                      style={{
                        color: "#B8462A",
                        fontSize: "0.82rem",
                        marginTop: 4,
                        fontFamily: "'Cormorant Garamond',serif",
                      }}
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: "block",
                      color: "#6B3A2A",
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="contact-service"
                    data-ocid="contact.service_select"
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      cursor: "pointer",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1.5px solid #C9A96E";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(201,169,110,0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border =
                        "1.5px solid rgba(201,169,110,0.3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p
                      data-ocid="contact.service_field_error"
                      style={{
                        color: "#B8462A",
                        fontSize: "0.82rem",
                        marginTop: 4,
                        fontFamily: "'Cormorant Garamond',serif",
                      }}
                    >
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Wedding Date */}
              <div style={{ maxWidth: "50%" }}>
                <label
                  htmlFor="contact-date"
                  style={{
                    display: "block",
                    color: "#6B3A2A",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  Wedding / Event Date
                </label>
                <input
                  id="contact-date"
                  data-ocid="contact.date_input"
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => handleChange("weddingDate", e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.border = "1.5px solid #C9A96E";
                    e.currentTarget.style.boxShadow =
                      "0 0 12px rgba(201,169,110,0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border =
                      "1.5px solid rgba(201,169,110,0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    color: "#6B3A2A",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  data-ocid="contact.message_textarea"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your special occasion, desired look, or any questions..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = "1.5px solid #C9A96E";
                    e.currentTarget.style.boxShadow =
                      "0 0 12px rgba(201,169,110,0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border =
                      "1.5px solid rgba(201,169,110,0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                {errors.message && (
                  <p
                    data-ocid="contact.message_field_error"
                    style={{
                      color: "#B8462A",
                      fontSize: "0.82rem",
                      marginTop: 4,
                      fontFamily: "'Cormorant Garamond',serif",
                    }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                data-ocid="contact.submit_button"
                style={{
                  padding: "16px 40px",
                  background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                  color: "#FFF8F0",
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  alignSelf: "center",
                  boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(201,169,110,0.6), 0 8px 25px rgba(184,134,92,0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(201,169,110,0.35)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                ✦ Send Message ✦
              </button>
            </form>
          )}
        </section>

        {/* ── Map Section ── */}
        <section
          ref={mapReveal.ref}
          style={{ padding: "64px 24px", background: "rgba(255,244,232,0.7)" }}
          className={mapReveal.visible ? "animate-fade-up" : "opacity-0"}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p
                style={{
                  color: "#C9A96E",
                  letterSpacing: 4,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontFamily: "'Cormorant Garamond',serif",
                }}
              >
                LOCATION
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#6B3A2A",
                  fontSize: "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 700,
                }}
                className="text-glow"
              >
                Find Us
              </h2>
            </div>
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "2px solid rgba(201,169,110,0.35)",
                boxShadow:
                  "0 8px 32px rgba(107,58,42,0.12), 0 0 30px rgba(201,169,110,0.08)",
              }}
            >
              <iframe
                title="Makeup by Snehal Pawar - Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d77.745!3d20.932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd69af0f3f5!2sAmravati!5e0!3m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p
              style={{
                textAlign: "center",
                color: "#8B5E3C",
                fontFamily: "'Cormorant Garamond',serif",
                marginTop: 20,
                fontSize: "1.05rem",
              }}
            >
              ✦ Proudly serving Amravati, Nagpur, Vidarbha & all of Maharashtra
              ✦
            </p>
          </div>
        </section>

        {/* ── Quick Links CTA ── */}
        <section
          style={{
            padding: "80px 24px",
            textAlign: "center",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#C9A96E",
              letterSpacing: 4,
              fontSize: "13px",
              textTransform: "uppercase",
              marginBottom: 12,
              fontFamily: "'Cormorant Garamond',serif",
            }}
          >
            CONNECT INSTANTLY
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              color: "#6B3A2A",
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 700,
              marginBottom: 40,
            }}
            className="text-glow"
          >
            Reach Us Anywhere
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <a
              data-ocid="contact.whatsapp_cta"
              href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%27d%20like%20to%20book%20a%20makeup%20appointment"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                background: "linear-gradient(135deg,#25D366,#128C7E)",
                color: "#fff",
                borderRadius: 50,
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              💬 Chat on WhatsApp
            </a>
            <a
              data-ocid="contact.instagram_cta"
              href="https://instagram.com/makeupbysnehalpawar"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                background: "linear-gradient(135deg,#E1306C,#833AB4)",
                color: "#fff",
                borderRadius: 50,
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(225,48,108,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              📸 Follow on Instagram
            </a>
            <Link
              data-ocid="contact.portfolio_link"
              to="/portfolio"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                background: "linear-gradient(135deg,#C9A96E,#B8865C)",
                color: "#FFF8F0",
                borderRadius: 50,
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              ✦ View Our Work
            </Link>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          style={{
            background: "rgba(253,240,220,0.9)",
            borderTop: "1px solid rgba(201,169,110,0.2)",
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#8B5E3C",
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "0.9rem",
            }}
          >
            © {new Date().getFullYear()} Makeup by Snehal Pawar. All rights
            reserved. |{" "}
            <a
              href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=makeupbysnehalpawar"
              style={{ color: "#C9A96E", textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }
        @media (max-width: 640px) {
          form[data-ocid="contact.form"] {
            padding: 28px 18px !important;
          }
          div[style*="maxWidth: 50%"] {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
