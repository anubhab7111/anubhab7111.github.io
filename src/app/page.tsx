import Link from "next/link";
import { Menu, Linkedin, Github, Mail, Twitter } from "lucide-react";

import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CvSection } from "@/components/sections/cv-section";
import { Button } from "@/components/ui/button";
import { EducationSection } from "@/components/sections/education-section";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { TerminalHeroSection } from "@/components/sections/terminal-hero-section";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#cv" },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 h-16 w-full border-b-2 border-foreground bg-background/95 backdrop-blur-lg">
        <div className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-foreground bg-primary font-mono text-sm font-bold text-primary-foreground shadow-brutal-sm">
              AD
            </span>
            <span className="hidden font-mono text-sm font-bold uppercase tracking-widest text-foreground sm:inline">
              anubhab.das
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className="font-mono text-xs text-foreground"
              >
                <Link href={item.href} className="flex items-center">
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            {/* Mobile Navigation Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] border-l-2 border-foreground bg-card sm:w-[320px]"
                >
                  <SheetHeader className="mb-6 mt-2">
                    <SheetTitle className="text-left font-mono text-lg font-bold uppercase tracking-widest text-primary">
                      Anubhab Das
                    </SheetTitle>
                    <p className="text-left text-xs text-muted-foreground">
                      Student at NIT Rourkela
                    </p>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <SheetTrigger asChild key={item.name}>
                        <Button
                          variant="ghost"
                          size="lg"
                          asChild
                          className="w-full justify-start py-3 font-mono text-base text-foreground"
                        >
                          <Link href={item.href} className="flex items-center">
                            {item.name}
                          </Link>
                        </Button>
                      </SheetTrigger>
                    ))}
                  </nav>
                  <div className="mt-8 border-t-2 border-foreground pt-6">
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                      // connect
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="justify-start font-mono text-foreground"
                      >
                        <a
                          href="https://www.linkedin.com/in/anubhab-das-498155287/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="justify-start font-mono text-foreground"
                      >
                        <a
                          href="https://github.com/anubhab7111"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="justify-start font-mono text-foreground"
                      >
                        <a
                          href="https://x.com/forreal_anubhab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Twitter className="mr-2 h-4 w-4" /> Twitter
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="justify-start font-mono text-foreground"
                      >
                        <a
                          href="mailto:anubhabdas7111@gmail.com"
                          className="flex items-center"
                        >
                          <Mail className="mr-2 h-4 w-4" /> Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl flex-1 space-y-10 px-4 py-10 md:py-14">
        {/* Hero */}
        <section aria-label="Introduction">
          <TerminalHeroSection />
        </section>

        {/* Bento grid of sections */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-min">
          <section
            id="about"
            className="scroll-mt-24 md:col-span-2"
          >
            <div className="h-full rounded-md border-2 border-foreground bg-card p-6 shadow-brutal sm:p-8">
              <AboutSection />
            </div>
          </section>

          <section
            id="education"
            className="scroll-mt-24 md:col-span-1 md:row-span-2"
          >
            <div className="h-full rounded-md border-2 border-foreground bg-card p-6 shadow-brutal-accent sm:p-8">
              <EducationSection />
            </div>
          </section>

          <section id="cv" className="scroll-mt-24 md:col-span-2">
            <div className="h-full rounded-md border-2 border-foreground bg-card p-6 shadow-brutal sm:p-8">
              <CvSection />
            </div>
          </section>

          <section
            id="projects"
            className="scroll-mt-24 md:col-span-3"
          >
            <div className="rounded-md border-2 border-foreground bg-card p-6 shadow-brutal-primary sm:p-8">
              <ProjectsSection />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-2 border-foreground bg-card px-4 py-6 text-center">
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          &copy; {year} Anubhab Das. Built with Next.js, Tailwind CSS, and ❤️.
        </p>
      </footer>
    </div>
  );
}
