import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Database, Download, FileText, LineChart, Sparkles } from "lucide-react";
import profileAsset from "../assets/profile.jpg";
import cvAsset from "../assets/cv.pdf.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinali Chamodya — Data Science Portfolio" },
      { name: "description", content: "Dinali Chamodya — Data Science undergraduate & aspiring Database Engineer passionate about AI/ML, Data Warehousing, and Software Engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        {/* Soft mesh background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, oklch(0.62 0.24 300 / 0.18), transparent 60%), radial-gradient(500px circle at 85% 70%, oklch(0.75 0.22 310 / 0.14), transparent 60%), radial-gradient(400px circle at 50% 100%, oklch(0.55 0.22 290 / 0.12), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Animated purple particles */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {[
            { left: "10%", top: "20%", size: 6, delay: 0, duration: 9 },
            { left: "25%", top: "70%", size: 4, delay: 1.5, duration: 11 },
            { left: "45%", top: "30%", size: 5, delay: 0.8, duration: 10 },
            { left: "65%", top: "80%", size: 3, delay: 2.2, duration: 12 },
            { left: "80%", top: "25%", size: 7, delay: 0.4, duration: 13 },
            { left: "90%", top: "60%", size: 4, delay: 1.8, duration: 10 },
            { left: "35%", top: "85%", size: 5, delay: 2.6, duration: 11 },
            { left: "70%", top: "10%", size: 4, delay: 1.2, duration: 9 },
          ].map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background:
                  "radial-gradient(circle, oklch(0.75 0.22 310 / 0.9), oklch(0.62 0.24 300 / 0.2) 70%, transparent)",
                filter: "blur(0.5px)",
              }}
              animate={{ y: [0, -24, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12 md:pt-24 md:pb-24">
          {/* Portrait — appears first on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[260px] order-1 sm:max-w-xs md:order-2 md:max-w-sm"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/15 blur-2xl" />
              <div
                className="absolute -inset-px rounded-[2rem] p-px"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.22 310 / 0.9), oklch(0.62 0.24 300 / 0.3) 45%, transparent 70%, oklch(0.62 0.24 300 / 0.5))",
                }}
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-card">
                <img
                  src={profileAsset}
                  alt="Dinali Chamodya portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-3 -left-2 rounded-xl glass px-3 py-1.5 text-[11px] sm:-bottom-4 sm:-left-4 sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="text-primary font-semibold">Internship</span> availability
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-3 -right-2 rounded-xl glass px-3 py-1.5 text-[11px] sm:-top-4 sm:-right-4 sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="text-primary font-semibold">AI / ML</span> · Data
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="text-center order-2 md:order-1 md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] text-muted-foreground sm:px-4 sm:py-2 sm:text-xs"
            >
              <Sparkles size={14} className="text-primary shrink-0" />
              <span className="truncate">Open to Internships • Data Science Undergraduate</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-[2rem] font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I'm <span className="text-gradient">Dinali</span>.
              <br />
              Turning data into intelligence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg md:mx-0"
            >
             Data Science undergraduate passionate about Data Engineering, AI/ML, Business Intelligence, and Software Engineering. I build data-driven solutions that transform raw data into actionable insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:justify-start"
            >
              <Link
                to="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 glow"
              >
                Contact Me
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={cvAsset.url}
                download="Dinali_Chamodya_CV.pdf"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 font-medium text-foreground transition-colors hover:bg-primary/20"
              >
                <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
              <Link
                to="/projects"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CV Preview */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-4 sm:p-6 md:p-8"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">My Resume</h2>
                <p className="text-sm text-muted-foreground">Quick preview — download for the full PDF.</p>
              </div>
            </div>
            <a
              href={cvAsset.url}
              download="Dinali_Chamodya_CV.pdf"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 glow"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-black/40">
            <iframe
              src={`${cvAsset.url}#view=FitH`}
              title="Dinali Chamodya CV preview"
              className="h-[60vh] w-full sm:h-[70vh] md:h-[80vh]"
            />
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Database, title: "Database Engineering", desc: "Data warehousing, ETL with SSIS, OLAP cubes, and optimized SQL across MySQL, MS SQL Server & Oracle." },
            { icon: Brain, title: "AI / ML", desc: "Predictive modeling, AI chatbots with Gemini API, and ML pipelines using Python & scikit-learn." },
            { icon: LineChart, title: "Data Analytics & BI", desc: "Building interactive dashboards, KPI reports, business intelligence solutions, and data visualizations using Power BI, SQL, Python, and analytical techniques to support data-driven decision making." },
            { icon: Code2, title: "Software Eng.", desc: "Full-stack apps with React, Node.js, Spring Boot, Flask — shipping real systems used by real users." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-xl glass p-5 sm:p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
