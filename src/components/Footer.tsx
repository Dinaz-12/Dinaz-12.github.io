import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Built with passion for data.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Dinaz-12" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/dinali-chamodya/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:Dinalichamodya12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
