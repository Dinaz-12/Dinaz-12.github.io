import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Dinali Chamodya" },
      { name: "description", content: "Projects by Dinali Chamodya across Data Warehousing, AI/ML, and Software Engineering." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Banking Data Warehouse",
    desc: "Built a data warehouse on SQL Server with a star schema. Developed SSIS ETL pipelines, SSAS OLAP cubes for drill-down/slice analysis, and Power BI dashboards for insights.",
    tags: ["SQL Server", "SSIS", "SSAS", "Power BI", "Star Schema"],
    github: "https://github.com/Dinaz-12/Banking-Data-Warehouse",
  },
  {
    title: "AI Data Analyst Assistant",
    desc: "Built an AI-powered analytics assistant using Google Gemini API and Python. Developed a Natural Language to SQL system that converts user queries into executable SQL statements. Implemented prompt engineering techniques and AI-driven insight generation to help users analyze business data efficiently.",
    tags: ["Python", "Streamlit", "Google Gemini API", "SQL", "Pandas", "Prompt Engineering"],
    github: "https://github.com/Dinaz-12/AI-Data-Analysis-Assistant",
    live: "https://ai-data-analysis-assistant.streamlit.app/",
  },
  {
    title: "Student Help Desk AI Chatbot",
    desc: "AI-powered chatbot handling 500+ user queries using Python and the Gemini API. Implemented PDF-based semantic Q&A and context-aware response generation. Deployed on Streamlit Cloud.",
    tags: ["Python", "Gemini API", "Streamlit", "NLP"],
    github: "https://github.com/Dinaz-12/Student-Helpdesk-AI-Chatbot",
    live: "https://student-appdesk-ai-chatbot-i6ddaj6jqjcazjkfq86e97.streamlit.app/",
  },
  {
    title: "Laptop Price Prediction App",
    desc: "ML model with 85% accuracy using feature engineering and GridSearchCV hyperparameter tuning. Built a real-time prediction web app with Flask.",
    tags: ["Python", "scikit-learn", "Flask", "GridSearchCV"],
    github: "https://github.com/Dinaz-12/Laptop-Price-Predictor",
  },
  {
    title: "Customer Behavior Analytics Dashboard",
    desc: "Analyzed 10,000+ records with Pandas/NumPy. Performed EDA, wrote optimized SQL (joins, aggregations), and built Power BI dashboards that improved insight delivery by 30%.",
    tags: ["Python", "Pandas", "SQL", "Power BI"],
    github: "https://github.com/Dinaz-12/Customer_Behavior_Analysis",
  },
  {
    title: "Fintech Customer Analytics",
    desc: "Customer segmentation, loan risk analysis, and KPI dashboards. Built Power BI visuals and ran trend & behavior analysis using Python.",
    tags: ["Python", "Power BI", "EDA", "Segmentation"],
    github: "https://github.com/Dinaz-12/Fintech-Customer-Analytics",
  },
  {
    title: "Northbridge University Smart Campus Hub",
    desc: "Smart Campus Management System with React + TypeScript frontend, Spring Boot backend, and MS SQL Server. Includes analytics dashboards, REST APIs with role-based auth, bookings, and notifications.",
    tags: ["React", "TypeScript", "Spring Boot", "MS SQL Server"],
    github: "https://github.com/Dinaz-12/Northbridge-University-Smart-Campus-Hub",
  },
  {
    title: "Impact of Collaborative Learning",
    desc: "Analyzed PISA dataset (130K+ records) in R. Performed cleaning, EDA, correlation analysis, and built a linear regression model evaluated with R², p-value, residuals, and ANOVA.",
    tags: ["R", "Statistics", "Regression", "ANOVA"],
    github: "https://github.com/Dinaz-12/collaborative-learning-communication-skills",
  },
  {
    title: "Ceylon Leaf — Tea Plantation Mgmt",
    desc: "Full-stack system used by 50+ users. Integrated weather API, GPS tracking, and QR-based attendance — improved workforce efficiency by 40%.",
    tags: ["Full-Stack", "REST API", "GPS", "QR"],
    github: "https://github.com/Dinaz-12/Tea-Plantation-Management-System",
    live: "https://ceylonleaf.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Designed and developed a professional portfolio website to showcase Data Science, AI/ML, Data Engineering, Business Intelligence, and Software Engineering projects. Features dark/light mode, responsive design, interactive animations, and recruiter-friendly navigation.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Dark/Light Mode", "Responsive Design"],
    github: "https://github.com/Dinaz-12/Dinali-Portfolio",
    live: "",
  },
  {
    title: "HelpAura – Online Help Desk System",
    desc: "A support ticket management platform designed to streamline issue reporting, request tracking, and customer support workflows through a user-friendly web interface.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Dinaz-12/HelpAura--Online-Help-Desk",
  },
  {
    title: "HopeFlow – Blood Donation Management System",
    desc: "A full-stack web application for managing blood donations, donor records, blood bank inventory, and user administration with real-time updates and secure authentication.",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX"],
    github: "https://github.com/Dinaz-12/sliit-iwt-project-2024",
  },
  {
    title: "Wellnex – Personal Wellness Companion",
    desc: "A wellness-focused Android application featuring habit tracking, mood journaling, hydration monitoring, wellness music, analytics, and personalized notifications to support healthier daily routines.",
    tags: ["Java", "Firebase", "Android", "Material Design"],
    github: "https://github.com/Dinaz-12/Wellnex-Mobile-App",
  },
  {
    title: "BabyBliss – Baby Products Shopping App",
    desc: "Designed and developed a mobile shopping application for mothers to discover and purchase baby food, formula, snacks, and essential baby products. Focused on creating a calm, user-friendly experience through intuitive navigation, clean layouts, and a nurturing visual design.",
    tags: [ "Kotlin", "Android Studio", "Material Design 3", "Mobile Development", "UI/UX Design" ],
    github: "https://github.com/Dinaz-12/BabyBlissApp",
  },
];

function Projects() {
  return (
    <PageShell title="Projects" subtitle="A selection of things I've built across Data Engineering, AI/ML, and SE.">
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-xl glass p-6 transition-shadow duration-300 hover:glow-hover flex flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold group-hover:text-gradient">{p.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground flex-grow">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_12px_rgba(139,92,246,0.25)] hover:-translate-y-0.5"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_12px_rgba(139,92,246,0.25)] hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}

