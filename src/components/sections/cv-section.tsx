import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/utility/fade-in";

export function CvSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <FileText className="h-7 w-7 flex-shrink-0 text-accent" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              // 04
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Curriculum Vitae
            </h2>
          </div>
        </div>
        <div className="space-y-5">
          <p className="max-w-prose text-base leading-7 text-foreground/80">
            Download my CV for a comprehensive overview of my academic
            background, research interests, projects, and experience.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button asChild size="lg" className="shadow-brutal">
              <a
                href="https://drive.google.com/file/d/1OHxBxrKI8QgwMwNrKml6WP-0CMBihFaQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </a>
            </Button>
          </div>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            Hosted on Google Drive — click to view or download.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
