import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Certifications from "@/components/sections/certifications";
import Separator from "@/components/separator";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto md:-translate-x-20">
      <Hero />
      <Separator />
      <Experience />
      <Separator />
      <Projects />
      <Separator />
      <Certifications />
    </main>
  );
}