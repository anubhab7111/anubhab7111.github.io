import { BookMarked, FlaskConical } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/utility/fade-in";

const researchGroups = [
  {
    name: "PRISM, NIT Rourkela",
    topic: "Underwater image enhancement",
  },
];

const publicationsData = [
  {
    title:
      "FAR-Net: Frequency-Based Attention Refinement Framework for Underwater Image Enhancement",
    authors: ["Arka Bairagi", "Anubhab Das", "Samit Ari", "Sobhan Kanti Dhara"],
    venue: "IEEE InGARSS 2026",
    status: "Accepted for Presentation",
  },
];

export function PublicationsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <FlaskConical className="h-7 w-7 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            Research
          </h2>
        </div>

        <div className="space-y-4">
          <p className="max-w-prose text-base leading-7 text-foreground/80">
            My research interests are efficient deep learning, computer
            vision, and image restoration.
          </p>
          <ul className="space-y-1.5">
            {researchGroups.map((group) => (
              <li
                key={group.name}
                className="flex gap-2 text-sm leading-6 text-foreground/75"
              >
                <span className="mt-0.5 flex-shrink-0 text-accent">▸</span>
                <span>
                  <strong className="font-semibold text-foreground">
                    {group.name}
                  </strong>{" "}
                  — {group.topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
            <BookMarked className="h-3.5 w-3.5 text-accent" />
            Publications
          </h3>
          {publicationsData.map((publication, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={publication.title}>
              <Card className="bg-secondary/40 border-2 border-foreground transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg font-semibold leading-snug text-primary">
                    {publication.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-sm text-foreground">
                    {publication.authors.map((author, authorIndex) => (
                      <span key={author}>
                        {author === "Anubhab Das" ? <strong>{author}</strong> : author}
                        {authorIndex < publication.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
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
