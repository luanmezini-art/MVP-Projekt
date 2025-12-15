import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProcessTimeline from "@/components/ProcessTimeline";
import Pricing from "@/components/Pricing";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-indigo-500/30">
      <Hero />
      <ProblemSolution />
      <ProcessTimeline />
      <Pricing />
      <ContactFooter />
    </main>
  );
}
