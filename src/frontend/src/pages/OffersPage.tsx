import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const seasonalOffers = [
  {
    id: "bridal-trio",
    badge: "WEDDING SEASON",
    title: "Bridal Trio Package",
    tagline: "HD Airbrush + Pre-wedding + Reception — all in one",
    original: "₹25,000",
    offer: "₹19,999",
    save: "₹5,001",
    savePct: "20%",
    popular: true,
    includes: [
      "HD Airbrush Bridal Makeup",
      "Pre-wedding Shoot Glam Look",
      "Reception Gown Look",
      "Free Trial Makeup (₹3,500 value)",
      "Touch-up Artist — 3 hrs",
    ],
    validUntil: "Season End 2025",
    slots: "Only 4 slots left",
  },
  {
    id: "glam-squad",
    badge: "FESTIVE SPECIAL",
    title: "Glam Squad Package",
    tagline: "Coordinated beauty for 5 family members",
    original: "₹15,000",
    offer: "₹11,999",
    save: "₹3,001",
    savePct: "20%",
    popular: false,
    includes: [
      "5 Complete Makeovers",
      "Mehndi, Wedding & Reception Looks",
      "Coordinated Theme Looks",
      "6-Hour On-site Service",
      "HD Products Throughout",
    ],
    validUntil: "Diwali Season 2025",
    slots: "Only 3 slots left",
  },
  {
    id: "early-bird",
    badge: "EARLY BIRD",
    title: "Early Bird Bridal",
    tagline: "Book 3+ months in advance — save big",
    original: "From ₹18,999",
    offer: "Flat 15% OFF",
    save: "Upto ₹2,850",
    savePct: "15%",
    popular: false,
    includes: [
      "Any Bridal Package",
      "Valid for Summer-Monsoon 2025",
      "Priority Date Blocking",
      "Free Pre-bridal Consultation",
      "Trial Slot Preference",
    ],
    validUntil: "Summer 2025 weddings",
    slots: "Limited summer dates",
  },
];

const combos = [
  {
    id: "bride-bridesmaids",
    icon: "💍",
    title: "Bride + Bridesmaids",
    desc: "Complete bridal look + 2 bridesmaid looks with coordinated theme",
    price: "₹14,999",
    save: "₹3,000",
  },
  {
    id: "sangeet-mehndi",
    icon: "🎉",
    title: "Sangeet + Mehndi Duo",
    desc: "Two ceremony looks for the bride — glam dance floor + mehndi glow",
    price: "₹8,999",
    save: "₹2,000",
  },
  {
    id: "shoot-ready",
    icon: "📸",
    title: "Shoot Ready Bundle",
    desc: "Pre-wedding + post-wedding shoot looks — curated for the lens",
    price: "₹12,999",
    save: "₹2,500",
  },
  {
    id: "mother-daughter",
    icon: "👩‍👧",
    title: "Mother + Daughter",
    desc: "Matching elegance — wedding day looks for both mother and bride",
    price: "₹9,999",
    save: "₹2,000",
  },
];

const loyaltyTiers = [
  {
    tier: "Silver",
    bookings: "1–2 bookings",
    icon: "🥈",
    color: "#A8A8A8",
    benefits: [
      "Priority booking via WhatsApp",
      "Birthday discount 5%",
      "Exclusive tips newsletter",
    ],
  },
  {
    tier: "Gold",
    bookings: "3–4 bookings",
    icon: "🥇",
    color: "#C9A96E",
    benefits: [
      "Priority slot booking",
      "10% off all services",
      "Free touch-up session",
      "Seasonal offer early access",
    ],
  },
  {
    tier: "Platinum",
    bookings: "5+ bookings",
    icon: "💎",
    color: "#B8865C",
    benefits: [
      "Dedicated artist always",
      "15% off all services",
      "Free trial makeup",
      "Celebrity-style treatment",
      "Annual gift hamper",
    ],
  },
];

const voucherDenoms = ["₹1,000", "₹2,000", "₹5,000", "₹10,000"];

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────

function useReveal() {
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

// ─── 3D Card Tilt ─────────────────────────────────────────────────────────────

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(6px)`;
  }
  function handleLeave() {
    const el = ref.current;
    if (el)
      el.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }
  return { ref, handleMove, handleLeave };
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <p
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          color: "#C9A96E",
          textTransform: "uppercase",
          marginBottom: "0.6rem",
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          color: "#6B3A2A",
          textShadow: "0 0 30px rgba(201,169,110,0.2)",
          marginBottom: "0.75rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#8B5E3C",
            fontSize: "1rem",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          marginTop: "1.25rem",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "60px",
            background: "linear-gradient(90deg, transparent, #C9A96E)",
          }}
        />
        <span style={{ color: "#C9A96E", fontSize: "1rem" }}>✦</span>
        <div
          style={{
            height: "1px",
            width: "60px",
            background: "linear-gradient(90deg, #C9A96E, transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ─── Blob Decorations ─────────────────────────────────────────────────────────

type BlobProps = {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  opacity?: number;
};

function Blob({ top, left, right, size = 400, opacity = 0.06 }: BlobProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left,
        right,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(201,169,110,${opacity}), transparent 70%)`,
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
  );
}

// ─── FloatingOrb (CSS 3D animation) ──────────────────────────────────────────

type OrbShape = "sphere" | "ring" | "diamond";
type OrbProps = {
  size: number;
  top: string;
  left?: string;
  right?: string;
  color: string;
  delay: number;
  duration: number;
  shape?: OrbShape;
};

function FloatingOrb({
  size,
  top,
  left,
  right,
  color,
  delay,
  duration,
  shape = "sphere",
}: OrbProps) {
  const borderRadius =
    shape === "diamond" ? "30% 70% 70% 30% / 30% 30% 70% 70%" : "50%";
  const extra: React.CSSProperties =
    shape === "ring"
      ? {
          border: `${Math.max(2, Math.round(size / 12))}px solid ${color}`,
          background: "transparent",
        }
      : { background: `radial-gradient(135deg, ${color} 0%, transparent 70%)` };
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left,
        right,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius,
        opacity: 0.1,
        pointerEvents: "none",
        animation: `floatOrb ${duration}s ease-in-out ${delay}s infinite alternate`,
        ...extra,
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function OffersPage() {
  const heroReveal = useReveal();
  const seasonReveal = useReveal();
  const comboReveal = useReveal();
  const academyReveal = useReveal();
  const loyaltyReveal = useReveal();
  const voucherReveal = useReveal();
  const ctaReveal = useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatOrb {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-40px) rotate(20deg); }
        }
        @keyframes shimmerBg {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,169,110,0.3); }
          50% { box-shadow: 0 0 40px rgba(201,169,110,0.6), 0 0 60px rgba(201,169,110,0.2); }
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .offer-card-tilt { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .offer-card-tilt:hover { box-shadow: 0 20px 60px rgba(201,169,110,0.25), 0 0 30px rgba(201,169,110,0.1) !important; }
        .gold-btn {
          background: linear-gradient(135deg, #C9A96E 0%, #E8C76A 50%, #B8865C 100%);
          background-size: 200% 100%;
          transition: background-position 0.4s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .gold-btn:hover { background-position: 100% 0; box-shadow: 0 6px 28px rgba(201,169,110,0.5); transform: translateY(-2px); }
        .reveal-up { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-up.visible { opacity: 1; transform: translateY(0); }
        .reveal-up.delay-1 { transition-delay: 0.1s; }
        .reveal-up.delay-2 { transition-delay: 0.2s; }
        .reveal-up.delay-3 { transition-delay: 0.3s; }
        .reveal-up.delay-4 { transition-delay: 0.4s; }
        .voucher-shimmer {
          background: linear-gradient(90deg, #C9A96E 0%, #E8C76A 25%, #FFF8F0 50%, #E8C76A 75%, #C9A96E 100%);
          background-size: 200% auto;
          animation: shimmerBg 3s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .loyalty-card { transition: transform 0.3s ease; }
        .loyalty-card:hover { transform: translateY(-4px); }
      `}</style>

      <main
        data-ocid="offers.page"
        style={{
          backgroundColor: "#FFF8F0",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* HERO HEADER */}
        <section
          ref={heroReveal.ref}
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #FAF0E6 0%, #FFF8F0 50%, #F5EDE0 100%)",
            padding: "6rem 1.5rem 5rem",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Blob top="-80px" left="-80px" size={500} opacity={0.08} />
          <Blob top="0" right="-100px" size={400} opacity={0.07} />
          <FloatingOrb
            size={120}
            top="10%"
            left="5%"
            color="#C9A96E"
            delay={0}
            duration={5}
            shape="ring"
          />
          <FloatingOrb
            size={80}
            top="15%"
            right="8%"
            color="#8B5E3C"
            delay={1}
            duration={6}
          />
          <FloatingOrb
            size={60}
            top="60%"
            left="2%"
            color="#C9A96E"
            delay={2}
            duration={4}
            shape="diamond"
          />
          <FloatingOrb
            size={100}
            top="70%"
            right="3%"
            color="#B8865C"
            delay={0.5}
            duration={7}
            shape="ring"
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              className={`reveal-up${heroReveal.visible ? " visible" : ""}`}
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "#C9A96E",
                textTransform: "uppercase",
                marginBottom: "1rem",
                animation: "badgePulse 3s ease-in-out infinite",
              }}
            >
              ✦ Makeup by Snehal Pawar — Limited Time ✦
            </p>

            <h1
              className={`reveal-up delay-1${heroReveal.visible ? " visible" : ""}`}
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                fontWeight: 700,
                color: "#6B3A2A",
                lineHeight: 1.15,
                textShadow: "0 0 40px rgba(201,169,110,0.25)",
                marginBottom: "1.25rem",
              }}
            >
              Exclusive Offers &amp;
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #C9A96E 0%, #E8C76A 40%, #C9A96E 80%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmerBg 4s linear infinite",
                }}
              >
                Packages
              </span>
            </h1>

            <p
              className={`reveal-up delay-2${heroReveal.visible ? " visible" : ""}`}
              style={{
                color: "#8B5E3C",
                fontSize: "1.1rem",
                maxWidth: "560px",
                margin: "0 auto 1.5rem",
                lineHeight: 1.7,
              }}
            >
              Special prices for your most special moments. Limited time offers
              — don't miss out.
            </p>

            <div
              className={`reveal-up delay-3${heroReveal.visible ? " visible" : ""}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  style={{
                    color: "#C9A96E",
                    fontSize: i === 2 ? "1.4rem" : "0.8rem",
                    opacity: i === 2 ? 1 : 0.5,
                  }}
                >
                  ✦
                </span>
              ))}
            </div>

            <div
              className={`reveal-up delay-4${heroReveal.visible ? " visible" : ""}`}
              style={{
                display: "inline-block",
                background: "rgba(201,169,110,0.12)",
                border: "1px solid rgba(201,169,110,0.3)",
                borderRadius: "99px",
                padding: "0.4rem 1.2rem",
                fontSize: "0.8rem",
                color: "#8B5E3C",
                backdropFilter: "blur(8px)",
              }}
            >
              🗓 Valid until: Season End 2025
            </div>
          </div>
        </section>

        {/* SEASONAL OFFERS */}
        <section
          ref={seasonReveal.ref}
          data-ocid="offers.seasonal.section"
          style={{
            position: "relative",
            background: "linear-gradient(180deg, #FFF8F0 0%, #FAF0E6 100%)",
            padding: "5rem 1.5rem",
            overflow: "hidden",
          }}
        >
          <Blob top="-60px" right="10%" size={350} opacity={0.07} />
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              className={`reveal-up${seasonReveal.visible ? " visible" : ""}`}
            >
              <SectionHeader
                eyebrow="Hot Right Now"
                title="Current Season Specials"
                subtitle="Handpicked bundles designed to give you the most premium experience at the most special price."
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {seasonalOffers.map((offer, idx) => (
                <SeasonCard
                  key={offer.id}
                  offer={offer}
                  idx={idx}
                  visible={seasonReveal.visible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMBO PACKAGES */}
        <section
          ref={comboReveal.ref}
          data-ocid="offers.combo.section"
          style={{
            position: "relative",
            background: "linear-gradient(180deg, #FAF0E6 0%, #F5EDE0 100%)",
            padding: "5rem 1.5rem",
            overflow: "hidden",
          }}
        >
          <Blob top="30%" left="-80px" size={380} opacity={0.06} />
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              className={`reveal-up${comboReveal.visible ? " visible" : ""}`}
            >
              <SectionHeader
                eyebrow="Smart Value"
                title="Smart Combo Deals"
                subtitle="Thoughtfully curated bundles — because beautiful moments deserve the best combination."
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {combos.map((combo, idx) => (
                <ComboCard
                  key={combo.id}
                  combo={combo}
                  idx={idx}
                  visible={comboReveal.visible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMY OFFERS */}
        <section
          ref={academyReveal.ref}
          data-ocid="offers.academy.section"
          style={{
            position: "relative",
            background: "#FFF8F0",
            padding: "5rem 1.5rem",
            overflow: "hidden",
          }}
        >
          <Blob top="0" right="0" size={500} opacity={0.06} />
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              className={`reveal-up${academyReveal.visible ? " visible" : ""}`}
            >
              <SectionHeader
                eyebrow="Learn & Save"
                title="Academy Admission Offers"
                subtitle="Start your professional makeup journey at the best possible price."
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {academyOfferItems.map((item, idx) => (
                <AcademyOfferCard
                  key={item.title}
                  item={item}
                  idx={idx}
                  visible={academyReveal.visible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LOYALTY PROGRAM */}
        <section
          ref={loyaltyReveal.ref}
          data-ocid="offers.loyalty.section"
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #FAF0E6 0%, #F5EDE0 60%, #FAF0E6 100%)",
            padding: "5rem 1.5rem",
            overflow: "hidden",
          }}
        >
          <Blob top="20%" left="50%" size={600} opacity={0.06} />
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              className={`reveal-up${loyaltyReveal.visible ? " visible" : ""}`}
            >
              <SectionHeader
                eyebrow="Rewards for You"
                title="Snehal's Golden Circle"
                subtitle="Our loyalty program — because every returning client deserves to feel like royalty."
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              {loyaltySteps.map((step) => (
                <div
                  key={step.step}
                  style={{
                    background: "rgba(255,250,245,0.85)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    borderRadius: "14px",
                    padding: "1.75rem",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(107,58,42,0.07)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: "#C9A96E",
                      marginBottom: "0.5rem",
                    }}
                  >
                    STEP {step.step}
                  </div>
                  <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
                    {step.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      fontSize: "1rem",
                      color: "#6B3A2A",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      color: "#8B5E3C",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {loyaltyTiers.map((tier, idx) => (
                <LoyaltyTierCard
                  key={tier.tier}
                  tier={tier}
                  idx={idx}
                  visible={loyaltyReveal.visible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* GIFT VOUCHERS */}
        <section
          ref={voucherReveal.ref}
          data-ocid="offers.vouchers.section"
          style={{
            position: "relative",
            background: "#FFF8F0",
            padding: "5rem 1.5rem",
            overflow: "hidden",
          }}
        >
          <Blob top="10%" right="5%" size={400} opacity={0.07} />
          <Blob top="60%" left="0" size={300} opacity={0.06} />
          <div
            style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
          >
            <div
              className={`reveal-up${voucherReveal.visible ? " visible" : ""}`}
            >
              <SectionHeader
                eyebrow="Give the Gift of Beauty"
                title="Gift the Gift of Beauty"
                subtitle="The most thoughtful gift for someone you love — a moment of luxury and transformation."
              />
            </div>
            <div
              className={`reveal-up delay-1${voucherReveal.visible ? " visible" : ""}`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(245,237,224,0.95) 50%, rgba(201,169,110,0.1) 100%)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(201,169,110,0.5)",
                borderRadius: "24px",
                padding: "3rem 2rem",
                margin: "0 auto 3rem",
                maxWidth: "560px",
                boxShadow:
                  "0 12px 60px rgba(201,169,110,0.2), 0 0 30px rgba(201,169,110,0.1)",
                animation: "pulse-glow 4s ease-in-out infinite",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>
                🎁
              </div>
              <h3
                className="voucher-shimmer"
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Snehal Pawar Beauty Voucher
              </h3>
              <p
                style={{
                  color: "#8B5E3C",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                Perfect for birthdays, anniversaries &amp; baby showers
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                {voucherDenoms.map((d) => (
                  <span
                    key={d}
                    style={{
                      background: "rgba(201,169,110,0.15)",
                      border: "1px solid rgba(201,169,110,0.4)",
                      borderRadius: "8px",
                      padding: "0.5rem 1rem",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#6B3A2A",
                      fontFamily: "Playfair Display, Georgia, serif",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`reveal-up delay-2${voucherReveal.visible ? " visible" : ""}`}
            >
              <a
                href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20would%20like%20to%20purchase%20a%20beauty%20gift%20voucher!"
                target="_blank"
                rel="noreferrer"
                data-ocid="offers.voucher.whatsapp_button"
                className="gold-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#2C1810",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  padding: "0.85rem 2rem",
                  borderRadius: "50px",
                  letterSpacing: "0.04em",
                }}
              >
                💬 WhatsApp Us for Your Voucher
              </a>
            </div>
          </div>
        </section>

        {/* T&C */}
        <section style={{ background: "#FAF0E6", padding: "3rem 1.5rem" }}>
          <div
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#C9A96E",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Terms &amp; Conditions
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.75rem 2rem",
              }}
            >
              {tcItems.map((t) => (
                <li
                  key={t}
                  style={{
                    fontSize: "0.8rem",
                    color: "#8B5E3C",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <span style={{ color: "#C9A96E", fontSize: "0.6rem" }}>
                    ●
                  </span>{" "}
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          ref={ctaReveal.ref}
          data-ocid="offers.cta.section"
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #FAF0E6 0%, #FFF8F0 50%, #F5EDE0 100%)",
            padding: "6rem 1.5rem",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Blob top="-40px" left="50%" size={600} opacity={0.08} />
          <FloatingOrb
            size={100}
            top="10%"
            left="5%"
            color="#C9A96E"
            delay={0}
            duration={5}
            shape="ring"
          />
          <FloatingOrb
            size={70}
            top="20%"
            right="8%"
            color="#B8865C"
            delay={1.5}
            duration={6}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              className={`reveal-up${ctaReveal.visible ? " visible" : ""}`}
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "#C9A96E",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Don't Wait — Limited Slots
            </p>
            <h2
              className={`reveal-up delay-1${ctaReveal.visible ? " visible" : ""}`}
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#6B3A2A",
                fontWeight: 700,
                textShadow: "0 0 30px rgba(201,169,110,0.2)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Ready to Book?
              <br />
              <span style={{ color: "#C9A96E" }}>
                Get the Best Deal on WhatsApp
              </span>
            </h2>
            <p
              className={`reveal-up delay-2${ctaReveal.visible ? " visible" : ""}`}
              style={{
                color: "#8B5E3C",
                fontSize: "1rem",
                marginBottom: "2.5rem",
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
              }}
            >
              Message Snehal directly — mention the offer you want and we'll
              confirm your slot instantly!
            </p>
            <div
              className={`reveal-up delay-3${ctaReveal.visible ? " visible" : ""}`}
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
                href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20am%20interested%20in%20a%20special%20offer%20and%20want%20to%20book%20a%20slot!"
                target="_blank"
                rel="noreferrer"
                data-ocid="offers.cta.whatsapp_button"
                className="gold-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#2C1810",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 700,
                  padding: "1rem 2.5rem",
                  borderRadius: "50px",
                  letterSpacing: "0.04em",
                }}
              >
                💬 Book on WhatsApp Now
              </a>
              <a
                href="tel:09561548151"
                data-ocid="offers.cta.call_button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#6B3A2A",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "1rem 2.5rem",
                  borderRadius: "50px",
                  border: "1.5px solid rgba(201,169,110,0.5)",
                  background: "rgba(255,250,245,0.8)",
                  backdropFilter: "blur(8px)",
                  letterSpacing: "0.04em",
                  transition: "all 0.3s ease",
                }}
              >
                📞 Call Us Directly
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── Static data arrays (defined after component to avoid hoisting issues) ───

const academyOfferItems = [
  {
    icon: "🎓",
    title: "Early Enrollment Discount",
    desc: "Enroll in Basic or Advanced courses before month-end and get 10% off on total fees.",
    badge: "10% OFF",
    badgeColor: "#C9A96E",
  },
  {
    icon: "👯",
    title: "Refer a Friend",
    desc: "Refer a friend to any academy course. Both of you get ₹500 off on your fees — spread the love!",
    badge: "₹500 OFF EACH",
    badgeColor: "#8B5E3C",
  },
  {
    icon: "📦",
    title: "Course Bundle Deal",
    desc: "Enroll in Basic Makeup + Bridal Makeup courses together and pay only ₹35,000 — a saving of ₹8,000!",
    badge: "SAVE ₹8,000",
    badgeColor: "#6B3A2A",
  },
];

const loyaltySteps = [
  {
    step: "01",
    icon: "📅",
    title: "Book Any Service",
    desc: "Every booking earns loyalty points automatically.",
  },
  {
    step: "02",
    icon: "⭐",
    title: "Collect 500 Points",
    desc: "Redeem 500 points for ₹500 off your next booking.",
  },
  {
    step: "03",
    icon: "👑",
    title: "Gold Member Perks",
    desc: "5+ bookings unlocks priority slots + exclusive discounts.",
  },
];

const tcItems = [
  "Valid on new bookings only",
  "Offers cannot be clubbed with other discounts",
  "Subject to slot availability",
  "Prices inclusive of all applicable taxes",
  "Snehal Pawar reserves the right to modify offers",
];

// ─── Sub-components ──────────────────────────────────────────────────────

function SeasonCard({
  offer,
  idx,
  visible,
}: { offer: (typeof seasonalOffers)[0]; idx: number; visible: boolean }) {
  const tilt = useTilt();
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      data-ocid={`offers.seasonal.item.${idx + 1}`}
      className={`reveal-up delay-${(idx + 1) as 1 | 2 | 3} offer-card-tilt${visible ? " visible" : ""}`}
      style={{
        background: offer.popular
          ? "linear-gradient(145deg, rgba(201,169,110,0.15), rgba(245,237,224,0.95))"
          : "rgba(255,250,245,0.85)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${offer.popular ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.25)"}`,
        borderRadius: "20px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: offer.popular
          ? "0 8px 40px rgba(201,169,110,0.2), 0 0 20px rgba(201,169,110,0.08)"
          : "0 4px 24px rgba(107,58,42,0.08)",
        animation: offer.popular
          ? "pulse-glow 3s ease-in-out infinite"
          : undefined,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: offer.popular
            ? "linear-gradient(135deg, #C9A96E, #E8C76A)"
            : "rgba(201,169,110,0.15)",
          color: offer.popular ? "#2C1810" : "#8B5E3C",
          fontSize: "0.6rem",
          fontWeight: 700,
          padding: "0.3rem 0.7rem",
          borderRadius: "99px",
          letterSpacing: "0.1em",
          border: offer.popular ? "none" : "1px solid rgba(201,169,110,0.3)",
          boxShadow: offer.popular ? "0 0 12px rgba(201,169,110,0.4)" : "none",
          animation: offer.popular
            ? "badgePulse 2.5s ease-in-out infinite"
            : undefined,
        }}
      >
        {offer.popular ? "⭐ BEST VALUE" : offer.badge}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.3rem",
          background: "rgba(201,169,110,0.12)",
          border: "1px solid rgba(201,169,110,0.3)",
          borderRadius: "6px",
          padding: "0.25rem 0.6rem",
          fontSize: "0.75rem",
          color: "#8B5E3C",
          marginBottom: "1rem",
          boxShadow: "0 0 8px rgba(201,169,110,0.2)",
        }}
      >
        🏷 Save {offer.savePct}
      </div>
      <h3
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "1.35rem",
          color: "#6B3A2A",
          fontWeight: 700,
          marginBottom: "0.4rem",
          lineHeight: 1.3,
        }}
      >
        {offer.title}
      </h3>
      <p
        style={{
          color: "#8B5E3C",
          fontSize: "0.85rem",
          marginBottom: "1.25rem",
          lineHeight: 1.6,
        }}
      >
        {offer.tagline}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.75rem",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#6B3A2A",
          }}
        >
          {offer.offer}
        </span>
        <span
          style={{
            fontSize: "0.9rem",
            color: "#B8865C",
            textDecoration: "line-through",
          }}
        >
          {offer.original}
        </span>
      </div>
      <p
        style={{
          fontSize: "0.8rem",
          color: "#C9A96E",
          fontWeight: 600,
          marginBottom: "1.25rem",
        }}
      >
        You save {offer.save}
      </p>
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)",
          marginBottom: "1.25rem",
        }}
      />
      <ul style={{ listStyle: "none", margin: "0 0 1.5rem", padding: 0 }}>
        {offer.includes.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              gap: "0.6rem",
              marginBottom: "0.5rem",
              fontSize: "0.85rem",
              color: "#6B3A2A",
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span> {item}
          </li>
        ))}
      </ul>
      <div
        style={{
          marginBottom: "1rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "rgba(201,169,110,0.08)",
          border: "1px solid rgba(201,169,110,0.2)",
          borderRadius: "6px",
          padding: "0.25rem 0.75rem",
          fontSize: "0.75rem",
          color: "#8B5E3C",
        }}
      >
        🔥 {offer.slots}
      </div>
      <a
        href={`https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(offer.title)}%20offer!`}
        target="_blank"
        rel="noreferrer"
        data-ocid={`offers.seasonal.book_button.${idx + 1}`}
        className="gold-btn"
        style={{
          display: "block",
          textAlign: "center",
          color: "#2C1810",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: 700,
          padding: "0.85rem",
          borderRadius: "10px",
          letterSpacing: "0.04em",
        }}
      >
        💬 Book Now
      </a>
    </div>
  );
}

function ComboCard({
  combo,
  idx,
  visible,
}: { combo: (typeof combos)[0]; idx: number; visible: boolean }) {
  const tilt = useTilt();
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      data-ocid={`offers.combo.item.${idx + 1}`}
      className={`reveal-up delay-${(idx + 1) as 1 | 2 | 3 | 4} offer-card-tilt${visible ? " visible" : ""}`}
      style={{
        background: "rgba(255,250,245,0.88)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(201,169,110,0.3)",
        borderRadius: "16px",
        padding: "1.75rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(107,58,42,0.08)",
      }}
    >
      <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
        {combo.icon}
      </div>
      <h3
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "1.1rem",
          color: "#6B3A2A",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        {combo.title}
      </h3>
      <p
        style={{
          color: "#8B5E3C",
          fontSize: "0.85rem",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
        }}
      >
        {combo.desc}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#6B3A2A",
          }}
        >
          {combo.price}
        </span>
        <span
          style={{
            background: "rgba(201,169,110,0.12)",
            border: "1px solid rgba(201,169,110,0.3)",
            borderRadius: "6px",
            padding: "0.2rem 0.6rem",
            fontSize: "0.75rem",
            color: "#8B5E3C",
            fontWeight: 600,
          }}
        >
          Save {combo.save}
        </span>
      </div>
      <a
        href={`https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(combo.title)}%20combo!`}
        target="_blank"
        rel="noreferrer"
        data-ocid={`offers.combo.book_button.${idx + 1}`}
        className="gold-btn"
        style={{
          display: "block",
          textAlign: "center",
          color: "#2C1810",
          textDecoration: "none",
          fontSize: "0.85rem",
          fontWeight: 700,
          padding: "0.75rem",
          borderRadius: "8px",
          marginTop: "1.25rem",
          letterSpacing: "0.04em",
        }}
      >
        Book This Combo
      </a>
    </div>
  );
}

type AcademyItem = {
  icon: string;
  title: string;
  desc: string;
  badge: string;
  badgeColor: string;
};

function AcademyOfferCard({
  item,
  idx,
  visible,
}: { item: AcademyItem; idx: number; visible: boolean }) {
  return (
    <div
      className={`reveal-up delay-${(idx + 1) as 1 | 2 | 3} offer-card-tilt${visible ? " visible" : ""}`}
      style={{
        background: "rgba(255,250,245,0.85)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(201,169,110,0.3)",
        borderRadius: "16px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(107,58,42,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: `linear-gradient(135deg, ${item.badgeColor}, #E8C76A)`,
          color: "#FFF8F0",
          fontSize: "0.6rem",
          fontWeight: 700,
          padding: "0.3rem 0.75rem",
          borderRadius: "99px",
          letterSpacing: "0.08em",
          boxShadow: "0 0 12px rgba(201,169,110,0.4)",
          animation: "badgePulse 2.5s ease-in-out infinite",
        }}
      >
        {item.badge}
      </div>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {item.icon}
      </div>
      <h3
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "1.2rem",
          color: "#6B3A2A",
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          color: "#8B5E3C",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
        }}
      >
        {item.desc}
      </p>
      <a
        href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20want%20to%20enquire%20about%20Academy%20enrollment%20offers!"
        target="_blank"
        rel="noreferrer"
        data-ocid={`offers.academy.enquire_button.${idx + 1}`}
        className="gold-btn"
        style={{
          display: "inline-block",
          color: "#2C1810",
          textDecoration: "none",
          fontSize: "0.85rem",
          fontWeight: 700,
          padding: "0.7rem 1.5rem",
          borderRadius: "8px",
          letterSpacing: "0.04em",
        }}
      >
        Enquire Now
      </a>
    </div>
  );
}

type LoyaltyTier = {
  tier: string;
  bookings: string;
  icon: string;
  color: string;
  benefits: string[];
};

function LoyaltyTierCard({
  tier,
  idx,
  visible,
}: { tier: LoyaltyTier; idx: number; visible: boolean }) {
  return (
    <div
      data-ocid={`offers.loyalty.tier.${idx + 1}`}
      className={`reveal-up delay-${(idx + 1) as 1 | 2 | 3} loyalty-card${visible ? " visible" : ""}`}
      style={{
        background:
          tier.tier === "Platinum"
            ? "linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(184,134,92,0.1) 100%)"
            : "rgba(255,250,245,0.9)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${tier.tier === "Platinum" ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.2)"}`,
        borderRadius: "18px",
        padding: "2rem",
        position: "relative",
        animation:
          tier.tier === "Platinum"
            ? "pulse-glow 3s ease-in-out infinite"
            : undefined,
        boxShadow:
          tier.tier === "Platinum"
            ? "0 8px 40px rgba(201,169,110,0.2)"
            : "0 4px 20px rgba(107,58,42,0.07)",
      }}
    >
      {tier.tier === "Platinum" && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #C9A96E, #E8C76A)",
            color: "#2C1810",
            fontSize: "0.6rem",
            fontWeight: 700,
            padding: "0.3rem 1rem",
            borderRadius: "0 0 8px 8px",
            letterSpacing: "0.12em",
            boxShadow: "0 0 16px rgba(201,169,110,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          MOST EXCLUSIVE
        </div>
      )}
      <div
        style={{
          textAlign: "center",
          marginBottom: "1.25rem",
          paddingTop: tier.tier === "Platinum" ? "0.5rem" : 0,
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          {tier.icon}
        </div>
        <h3
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "1.4rem",
            color: tier.color,
            fontWeight: 700,
          }}
        >
          {tier.tier}
        </h3>
        <p
          style={{ fontSize: "0.8rem", color: "#8B5E3C", marginTop: "0.25rem" }}
        >
          {tier.bookings}
        </p>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {tier.benefits.map((b) => (
          <li
            key={b}
            style={{
              display: "flex",
              gap: "0.6rem",
              marginBottom: "0.6rem",
              fontSize: "0.875rem",
              color: "#6B3A2A",
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "#C9A96E", flexShrink: 0 }}>✦</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
