"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Informacje", href: "#info" },
  { label: "Harmonogram", href: "#schedule" },
  { label: "Dojazd", href: "#maps" },
  { label: "Noclegi", href: "#accommodation" },

  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-wedding-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className={`font-serif text-2xl font-light tracking-wide transition-colors ${
            scrolled ? "text-wedding-800" : "text-white"
          }`}
        >
          J&K
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-light tracking-wide transition-colors ${
                scrolled
                  ? "text-wedding-700 hover:text-wedding-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center rounded-lg bg-wedding-700 px-5 py-2 text-sm font-medium text-white hover:bg-wedding-800 transition-colors"
          >
            RSVP
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-wedding-700" : "text-white"
          }`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-wedding-200 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-light text-wedding-700 hover:text-wedding-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            onClick={() => setMobileOpen(false)}
            className="block text-center rounded-lg bg-wedding-700 px-4 py-2 text-sm font-medium text-white"
          >
            RSVP
          </a>
        </div>
      )}
    </nav>
  );
}
