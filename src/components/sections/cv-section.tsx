import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/utility/fade-in";

export function CvSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3 tracking-tight">
          <FileText className="h-7 w-7 flex-shrink-0" />
          Curriculum Vitae
        </h2>
        <div className="space-y-5">
          <p className="text-base text-foreground/80 leading-7 max-w-prose">
            Download my CV for a comprehensive overview of my academic
            background, research interests, projects, and experience.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              asChild
              size="lg"
              className="shadow-md hover:shadow-lg transition-shadow font-medium"
            >
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
          <p className="text-xs text-muted-foreground tracking-wide">
            Hosted on Google Drive — click to view or download.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
