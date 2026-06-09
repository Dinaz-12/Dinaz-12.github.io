import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import aiml1 from "../assets/certificates/aiml-stg1.png";
import kaggle1 from "../assets/certificates/kaggle-ml1.png";
import mongodbImg from "../assets/certificates/mongodb.png";
import pythonIBM from "../assets/certificates/python-ibm.png";
import pythonMora from "../assets/certificates/python-moratu.png";
import mongodbPdf from "../assets/certificates/mongodb.pdf";

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
  image?: string;
  url?: string;
};

const certs: Cert[] = [
  {
    name: "AI/ML Engineer — Stage 1",
    issuer: "SLIIT",
    image: aiml1,
    url: aiml1,
  },
  {
    name: "AI/ML Engineer — Stage 2",
    issuer: "SLIIT",
    image: aiml1,
  },
  {
    name: "Python Programming",
    issuer: "University of Moratuwa",
    image: pythonMora,
    url: pythonMora,
  },
  {
    name: "Python 101 for Data Science",
    issuer: "IBM Cognitive Class",
    image: pythonIBM,
    url: pythonIBM,
  },
  {
    name: "MongoDB Administration & Monitoring",
    issuer: "MongoDB University",
    image: mongodbImg,
    url: mongodbPdf,
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    image: kaggle1,
    url: kaggle1,
  },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    image: kaggle1,
    url: kaggle1,
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
              <div className="h-12 w-16 overflow-hidden rounded-lg border border-primary/20 bg-white p-1">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-contain"
                />
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
              View Credential
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
