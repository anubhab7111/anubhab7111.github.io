import { Briefcase, MapPin, Calendar } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/utility/fade-in";

const experienceData = [
  {
    title: "Software Development Intern",
    company: "Bank of New York",
    location: "Pune, India",
    duration: "May 2026 – Jul 2026",
    highlights: [
      "Implemented a production-grade FastAPI-based Snowflake Database Gateway, replacing direct database connectivity with secure REST APIs and implementing response streaming, JWT authentication, SQL validation and connection pooling.",
      "Engineered and benchmarked five query endpoint versions using Apache Arrow, Polars, orjson, streaming responses, and concurrent execution, reducing query latency by 49% and response payload size by 49% while improving scalability.",
      "Deployed a data ingestion monitoring platform tracking 2,100+ Snowflake tables across 23 schemas, featuring automated schema discovery, asynchronous query execution and containerized deployment using Docker, Uvicorn, and GitLab CI/CD.",
    ],
    technologies: ["FastAPI", "Snowflake", "PostgreSQL", "Docker", "JWT", "Apache Arrow", "Polars"],
  },
];

export function ExperienceSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <Briefcase className="h-7 w-7 flex-shrink-0 text-accent" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              // 02
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Experience
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={experience.company}>
              <Card className="bg-secondary/40 border-2 border-foreground transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent">
                <CardHeader className="pb-3">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-lg font-serif font-semibold tracking-tight text-primary">
                        {experience.title}
                      </CardTitle>
                      <p className="mt-1 font-mono text-sm font-medium text-foreground">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 sm:items-end">
                      <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm leading-6 text-foreground/75"
                      >
                        <span className="mt-0.5 flex-shrink-0 text-accent">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-accent text-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
