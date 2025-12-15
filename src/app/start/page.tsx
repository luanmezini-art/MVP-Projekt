"use client";

import { useState } from "react";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function StartPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Briefing Submitted:", data);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="min-h-screen flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-4">Briefing erhalten!</h1>
                    <p className="text-zinc-400 mb-8">
                        Danke für deine Infos. Ich schaue mir das an und melde mich in Kürze bei dir.
                    </p>
                    <Link href="/" className="text-indigo-400 hover:text-indigo-300 font-medium">
                        Zurück zur Startseite
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-12 px-4 md:py-20">
            <div className="max-w-2xl mx-auto">
                <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                </Link>

                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Projekt Briefing</h1>
                    <p className="text-zinc-400 text-lg">
                        Keine Zeit verlieren. Beantworte diese Fragen, damit ich sofort verstehe, worum es geht.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800">

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Dein Name *</label>
                            <input required name="name" type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Max Mustermann" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">E-Mail *</label>
                            <input required name="email" type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="max@firma.de" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="project" className="block text-sm font-medium text-zinc-300 mb-2">Projekt-Name (Arbeitstitel) *</label>
                        <input required name="project" type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="SuperApp X" />
                    </div>

                    <div>
                        <label htmlFor="pitch" className="block text-sm font-medium text-zinc-300 mb-2">Beschreibe deine Idee (Konzept) *</label>
                        <textarea
                            required
                            name="pitch"
                            rows={4}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            placeholder="Ich möchte eine Plattform für X bauen, damit Y einfacher wird..."
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="core_feature" className="block text-sm font-medium text-zinc-300 mb-2">Der User-Flow (Schritt für Schritt) * (max 800 Zeichen)</label>
                        <textarea
                            required
                            maxLength={800}
                            name="core_feature"
                            rows={6}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            placeholder="Beispiel: 1. Nutzer lädt PDF hoch. 2. App analysiert Text. 3. Nutzer erhält Zusammenfassung."
                        ></textarea>
                        <p className="text-xs text-zinc-500 mt-1 text-right">Max. 800 Zeichen</p>
                    </div>

                    <div>
                        <label htmlFor="target_group" className="block text-sm font-medium text-zinc-300 mb-2">Zielgruppe *</label>
                        <input required name="target_group" type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Studenten, Handwerker, ..." />
                    </div>

                    <div>
                        <label htmlFor="reference" className="block text-sm font-medium text-zinc-300 mb-2">Design-Referenz (Optional)</label>
                        <input name="reference" type="url" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="https://..." />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01]"
                    >
                        <Send className="w-5 h-5" />
                        Briefing absenden
                    </button>

                </form>
            </div>
        </main>
    );
}
