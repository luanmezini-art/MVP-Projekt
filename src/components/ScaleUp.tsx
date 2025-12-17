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
                                <span className="text-green-500">Dein Proof-of-Concept steht.</span> Die ersten Kunden sind da. Und jetzt?
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                                Das ist das Ziel, auf das wir hinarbeiten. Aber was passiert, wenn dein MVP plötzlich 1.000 Nutzer hat und skalieren muss?
                            </p>
                            <p className="text-zinc-300 text-lg leading-relaxed font-medium">
                                Keine Sorge. Genau an diesem Punkt aktiviere ich mein Netzwerk und vermittle dich nahtlos an spezialisierte Senior-Entwickler weiter, die aus deinem Prototypen ein Enterprise-Produkt machen.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
