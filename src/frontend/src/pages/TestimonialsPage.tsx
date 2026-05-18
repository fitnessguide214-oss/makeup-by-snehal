import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

/* ─── 3-D background shapes ─────────────────────────────────── */
function RotatingShape({
  position,
  color,
  shape,
  speed,
}: {
  position: [number, number, number];
  color: string;
  shape: "torusKnot" | "icosahedron" | "octahedron" | "sphere" | "ring";
  speed: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.4;
    ref.current.rotation.y += delta * speed * 0.6;
    ref.current.rotation.z += delta * speed * 0.2;
  });
  return (
    <mesh ref={ref} position={position}>
      {shape === "torusKnot" && <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />}
      {shape === "icosahedron" && <icosahedronGeometry args={[0.8, 0]} />}
      {shape === "octahedron" && <octahedronGeometry args={[0.7, 0]} />}
      {shape === "sphere" && <sphereGeometry args={[0.6, 16, 16]} />}
      {shape === "ring" && <torusGeometry args={[0.7, 0.15, 12, 32]} />}
      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.15}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

const BG_SHAPES: Array<{
  position: [number, number, number];
  color: string;
  shape: "torusKnot" | "icosahedron" | "octahedron" | "sphere" | "ring";
  speed: number;
}> = [
  { position: [-4, 2, -3], color: "#C9A96E", shape: "torusKnot", speed: 0.3 },
  {
    position: [4, -2, -4],
    color: "#8B5E3C",
    shape: "icosahedron",
    speed: 0.25,
  },
  { position: [0, 3, -5], color: "#C9A96E", shape: "ring", speed: 0.4 },
  {
    position: [-3, -3, -3],
    color: "#8B5E3C",
    shape: "octahedron",
    speed: 0.35,
  },
  { position: [3, 1, -4], color: "#C9A96E", shape: "sphere", speed: 0.2 },
  { position: [-1, -1, -6], color: "#8B5E3C", shape: "ring", speed: 0.45 },
  { position: [2, -4, -5], color: "#C9A96E", shape: "icosahedron", speed: 0.3 },
];

function Background3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.1,
      }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#C9A96E" />
      {BG_SHAPES.map((s, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static list
        <RotatingShape key={i} {...s} />
      ))}
    </Canvas>
  );
}

/* ─── Intersection-observer fade-up hook ────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
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
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── 3D-tilt card hook ─────────────────────────────────────── */
function useTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 14;
    setTilt({ x, y });
  }
  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }
  return { tilt, onMouseMove, onMouseLeave };
}

/* ─── Stars ─────────────────────────────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <span
          key={n}
          style={{
            color: "#C9A96E",
            fontSize: "1.1rem",
            filter: "drop-shadow(0 0 4px #C9A96E99)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ─── Types ─────────────────────────────────────────────────── */
interface CelebrityCard {
  name: string;
  title: string;
  quote: string;
  featured?: string[];
}

interface TestimonialCard {
  name: string;
  location: string;
  quote: string;
  weddingType: string;
  date: string;
}

/* ─── Data ───────────────────────────────────────────────────── */
const CELEBRITIES: CelebrityCard[] = [
  {
    name: "Priya Sharma",
    title: "Bollywood Actress",
    quote:
      "Snehal transformed me for the National Film Awards. The look she created was absolutely flawless — every detail perfectly crafted, every highlight precisely placed. I've never felt more like myself and yet more stunning at the same time.",
    featured: ["Vogue India", "Filmfare"],
  },
  {
    name: "Aditi Rao",
    title: "TV Actress — Star Plus",
    quote:
      "My character's iconic bridal look was designed entirely by Snehal. The entire set was speechless when I walked in. The camera loved every angle — because the makeup was built for perfection from every perspective.",
    featured: ["Femina", "Star Plus Official"],
  },
  {
    name: "Meera Kapoor",
    title: "Fashion Influencer — 500K+ Followers",
    quote:
      "She's the only makeup artist I trust for brand shoots. Whether it's a dewy editorial or a dramatic couture look, Snehal nails it every single time. My engagement and collaboration rates literally doubled after her work.",
    featured: ["Vogue India", "GQ India"],
  },
  {
    name: "Kavya Deshmukh",
    title: "Miss Maharashtra 2023",
    quote:
      "I won the crown wearing Snehal's artistry. Need I say more? She understood the pressure, stayed calm, and delivered a look that defined confidence, grace, and power on that stage. I owe a big part of my crown to her.",
    featured: ["Times of India", "Maharashtra Times"],
  },
  {
    name: "Roshni Pillai",
    title: "Wedding Influencer & Blogger",
    quote:
      "Featured in Vogue India's 'Best Bridal Transformations' issue — and Snehal's work speaks for itself. Every bride she touches walks out a goddess. My editorial was the most-shared piece of the year.",
    featured: ["Vogue India", "Brides Today"],
  },
];

const TESTIMONIALS: TestimonialCard[] = [
  {
    name: "Anjali Mehta",
    location: "Mumbai",
    quote:
      "I cried happy tears when I saw myself in the mirror. Snehal bai ne itna sundar banaya ki mujhe vishwas hi nahi hua. 5 stars isn't enough — she deserves the whole universe of stars!",
    weddingType: "Bridal Makeup",
    date: "March 2024",
  },
  {
    name: "Pooja Kulkarni",
    location: "Nagpur",
    quote:
      "Booked 8 months in advance and worth every single rupee. The bridal look lasted 14+ hours through dancing, crying, hugging, and even rain. Flawless from ceremony to reception!",
    weddingType: "Full Bridal Package",
    date: "December 2023",
  },
  {
    name: "Sunita Wankhede",
    location: "Amravati",
    quote:
      "Snehal madam ki hand hai — unke haath mein jadu hai. My saas-in-law couldn't recognize me! She said 'yeh dulhan kaun hai?' Pure magic. Will recommend to every bride I know.",
    weddingType: "Traditional Bridal",
    date: "February 2024",
  },
  {
    name: "Ritu Agarwal",
    location: "Delhi → Amravati",
    quote:
      "I traveled specifically from Delhi for Snehal's work — yes, it's worth the journey. My reception look was pure perfection. Guests kept stopping me for photos even at 2am!",
    weddingType: "Reception & Bridal",
    date: "January 2024",
  },
  {
    name: "Divya Nair",
    location: "Kerala × Maharashtra",
    quote:
      "She did a stunning fusion look blending South Indian and Maharashtrian bridal styles flawlessly. The floral jewelry, the kohl, the gold — it was a masterpiece of two cultures in harmony.",
    weddingType: "Fusion Bridal Makeup",
    date: "November 2023",
  },
  {
    name: "Prachi Joshi",
    location: "Pune",
    quote:
      "Even for a simple, intimate wedding, she gave me a look that made me feel like a queen without going over budget. Class and elegance without compromise. Absolute gem of a person too!",
    weddingType: "Simple Bridal Glow",
    date: "October 2023",
  },
  {
    name: "Meghna Thakare",
    location: "Amravati",
    quote:
      "My pre-wedding shoot looked like an actual Vogue magazine cover. Every single photo was frame-worthy. My photographer said in 10 years of shooting, he'd never seen such a perfectly camera-ready bride.",
    weddingType: "Pre-Wedding Shoot",
    date: "September 2023",
  },
  {
    name: "Kiran Bhosale",
    location: "Amravati",
    quote:
      "This is my third booking with Snehal — once you come here, you never go anywhere else. Baby shower, sister's wedding, now my cousin's engagement. She's basically family now!",
    weddingType: "Repeat Client — 3rd Booking",
    date: "August 2024",
  },
];

const VIDEO_CARDS = [
  {
    name: "Shruti & Family",
    duration: "2:34",
    gradient: "linear-gradient(135deg, #C9A96E33, #8B5E3C55)",
  },
  {
    name: "Ananya's Bridal Day",
    duration: "3:12",
    gradient: "linear-gradient(135deg, #8B5E3C33, #C9A96E55)",
  },
  {
    name: "Nisha's Transformation",
    duration: "1:58",
    gradient: "linear-gradient(135deg, #C9A96E44, #6B3A2A33)",
  },
];

const STATS = [
  { value: 500, suffix: "+", label: "Happy Brides" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimal: true },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({
  target,
  suffix,
  decimal,
}: { target: number; suffix: string; decimal?: boolean }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: target/decimal are stable constants
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const steps = 60;
        let i = 0;
        const timer = setInterval(() => {
          i++;
          const progress = i / steps;
          setVal(Number((target * progress).toFixed(decimal ? 1 : 0)));
          if (i >= steps) clearInterval(timer);
        }, 25);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <span ref={ref}>
      {decimal ? val.toFixed(1) : Math.round(val)}
      {suffix}
    </span>
  );
}

/* ─── Celebrity Card ─────────────────────────────────────────── */
function CelebrityCard({
  card,
  index,
}: { card: CelebrityCard; index: number }) {
  const { tilt, onMouseMove, onMouseLeave } = useTilt();
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-ocid={`celebrity.item.${index + 1}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0)`
          : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.5s ease",
        transitionDelay: `${index * 0.1}s`,
        background: "rgba(255,248,240,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(201,169,110,0.45)",
        boxShadow:
          "0 4px 32px rgba(201,169,110,0.18), 0 0 0 1px rgba(201,169,110,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        borderRadius: 20,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* gold top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "linear-gradient(90deg, transparent, #C9A96E, transparent)",
        }}
      />
      <div
        style={{
          fontSize: "2.5rem",
          color: "#C9A96E",
          lineHeight: 1,
          marginBottom: "0.75rem",
          opacity: 0.6,
        }}
      >
        ❝
      </div>
      <p
        style={{
          color: "#2C1810",
          fontSize: "0.97rem",
          lineHeight: 1.75,
          fontFamily: "Cormorant Garamond, serif",
          fontStyle: "italic",
          marginBottom: "1.25rem",
        }}
      >
        {card.quote}
      </p>
      <Stars />
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              color: "#6B3A2A",
              fontSize: "1.05rem",
            }}
          >
            {card.name}
          </div>
          <div style={{ color: "#8B5E3C", fontSize: "0.82rem", marginTop: 2 }}>
            {card.title}
          </div>
        </div>
        {card.featured && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {card.featured.map((f) => (
              <span
                key={f}
                style={{
                  background: "linear-gradient(135deg, #C9A96E22, #8B5E3C22)",
                  border: "1px solid rgba(201,169,110,0.35)",
                  color: "#6B3A2A",
                  fontSize: "0.7rem",
                  padding: "2px 8px",
                  borderRadius: 20,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Bride Testimonial Card ─────────────────────────────────── */
function BrideCard({ card, index }: { card: TestimonialCard; index: number }) {
  const { tilt, onMouseMove, onMouseLeave } = useTilt();
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-ocid={`bride.item.${index + 1}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0)`
          : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.5s ease`,
        background: "rgba(255,248,240,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(201,169,110,0.25)",
        boxShadow:
          "0 2px 20px rgba(201,169,110,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
        borderRadius: 16,
        padding: "1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.6), transparent)",
        }}
      />
      <Stars />
      <p
        style={{
          color: "#2C1810",
          fontSize: "0.92rem",
          lineHeight: 1.72,
          fontFamily: "Cormorant Garamond, serif",
          fontStyle: "italic",
          margin: "0.85rem 0 1rem",
        }}
      >
        "{card.quote}"
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 700,
              color: "#6B3A2A",
              fontSize: "0.92rem",
              fontFamily: "Playfair Display, serif",
            }}
          >
            {card.name}
          </div>
          <div style={{ color: "#8B5E3C", fontSize: "0.78rem" }}>
            {card.location}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span
            style={{
              background: "linear-gradient(135deg, #C9A96E18, #8B5E3C18)",
              border: "1px solid rgba(201,169,110,0.3)",
              color: "#6B3A2A",
              fontSize: "0.7rem",
              padding: "3px 10px",
              borderRadius: 20,
              fontWeight: 600,
              display: "block",
              marginBottom: 4,
            }}
          >
            {card.weddingType}
          </span>
          <div style={{ color: "#8B5E3C", fontSize: "0.72rem" }}>
            {card.date}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Video Testimonial Card ─────────────────────────────────── */
function VideoCard({
  name,
  duration,
  gradient,
  index,
}: { name: string; duration: string; gradient: string; index: number }) {
  const { tilt, onMouseMove, onMouseLeave } = useTilt();
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-ocid={`video.item.${index + 1}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`
          : "scale(0.92) translateY(20px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.5s ease`,
        background: "rgba(255,248,240,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1.5px solid rgba(201,169,110,0.35)",
        boxShadow: "0 8px 40px rgba(201,169,110,0.2)",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: 200,
          background: gradient,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(201,169,110,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px rgba(201,169,110,0.7)",
            transition: "transform 0.2s ease",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="#FFF8F0"
            width={28}
            height={28}
            aria-label="Play video"
            role="img"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            background: "rgba(107,58,42,0.75)",
            color: "#FFF8F0",
            fontSize: "0.75rem",
            padding: "2px 8px",
            borderRadius: 8,
            fontFamily: "monospace",
          }}
        >
          {duration}
        </span>
      </div>
      <div style={{ padding: "1.25rem" }}>
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            color: "#6B3A2A",
            fontSize: "1rem",
          }}
        >
          {name}
        </div>
        <div style={{ color: "#8B5E3C", fontSize: "0.8rem", marginTop: 4 }}>
          Client Video Testimonial
        </div>
      </div>
    </div>
  );
}

/* ─── Section heading ────────────────────────────────────────── */
function SectionHeading({
  title,
  subtitle,
  align = "center",
}: { title: string; subtitle?: string; align?: "center" | "left" }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        textAlign: align,
        marginBottom: "3rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "all 0.7s ease",
      }}
    >
      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          background:
            "linear-gradient(135deg, #6B3A2A 0%, #C9A96E 60%, #8B5E3C 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "none",
          filter: "drop-shadow(0 0 12px rgba(201,169,110,0.35))",
          marginBottom: subtitle ? "0.75rem" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#8B5E3C",
            fontSize: "1.05rem",
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic",
            maxWidth: 560,
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      {/* Gold sparkle separator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: 10,
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            width: 40,
            height: 1.5,
            background: "linear-gradient(90deg, transparent, #C9A96E)",
          }}
        />
        <span
          style={{
            color: "#C9A96E",
            fontSize: "1.1rem",
            filter: "drop-shadow(0 0 6px #C9A96E)",
            animation: "sparkle 2.2s ease-in-out infinite",
          }}
        >
          ✦
        </span>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#C9A96E",
            boxShadow: "0 0 8px #C9A96E",
          }}
        />
        <span
          style={{
            color: "#C9A96E",
            fontSize: "1.1rem",
            filter: "drop-shadow(0 0 6px #C9A96E)",
            animation: "sparkle 2.2s ease-in-out infinite",
            animationDelay: "0.6s",
          }}
        >
          ✦
        </span>
        <div
          style={{
            width: 40,
            height: 1.5,
            background: "linear-gradient(90deg, #C9A96E, transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function TestimonialsPage() {
  return (
    <div
      style={{
        backgroundColor: "#FFF8F0",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.9; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,169,110,0.2); }
          50% { box-shadow: 0 0 40px rgba(201,169,110,0.45); }
        }
      `}</style>

      {/* 3D Background */}
      <Background3D />

      {/* Decorative blobs */}
      <div
        style={{
          position: "fixed",
          top: "5%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          right: "-8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,94,60,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "40%",
          right: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          filter: "blur(35px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* ── Hero Header ──────────────────────────────────── */}
        <section
          data-ocid="testimonials.page"
          style={{
            paddingTop: "7rem",
            paddingBottom: "3rem",
            textAlign: "center",
            padding: "7rem 1.5rem 3rem",
          }}
        >
          {/* Floating sparkle particles */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {Array.from({ length: 8 }, (_, i) => i).map((i) => (
              <span
                key={`sparkle-${i}`}
                style={{
                  position: "absolute",
                  color: "#C9A96E",
                  fontSize: `${0.5 + Math.random() * 0.7}rem`,
                  top: `${-20 + Math.random() * 40}%`,
                  left: `${-10 + Math.random() * 120}%`,
                  animation: `float-particle ${2 + i * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                  pointerEvents: "none",
                  filter: "drop-shadow(0 0 5px #C9A96E)",
                }}
              >
                ✦
              </span>
            ))}
            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                fontWeight: 800,
                background:
                  "linear-gradient(135deg, #6B3A2A 0%, #C9A96E 50%, #8B5E3C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 18px rgba(201,169,110,0.4))",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              What Our Clients Say
            </h1>
          </div>
          <p
            style={{
              color: "#8B5E3C",
              fontSize: "1.15rem",
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              maxWidth: 500,
              margin: "0 auto 1.5rem",
            }}
          >
            Real transformations. Real emotions. Real stories.
          </p>
          {/* Gold sparkle line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                width: 60,
                height: 1.5,
                background: "linear-gradient(90deg, transparent, #C9A96E)",
              }}
            />
            <span
              style={{
                color: "#C9A96E",
                fontSize: "1.3rem",
                filter: "drop-shadow(0 0 8px #C9A96E)",
                animation: "sparkle 2s ease-in-out infinite",
              }}
            >
              ✦
            </span>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#C9A96E",
                boxShadow: "0 0 12px #C9A96E",
              }}
            />
            <span
              style={{
                color: "#C9A96E",
                fontSize: "1.3rem",
                filter: "drop-shadow(0 0 8px #C9A96E)",
                animation: "sparkle 2s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            >
              ✦
            </span>
            <div
              style={{
                width: 60,
                height: 1.5,
                background: "linear-gradient(90deg, #C9A96E, transparent)",
              }}
            />
          </div>
        </section>

        {/* ── Celebrity Collaborations ──────────────────────── */}
        <section
          data-ocid="celebrity.section"
          style={{ padding: "4rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}
        >
          <SectionHeading
            title="Celebrity Collaborations"
            subtitle="Trusted by Bollywood, TV stars, and crowned champions"
          />
          {/* Featured-in press strip */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            {[
              "Vogue India",
              "Femina",
              "Times of India",
              "Maharashtra Times",
              "Filmfare",
              "Brides Today",
            ].map((pub) => (
              <span
                key={pub}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,169,110,0.12), rgba(139,94,60,0.08))",
                  border: "1px solid rgba(201,169,110,0.4)",
                  color: "#6B3A2A",
                  padding: "6px 16px",
                  borderRadius: 30,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  boxShadow: "0 0 12px rgba(201,169,110,0.1)",
                }}
              >
                Featured in {pub}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CELEBRITIES.map((c, i) => (
              <CelebrityCard key={c.name} card={c} index={i} />
            ))}
          </div>
        </section>

        {/* ── Video Testimonials ────────────────────────────── */}
        <section
          data-ocid="video.section"
          style={{
            padding: "4rem 1.5rem",
            background:
              "linear-gradient(180deg, rgba(201,169,110,0.04) 0%, rgba(255,248,240,0) 100%)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading
              title="Watch Their Stories"
              subtitle="Emotional, real, and straight from the heart"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {VIDEO_CARDS.map((v, i) => (
                <VideoCard key={v.name} {...v} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Brides Testimonials Grid ──────────────────────── */}
        <section
          data-ocid="brides.section"
          style={{ padding: "4rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}
        >
          <SectionHeading
            title="From Our Brides"
            subtitle="Stories straight from the hearts of our brides"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
              alignItems: "start",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <BrideCard key={t.name} card={t} index={i} />
            ))}
          </div>
        </section>

        {/* ── Ratings Overview ──────────────────────────────── */}
        <section
          data-ocid="stats.section"
          style={{
            padding: "3.5rem 1.5rem",
            background: "linear-gradient(135deg, #C9A96E 0%, #B8865C 100%)",
            margin: "2rem 0",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                data-ocid={`stat.${s.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 800,
                    color: "#FFF8F0",
                    textShadow: "0 2px 12px rgba(107,58,42,0.3)",
                    lineHeight: 1,
                  }}
                >
                  <Counter
                    target={s.value}
                    suffix={s.suffix}
                    decimal={s.decimal}
                  />
                </div>
                <div
                  style={{
                    color: "rgba(255,248,240,0.88)",
                    marginTop: "0.5rem",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section
          data-ocid="cta.section"
          style={{
            padding: "5rem 1.5rem",
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "rgba(255,248,240,0.88)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(201,169,110,0.4)",
              boxShadow:
                "0 8px 60px rgba(201,169,110,0.2), 0 0 0 1px rgba(201,169,110,0.08)",
              borderRadius: 24,
              padding: "3rem 2rem",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                filter: "drop-shadow(0 0 8px rgba(201,169,110,0.5))",
              }}
            >
              💎
            </div>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#6B3A2A",
                textShadow: "0 0 20px rgba(201,169,110,0.3)",
                marginBottom: "0.75rem",
              }}
            >
              Book Your Bridal Consultation Today
            </h2>
            <p
              style={{
                color: "#8B5E3C",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              Join 500+ brides who trusted Snehal for the most important day of
              their lives.
            </p>
            <a
              href="https://wa.me/919561548151?text=Hi%20Snehal!%20I'd%20like%20to%20book%20a%20bridal%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.whatsapp_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, #C9A96E, #B8865C)",
                color: "#FFF8F0",
                padding: "0.9rem 2.5rem",
                borderRadius: 50,
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow:
                  "0 4px 24px rgba(201,169,110,0.5), 0 0 40px rgba(201,169,110,0.2)",
                transition: "all 0.3s ease",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px) scale(1.03)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 36px rgba(201,169,110,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 24px rgba(201,169,110,0.5), 0 0 40px rgba(201,169,110,0.2)";
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={20}
                height={20}
                aria-label="WhatsApp"
                role="img"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </section>

        {/* Footer buffer */}
        <div style={{ height: "3rem" }} />
      </div>
    </div>
  );
}
