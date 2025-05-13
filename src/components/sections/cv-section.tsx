
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/utility/fade-in';

export function CvSection() {
  return (
    <FadeIn>
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">Curriculum Vitae</h2>
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Download my CV for a comprehensive overview of my qualifications, projects, and experience.
          </p>
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <a href="https://drive.google.com/file/d/1Xjo_c67G800u1_Ct0g69a9UG4OtzfRct/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download CV (PDF)
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            The CV is hosted on Google Drive. Click the button to view and download.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
