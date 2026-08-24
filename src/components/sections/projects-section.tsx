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
    title: "LawWeb – AI Legal Assistant Platform for Indian Law",
    date: "Aug 2026",
    description:
      "Architected a hybrid retrieval pipeline combining dense (FAISS) and sparse (BM25) search fused via Reciprocal Rank Fusion with cross-encoder reranking. Orchestrated a LangGraph agentic workflow with low-latency embedding-based intent classifier and engineered a 3-layer document validation pipeline. Designed a hybrid lawyer recommendation engine combining pgvector semantic search with weighted ranking.",
    technologies: ["FastAPI", "LangGraph", "LangChain", "FAISS", "PostgreSQL", "Ollama"],
    link: "https://github.com/anubhab7111/LawWeb",
    image: "/images/lawweb.png",
    imageHint: "AI legal assistant platform",
  },
  {
    title: "FedQoS – Federated Learning for 5G QoS Prediction",
    date: "Aug 2025",
    description:
      "Improved QoS prediction R2 from 0.31 to 0.96 through advanced feature engineering on 5G V2X time-series data. Developed a federated learning framework using Flower and PyTorch LSTMs, training across 7 distributed clients over 10 communication rounds. Constructed a multi-output inference pipeline with per-client MinMaxScaler serialization and ONNX export.",
    technologies: ["PyTorch", "Flower (FedAvg)", "LSTM", "FastAPI", "ONNX", "Docker"],
    link: "https://github.com/anubhab7111/FedQoS",
    image: "/images/fedqos.png",
    imageHint: "federated learning 5G",
  },
  {
    title: "Football Analysis",
    date: "Mar 2025",
    description:
      "Achieved 0.981 mAP@50 in player detection by fine-tuning YOLOv5x (97M params, 246 GFLOPs) on football dataset. Classified teams with 0.74 Silhouette Score by engineering HSV color features and applying KMeans clustering. Implemented ByteTrack-based pipeline to track player/ball movement, computing player speed and ball possession.",
    technologies: ["YOLO", "KMeans Clustering", "Computer Vision", "Python", "OpenCV"],
    link: "https://github.com/anubhab7111/Football-Analysis",
    image: "/images/Football-Analysis.png",
    imageHint: "sports analytics",
  },
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
