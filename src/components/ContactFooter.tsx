import { Send } from "lucide-react";

export default function ContactFooter() {
    return (
        <footer className="bg-black py-24 border-t border-zinc-900" id="contact">
            <div className="max-w-xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">Lass uns starten.</h2>
                    <p className="text-zinc-400">
                        Du hast die Idee. Ich habe die Skills.
                        <br />
                        Schreib mir und wir legen los.
                    </p>
                </div>

                <form className="space-y-6 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Dein Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                            placeholder="Max Mustermann"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Deine E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                            placeholder="max@beispiel.de"
                        />
                    </div>

                    <div>
                        <label htmlFor="idea" className="block text-sm font-medium text-zinc-400 mb-2">Beschreibe deine Idee in einem Satz</label>
                        <textarea
                            id="idea"
                            rows={3}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all resize-none"
                            placeholder="Eine App für..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]"
                    >
                        <Send className="w-5 h-5" />
                        Anfrage senden
                    </button>
                </form>

                <div className="mt-16 text-center text-zinc-600 text-sm">
                    &copy; {new Date().getFullYear()} MVP Builder. All rights reserved. Made with Next.js & Tailwind.
                </div>
            </div>
        </footer>
    );
}
