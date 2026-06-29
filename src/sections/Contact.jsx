import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fardinkamran915@gmail.com",
    href: "mailto:fardinkamran915@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+0 1740734780",
    href: "tel: +01740734780",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhanmondi, Dhaka",
    hre: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl " />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-sm font-medium ">
            Get in Touch
          </span>
          <h2 className=" text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            Let's build{" "}
            <span className=" font-serif italic font-normal text-white">
              something innovative and out of the box
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a quick
            message and let's disscuss how we can make it work.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-white/55 animate-fade-in animation-delay-300">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Type your name....."
                  className="w-full px py-3 bg-surface rounded-xl border border-border focus:border-blue-900 focus:ring-1 focus:to-blue-600 outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input id="email" type="email"
                required
                placeholder="your@email.com...."
                  className="w-full px py-3 bg-surface rounded-xl border border-border focus:border-blue-900 focus:ring-1 focus:to-blue-600 outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                rows={5}
                required
                placeholder="Your message"

                  className="w-full px py-3 bg-surface rounded-xl border border-border focus:border-blue-900 focus:ring-1 focus:to-blue-600 outline-none transition-all resize-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
