import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFoundPage() {
    return (
        <main className="relative isolate flex min-h-[68svh] items-center overflow-hidden bg-[#f5f4ef] px-5 py-16 text-[#202722] sm:px-8 sm:py-20">
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(67,132,103,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(67,132,103,0.08) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="relative flex min-h-64 items-center justify-center border-y border-[#cbd4cc] py-8 sm:min-h-80 lg:border-y-0 lg:border-r">
                    <span className="select-none text-[clamp(9rem,24vw,17rem)] font-black leading-[0.8] text-[#dce9df]" aria-hidden="true">404</span>
                    <span className="absolute bottom-4 left-0 font-mono text-xs uppercase tracking-[0.2em] text-[#557360]">Page not found</span>
                    <span className="absolute right-6 top-6 h-14 w-14 border border-[#d7583d] sm:right-10 sm:top-10 sm:h-20 sm:w-20">
                        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d7583d]" />
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#d7583d]" />
                    </span>
                </div>

                <div className="max-w-lg lg:pl-8">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#448064]">Wrong turn?</p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                        This page isn&apos;t here.
                    </h1>
                    <p className="mt-5 text-base leading-7 text-[#59635c]">
                        The link may be out of date, or the page may have moved. Let&apos;s get you back to something useful.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                        <Link
                            href="/"
                            className="inline-flex min-h-12 items-center gap-2 bg-[#1e4934] px-5 text-sm font-semibold text-white transition hover:bg-[#d7583d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4934]"
                        >
                            <ArrowLeft size={17} aria-hidden="true" />
                            Back to home
                        </Link>
                        <Link
                            href="/#projects"
                            className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#315d43] transition hover:text-[#c14e35] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4934]"
                        >
                            Explore projects
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}