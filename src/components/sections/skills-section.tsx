import { Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/utility/fade-in";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C++ (intermediate)", "SQL"],
  },
  {
    category: "LLM and retrieval",
    skills: [
      "LangGraph",
      "LangChain",
      "FAISS",
      "BM25",
      "Cross-encoder reranking",
      "Ollama",
      "Evaluation (Hit@k, MRR, RAG triad)",
    ],
  },
  {
    category: "Backend and data",
    skills: [
      "FastAPI",
      "PostgreSQL and pgvector",
      "Snowflake",
      "Docker",
      "GitLab CI/CD",
      "JWT",
    ],
  },
  {
    category: "ML and CV",
    skills: ["PyTorch", "Flower (federated learning)", "ONNX", "YOLO", "OpenCV"],
  },
  {
    category: "Tools",
    skills: ["Linux (Arch)", "Git and GitHub"],
  },
];

export function SkillsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="mb-8 flex items-center gap-3">
          <Wrench className="h-7 w-7 flex-shrink-0 text-accent" />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            Skills
          </h2>
        </div>
        <dl className="space-y-5">
          {skillsData.map(({ category, skills }) => (
            <div
              key={category}
              className="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-baseline"
            >
              <dt className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                {category}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-accent text-accent"
                  >
                    {skill}
                  </Badge>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </FadeIn>
  );
}
