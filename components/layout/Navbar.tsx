"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

const ANTARANYA_LINKS = [
  { label: "About", href: "/antaranya#about" },
  { label: "Our Villas", href: "/antaranya#villas" },
  { label: "Plot Map", href: "/antaranya#plot-map" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAntaranya = pathname === "/antaranya";

  const links = isAntaranya ? ANTARANYA_LINKS : NAV_LINKS;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          scrolled || mobileOpen
            ? "bg-green/70 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }
      `}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5">

        {/* ── Logo ───────────────────────────────────── */}
        <a href="/" className="flex items-center group">
          <img
            src="/media/silhaara-logo.png"
            alt="Silhaara"
            className="
              h-12 md:h-14 lg:h-16
              w-auto
              object-cover
              rounded-full
              scale-110
            "
          />
        </a>

        {/* ── Desktop Navigation ────────────────────── */}
        <div className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                relative text-ivory/72 hover:text-ivory
                text-[11px] tracking-[0.28em] uppercase
                transition-colors duration-300
                after:absolute after:left-0 after:-bottom-1
                after:h-px after:w-0 after:bg-gold
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}

          {/* CTA only on main website */}
          {!isAntaranya && (
            <a
              href="/#contact"
              className="
                ml-4 px-6 py-2.5
                text-[11px] tracking-[0.25em] uppercase
                border border-gold text-gold
                hover:bg-gold hover:text-green
                transition-all duration-500 ease-out
                hover:shadow-[0_8px_24px_rgba(230,197,148,0.25)]
              "
            >
              Schedule a Call
            </a>
          )}

        </div>

        {/* ── Mobile Menu Button ───────────────────── */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="md:hidden flex flex-col justify-center gap-[6px] p-1"
        >
          <span
            className={`
              block h-px w-6 bg-ivory
              transition-all duration-300 origin-center
              ${
                mobileOpen
                  ? "rotate-45 translate-y-[7px]"
                  : ""
              }
            `}
          />

          <span
            className={`
              block h-px w-6 bg-ivory
              transition-all duration-300
              ${
                mobileOpen
                  ? "opacity-0 scale-x-0"
                  : ""
              }
            `}
          />

          <span
            className={`
              block h-px w-6 bg-ivory
              transition-all duration-300 origin-center
              ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : ""
              }
            `}
          />
        </button>

      </nav>

      {/* ── Mobile Menu ───────────────────────────── */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-7 px-6 pb-8 pt-2">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="
                text-ivory/70 hover:text-ivory
                text-xs tracking-[0.3em] uppercase
                transition-colors duration-300
              "
            >
              {link.label}
            </a>
          ))}

          {!isAntaranya && (
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="
                self-start mt-2 px-6 py-2.5
                text-xs tracking-[0.25em] uppercase
                border border-gold text-gold
                hover:bg-gold hover:text-green
                transition-all duration-500
              "
            >
              Schedule a Call
            </a>
          )}

        </div>
      </div>

    </header>
  );
}