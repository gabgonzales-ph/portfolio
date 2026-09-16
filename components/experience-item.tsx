type ExperienceEntry = {
  dateRange: string;
  company: string;
  role: string;
  accomplishments: string[];
};

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="group -mx-3 mb-10 rounded-lg px-3 py-2 transition-colors last:mb-0 hover:bg-foreground/[0.03]">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-medium transition-colors group-hover:text-accent">
            {entry.company}
          </h3>
          <p className="text-sm text-subheading">{entry.role}</p>
        </div>
        <p className="shrink-0 whitespace-nowrap text-xs text-subheading">
          {entry.dateRange}
        </p>
      </div>
      <div className="space-y-1.5">
        {entry.accomplishments.map((item, i) => (
          <p key={i} className="text-sm leading-relaxed text-foreground/80">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}