import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dinali Chamodya" },
      { name: "description", content: "About Dinali Chamodya — Data Science undergraduate at SLIIT passionate about Database Engineering, AI/ML, and Software Engineering." },
    ],
  }),
  component: About,
});

function About() {
  const cards = [
    { icon: GraduationCap, title: "Education", text: "BSc (Hons) in IT specializing in Data Science at SLIIT (Nov 2023 – Present). GPA: 3.51 / 4.00." },
    { icon: Heart, title: "Passion", text: "Database Engineering, Data Warehousing, AI/ML, and building enterprise systems that turn raw data into decisions." },
    { icon: Target, title: "Goal", text: "To grow into a well-rounded engineer across databases, cloud, AI, and infrastructure — and ship systems that scale." },
  ];
  const coursework = [
    "Machine Learning",
    "Data Mining",
    "Database Systems",
    "Data Visualization",
    "Software Engineering",
    "Artificial Intelligence",
    "Statistics for Data Science",
  ];
  return (
    <PageShell title="About Me" subtitle="A short story about who I am and what drives me.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Hi! I'm <span className="text-foreground font-medium">Dinali Chamodya</span>, a
            Data Science undergraduate based in Colombo, Sri Lanka, with a strong interest in
            <span className="text-foreground"> Database Engineering, Data Warehousing, and Enterprise Systems</span>.
          </p>
          <p>
            I'm skilled in <span className="text-gradient font-semibold">SQL, Python, and ETL processes</span>, with hands-on
            experience building data warehouse solutions, developing ETL pipelines with SSIS,
            writing optimized queries across MySQL, MS SQL Server, and Oracle, and shipping
            full-stack applications.
          </p>
          <p>
            I love the entire pipeline — from modeling data, to designing star schemas and
            OLAP cubes, to training ML models, to wrapping it all in clean React/Spring Boot apps.
            I'm passionate about learning database administration, cloud technologies, and
            automation in professional environments.
          </p>

          <div className="pt-2">
            <h3 className="text-sm uppercase tracking-wider text-foreground">Relevant Coursework</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span key={c} className="rounded-md bg-primary/10 px-3 py-1 text-xs text-primary">{c}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-xl glass p-5"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <c.icon size={20} />
                </div>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
