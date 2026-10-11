import { FaBoltLightning } from "react-icons/fa6";
import { GiHeavyLightning } from "react-icons/gi";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#111820] px-6 py-24 text-slate-100 sm:py-32 lg:px-10"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-900/30 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
                    <div className="flex flex-col">
                        <p className="max-w-lg text-2xl font-medium leading-tight tracking-tight text-slate-200 sm:text-3xl">
                            "I'm building my story one thoughtful project at a
                            time, with room for others to see themselves in it.";
                        </p>

                        <div
                            className="hidden lg:block relative mt-10 max-w-md overflow-hidden rounded-4xl border border-slate-700 bg-slate-900 shadow-xl shadow-black/30"
                            style={{ aspectRatio: "4 / 5" }}
                        >
                            <img
                                src="/about.jpg"
                                alt="Prince Raj Singh"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                        </div>
                    </div>

                    <div className="w-full max-w-xl justify-self-end pt-2 lg:pt-8">
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                            My story
                        </p>
                        <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Curious by nature. Intentional by craft.
                        </h2>

                        <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-slate-400">
                            <p>
                                I&apos;m Prince Raj Singh, a BCA student and frontend developer
                                who enjoys turning ideas into clear, useful digital experiences.
                            </p>
                            <p>
                                I like working where visual design and engineering meet: shaping
                                interfaces that feel calm to use, respond beautifully, and stay
                                maintainable behind the scenes.
                            </p>
                            <p>
                                Outside the browser, I&apos;m usually learning something new,
                                refining a project, or looking for a better way to explain a
                                complicated idea.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="mt-9 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-300 hover:shadow-lg hover:shadow-teal-950/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
                        >
                            Start a conversation
                            <span aria-hidden="true">
                                <GiHeavyLightning size={20} />
                            </span>
                        </a>
                    </div>
                </div>

                <blockquote className="mx-auto mt-20 max-w-2xl text-center sm:mt-28">
                    <p className="text-2xl font-medium leading-tight tracking-tight text-slate-200 sm:text-3xl">
                        &ldquo;Good code should feel almost invisible. Good design makes
                        everything around it feel possible.&rdquo;
                    </p>
                    <cite className="mt-5 block font-mono text-xs not-italic uppercase tracking-[0.2em] text-teal-300">
                        personal principle
                    </cite>
                </blockquote>
            </div>
        </section>
    );
}
