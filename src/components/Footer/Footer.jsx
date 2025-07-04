import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCookie,
  FaFileContract,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/o-mnie", label: "O mnie" },
    { href: "/wspolpraca", label: "Współpraca" },
    { href: "/dzialalnosc-edukacyjna", label: "Działalność edukacyjna" },
    { href: "/media", label: "Media" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const quickLinks = [
    { href: "/dorobek-naukowy", label: "Dorobek naukowy" },
    { href: "/publikacje", label: "Publikacje" },
    { href: "/badania", label: "Badania" },
    { href: "/dydaktyka", label: "Dydaktyka" },
  ];

  const socialLinks = [
    {
      href: "#",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      href: "#",
      icon: FaFacebookF,
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      href: "#",
      icon: FaInstagram,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <footer className="mt-16 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-section)]">
      {/* Main Footer Content */}
      <div className="bg-[var(--color-bg-section)]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[var(--color-primary)] rounded-xl text-sm font-bold text-[var(--color-primary)] bg-[var(--color-bg)]">
                  MP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">
                    dr Małgorzata Pilecka, prof. AkAt
                  </h3>
                  <p className="text-sm text-[var(--color-primary)]/80">
                    Katedra Pedagogiki Przedszkolnej i Wczesnoszkolnej
                  </p>
                  <p className="text-xs text-[var(--color-primary)]/70">
                    Akademia Ateneum w Gdańsku
                  </p>
                </div>
              </div>

              <p className="text-[var(--color-primary)]/90 leading-relaxed max-w-md">
                Ponad 30 lat doświadczenia w pracy akademickiej. Pasjonuję się
                nauką, dydaktyką i rozwojem młodych umysłów. Zapraszam do
                zapoznania się z moim dorobkiem naukowym.
              </p>

              {/* Contact Info with Bot Protection */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[var(--color-primary)]/80">
                  <FaEnvelope className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-sm font-mono select-all">
                    m.pilecka{"\u0040"}ateneum.edu.pl
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--color-primary)]/80">
                  <FaPhone className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-sm font-mono select-all">
                    503{"\u00A0"}372{"\u00A0"}710
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-[var(--color-primary)]/80">
                  <FaMapMarkerAlt className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div>ul. 3 Maja 25a</div>
                    <div>80-802 Gdańsk</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-[var(--color-primary)]/80">
                  <FaExternalLinkAlt className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <a
                    href="https://orcid.org/0000-0002-4815-2949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    ORCID: 0000-0002-4815-2949
                  </a>
                </div>
              </div>

              {/* Social Media - Mobile/Tablet Version */}
              <div className="lg:hidden pt-6">
                <h5 className="text-sm font-medium text-[var(--color-primary)] mb-4">
                  Śledź mnie
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-12 h-12 flex items-center justify-center bg-[var(--color-bg)] border border-[var(--color-primary)]/30 rounded-lg text-[var(--color-primary)] ${social.color} hover:border-current transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Links - Desktop Only */}
            <div className="hidden lg:block space-y-6">
              <h4 className="text-lg font-semibold text-[var(--color-primary)] border-b-2 border-[var(--color-accent)] pb-2 inline-block">
                Nawigacja
              </h4>
              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-[var(--color-primary)]/80 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Quick Links - Desktop Only */}
            <div className="hidden lg:block space-y-6">
              <h4 className="text-lg font-semibold text-[var(--color-primary)] border-b-2 border-[var(--color-accent)] pb-2 inline-block">
                Szybkie linki
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-[var(--color-primary)]/80 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social Media - Desktop Version */}
              <div className="pt-4">
                <h5 className="text-sm font-medium text-[var(--color-primary)] mb-4">
                  Śledź mnie
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-10 h-10 flex items-center justify-center bg-[var(--color-bg)] border border-[var(--color-primary)]/30 rounded-lg text-[var(--color-primary)] ${social.color} hover:border-current transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      >
                        <IconComponent size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GDPR Privacy Notice Section */}
      <div className="bg-[var(--color-bg-section)]/40 border-t border-[var(--color-primary)]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-primary)]/70">
            <FaShieldAlt className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Twoje dane są chronione zgodnie z RODO</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--color-primary)] text-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-90">
                © {currentYear} dr Małgorzata Pilecka, prof. AkAt. Wszystkie
                prawa zastrzeżone.
              </span>
            </div>

            {/* Center Logo */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-bg)]/50 rounded-lg text-xs font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300">
                MP
              </div>
            </div>

            {/* Legal Links - Simplified for Bottom */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link
                to="/terms"
                className="opacity-90 hover:opacity-100 hover:text-[var(--color-gold)] transition-all duration-300"
              >
                Regulamin
              </Link>
              <span className="opacity-50">•</span>
              <Link
                to="/privacy"
                className="opacity-90 hover:opacity-100 hover:text-[var(--color-gold)] transition-all duration-300"
              >
                Prywatność
              </Link>
              <span className="opacity-50">•</span>
              <Link
                to="/cookies"
                className="opacity-90 hover:opacity-100 hover:text-[var(--color-gold)] transition-all duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-copper)]"></div>
    </footer>
  );
}
