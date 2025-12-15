import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    const features = [
        "Individuelle Landing Page",
        "User Login & Datenbank-Setup",
        "Implementation deiner Kern-Funktion",
        "Hosting Einrichtung (Vercel)",
        "✅ Inkl. Einrichtung deiner Wunsch-Domain",
        "Vollständige Code-Übergabe (GitHub)"
    ];

    return (
        <section className="py-24" id="pricing">
            <div className="max-w-4xl mx-auto px-4">
                <div className="relative group">
                    {/* Glowing background effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-12 overflow-hidden">
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Launch Angebot
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="text-yellow-400 w-6 h-6" />
                                    Das Kickstart-Paket
                                </h2>
                                <p className="text-zinc-400 mb-6">
                                    Alles, was du brauchst, um deine Idee in wenigen Tagen online zu bringen und echten Traffic zu testen.
                                </p>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-xl text-zinc-500 line-through decoration-zinc-500">499 €</span>
                                    <span className="text-4xl md:text-5xl font-bold text-white">299 €</span>
                                    <span className="text-zinc-500 font-medium self-end mb-1">/ Festpreis</span>
                                </div>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Nur für kurze Zeit. Rechnung inkl. MwSt.</p>
                            </div>

                            <div className="md:w-1/2">
                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-zinc-300">
                                            <Check className="w-5 h-5 text-indigo-500 mr-3 shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/start"
                                    className="w-full inline-flex items-center justify-center px-6 py-4 text-center font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
                                >
                                    Angebot sichern & Briefing starten
                                </Link>
                                <p className="text-xs text-zinc-500 text-center mt-4 leading-relaxed">
                                    Ideal für Gründer, die sich nicht mit DNS-Records, Datenbank-Setups und Hosting herumschlagen wollen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
