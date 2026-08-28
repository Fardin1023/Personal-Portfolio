import {
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const navLinks = [
  {
    href: "#about",
    label: "About",
    id: "about",
  },

  {
    href: "#education",
    label: "Education",
    id: "education",
  },

  {
    href: "#projects",
    label: "Projects",
    id: "projects",
  },

  {
    href: "#experience",
    label: "Experience",
    id: "experience",
  },

  {
    href: "#certificates",
    label: "Certificates",
    id: "certificates",
  },
];

export const Navbar = () => {
  const [
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  ] = useState(false);

  const [
    isScrolled,
    setIsScrolled,
  ] = useState(false);

  const [
    activeSection,
    setActiveSection,
  ] = useState("about");

  /* ==================================================
     NAVBAR BACKGROUND WHEN SCROLLING
     ================================================== */

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        setIsScrolled(
          window.scrollY > 24
        );

        frame = null;
      });
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  /* ==================================================
     ACTIVE SECTION DETECTION
     ================================================== */

  useEffect(() => {
    const sections = navLinks
      .map((link) =>
        document.getElementById(
          link.id
        )
      )
      .filter(Boolean);

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntry =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              )[0];

          if (visibleEntry) {
            setActiveSection(
              visibleEntry.target.id
            );
          }
        },

        {
          rootMargin:
            "-35% 0px -55% 0px",

          threshold: [
            0,
            0.1,
            0.25,
          ],
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(section)
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50

        transition-all
        duration-300

        ${
          isScrolled
            ? "py-3"
            : "py-5"
        }
      `}
    >
      <nav
        className="
          site-container
          flex
          items-center
          justify-between
        "
      >

        {/* ======================
            LOGO
        ======================= */}
        <a
          href="#top"
          className="
            group

            text-lg
            font-black
            tracking-[-0.04em]

            text-white
          "
          aria-label="Go to top"
        >
          FK

          <span
            className="
              text-blue-400

              transition-colors

              group-hover:text-cyan-300
            "
          >
            .
          </span>
        </a>

        {/* ======================
            DESKTOP NAV
        ======================= */}
        <div
          className={`
            hidden
            items-center

            rounded-full

            border

            px-1.5
            py-1

            md:flex

            transition-all
            duration-300

            ${
              isScrolled
                ? `
                  border-white/10
                  bg-[#0b1120]/82

                  shadow-[0_12px_45px_rgba(0,0,0,.28)]

                  backdrop-blur-xl
                `
                : `
                  border-white/[0.07]

                  bg-white/[0.035]

                  backdrop-blur-md
                `
            }
          `}
        >
          {navLinks.map(
            (link) => (
              <a
                key={link.id}
                href={link.href}

                className={`
                  rounded-full

                  px-3.5
                  py-2

                  text-[13px]

                  transition-all
                  duration-300

                  ${
                    activeSection ===
                    link.id
                      ? `
                        bg-white/[0.08]
                        text-white
                      `
                      : `
                        text-slate-400

                        hover:text-white
                      `
                  }
                `}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* ======================
            CONTACT CTA
        ======================= */}
        <a
          href="#contact"
          className="
            hidden

            text-sm
            font-semibold

            text-slate-200

            transition-colors

            hover:text-blue-300

            md:block
          "
        >
          Let&apos;s talk

          <span className="ml-1 text-blue-400">
            ↗
          </span>
        </a>

        {/* ======================
            MOBILE MENU BUTTON
        ======================= */}
        <button
          type="button"

          className="
            rounded-full

            border
            border-white/10

            bg-white/[0.04]

            p-2.5

            text-white

            md:hidden
          "

          onClick={() =>
            setIsMobileMenuOpen(
              (previous) =>
                !previous
            )
          }

          aria-label="Toggle navigation"

          aria-expanded={
            isMobileMenuOpen
          }
        >
          {isMobileMenuOpen ? (
            <X size={19} />
          ) : (
            <Menu size={19} />
          )}
        </button>

      </nav>

      {/* ======================
          MOBILE MENU
      ======================= */}
      {isMobileMenuOpen && (
        <div
          className="
            site-container
            mt-3

            md:hidden
          "
        >
          <div
            className="
              rounded-2xl

              border
              border-white/10

              bg-[#0b1120]/95

              p-3

              shadow-2xl

              backdrop-blur-xl
            "
          >
            {navLinks.map(
              (link) => (
                <a
                  key={link.id}

                  href={link.href}

                  onClick={
                    closeMobileMenu
                  }

                  className="
                    block

                    rounded-xl

                    px-4
                    py-3

                    text-sm

                    text-slate-300

                    transition

                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              )
            )}

            <a
              href="#contact"

              onClick={
                closeMobileMenu
              }

              className="
                mt-1
                block

                rounded-xl

                bg-blue-500/10

                px-4
                py-3

                text-sm
                font-medium

                text-blue-300
              "
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};