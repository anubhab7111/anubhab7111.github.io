
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const linesData = [
  { text: '$ whoami', isCommand: true, speed: 50 },
  { text: '> Anubhab Das', isCommand: false, speed: 50 },
  { text: '$ location', isCommand: true, speed: 50 },
  { text: '> Bhubaneswar, India', isCommand: false, speed: 50, Icon: MapPin },
  { text: '$ contact --phone', isCommand: true, speed: 50 },
  { text: '> (+91) 9937244767', isCommand: false, speed: 50, href: 'tel:+919937244767', Icon: Phone },
  { text: '$ contact --email', isCommand: true, speed: 50 },
  { text: '> anubhabdas7111@gmail.com', isCommand: false, speed: 50, href: 'mailto:anubhabdas7111@gmail.com', Icon: Mail },
  { text: '$ social --github', isCommand: true, speed: 50 },
  { text: '> github.com/anubhab7111', isCommand: false, speed: 50, href: 'https://github.com/anubhab7111', Icon: Github, target: '_blank' },
  { text: '$ social --linkedin', isCommand: true, speed: 50 },
  { text: '> linkedin.com/in/anubhab-das', isCommand: false, speed: 50, href: 'https://www.linkedin.com/in/anubhab-das-498155287/', Icon: Linkedin, target: '_blank' },
  { text: '$ social --twitter', isCommand: true, speed: 50 },
  { text: '> x.com/forreal_anubhab', isCommand: false, speed: 50, href: 'https://x.com/forreal_anubhab', Icon: Twitter, target: '_blank' },
  { text: '$ exit', isCommand: true, speed: 50 },
];

export function TerminalHeroSection() {
  const [displayedLines, setDisplayedLines] = useState<Array<{ id: number; fullText: string; typedText: string; isCommand: boolean; href?: string; Icon?: React.ElementType; target?: string }>>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Cursor blink rate
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
              // Ensure immutable update by creating a new object for the line
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
        // Line finished typing, move to next line after a short pause
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
    <div
      ref={containerRef}
      className="font-mono bg-card text-sm text-foreground/90 border border-border rounded-lg shadow-lg p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-card"
      aria-label="Terminal-style hero section with contact information"
    >
      {displayedLines.map((line, index) => (
        <div key={line.id} className="whitespace-pre-wrap break-words min-h-[1.5em]"> {/* Ensure line height */}
          {line.Icon && !line.isCommand && <line.Icon className="h-4 w-4 mr-1.5 mb-0.5 text-accent inline-block flex-shrink-0" />}
          {line.href ? (
            <a
              href={line.href}
              target={line.target || '_self'}
              rel={line.target === '_blank' ? 'noopener noreferrer' : undefined}
              className={`${line.isCommand ? 'text-primary' : 'text-foreground/90 hover:text-primary hover:underline transition-colors'}`}
            >
              <span>{line.typedText}</span>
            </a>
          ) : (
            <span className={line.isCommand ? 'text-primary' : 'text-foreground/90'}>
              {line.typedText}
            </span>
          )}
          {index === currentLineIndex && currentLineIndex < linesData.length && currentCharIndex < linesData[currentLineIndex]?.text.length && showCursor && (
            <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />
          )}
        </div>
      ))}
      {currentLineIndex >= linesData.length && showCursor && (
         <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />
      )}
    </div>
  );
}
