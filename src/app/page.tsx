
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Linkedin, Github, Mail, Phone, UserCircle, BookOpen, Hammer, Trophy, ActivitySquare, Download, Menu, Twitter } from 'lucide-react';

import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CvSection } from '@/components/sections/cv-section';
import { Button } from '@/components/ui/button';
import { EducationSection } from '@/components/sections/education-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ExtracurricularSection } from '@/components/sections/extracurricular-section';
import { ThemeSwitcher } from '@/components/theme-switcher';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Activities & Involvement', href: '#extracurricular' },
  { name: 'CV', href: '#cv' },
];

// Icons for mobile navigation, kept separate for clarity
const mobileNavIcons: { [key: string]: React.ReactNode } = {
  'About': <UserCircle className="mr-2 h-4 w-4" />,
  'Education': <BookOpen className="mr-2 h-4 w-4" />,
  'Projects': <Hammer className="mr-2 h-4 w-4" />,
  'Achievements': <Trophy className="mr-2 h-4 w-4" />,
  'Activities & Involvement': <ActivitySquare className="mr-2 h-4 w-4" />,
  'CV': <Download className="mr-2 h-4 w-4" />,
};


export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Metadata is now handled in layout.tsx */}

      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* Placeholder for a logo or initials if desired */}
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button key={item.name} variant="ghost" size="sm" asChild className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/10">
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
                  <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card">
                    <SheetHeader className="mb-6 mt-2">
                      <SheetTitle className="text-left text-primary">Navigation</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-2">
                      {navItems.map((item) => (
                        <SheetTrigger asChild key={item.name}>
                          <Button variant="ghost" size="lg" asChild className="w-full justify-start text-base text-muted-foreground hover:text-primary hover:bg-accent/10 py-3">
                            <Link href={item.href} className="flex items-center">
                              {mobileNavIcons[item.name]} {/* Icon kept for mobile nav */}
                              {item.name}
                            </Link>
                          </Button>
                        </SheetTrigger>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout (Sidebar + Scrollable Area) */}
        <div className="container mx-auto flex flex-1 max-w-7xl px-4">
          <div className="flex flex-col md:flex-row w-full">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/3 lg:w-1/4 md:sticky md:top-16 md:h-[calc(100vh-4rem)] py-8 md:py-12 pr-0 md:pr-8 lg:pr-12 flex-shrink-0">
              <div className="space-y-6">
                <div className="flex flex-col items-center md:items-start">
                  <Image
                    src="/images/anubhab.jpg" 
                    alt="Anubhab Das"
                    width={120}
                    height={120}
                    className="rounded-full object-cover shadow-lg border-4 border-card hover:shadow-xl transition-shadow duration-300"
                    priority
                  />
                  <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-primary text-center md:text-left">
                    Anubhab Das
                  </h1>
                  <p className="mt-1 text-md lg:text-lg text-muted-foreground text-center md:text-left">
                    Deep Learning Enthusiast
                  </p>
                </div>

                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2.5 text-accent flex-shrink-0" />
                    <span>Bhubaneswar, India</span>
                  </div>
                   <a
                    href="tel:+919937244767"
                    className="flex items-center hover:text-primary transition-colors group"
                  >
                    <Phone className="h-4 w-4 mr-2.5 text-accent group-hover:text-primary transition-colors flex-shrink-0" />
                    <span>(+91) 9937244767</span>
                  </a>
                  <a
                    href="mailto:123ei0606@nitrkl.ac.in"
                    className="flex items-center hover:text-primary transition-colors group"
                  >
                    <Mail className="h-4 w-4 mr-2.5 text-accent group-hover:text-primary transition-colors flex-shrink-0" />
                    <span>123ei0606@nitrkl.ac.in</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anubhab-das-498155287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary transition-colors group"
                  >
                    <Linkedin className="h-4 w-4 mr-2.5 text-accent group-hover:text-primary transition-colors flex-shrink-0" />
                    <span>linkedin.com/in/anubhab-das</span>
                  </a>
                  <a
                    href="https://github.com/anubhab7111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary transition-colors group"
                  >
                    <Github className="h-4 w-4 mr-2.5 text-accent group-hover:text-primary transition-colors flex-shrink-0" />
                    <span>github.com/anubhab7111</span>
                  </a>
                  <a
                    href="https://x.com/forreal_anubhab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary transition-colors group"
                  >
                    <Twitter className="h-4 w-4 mr-2.5 text-accent group-hover:text-primary transition-colors flex-shrink-0" />
                    <span>x.com/forreal_anubhab</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Scrollable Content Area */}
            <main className="w-full md:w-2/3 lg:w-3/4 md:pl-8 lg:pl-12 py-8 md:py-12 scroll-smooth space-y-16 md:space-y-24 scroll-pt-[180px] md:scroll-pt-[180px]">
              <section id="about" className="scroll-mt-[180px] md:scroll-mt-[180px]">
                <AboutSection />
              </section>
              <section id="education" className="scroll-mt-[180px] md:scroll-mt-[180px]">
                <EducationSection />
              </section>
              <section id="projects" className="scroll-mt-[180px] md:scroll-mt-[180px]">
                <ProjectsSection />
              </section>
              <section id="achievements" className="scroll-mt-[180px] md:scroll-mt-[180px]">
                <AchievementsSection />
              </section>
               <section id="extracurricular" className="scroll-mt-[180px] md:scroll-mt-[180px]">
                <ExtracurricularSection />
              </section>
              <section id="cv" className="scroll-mt-[180px] md:scroll-mt-[180px]">
                <CvSection />
              </section>
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 px-4 text-center border-t border-border bg-card">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Anubhab Das. All rights reserved. Website developed with Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </>
  );
}
