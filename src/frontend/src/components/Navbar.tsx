import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  label: string;
  to: string;
  type: "route" | "scroll";
  hot?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", to: "/", type: "route" },
  { label: "About", to: "/about", type: "route" },
  { label: "Portfolio", to: "/portfolio", type: "route" },
  { label: "Bridal Packages", to: "/bridal-packages", type: "route" },
  { label: "Academy", to: "/academy", type: "route" },
  { label: "Blog", to: "/blog", type: "route" },
  { label: "Testimonials", to: "/testimonials", type: "route" },
  { label: "Offers", to: "/offers", type: "route", hot: true },
  { label: "Contact", to: "/contact", type: "route" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollLink = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* NAVBAR BAR */}
      <nav
        data-ocid="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255,248,240,0.98)"
            : "rgba(255,248,240,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201,169,110,0.4)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(107,58,42,0.12)"
            : "0 2px 10px rgba(107,58,42,0.07)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            data-ocid="navbar.logo"
          >
            <div
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                lineHeight: 1.2,
              }}
            >
              <div
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#6B3A2A",
                  letterSpacing: "0.02em",
                }}
              >
                Makeup by Snehal Pawar
              </div>
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 400,
                  color: "#C9A96E",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Beauty &amp; Bridal Academy
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div
            className="hidden md:flex"
            style={{ gap: "1.75rem", alignItems: "center" }}
          >
            {navLinks.map((link) => {
              const isActive =
                link.type === "route" && location.pathname === link.to;
              if (link.type === "scroll") {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleScrollLink(link.to)}
                    data-ocid={`navbar.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#6B3A2A",
                      letterSpacing: "0.03em",
                      padding: "0.3rem 0",
                      borderBottom: "2px solid transparent",
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#C9A96E";
                      (
                        e.currentTarget as HTMLButtonElement
                      ).style.borderBottomColor = "#C9A96E";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#6B3A2A";
                      (
                        e.currentTarget as HTMLButtonElement
                      ).style.borderBottomColor = "transparent";
                    }}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  data-ocid={`navbar.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "#C9A96E" : "#6B3A2A",
                    borderBottom: isActive
                      ? "2px solid #C9A96E"
                      : "2px solid transparent",
                    padding: "0.3rem 0",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.03em",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#C9A96E";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderBottomColor = "rgba(201,169,110,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#6B3A2A";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderBottomColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {link.hot && (
                    <span
                      style={{
                        fontSize: "0.55rem",
                        fontWeight: 800,
                        letterSpacing: "0.05em",
                        padding: "1px 5px",
                        borderRadius: "6px",
                        background: "linear-gradient(135deg, #C9A96E, #B8865C)",
                        color: "#FFF8F0",
                        textTransform: "uppercase",
                        lineHeight: 1.5,
                        boxShadow: "0 0 8px rgba(201,169,110,0.5)",
                        animation: "pulse-hot 2s ease-in-out infinite",
                      }}
                    >
                      HOT
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Book Now CTA */}
            <a
              href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20would%20like%20to%20book%20an%20appointment!"
              target="_blank"
              rel="noreferrer"
              data-ocid="navbar.book_now_button"
              style={{
                background: "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
                color: "#FFF8F0",
                fontSize: "0.8rem",
                fontWeight: 600,
                padding: "0.5rem 1.2rem",
                borderRadius: "50px",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 12px rgba(107,58,42,0.25)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 20px rgba(107,58,42,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 2px 12px rgba(107,58,42,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Book Now
            </a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
            data-ocid="navbar.hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#6B3A2A",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                background: "#C9A96E",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#6B3A2A",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        role="button"
        tabIndex={-1}
        data-ocid="navbar.mobile_overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(44,24,16,0.55)",
          zIndex: 1001,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* MOBILE DRAWER */}
      <div
        data-ocid="navbar.mobile_menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(300px, 88vw)",
          background: "#FFF8F0",
          zIndex: 1002,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-6px 0 40px rgba(107,58,42,0.18)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid rgba(201,169,110,0.3)",
            background:
              "linear-gradient(135deg, rgba(245,237,224,0.8), rgba(255,248,240,0.9))",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "1rem",
              color: "#6B3A2A",
              fontWeight: 700,
            }}
          >
            Makeup by Snehal
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            data-ocid="navbar.close_button"
            aria-label="Close menu"
            style={{
              background: "none",
              border: "1px solid rgba(201,169,110,0.4)",
              cursor: "pointer",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              color: "#6B3A2A",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <div style={{ flex: 1 }}>
          {navLinks.map((link, idx) => {
            const isActive =
              link.type === "route" && location.pathname === link.to;
            if (link.type === "scroll") {
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleScrollLink(link.to)}
                  data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "block",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#6B3A2A",
                    borderBottom:
                      idx === navLinks.length - 1
                        ? "1px solid rgba(201,169,110,0)"
                        : "1px solid rgba(201,169,110,0.2)",
                    fontFamily: "inherit",
                    letterSpacing: "0.02em",
                  }}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem 1.5rem",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: isActive ? "#C9A96E" : "#6B3A2A",
                  background: isActive
                    ? "rgba(201,169,110,0.1)"
                    : "transparent",
                  borderBottom: "1px solid rgba(201,169,110,0.2)",
                  letterSpacing: "0.02em",
                  borderLeft: isActive
                    ? "3px solid #C9A96E"
                    : "3px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer footer */}
        <div
          style={{
            padding: "1.5rem",
            borderTop: "1px solid rgba(201,169,110,0.3)",
            background: "rgba(245,237,224,0.5)",
          }}
        >
          <a
            href="https://wa.me/919561548151?text=Hi%20Snehal%2C%20I%20would%20like%20to%20book%20an%20appointment!"
            target="_blank"
            rel="noreferrer"
            data-ocid="navbar.mobile_book_button"
            style={{
              display: "block",
              textAlign: "center",
              background: "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
              color: "#FFF8F0",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              padding: "0.85rem",
              borderRadius: "8px",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            📅 Book Appointment
          </a>
          <p
            style={{
              color: "#8B5E3C",
              fontSize: "0.8rem",
              textAlign: "center",
              margin: 0,
            }}
          >
            📞 09561548151
          </p>
          <p
            style={{
              color: "#8B5E3C",
              fontSize: "0.75rem",
              textAlign: "center",
              marginTop: "0.25rem",
            }}
          >
            Sai Nagar, Amravati
          </p>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div style={{ height: "68px" }} />
    </>
  );
}
