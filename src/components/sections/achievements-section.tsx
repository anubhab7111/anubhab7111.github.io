
import { Trophy, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/utility/fade-in';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const achievementsData = [
  {
    title: "3rd Runner Up Position in AlgoBlitz",
    description: "A competitive programming contest conducted by NIT Rourkela.",
    year: "2025",
    issuer: "NIT Rourkela",
  },
  {
    title: "1st Prize in HackInnovision",
    description: "Hosted by NIT Rourkela for devising E-Sahayak.",
    year: "2024",
    issuer: "NIT Rourkela",
    certificate: true,
    certificateLink: "https://drive.google.com/file/d/1sLUqbgcfYirGYaDgls6ai0g6_OKFtWJf/view?usp=sharing",
  },
  // {
  //   title: "AIR 13676 in JEE Advanced",
  //   description: "Joint Entrance Examination (Advanced).",
  //   year: "2023",
  //   issuer: "IITs",
  //   certificate: true,
  //   certificateLink: "https://drive.google.com/file/d/1xAzO6KY4kiuZMnmt0BCs5LTOF2ApJx1D/view?usp=sharing",
  // },
  {
    title: "Top 1% AIR in JEE Mains",
    description: "Joint Entrance Examination (Mains), among 11.6 Lakh candidates.",
    year: "2023",
    issuer: "NTA",
    certificate: true,
    certificateLink: "https://drive.google.com/file/d/19whmnfIy6ZbzesajOrS0FUon9OAvgiin/view?usp=sharing",
  },
  {
    title: "Qualified for Regional Mathematical Olympiad",
    description: "Scoring among top 30 students of Odisha in Pre-Regional Mathematical Olympiad (PRMO).",
    year: "2018",
    issuer: "HBCSE",
  },
];

export function AchievementsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <Trophy className="mr-3 h-8 w-8" />
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={achievement.title}>
              <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary/90">{achievement.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {achievement.year} {achievement.issuer && `· ${achievement.issuer}`}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="text-foreground/80 text-sm leading-relaxed">{achievement.description}</p>
                  {achievement.certificate && achievement.certificateLink && (
                    <Button variant="outline" size="sm" asChild className="mt-2 text-xs">
                      <Link href={achievement.certificateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        View Certificate
                      </Link>
                    </Button>
                  )}
                   {achievement.certificate && !achievement.certificateLink && (
                    <Badge variant="secondary" className="text-xs bg-accent/10 text-accent hover:bg-accent/20 mt-2">
                      Certificate Available
                    </Badge>
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
