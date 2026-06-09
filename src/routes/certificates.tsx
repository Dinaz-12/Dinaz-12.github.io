import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Dinali Chamodya" },
      { name: "description", content: "Certifications in AI/ML, Python, MongoDB, and Data Science." },
    ],
  }),
  component: Certificates,
});

type Cert = {
  name: string;
  issuer: string;
  logo?: string;
  url?: string;
};

const certs: Cert[] = [
  {
    name: "AI/ML Engineer — Stage 1",
    issuer: "SLIIT",
    logo: "https://logo.clearbit.com/sliit.lk",
    url: "https://www.sliit.lk",
  },
  {
    name: "AI/ML Engineer — Stage 2",
    issuer: "SLIIT",
    logo: "https://logo.clearbit.com/sliit.lk",
    url: "https://www.sliit.lk",
  },
  {
    name: "Python Programming",
    issuer: "University of Moratuwa",
    logo: "https://logo.clearbit.com/uom.lk",
    url: "https://open.uom.lk",
  },
  {
    name: "Python 101 for Data Science",
    issuer: "IBM Cognitive Class",
    logo: "https://logo.clearbit.com/ibm.com",
    url: "https://cognitiveclass.ai",
  },
  {
    name: "MongoDB Administration & Monitoring",
    issuer: "MongoDB University",
    logo: "https://logo.clearbit.com/mongodb.com",
    url: "https://university.mongodb.com",
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    logo: "https://logo.clearbit.com/kaggle.com",
    url: "https://www.kaggle.com/learn/intro-to-machine-learning",
  },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    logo: "https://logo.clearbit.com/kaggle.com",
    url: "https://www.kaggle.com/learn/intermediate-machine-learning",
  },
];

function Certificates() {
  return (
    <PageShell title="Certificates" subtitle="Continuous learning is part of the journey.">
      <div className="grid gap-5 md:grid-cols-2">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-4 rounded-xl glass p-5 transition-shadow duration-300 hover:glow-hover"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/95 p-2">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.issuer} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <Award size={22} className="text-primary" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold leading-tight">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
            <a
              href={c.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/20"
            >
              View Certificate
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
