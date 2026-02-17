import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="dashed-border hover:border-blue/40 transition-colors h-full">
        <div className="relative h-40 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium mb-1 group-hover:text-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {project.description}
          </p>
          {project.tags && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-muted-foreground dashed-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
