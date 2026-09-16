import { LayoutPanelLeft } from "lucide-react";
import Section from "@/components/section";
import ProjectItem from "@/components/project-item";
import Separator from "@/components/separator";

const projects = [
  {
    title: "San Pablo City LGU - PDS System",
    description: "A short one-line summary of what this project does.",
    url: "https://example.com",
    image: "https://placehold.co/800x500/1b1b1b/ffffff?text=Project+One",
  },
];

export default function Projects() {
  return (
    <Section
      label={
        <span className="inline-flex items-center gap-1.5 text-lg font-light normal-case tracking-normal text-foreground">
          <LayoutPanelLeft size={16} strokeWidth={1.5} />
          projects
        </span>
      }
    >
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div key={project.title}>
            <ProjectItem project={project} />
            {i < projects.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}
      </div>
    </Section>
  );
}