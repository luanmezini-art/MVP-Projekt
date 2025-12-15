import { Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
    const steps = [
        {
            icon: Lightbulb,
            title: "1. Idee & Briefing",
            description: "Statt endloser Meetings füllst du meinen strukturierten Fragenkatalog aus. So zwingen wir deine Idee in eine klare Form und sparen wertvolle Zeit."
        },
        {
            icon: Code2,
            title: "2. Bau des Prototypen",
            description: "Ich setze den Turbo ein. Mit maßgeschneiderten React-Templates und AI-Tools entsteht deine Anwendung in Rekordzeit."
        },
        {
            icon: Rocket,
            title: "3. Übergabe & Code",
            description: "Innerhalb weniger Tage erhältst du deinen deployten Live-Link und das vollständige GitHub-Repository für die spätere Weiterentwicklung."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
                    So einfach ist der <span className="text-indigo-500">Prozess</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Icon Bubble */}
                                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-zinc-900 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]">
                                    <step.icon className="w-7 h-7 text-indigo-400" />
                                </div>

                                {/* Content */}
                                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0 inline-block mb-4">
                                        {step.description}
                                    </p>
                                    {index === 0 && (
                                        <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                                            <a href="/start" className="text-indigo-400 font-medium hover:text-indigo-300 inline-flex items-center transition-colors">
                                                Jetzt Briefing starten <ArrowRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Spacer for other side */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
