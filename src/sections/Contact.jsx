import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fardinkamran915@gmail.com",
    href: "mailto:fardinkamran915@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:fardinkamran915@gmail.com?subject=${subject}&body=${body}`;
  };

  const updateField = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <section id="contact" className="section-shell cv-auto pb-16">
      <div className="site-container">
        <div className="contact-shell relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0a101d] p-6 sm:p-9 lg:p-12">
          <div className="contact-orb" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <span className="section-kicker">Get in touch</span>
              <h2 className="section-title mt-4">
                Let&apos;s build something
                <span className="block font-serif font-normal italic text-slate-300">
                  useful, ambitious and memorable.
                </span>
              </h2>
              <p className="section-copy mt-5 max-w-lg">
                Have a project, collaboration or opportunity in mind? Send a message
                and I&apos;ll be happy to discuss it.
              </p>

              <div className="mt-9 space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="contact-info-row">
                      <span className="feature-icon !mb-0 !h-10 !w-10 !rounded-xl">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[.16em] text-slate-600">{label}</span>
                        <span className="mt-1 block text-sm text-slate-200">{value}</span>
                      </span>
                      {href && <ArrowUpRight className="ml-auto text-slate-600" size={17} />}
                    </div>
                  );

                  return href ? (
                    <a key={label} href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form onSubmit={handleSubmit} className="contact-form-card space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="field-label">
                    Name
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={updateField("name")}
                      placeholder="Your name"
                      className="field-input"
                    />
                  </label>
                  <label className="field-label">
                    Email
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={updateField("email")}
                      placeholder="you@example.com"
                      className="field-input"
                    />
                  </label>
                </div>

                <label className="field-label">
                  Message
                  <textarea
                    rows={7}
                    required
                    value={formData.message}
                    onChange={updateField("message")}
                    placeholder="Tell me a little about what you have in mind..."
                    className="field-input resize-none"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-slate-600">
                    This opens your default email app with the message pre-filled.
                  </p>
                  <Button type="submit" size="lg" className="shrink-0">
                    Send message <Send size={17} />
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        <footer className="flex flex-col gap-3 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Fardin Kamran.</span>
          <a href="#top" className="transition-colors hover:text-slate-300">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
};
