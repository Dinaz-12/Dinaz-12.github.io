import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

const HIRE_HREF =
  "mailto:dinalichamodya12@gmail.com?subject=Job%20Opportunity&body=Hi%20Dinali%2C%20I%20would%20like%20to%20discuss%20an%20internship%2Fjob%20opportunity%20with%20you.";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="group inline-flex items-baseline font-display text-xl font-black tracking-tight transition-transform duration-300 hover:scale-[1.03]" onClick={() => setOpen(false)}>
          <span className="text-foreground">Dinali</span>
          <span className="text-primary drop-shadow-[0_0_3px_rgba(139,92,246,0.4)] group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.85)] transition-all duration-300">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a
            href={HIRE_HREF}
            style={{ background: "var(--gradient-primary)" }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110 sm:px-4 sm:text-sm"
          >
            <Briefcase className="size-4" />
            Hire Me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground hover:bg-secondary"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/40"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-secondary hover:text-foreground"
                    activeProps={{ className: "block rounded-md px-3 py-3 text-base text-foreground font-medium bg-primary/10" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
