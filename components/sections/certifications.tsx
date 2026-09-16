import { Award } from "lucide-react";
import Section from "@/components/section";
import CertificationItem from "@/components/certification-item";

const certifications = [
  {
    title: "Computer Systems Servicing NCII",
    issuer: "TESDA",
    date: "2025",
    url: "https://example.com",
    image: "https://placehold.co/800x500/1b1b1b/ffffff?text=Certificate+One",
  },
  {
    title: "Certification Name Two",
    issuer: "Issuing Organization",
    date: "2024",
    url: "https://example.com",
    image: "https://placehold.co/800x500/1b1b1b/ffffff?text=Certificate+Two",
  },
];

export default function Certifications() {
  return (
    <Section
      label={
        <span className="inline-flex items-center gap-1.5 text-lg font-light normal-case tracking-normal text-foreground">
          <Award size={16} strokeWidth={1.5} />
          certifications & training
        </span>
      }
    >
      {certifications.map((cert) => (
        <CertificationItem key={cert.title} cert={cert} />
      ))}
    </Section>
  );
}