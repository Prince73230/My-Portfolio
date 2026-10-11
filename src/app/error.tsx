"use client";

import Link from "next/link";
import { Home, RotateCcw, TriangleAlert } from "lucide-react";

type ErrorPageProps = {
    error: Error & { digest?: string };
    retry: () => void;
};

export default function ErrorPage({ error, retry }: ErrorPageProps) {
    return (
        <main className="relative isolate flex min-h-[68svh] items-center overflow-hidden bg-[#10201b] px-5 py-16 text-white sm:px-8 sm:py-20">
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(187,220,198,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(187,220,198,0.15) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />
            <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center border border-[#527564] bg-[#17352a]">
                    <div aria-hidden="true" className="absolute inset-4 border border-dashed border-[#527564]" />
                    <span aria-hidden="true" className="absolute left-7 top-7 font-mono text-xs uppercase tracking-[0.2em] text-[#a9cdb7]">System note / 01</span>
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#8fbba0] bg-[#244936] text-[#bde2c7] shadow-[0_0_90px_-30px_rgba(120,196,148,0.5)]">
                        <TriangleAlert size={48} strokeWidth={1.25} aria-hidden="true" />
                        <span aria-hidden="true" className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-4 border-[#17352a] bg-[#e28e63]" />
                    </div>
                    <span aria-hidden="true" className="absolute bottom-7 right-7 font-mono text-xs text-[#a9cdb7]">TEMPORARY INTERRUPTION</span>
                </div>

                <div className="max-w-xl">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#a9cdb7]">Unexpected error</p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                        A brief interruption.
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-7 text-[#c4d2c8]">
                        Something didn&apos;t load as expected. Your place is still here; try again, or head back to the homepage.
                    </p>
                    {error.digest && (
                        <p className="mt-4 font-mono text-xs text-[#8fa99a]">Reference: {error.digest}</p>
                    )}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={retry}
                            className="inline-flex min-h-12 items-center gap-2 bg-[#bde2c7] px-5 text-sm font-semibold text-[#14271d] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bde2c7]"
                        >
                            <RotateCcw size={17} aria-hidden="true" />
                            Try again
                        </button>
                        <Link
                            href="/"
                            className="inline-flex min-h-12 items-center gap-2 border border-[#668271] px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bde2c7]"
                        >
                            <Home size={17} aria-hidden="true" />
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}