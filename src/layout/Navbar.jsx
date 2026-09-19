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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="site-container flex items-center justify-between gap-4">
        <a
          href="#top"
          className="group shrink-0 text-lg font-black tracking-[-0.04em] text-white"
          aria-label="Go to top"
          onClick={closeMobileMenu}
        >
          FK
          <span className="text-blue-400 transition-colors group-hover:text-cyan-300">.</span>
        </a>

        <div
          className={`hidden items-center rounded-full border px-1.5 py-1 lg:flex transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-[#0b1120]/82 shadow-[0_12px_45px_rgba(0,0,0,.28)] backdrop-blur-xl"
              : "border-white/[0.07] bg-white/[0.035] backdrop-blur-md"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-full px-3 py-2 text-[12.5px] transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.035)]"
                  : "text-slate-400 hover:bg-white/[0.035] hover:text-white"
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

          <a
            href="#contact"
            className="inline-flex items-center text-sm font-semibold text-slate-200 transition-colors hover:text-cyan-300"
          >
            Let&apos;s talk <span className="ml-1 text-blue-400">↗</span>
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white transition hover:bg-white/[0.07] lg:hidden"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="site-container mt-3 lg:hidden">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120]/95 p-2 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-white/[0.07] text-white"
                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button type="button" onClick={openCommandPalette} className="mobile-command-button">
              <span className="inline-flex items-center gap-2"><Search size={16} /> Quick navigation</span>
              <kbd>⌘K</kbd>
            </button>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-1 flex items-center justify-between rounded-xl border border-blue-400/10 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/15 hover:text-cyan-200"
            >
              Contact Me
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
