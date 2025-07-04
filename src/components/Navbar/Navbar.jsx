import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (open) setOpen(false);
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/o-mnie", label: "O mnie" },
    { path: "/dorobek-naukowy", label: "Dorobek naukowy" },
    { path: "/dzialalnosc-edukacyjna", label: "Działalność edukacyjna" },
    { path: "/media", label: "Media" },
    { path: "/wspolpraca", label: "Współpraca" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md shadow-lg border-b border-[var(--color-primary)]/20"
          : "bg-[var(--color-bg)] border-b border-[var(--color-primary)]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center space-x-2 text-[var(--color-primary)] font-bold text-xl sm:text-2xl hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-[var(--color-primary)] group-hover:border-[var(--color-accent)] rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-300">
            MP
          </div>
          <div className="hidden sm:block">
            <div className="text-base sm:text-lg font-bold leading-tight">
              dr Małgorzata Pilecka
            </div>
            <div className="text-xs text-[var(--color-primary)]/70 font-normal -mt-1">
              prof. AkAt
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-all duration-300 hover:text-[var(--color-accent)] whitespace-nowrap ${
                isActive(item.path)
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-primary)]"
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Contact Button - Separate element on the right */}
        <div className="hidden lg:block">
          <Link
            to="/kontakt"
            className="bg-[var(--color-accent)] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold hover:bg-[var(--color-copper)] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Kontakt →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-2xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-bg-section)]/30 rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          aria-label="Toggle menu"
        >
          <div
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            {open ? <HiX /> : <HiMenu />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: scrolled ? "73px" : "77px" }}
        onClick={() => setOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`bg-[var(--color-bg)] border-b border-[var(--color-primary)]/20 shadow-xl transform transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:translate-x-2 ${
                  isActive(item.path)
                    ? "text-[var(--color-accent)] bg-[var(--color-bg-section)]/50 border-l-4 border-[var(--color-accent)]"
                    : "text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-section)]/30"
                }`}
                style={{
                  animationDelay: open ? `${index * 50}ms` : "0ms",
                  animation: open
                    ? "slideInLeft 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-[var(--color-primary)]/20">
              <Link
                to="/kontakt"
                className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white w-full text-center py-3 text-base font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  animationDelay: open ? `${navItems.length * 50}ms` : "0ms",
                  animation: open
                    ? "slideInLeft 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <FaEnvelope size={16} />
                Skontaktuj się ze mną
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
