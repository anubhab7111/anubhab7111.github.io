import { UserCircle } from "lucide-react";
import { FadeIn } from "@/components/utility/fade-in";

export function AboutSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-6 flex items-center gap-3">
          <UserCircle className="h-8 w-8 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            About
          </h2>
        </div>
        <div
          className="space-y-5 text-foreground/80 leading-7 text-base max-w-prose text-justify hyphens-auto"
          lang="en"
        >
          <p>
            I build AI systems that work in production. At Bank of New York I built a
            Snowflake data gateway that{" "}
            <strong className="font-semibold text-foreground">
              cut query latency by 49%
            </strong>
            , and I built{" "}
            <strong className="font-semibold text-foreground">LawWeb</strong>,
            a citation-verified legal assistant for Indian law, as a solo
            project. I also do computer vision research, with a paper
            accepted at IEEE InGARSS 2026.
          </p>
          <p>
            I am looking for an{" "}
            <strong className="font-semibold text-foreground">
              early-stage team
            </strong>{" "}
            where I can own retrieval, backend and evaluation work end to
            end. I like measuring what I ship, and I want to work on problems
            where the answer has to be right, not just plausible.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
