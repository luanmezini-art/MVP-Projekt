import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProcessTimeline from "@/components/ProcessTimeline";
import Pricing from "@/components/Pricing";
import ScaleUp from "@/components/ScaleUp";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <ProcessTimeline />
      <Pricing />
      <ScaleUp />
      <ContactFooter />
    </main>
  );
}
