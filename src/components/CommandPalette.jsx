import {
  FileText,
  BookOpen,
  Layers3,
  GraduationCap,
  Home,
  Mail,
  Search,
  User,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { track } from "../utils/analytics";

const navigationCommands = [
  { label: "Go to About", keywords: "about profile bio", href: "#about", icon: User },
  { label: "Go to Education", keywords: "education university brac", href: "#education", icon: GraduationCap },
  { label: "Go to Research", keywords: "research thesis llm refactoring", href: "#research", icon: BookOpen },
  { label: "Go to Projects", keywords: "projects work portfolio", href: "#projects", icon: Layers3 },
  { label: "Go to Experience", keywords: "experience jobs work", href: "#experience", icon: Layers3 },
  { label: "Go to Certificates", keywords: "certificate credentials", href: "#certificates", icon: FileText },
  { label: "Go to Contact", keywords: "contact email message", href: "#contact", icon: Mail },
  { label: "Back to top", keywords: "home hero top", href: "#top", icon: Home },
];

const resolveSocialHref = (label) => {
  const anchor = document.querySelector(`a[aria-label="${label}"]`);
  return anchor?.href || null;
};

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const onOpenEvent = () => {
      setQuery("");
      setActiveIndex(0);
      setOpen(true);
    };

    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        if (open) {
          setOpen(false);
        } else {
          setQuery("");
          setActiveIndex(0);
          setOpen(true);
        }
      }

      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("open-command-palette", onOpenEvent);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("open-command-palette", onOpenEvent);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const commands = useMemo(() => {
    const socials = [
      { label: "Open GitHub", keywords: "github source code", social: "GitHub", icon: FaGithub },
      { label: "Open LinkedIn", keywords: "linkedin social professional", social: "LinkedIn", icon: User },
      { label: "Open Facebook", keywords: "facebook social", social: "Facebook", icon: User },
    ];

    const extras = [
      {
        label: "Preview CV",
        keywords: "cv resume download",
        action: () => window.dispatchEvent(new CustomEvent("open-cv-preview")),
        icon: FileText,
      },
      ...socials.map((item) => ({
        ...item,
        action: () => {
          const href = resolveSocialHref(item.social);
          if (href) window.open(href, "_blank", "noopener,noreferrer");
        },
      })),
    ];

    return [...navigationCommands, ...extras];
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return commands;
    return commands.filter((command) => `${command.label} ${command.keywords}`.toLowerCase().includes(needle));
  }, [commands, query]);

  const runCommand = (command) => {
    if (!command) return;
    track("command_palette_action", { command: command.label });

    if (command.href) {
      document.querySelector(command.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      command.action?.();
    }

    setOpen(false);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % Math.max(filtered.length, 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
    }

    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(filtered[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div className="command-overlay" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <div className="command-palette" role="dialog" aria-modal="true" aria-label="Quick navigation">
        <div className="command-search-row">
          <Search size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Search the portfolio…"
            aria-label="Search portfolio commands"
          />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close quick navigation">
            <X size={17} />
          </button>
        </div>

        <div className="command-results" role="listbox">
          {filtered.length ? (
            filtered.map((command, index) => {
              const Icon = command.icon;
              return (
                <button
                  key={command.label}
                  type="button"
                  className={`command-result ${index === activeIndex ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => runCommand(command)}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <span className="command-result-icon"><Icon size={16} /></span>
                  <span>{command.label}</span>
                  <kbd>↵</kbd>
                </button>
              );
            })
          ) : (
            <div className="command-empty">No matching command.</div>
          )}
        </div>

        <div className="command-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>Enter</kbd> select</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
};
