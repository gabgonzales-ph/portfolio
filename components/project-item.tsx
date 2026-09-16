import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div>
      
      <a  href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-lg font-medium underline underline-offset-2 hover:text-accent transition-colors"
      >
        {project.title}
        <ArrowUpRight size={16} strokeWidth={2} />
      </a>
      <p className="text-sm text-subheading mt-1 mb-4">
        {project.description}
      </p>
      <div className="rounded-lg overflow-hidden bg-subheading/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}