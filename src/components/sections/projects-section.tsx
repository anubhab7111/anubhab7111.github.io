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

type Project = {
  title: string;
  date: string;
  description: string[];
  decision?: string;
  technologies: string[];
  link: string;
  image?: string;
  imageHint?: string;
};

const projectsData: Project[] = [
  {
    title: "LawWeb – Citation-Verified Legal Assistant for Indian Law",
    date: "Aug 2026",
    description: [
      "Built solo to run locally on a 4 GB-VRAM laptop and to answer in Indian languages. Hybrid retrieval (BM25 plus BGE-M3 dense search, then cross-encoder reranking) over about 12.9K chunks from 40+ statutes (\"bare acts\", the official statute texts).",
      "A regex citation verifier catches right-number-wrong-Act errors without an LLM call, and a sentence-level grounding gate flags dropped exceptions and reversed conditions. A LangGraph intent router, a multilingual layer (fastText and IndicTrans2, 23 languages) that masks citations before translation so they are not garbled, and a pgvector lawyer-recommendation engine.",
      "On an 18-query evaluation set, retrieval reached Hit@3 = 100% and MRR = 0.91. Context: India replaced the IPC with the BNS in 2024, so general-purpose LLMs often cite the wrong section.",
    ],
    decision:
      "Chose a 4B model because the 14B model spilled to CPU at about 500 seconds per answer.",
    technologies: [
      "LangGraph",
      "BM25",
      "BGE-M3",
      "Cross-encoder reranking",
      "FAISS",
      "pgvector",
      "IndicTrans2",
      "FastAPI",
      "Ollama",
    ],
    link: "https://github.com/anubhab7111/LawWeb",
    image: "/images/lawweb.png",
    imageHint: "AI legal assistant platform",
  },
  {
    title: "FedQoS – Federated Learning for 5G QoS Prediction",
    date: "Aug 2025",
    description: [
      "Improved QoS prediction R2 from 0.31 to 0.96 through advanced feature engineering on 5G V2X time-series data. Developed a federated learning framework using Flower and PyTorch LSTMs, training across 7 distributed clients over 10 communication rounds. Constructed a multi-output inference pipeline with per-client MinMaxScaler serialization and ONNX export.",
    ],
    technologies: ["PyTorch", "Flower (FedAvg)", "LSTM", "FastAPI", "ONNX", "Docker"],
    link: "https://github.com/anubhab7111/FedQoS",
  },
  {
    title: "Football Analysis",
    date: "Mar 2025",
    description: [
      "Achieved 0.981 mAP@50 in player detection by fine-tuning YOLOv5x (97M params, 246 GFLOPs) on football dataset. Classified teams with 0.74 Silhouette Score by engineering HSV color features and applying KMeans clustering. Implemented ByteTrack-based pipeline to track player/ball movement, computing player speed and ball possession.",
    ],
    technologies: ["YOLO", "KMeans Clustering", "Computer Vision", "Python", "OpenCV"],
    link: "https://github.com/anubhab7111/Football-Analysis",
    image: "/images/Football-Analysis.png",
    imageHint: "sports analytics",
  },
];

export function ProjectsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <Hammer className="h-7 w-7 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => {
            // The lead project spans both columns so it reads first.
            const isLead = index === 0;
            return (
            <FadeIn
              delay={`delay-${index * 100}ms`}
              key={project.title}
              className={isLead ? "md:col-span-2" : undefined}
            >
              <Card className="flex h-full flex-col overflow-hidden bg-secondary/40 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent">
                {project.image && (
                  <div
                    className={`relative w-full border-b-2 border-foreground ${
                      isLead ? "h-64" : "h-48"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={isLead ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="space-y-1.5">
                    <CardTitle className="font-serif text-lg font-semibold leading-snug text-primary">
                      {project.title}
                    </CardTitle>
                    <time className="block font-mono text-xs text-muted-foreground tabular-nums">
                      {project.date}
                    </time>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 pt-1">
                  <div className="space-y-3">
                    {project.description.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-6 text-foreground/75"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {project.decision && (
                    <p className="accent-bar pl-3 text-sm leading-6 text-foreground/80">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                        Decision:{" "}
                      </span>
                      {project.decision}
                    </p>
                  )}
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
                </CardFooter>
              </Card>
            </FadeIn>
            );
          })}
        </div>
        <p className="font-mono text-xs leading-6 text-muted-foreground">
          <span className="font-bold uppercase tracking-widest text-foreground/60">
            Foundations:{" "}
          </span>
          <a
            href="https://github.com/anubhab7111/micrograd"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-accent"
          >
            Micrograd
          </a>
          , a reverse-mode autodiff engine with backpropagation for fully
          connected networks in about 150 lines of Python.
        </p>
      </div>
    </FadeIn>
  );
}
