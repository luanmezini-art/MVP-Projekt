import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
                    Deine App-Idee. <br className="hidden md:block" />
                    <span className="text-indigo-500">Live in wenigen Tagen.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Ich baue deinen funktionierenden MVP-Prototypen zum Festpreis.
                    Validiere deine Idee, bevor du Tausende Euro an Agenturen zahlst.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/start"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-gray-900 shadow-lg shadow-indigo-600/25"
                    >
                        Jetzt Projekt starten
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
}
