interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="dashed-border hover:border-blue/30 transition-colors h-full">
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-2">
          {experience.period}
        </p>
        <h3 className="text-sm font-medium mb-1">{experience.title}</h3>
        <p className="text-xs text-blue mb-2">{experience.company}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {experience.description}
        </p>
        {experience.technologies && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {experience.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] dashed-border px-2 py-0.5 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 3 && (
              <span className="text-[10px] text-muted-foreground">
                +{experience.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
