import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#certificates", label: "Certificates", id: "certificates" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        frame = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="site-container flex items-center justify-between">
        <a
          href="#top"
          className="group text-lg font-black tracking-[-0.04em] text-white"
          aria-label="Go to top"
        >
          FK<span className="text-blue-400 transition-colors group-hover:text-cyan-300">.</span>
        </a>

        <div
          className={`hidden items-center rounded-full border px-1.5 py-1 md:flex transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-[#0b1120]/82 shadow-[0_12px_45px_rgba(0,0,0,.28)] backdrop-blur-xl"
              : "border-white/[0.07] bg-white/[0.035] backdrop-blur-md"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-white/[0.08] text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden text-sm font-semibold text-slate-200 transition-colors hover:text-blue-300 md:block"
        >
          Let&apos;s talk <span className="text-blue-400">↗</span>
        </a>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="site-container mt-3 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-[#0b1120]/95 p-3 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
