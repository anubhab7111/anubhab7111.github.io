import { BookMarked } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/utility/fade-in";

const publicationsData = [
  {
    title:
      "FAR-Net: Frequency-Based Attention Refinement Framework for Underwater Image Enhancement",
    venue: "IEEE InGARSS 2026",
    status: "Accepted for Presentation",
  },
];

export function PublicationsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <BookMarked className="h-7 w-7 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            Publications
          </h2>
        </div>
        <div className="space-y-5">
          {publicationsData.map((publication, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={publication.title}>
              <Card className="bg-secondary/40 border-2 border-foreground transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-serif font-semibold leading-snug tracking-tight text-primary">
                    {publication.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-accent text-accent"
                    >
                      {publication.venue}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">
                      {publication.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
