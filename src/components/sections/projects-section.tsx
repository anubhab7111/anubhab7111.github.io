
import Image from 'next/image';
import { ExternalLink, Hammer, Code } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/utility/fade-in';

const projectsData = [
  {
    title: "Micrograd",
    date: "Dec 2024",
    description: "Built a minimal reverse-mode autodiff engine in Python, inspired by PyTorch's dynamic computation graph. The system supports neural networks with fully connected layers and backpropagation, all implemented in just 150 lines of clear, graph-driven code.",
    technologies: ["Python", "Backpropagation", "Computational Graphs"],
    link: "https://github.com/anubhab7111/micrograd.git",
    image: "/images/micrograd.png",
  },
  {
    title: "Football Analysis",
    date: "Mar 2025",
    description: "Trained a custom YOLO model to detect and track players, referees, and the football in match footage. Used KMeans clustering for team classification based on jersey colors and analyzed ball possession. Applied optical flow and perspective transformation to track player movement and measure speed.",
    technologies: ["YOLO", "KMeans Clustering", "Computer Vision", "Python"],
    link: "https://github.com/anubhab7111/Football-Analysis",
    image: "/images/Football-Analysis.png",
  },
  {
    title: "Portfolio Website",
    date: "July 2024",
    description: "My personal academic portfolio website, designed to showcase my research, projects, and achievements. Built with modern web technologies for a clean, responsive, and accessible user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "https://github.com/anubhab7111/anubhab7111.github.io.git",
    image: "/images/portfolio.png",
  },
  {
    title: "CatppuccinRice",
    date: "September 2024",
    description: "Created a Catppuccin-themed rice for my Arch Linux setup with Hyprland, Waybar, Kitty, Bash, and Neovim. Focused on a minimal, visually engaging environment that's modular, efficient, and distraction-free for enhanced productivity.",
    technologies: ["Linux System Configuration", "Wayland Compositing (Hyprland)", "Scripting (Bash, Zsh)"],
    link: "https://github.com/anubhab7111/CatppuccinRice.git",
    image: "/images/CatppuccinRice.png",
  },
];

export function ProjectsSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <Hammer className="mr-3 h-8 w-8" />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <FadeIn delay={`delay-${index * 100}ms`} key={project.title}>
              <Card className="overflow-hidden transition-all hover:shadow-xl flex flex-col h-full bg-card">
                {project.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary/90">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{project.date}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground/90 mb-1.5 text-sm flex items-center">
                      <Code className="mr-2 h-4 w-4 text-accent" /> Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 mt-auto">
                  {project.link && project.link !== "#" && (
                    <Button variant="outline" size="sm" asChild className="shadow-sm hover:shadow-md transition-shadow">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
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
