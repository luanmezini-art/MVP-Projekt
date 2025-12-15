import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-zinc-900/30">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
                    Warum scheitern die meisten <span className="text-indigo-500">Ideen?</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center text-center hover:border-zinc-700 transition-all">
                        <XCircle className="w-12 h-12 text-red-500 mb-6" />
                        <h3 className="text-xl font-bold mb-2">Agenturen sind zu teuer</h3>
                        <p className="text-zinc-400">
                            Klassische Entwickler verlangen oft <span className="text-white font-medium">10.000 €+</span> für einen simplen Prototypen.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center text-center hover:border-zinc-700 transition-all">
                        <XCircle className="w-12 h-12 text-red-500 mb-6" />
                        <h3 className="text-xl font-bold mb-2">Selbst coden dauert lange</h3>
                        <p className="text-zinc-400">
                            Du verlierst wertvolle Monate mit Tutorials statt Feedback zu sammeln.
                        </p>
                    </div>

                    {/* Card 3 - Winner */}
                    <div className="p-8 rounded-2xl border border-indigo-500/50 bg-indigo-500/5 flex flex-col items-center text-center relative shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
                        <CheckCircle className="w-12 h-12 text-indigo-400 mb-6" />
                        <h3 className="text-xl font-bold mb-2 text-white">Der Smart-Way</h3>
                        <p className="text-zinc-300">
                            Mein Ansatz: AI-gestützte Entwicklung für extrem schnelle Ergebnisse <span className="text-indigo-400 font-bold">unter 500 €</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
