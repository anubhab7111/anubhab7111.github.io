
import { ActivitySquare, Users, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { FadeIn } from '@/components/utility/fade-in';

const extracurricularData = [
  {
    organization: "Game to Aim",
    role: "Code Team | Secretary",
    duration: "February 2024 – Present",
    location: "NIT Rourkela",
    description: [
      "Constructed CampusSurvivalVR, a Virtual Reality (VR) multiplayer game set in a 3D-modeled NIT Rourkela campus using Unity and Netcode.",
      "Rendered and presented a Virtual Reality video during Mental Health Awareness Week organized by ICS.",
      "Serving as the Secretary of the club, overseeing project planning, team coordination, and event execution.",
    ],
    icon: <Users className="mr-2 h-5 w-5 text-accent" />
  },
  {
    organization: "Algorithm and Programming Society",
    role: "Technical Team",
    duration: "February 2024 – Present",
    location: "NIT Rourkela",
    description: [
      "Built a website-based puzzle game, Meteor Madness, at HackInnovision 2024, showcasing expertise in problem-solving.",
    ],
    icon: <Rocket className="mr-2 h-5 w-5 text-accent" />
  },
];

export function ExtracurricularSection() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <ActivitySquare className="mr-3 h-8 w-8" />
          Extracurricular Activities
        </h2>
        <div className="space-y-6">
          {extracurricularData.map((activity, index) => (
            <FadeIn delay={`delay-${index * 100}`} key={activity.organization}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary/90 flex items-center">
                    {activity.icon}
                    {activity.organization}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {activity.role} &middot; {activity.duration} &middot; {activity.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-foreground/80 text-sm leading-relaxed">
                    {activity.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
