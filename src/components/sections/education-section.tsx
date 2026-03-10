import { BookOpen, CalendarDays, MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/utility/fade-in";

const educationData = [
  {
    institution: "National Institute of Technology, Rourkela",
    degree:
      "Bachelor of Technology in Electronics and Instrumentation Engineering",
    duration: "September 2023 – Present (Expected: 2027)",
    location: "Rourkela, Odisha",
    details: [
      "Relevant Coursework:",
      "Probability and Statistics (MA2001)",
      "Introduction to AI and ML (CS2011)",
      "Neural Networks and Deep Learning (EC3608)",
      "Digital Signal Processing (EC3601)",
    ],
  },
  {
    institution: "ODM Public School",
    degree: "AISSCE – CBSE, Science (PCM)",
    duration: "May 2023",
    location: "Bhubaneswar, Odisha",
    details: ["Percentage — 94%"],
  },
  {
    institution: "Delhi Public School, Kalinga",
    degree: "AISSE – CBSE",
    duration: "May 2021",
    location: "Bhubaneswar, Odisha",
    details: ["Percentage — 95%"],
  },
];

export function EducationSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3 tracking-tight">
          <BookOpen className="h-7 w-7 flex-shrink-0" />
          Education
        </h2>
        <div className="space-y-5">
          {educationData.map((edu, index) => (
            <FadeIn delay={`delay-${index * 100}`} key={edu.institution}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-serif font-semibold text-primary/90 tracking-tight leading-snug">
                    {edu.institution}
                  </CardTitle>
                  <CardDescription className="text-sm text-foreground/70 font-medium mt-0.5">
                    {edu.degree}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 pt-0">
                  <div className="flex items-center text-xs text-muted-foreground tabular-nums">
                    <CalendarDays className="mr-2 h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="mr-2 h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && edu.details.length > 0 && (
                    <div className="pt-3">
                      {edu.details.map((detail, i) =>
                        detail.startsWith("Relevant Coursework") ? (
                          <p
                            key={i}
                            className="font-semibold text-xs uppercase tracking-widest text-primary/70 mt-2 mb-2"
                          >
                            {detail}
                          </p>
                        ) : (
                          <Badge
                            key={detail}
                            variant="secondary"
                            className="text-xs bg-accent/10 text-accent hover:bg-accent/20 mr-1 mb-1.5 font-normal"
                          >
                            {detail}
                          </Badge>
                        ),
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
