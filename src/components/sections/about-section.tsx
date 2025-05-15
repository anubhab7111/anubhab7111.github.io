
import Image from 'next/image';
import { UserCircle } from 'lucide-react';
import { FadeIn } from '@/components/utility/fade-in';

export function AboutSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
            <UserCircle className="mr-3 h-8 w-8" />
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Image
              src="/images/anubhab.jpg"
              alt="Anubhab Das"
              width={180}
              height={180}
              className="rounded-lg object-cover shadow-lg border-2 border-primary/10"
              data-ai-hint="professional headshot"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I'm Anubhab Das, an undergraduate at NIT Rourkela with a focused interest in deep learning and computer vision. I enjoy designing and experimenting with neural networks—from implementing lightweight autograd engines to training segmentation models for real-world visual tasks. I'm especially drawn to research that bridges theory with deployable solutions, with an emphasis on clean code, reproducibility, and GPU efficiency.
            </p>
            <p>
              Most of my development happens on Arch Linux (check out my dotfiles in the projects section), where I've built a custom, minimal setup using Hyprland—because good research deserves a good terminal.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
