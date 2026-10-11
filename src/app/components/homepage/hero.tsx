import { FaHandPointRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-white text-slate-900"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)",
                    backgroundSize: "52px 52px",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute -right-48 top-20 h-136 w-136 rounded-full bg-teal-100/70 blur-3xl"
            />

            <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-15">
                <div className="max-w-3xl">
                    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
                        <span>&lt;hello /&gt;</span>
                        <span className="h-px w-12 bg-teal-400" />
                        <span>available for work</span>
                    </div>

                    <p className="mb-4 font-mono text-sm text-slate-400">&lt;h1&gt;</p>
                    <h1 className="max-w-4xl text-6xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                        Heyy,
                        <span className="block">
                            I'm <span className="text-teal-400">Prince</span>,
                        </span>
                        <span className="block">Frontend Developer</span>
                    </h1>
                    <p className="mt-4 font-mono text-sm text-slate-400">&lt;/h1&gt;</p>

                    <p className="mt-8 max-w-xl font-mono text-base leading-8 text-slate-500 sm:text-lg">
                        I build thoughtful, responsive digital experiences where clean code
                        meets purposeful design.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-5">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-3 border border-slate-900 bg-slate-900 px-6 py-3 font-mono text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-teal-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
                        >
                            View my work
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <FaHandPointRight size={15} />
                            </span>
                        </a>
                        <a
                            href="/contact"
                            className="font-mono text-sm font-semibold text-teal-500 underline decoration-teal-300 underline-offset-8 transition duration-200 hover:-translate-y-1 hover:text-teal-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
                        >
                            Let's connect
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto flex min-h-120 w-full max-w-xl items-center justify-center lg:min-h-152">
                    <div className="absolute h-88 w-88 rounded-full bg-slate-100 sm:h-112 sm:w-md" />
                   
                    <div className="relative z-10 h-100 w-76 overflow-hidden rounded-t-[9rem] rounded-b-4xl bg-slate-900 shadow-2xl shadow-slate-300 sm:h-112 sm:w-92">
                       <img
                            src="/hero-image.jpg"
                            alt="Prince Raj Singh"/>

                        <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs leading-6 text-slate-300 backdrop-blur-sm">
                            <p><span className="text-teal-300">A Developer </span>  =</p>
                            <p className="pl-4 text-slate-400">creative + curious;</p>
                            <p className="text-teal-300">&lt;/build&gt;</p>
                        </div>
                    </div>

                    <div className="absolute right-2 top-25 z-20 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-lg font-bold text-slate-700 shadow-xl sm:right-6 sm:h-24 sm:w-24 sm:text-xl">
                       NEXT JS
                    </div>
                    <div className="absolute bottom-16 left-0 z-20 flex h-20 w-20 -rotate-6 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-lg font-bold text-teal-500 shadow-xl sm:left-4 sm:h-24 sm:w-24 sm:text-xl">
                        HTML
                    </div>
                </div>
            </div>
        </section>
    );
}
