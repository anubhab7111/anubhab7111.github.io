import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
  {
    label: "(+91) 9937244767",
    href: "tel:+919937244767",
    Icon: Phone,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/anubhab7111",
    Icon: Github,
  },
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
        <div className="space-y-2">
          <p className="section-number">
            01 <span className="label-editorial ml-2">/ Introduction</span>
          </p>
          <div className="rule-brass w-16" />
        </div>

        <div className="space-y-1.5">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Anubhab Das
          </h1>
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            AI Researcher &amp; Software Engineer
          </p>
        </div>

        <div className="rule-brass" />

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
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-foreground/80">
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

        <p className="accent-bar pl-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Open to building, research &amp; collaborations
        </p>
      </div>
    </div>
  );
}
