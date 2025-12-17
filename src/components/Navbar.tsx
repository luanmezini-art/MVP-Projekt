import Link from "next/link";
import { Rocket, ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b border-white/5 bg-zinc-950/80 backdrop-blur-md px-4 md:px-8">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Rocket className="w-6 h-6 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-lg font-bold text-white tracking-tight">MVP Projekt</span>
                </Link>

                {/* CTA Button */}
                <Link
                    href="/start"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg group"
                >
                    Projekt starten
                    <ArrowRight className="w-4 h-4 ml-2 text-zinc-400 group-hover:text-white transition-colors" />
                </Link>
            </div>
        </nav>
    );
}
