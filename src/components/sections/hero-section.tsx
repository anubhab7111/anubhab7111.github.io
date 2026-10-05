import Image from "next/image";
import {
  ExternalLink,
  FileText,
  Github,
  IdCard,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const RESUME_URL =
  "https://drive.google.com/file/d/1ldzYMeo4O5g4JB513yg_afPZTvy7OgX_/view?usp=sharing";

const contactLinks = [
  {
    label: "Bhubaneswar, India",
    Icon: MapPin,
  },
  {
    label: "anubhabdas7111@gmail.com",
    href: "mailto:anubhabdas7111@gmail.com",
    Icon: Mail,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anubhab-das-498155287/",
    Icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/forreal_anubhab",
    Icon: Twitter,
  },
];

const primaryActions = [
  {
    label: "LawWeb",
    href: "https://github.com/anubhab7111/LawWeb",
    Icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: "https://github.com/anubhab7111",
    Icon: Github,
  },
  {
    label: "Resume",
    href: RESUME_URL,
    Icon: FileText,
  },
];

export function HeroSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[320px_1fr]">
      {/* Photo */}
      <div className="flex items-center justify-center md:justify-start">
        <div className="relative w-full rounded-md border-2 border-foreground shadow-brutal-accent md:w-[320px]">
          <Image
            src="/images/anubhab.jpg"
            alt="Anubhab Das"
            width={320}
            height={320}
            className="h-[320px] w-full rounded-[2px] object-cover md:w-[320px]"
            data-ai-hint="professional headshot"
            priority
          />
        </div>
      </div>

      {/* Editorial masthead */}
      <div className="flex flex-col justify-center gap-6 rounded-md border-2 border-foreground bg-card p-6 shadow-brutal-primary sm:p-8">
        <div className="flex items-center gap-3">
          <IdCard className="h-7 w-7 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            Introduction
          </h2>
        </div>

        <div className="space-y-1.5">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Anubhab Das
          </h1>
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            AI Engineer building RAG and LLM systems
          </p>
        </div>

        <div className="rule-brass" />

        <div className="flex flex-wrap gap-3">
          {primaryActions.map(({ label, href, Icon }) => (
            <Button
              key={label}
              asChild
              size="sm"
              variant={label === "LawWeb" ? "default" : "outline"}
              className="font-mono shadow-brutal-sm"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-1.5 h-4 w-4" />
                {label}
              </a>
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-foreground/80">
          {contactLinks.map(({ label, href, Icon }) =>
            href ? (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4 flex-shrink-0 text-accent" />
                {label}
              </a>
            ) : (
              <span key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 flex-shrink-0 text-accent" />
                {label}
              </span>
            ),
          )}
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {label}
            </a>
          ))}
        </div>

        <p className="accent-bar pl-3 font-mono text-xs uppercase leading-6 tracking-widest text-muted-foreground">
          Final-year at NIT Rourkela (graduating May 2027) · Open to remote
          roles at early-stage startups
        </p>
      </div>
    </div>
  );
}
