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
            I am a final-year B.Tech. student in Electronics and
            Instrumentation Engineering at the National Institute of
            Technology Rourkela, with a strong interest in artificial
            intelligence, deep learning, and building practical software
            systems.
          </p>
          <p>
            I enjoy working at the intersection of{" "}
            <strong className="font-semibold text-foreground">
              AI research and product development
            </strong>
            —taking ideas from papers and prototypes to reliable, usable
            systems. My work spans deep learning, computer vision,
            information retrieval, and backend engineering, with experience
            building AI-powered applications, optimizing ML pipelines, and
            developing production-oriented infrastructure.
          </p>
          <p>
            I am particularly interested in working with{" "}
            <strong className="font-semibold text-foreground">
              early-stage startups and product-focused teams
            </strong>
            , where I can contribute across the stack, solve ambiguous
            technical problems, and turn ideas into working products. I value
            engineering simplicity, rapid experimentation, and building
            systems that are efficient enough to work beyond the lab.
          </p>
          <p>
            Alongside product development, I remain actively interested in{" "}
            <strong className="font-semibold text-foreground">
              research opportunities
            </strong>{" "}
            in efficient deep learning, computer vision, and image
            restoration. My long-term goal is to work on AI systems that
            combine strong technical foundations with real-world impact—
            whether through research, products, or the space where the two
            meet.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
