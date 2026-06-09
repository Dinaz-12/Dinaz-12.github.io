import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { Database, Workflow, Brain, Code2, BarChart3, LineChart, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Dinali Chamodya" },
      { name: "description", content: "Technical skills across Databases, Data Engineering, AI/ML, Software Engineering, and BI & Analytics." },
    ],
  }),
  component: Skills,
});

type Category = {
  title: string;
  icon: LucideIcon;
  blurb: string;
  skills: string[];
};

const categories: Category[] = [
  {
    title: "Databases",
    icon: Database,
    blurb: "Designing, querying, and optimizing relational and NoSQL stores.",
    skills: ["MySQL", "MS SQL Server", "Oracle", "MongoDB", "PostgreSQL", "Data Modeling", "Stored Procedures", "Indexing & Tuning"],
  },
  {
    title: "Data Engineering",
    icon: Workflow,
    blurb: "Building reliable pipelines and warehouses for analytics-ready data.",
    skills: ["SSIS (ETL)", "SSAS (OLAP)", "Data Warehousing", "Star Schema", "Power Query", "Data Cleaning", "Airflow Basics", "API Integration"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    blurb: "Predictive modeling, NLP, and intelligent assistants.",
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "Gemini API", "EDA", "Feature Engineering"],
  },
  {
    title: "Data Analytics & BI",
    icon: LineChart,
    blurb: "Building interactive dashboards, KPI reports, business intelligence solutions, and data visualizations using Power BI, SQL, Python, and analytical techniques to support data-driven decision making.",
    skills: ["Power BI", "SQL", "Python", "Data Visualization", "KPI Reporting", "Business Intelligence", "Dashboard Design", "Data-Driven Decision Making"],
  },
  {
    title: "Software Engineering",
    icon: Code2,
    blurb: "Full-stack development with clean, maintainable architectures.",
    skills: ["React", "TypeScript", "Node.js", "Express", "Flask", "Java", "Spring Boot", "REST APIs", "Git & GitHub"],
  },
  {
    title: "BI & Analytics",
    icon: BarChart3,
    blurb: "Turning raw data into clear, decision-ready visual stories.",
    skills: ["Power BI", "Tableau", "Excel (Advanced)", "Matplotlib", "Seaborn", "Streamlit", "Jupyter", "Storytelling with Data"],
  },
];

function Skills() {
  return (
    <PageShell title="Skills" subtitle="The tools and technologies I use to build, analyze, and ship.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass glow-subtle p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-muted-foreground">{cat.blurb}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + si * 0.03 }}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground/90 backdrop-blur-sm transition-colors hover:border-primary/60 hover:bg-primary/20"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </PageShell>
  );
}
