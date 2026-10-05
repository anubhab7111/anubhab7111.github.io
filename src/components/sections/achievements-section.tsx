import { Trophy, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/utility/fade-in";

const achievementsData = [
  {
    title: "1st Prize, HackInnovision 1.0",
    description: "Won for the E-Sahayak grievance platform.",
    date: "Jan 2024",
    issuer: "NIT Rourkela",
    certificateLink:
      "https://drive.google.com/file/d/1sLUqbgcfYirGYaDgls6ai0g6_OKFtWJf/view?usp=sharing",
  },
  {
    title: "3rd Runner-Up, AlgoBlitz",
    description: "Competitive programming contest.",
    date: "2025",
    issuer: "NIT Rourkela",
  },
];

export function AchievementsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="h-7 w-7 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            Awards
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {achievementsData.map((achievement, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={achievement.title}>
              <Card className="flex h-full flex-col bg-secondary/40 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg font-semibold leading-snug text-primary">
                    {achievement.title}
                  </CardTitle>
                  <p className="font-mono text-xs text-muted-foreground tabular-nums">
                    {achievement.date} · {achievement.issuer}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 pt-0">
                  <p className="text-sm leading-6 text-foreground/75">
                    {achievement.description}
                  </p>
                  {achievement.certificateLink && (
                    <Button variant="outline" size="sm" asChild className="text-xs">
                      <a
                        href={achievement.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        View Certificate
                      </a>
                    </Button>
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
