import { ArrowUpRight } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  url: string;
  image: string;
};

export default function CertificationItem({
  cert,
}: {
  cert: Certification;
}) {
  return (
    <div className="group -mx-3 mb-10 rounded-lg px-3 py-2 transition-colors last:mb-0 hover:bg-foreground/[0.03]">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <div>
          
           <a href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium underline underline-offset-2 transition-colors group-hover:text-accent"
          >
            {cert.title}
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
          <p className="text-sm text-subheading">{cert.issuer}</p>
        </div>
        <p className="shrink-0 whitespace-nowrap text-xs text-subheading">
          {cert.date}
        </p>
      </div>
      <div className="overflow-hidden rounded-lg bg-subheading/10">
        <img
          src={cert.image}
          alt={cert.title}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}