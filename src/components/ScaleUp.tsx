import { TrendingUp, ArrowRight } from "lucide-react";

export default function ScaleUp() {
    return (
        <section className="py-24 px-4 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12">

                    {/* Subtle Gradient Background */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">

                        {/* Icon Box */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                <TrendingUp className="w-8 h-8 text-green-500" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Keine Sackgasse: Der Plan für deinen <span className="text-green-500">Erfolg.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Ein MVP ist der Start, nicht das Ende. Sobald dein Proof-of-Concept steht und du die ersten 1.000 User hast, lasse ich dich nicht allein.
                                Durch mein Netzwerk vermittle ich dich nahtlos an spezialisierte Senior-Entwickler weiter, die deine App für die Skalierung auf Enterprise-Level heben.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
