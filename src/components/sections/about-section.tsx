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
            I am a final-year B.Tech. student in Electronics and Instrumentation
            Engineering at the National Institute of Technology Rourkela. My
            research interests lie in deep learning, computer vision, and image
            restoration, with a focus on designing efficient and reproducible
            neural models.
          </p>
          <p>
            At NIT Rourkela, I am currently working on underwater image
            enhancement, exploring deep learning–based restoration techniques
            for degraded visual data captured in challenging aquatic
            environments. I am particularly interested in bridging the gap
            between theoretical advances and deployable, resource-efficient
            systems for real-world visual understanding.
          </p>
          <p>
            Beyond research, I enjoy implementing and experimenting with deep
            learning systems—from building lightweight autograd engines to
            training and optimizing neural architectures. A central aspect of my
            development philosophy is computational minimalism—achieving strong
            performance with lean, well-engineered code. I primarily work on
            Arch Linux, maintaining a custom, minimal setup using Hyprland,
            optimized for efficient experimentation and clean research
            workflows.
          </p>
          <p>
            In the long term, I aim to pursue research that advances the
            intersection of efficient visual learning and practical AI
            deployment, contributing to systems that are both scientifically
            grounded and computationally accessible.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
