import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#research", label: "Research", id: "research" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#certificates", label: "Certificates", id: "certificates" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        frame = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openCommandPalette = () => {
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header
      className={`portfolio-navbar fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "portfolio-navbar--scrolled py-3" : "py-5"
      }`}
    >
      <nav className="site-container flex items-center justify-between gap-4">
        <a
          href="#top"
          className="portfolio-logo group shrink-0 text-lg font-black tracking-[-0.04em]"
          aria-label="Go to top"
          onClick={closeMobileMenu}
        >
          FK<span>.</span>
        </a>

        <div className="portfolio-nav-links hidden items-center rounded-full border px-1.5 py-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`portfolio-nav-link rounded-full px-3 py-2 text-[12.5px] transition-all duration-300 ${
                activeSection === link.id ? "is-active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button
            type="button"
            className="nav-command-button"
            onClick={openCommandPalette}
            aria-label="Open quick navigation"
            title="Quick navigation (Ctrl or Cmd + K)"
          >
            <Search size={15} />
            <span>Quick</span>
            <kbd>⌘K</kbd>
          </button>

          <a href="#contact" className="portfolio-talk-link">
            Let&apos;s talk <span>↗</span>
          </a>
        </div>

        <button
          type="button"
          className="portfolio-menu-button lg:hidden"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="site-container mt-3 lg:hidden">
          <div className="portfolio-mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMobileMenu}
                className={`portfolio-mobile-link ${
                  activeSection === link.id ? "is-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            <button type="button" onClick={openCommandPalette} className="mobile-command-button">
              <span className="inline-flex items-center gap-2"><Search size={16} /> Quick navigation</span>
              <kbd>⌘K</kbd>
            </button>

            <a href="#contact" onClick={closeMobileMenu} className="portfolio-mobile-contact">
              Contact Me
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
