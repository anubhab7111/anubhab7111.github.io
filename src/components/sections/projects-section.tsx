import Image from "next/image";
import { ExternalLink, Hammer, Code } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/utility/fade-in";

const projectsData = [
  {
    title: "Micrograd",
    date: "Dec 2024",
    description:
      "Built a minimal reverse-mode autodiff engine in Python, inspired by PyTorch's dynamic computation graph. The system supports neural networks with fully connected layers and backpropagation, all implemented in just 150 lines of clear, graph-driven code.",
    technologies: ["Python", "Backpropagation", "Computational Graphs"],
    link: "https://github.com/anubhab7111/micrograd.git",
    image: "/images/micrograd.png",
    imageHint: "code visualization",
  },
  {
    title: "Football Analysis",
    date: "Mar 2025",
    description:
      "Trained a custom YOLO model to detect and track players, referees, and the football in match footage. Used KMeans clustering for team classification based on jersey colors and analyzed ball possession. Applied optical flow and perspective transformation to track player movement and measure speed.",
    technologies: ["YOLO", "KMeans Clustering", "Computer Vision", "Python"],
    link: "https://github.com/anubhab7111/Football-Analysis",
    image: "/images/Football-Analysis.png",
    imageHint: "sports analytics",
  },
  {
    title: "CatppuccinRice",
    date: "Sep 2024",
    description:
      "Created a Catppuccin-themed rice for my Arch Linux setup with Hyprland, Waybar, Kitty, Zsh, and Neovim. Focused on a minimal, visually engaging environment that's modular, efficient, and distraction-free for enhanced productivity.",
    technologies: [
      "Linux System Configuration",
      "Wayland Compositing (Hyprland)",
      "Scripting (Bash, Zsh)",
    ],
    link: "https://github.com/anubhab7111/CatppuccinRice.git",
    image: "/images/CatppuccinRice.png",
    imageHint: "desktop customization",
  },
];

export function ProjectsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <Hammer className="h-7 w-7 flex-shrink-0 text-accent" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              // 03
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectsData.map((project, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={project.title}>
              <Card className="flex h-full flex-col overflow-hidden bg-secondary/40 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent">
                {project.image && (
                  <div className="relative h-48 w-full border-b-2 border-foreground">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <CardTitle className="text-lg font-serif font-semibold tracking-tight leading-snug text-primary">
                      {project.title}
                    </CardTitle>
                    <time className="whitespace-nowrap font-mono text-xs text-muted-foreground tabular-nums">
                      {project.date}
                    </time>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 pt-1">
                  <p className="text-sm leading-6 text-foreground/75">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
                      <Code className="h-3.5 w-3.5 text-accent" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto flex items-center justify-between pt-4">
                  {project.link && project.link !== "#" && (
                    <Button variant="outline" size="sm" asChild className="text-xs">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
