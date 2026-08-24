
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
    <div className="flex h-full w-full max-w-2xl flex-col rounded-md border-2 border-foreground bg-card shadow-brutal-primary">
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
        className="scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-card h-[320px] flex-1 overflow-y-auto p-4 font-mono text-sm text-foreground/90"
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
                className={line.isCommand ? 'text-primary' : 'text-foreground/90'}
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

      {/* Terminal */}
      <div className="flex">
        <Terminal />
      </div>
    </div>
  );
}
