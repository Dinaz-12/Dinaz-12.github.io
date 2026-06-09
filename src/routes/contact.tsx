import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dinali Chamodya" },
      { name: "description", content: "Get in touch with Dinali Chamodya — open to internships, collaborations, and conversations." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell title="Contact Me" subtitle="Have a project, internship, or just want to chat? Let's connect.">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "Dinalichamodya12@gmail.com", href: "mailto:Dinalichamodya12@gmail.com" },
            { icon: Phone, label: "Phone", value: "+94 74 170 9277", href: "tel:+94741709277" },
            { icon: Linkedin, label: "LinkedIn", value: "Dinali Chamodya", href: "https://www.linkedin.com/in/dinali-chamodya" },
            { icon: Github, label: "GitHub", value: "github.com/Dinaz-12", href: "https://github.com/Dinaz-12" },
            { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 rounded-xl glass p-4 transition-colors hover:bg-primary/10"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <c.icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-xl glass p-6 space-y-4"
        >
          <div>
            <label className="text-sm text-muted-foreground">Name</label>
            <input required className="mt-1 w-full rounded-lg border border-border bg-input/40 px-3 py-2 outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <input required type="email" className="mt-1 w-full rounded-lg border border-border bg-input/40 px-3 py-2 outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-border bg-input/40 px-3 py-2 outline-none focus:border-primary" />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground glow"
          >
            <Send size={16} /> {sent ? "Message sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </PageShell>
  );
}
