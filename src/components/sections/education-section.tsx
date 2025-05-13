
import { BookOpen, CalendarDays, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/utility/fade-in';

const educationData = [
  {
    institution: "National Institute of Technology, Rourkela",
    degree: "Bachelor of Technology in Electronics and Instrumentation Engineering",
    duration: "September 2023 – Present",
    location: "Rourkela, Odisha",
    details: [],
  },
  {
    institution: "ODM Public School",
    degree: "AISCCE – CBSE, Science (PCM)",
    duration: "May 2023",
    location: "Bhubaneswar, Odisha",
    details: ["Percentage - 94%"],
  },
  {
    institution: "Delhi Public School, Kalinga",
    degree: "AISSE – CBSE",
    duration: "May 2021",
    location: "Bhubaneswar, Odisha",
    details: ["Percentage - 95%"],
  },
];

export function EducationSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <BookOpen className="mr-3 h-8 w-8" />
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <FadeIn delay={`delay-${index * 100}`} key={edu.institution}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary/90">{edu.institution}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {edu.degree}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-2 h-4 w-4 text-accent" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4 text-accent" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.details && edu.details.length > 0 && (
                    <div className="pt-2">
                      {edu.details.map((detail) => (
                        <Badge key={detail} variant="secondary" className="text-xs bg-accent/10 text-accent hover:bg-accent/20 mr-1 mb-1">
                          {detail}
                        </Badge>
                      ))}
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
