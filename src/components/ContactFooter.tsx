import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactFooter() {
    return (
        <footer className="bg-black py-24 border-t border-zinc-900" id="contact">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                    Bereit, deine Idee zu testen?
                </h2>
                <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Starte jetzt dein Projekt-Briefing. Kostenlos und unverbindlich.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/start"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
                    >
                        Jetzt Briefing starten
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-center items-center gap-4 text-zinc-600 text-sm">
                    <span>&copy; {new Date().getFullYear()} MVP Builder.</span>
                    <span className="hidden md:inline">•</span>
                    <span>All rights reserved.</span>
                    <span className="hidden md:inline">•</span>
                    <span>Made with Next.js & Tailwind.</span>
                </div>
            </div>
        </footer>
    );
}
