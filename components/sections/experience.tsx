import { Briefcase } from "lucide-react";
import Section from "@/components/section";
import ExperienceItem from "@/components/experience-item";

const experience = [
  {
    dateRange: "February - April 2026",
    company: "San Pablo City LGU - MIS Office",
    role: "Intern",
    accomplishments: [
      "Led development of a key feature that improved some measurable outcome.",
      "Collaborated with cross-functional teams to ship a major release.",
      "Mentored junior developers on best practices.",
    ],
  },
  {
    dateRange: "April 2026 - Present",
    company: "San Pablo City LGU - MIS Office ",
    role: "Junior Programmer (Casual)",
    accomplishments: [
      "Built and maintained core parts of the product.",
      "Improved performance/reliability of an existing system.",
    ],
  },

];

export default function Experience() {
  return (
    <Section
      label={
        <span className="inline-flex items-center gap-1.5 text-lg font-light normal-case tracking-normal text-foreground">
          <Briefcase size={16} strokeWidth={1.5} />
          experience
        </span>
      }
    >
      {experience.map((entry) => (
        <ExperienceItem key={entry.company} entry={entry} />
      ))}
    </Section>
  );
}