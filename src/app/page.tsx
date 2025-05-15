
import Link from 'next/link';
import { BookOpen, Hammer, Trophy, ActivitySquare, Download, Menu, UserCircle } from 'lucide-react';

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
} from "@/components/ui/sheet";
import { TerminalHeroSection } from '@/components/sections/terminal-hero-section';


const navItems = [
  { name: 'About', href: '#about', Icon: UserCircle },
  { name: 'Education', href: '#education', Icon: BookOpen },
  { name: 'Projects', href: '#projects', Icon: Hammer },
  { name: 'Achievements', href: '#achievements', Icon: Trophy },
  { name: 'Activities', href: '#extracurricular', Icon: ActivitySquare },
  { name: 'CV', href: '#cv', Icon: Download },
];


export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-40 w-full border-b border-border bg-card/90 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* Intentionally empty, name/logo handled in hero or mobile nav */}
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
                       <SheetTitle className="text-left text-lg font-semibold text-primary">Anubhab Das</SheetTitle>
                       <p className="text-left text-xs text-muted-foreground">Deep Learning Enthusiast</p>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-2">
                      {navItems.map((item) => (
                        <SheetTrigger asChild key={item.name}>
                          <Button variant="ghost" size="lg" asChild className="w-full justify-start text-base text-muted-foreground hover:text-primary hover:bg-accent/10 py-3">
                            <Link href={item.href} className="flex items-center">
                              <item.Icon className="mr-2 h-4 w-4" />
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

        {/* Main Content Layout */}
        <div className="container mx-auto flex flex-1 max-w-7xl px-4">
          <div className="flex flex-col md:flex-row w-full">
            {/* Left Terminal Hero Section */}
            <TerminalHeroSection />

            {/* Main Scrollable Content Area */}
            <main className="w-full md:w-2/3 lg:w-3/4 md:pl-8 lg:pl-12 py-8 md:py-12 scroll-smooth space-y-16 md:space-y-24 scroll-pt-[6rem] md:scroll-pt-[6rem]">
              <section id="about" className="scroll-mt-[7rem] md:scroll-mt-[7rem]">
                <AboutSection />
              </section>
              <section id="education" className="scroll-mt-[7rem] md:scroll-mt-[7rem]">
                <EducationSection />
              </section>
              <section id="projects" className="scroll-mt-[7rem] md:scroll-mt-[7rem]">
                <ProjectsSection />
              </section>
              <section id="achievements" className="scroll-mt-[7rem] md:scroll-mt-[7rem]">
                <AchievementsSection />
              </section>
               <section id="extracurricular" className="scroll-mt-[7rem] md:scroll-mt-[7rem]">
                <ExtracurricularSection />
              </section>
              <section id="cv" className="scroll-mt-[7rem] md:scroll-mt-[7rem]">
                <CvSection />
              </section>
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 px-4 text-center border-t border-border bg-card">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Anubhab Das. All rights reserved. Built with Next.js, Tailwind CSS, and ❤️.
          </p>
        </footer>
      </div>
    </>
  );
}
