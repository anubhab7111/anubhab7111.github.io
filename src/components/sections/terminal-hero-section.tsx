
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const linesData = [
  { text: '$ whoami', isCommand: true, speed: 35 },
  { text: '> Anubhab Das', isCommand: false, speed: 35 },
  { text: '$ location', isCommand: true, speed: 35 },
  { text: '> Bhubaneswar, India', isCommand: false, speed: 35, Icon: MapPin },
  { text: '$ contact --phone', isCommand: true, speed: 35 },
  { text: '> (+91) 9937244767', isCommand: false, speed: 35, href: 'tel:+919937244767', Icon: Phone },
  { text: '$ contact --email', isCommand: true, speed: 35 },
  { text: '> anubhabdas7111@gmail.com', isCommand: false, speed: 35, href: 'mailto:anubhabdas7111@gmail.com', Icon: Mail },
  { text: '$ social --github', isCommand: true, speed: 35 },
  { text: '> github.com/anubhab7111', isCommand: false, speed: 35, href: 'https://github.com/anubhab7111', Icon: Github, target: '_blank' },
  { text: '$ social --linkedin', isCommand: true, speed: 35 },
  { text: '> linkedin.com/in/anubhab-das-498155287', isCommand: false, speed: 35, href: 'https://www.linkedin.com/in/anubhab-das-498155287/', Icon: Linkedin, target: '_blank' },
  { text: '$ social --twitter', isCommand: true, speed: 35 },
  { text: '> x.com/forreal_anubhab', isCommand: false, speed: 35, href: 'https://x.com/forreal_anubhab', Icon: Twitter, target: '_blank' },
  { text: '$ status', isCommand: true, speed: 35 },
  { text: '> open to research collaborations & internships_', isCommand: false, speed: 35 },
];

function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<Array<{ id: number; fullText: string; typedText: string; isCommand: boolean; href?: string; Icon?: React.ElementType; target?: string }>>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex < linesData.length) {
      const currentLineData = linesData[currentLineIndex];
      if (currentCharIndex < currentLineData.text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (newLines[currentLineIndex]) {
              newLines[currentLineIndex] = {
                ...newLines[currentLineIndex],
                typedText: newLines[currentLineIndex].typedText + currentLineData.text[currentCharIndex],
              };
            } else {
              newLines[currentLineIndex] = {
                id: currentLineIndex,
                fullText: currentLineData.text,
                typedText: currentLineData.text[currentCharIndex],
                isCommand: currentLineData.isCommand,
                href: currentLineData.href,
                Icon: currentLineData.Icon,
                target: currentLineData.target,
              };
            }
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, currentLineData.speed);
        return () => clearTimeout(timeoutId);
      } else {
        const delay = currentLineData.isCommand ? 200 : 100;
        const timeoutId = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, delay);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [currentLineIndex, currentCharIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className="flex h-full flex-col rounded-md border-2 border-foreground bg-card shadow-brutal-primary">
      {/* Fake title bar */}
      <div className="flex items-center gap-2 border-b-2 border-foreground bg-secondary px-4 py-2.5">
        <span className="h-3 w-3 rounded-full border border-foreground bg-destructive" />
        <span className="h-3 w-3 rounded-full border border-foreground bg-chart-4" />
        <span className="h-3 w-3 rounded-full border border-foreground bg-chart-5" />
        <span className="ml-2 font-mono text-xs tracking-wide text-muted-foreground">
          anubhab@nitr:~$
        </span>
      </div>
      <div
        ref={containerRef}
        className="scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-card h-full min-h-[320px] flex-1 overflow-y-auto p-4 font-mono text-sm text-foreground/90"
        aria-label="Terminal-style hero section with contact information"
      >
        {displayedLines.map((line, index) => (
          <div key={line.id} className="min-h-[1.5em] whitespace-pre-wrap break-words">
            {line.Icon && !line.isCommand && (
              <line.Icon className="mb-0.5 mr-1.5 inline-block h-4 w-4 flex-shrink-0 text-accent" />
            )}
            {line.href ? (
              <a
                href={line.href}
                target={line.target || '_self'}
                rel={line.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={line.isCommand ? 'text-primary' : 'text-foreground/90 transition-colors hover:text-accent hover:underline'}
              >
                <span>{line.typedText}</span>
              </a>
            ) : (
              <span className={line.isCommand ? 'font-semibold text-primary' : 'text-foreground/90'}>
                {line.typedText}
              </span>
            )}
            {index === currentLineIndex &&
              currentLineIndex < linesData.length &&
              currentCharIndex < linesData[currentLineIndex]?.text.length &&
              showCursor && <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary" />}
          </div>
        ))}
        {currentLineIndex >= linesData.length && showCursor && (
          <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary" />
        )}
      </div>
    </div>
  );
}

export function TerminalHeroSection() {
  return (
    <div className="grid gap-6 md:grid-cols-5">
      {/* Identity block */}
      <div className="flex flex-col gap-6 md:col-span-2">
        <div className="relative w-fit self-center rounded-md border-2 border-foreground shadow-brutal-accent md:self-start">
          <Image
            src="/images/anubhab.jpg"
            alt="Anubhab Das"
            width={180}
            height={180}
            className="h-[180px] w-[180px] rounded-[2px] object-cover"
            data-ai-hint="professional headshot"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col rounded-md border-2 border-foreground bg-card p-6 shadow-brutal">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            // hello world
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground">
            Anubhab Das
          </h1>
          <div className="mt-3 h-1 w-14 bg-primary" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
            Student at NIT Rourkela — Deep Learning &amp; Computer Vision
          </p>
          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-foreground/80">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
            <span>Bhubaneswar, India</span>
          </div>
        </div>
      </div>

      {/* Terminal block */}
      <div className="md:col-span-3">
        <Terminal />
      </div>
    </div>
  );
}
