import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold sm:text-5xl md:text-6xl"
      >
        <span className="text-gradient">{title}</span>
      </motion.h1>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
      <div className="mt-10 sm:mt-12">{children}</div>
    </motion.main>
  );
}
