import {
    BriefcaseBusiness,
    ChevronRight,
    Clock3,
    Code2,
    Layers3,
    Sparkles,
    Target,
    TrendingUp,
} from "lucide-react";

const highlights = [
    { label: "Duration", value: "2 Months" },
    { label: "Role", value: "Frontend Intern" },
    { label: "Focus", value: "UI Development" },
    { label: "Mode", value: "Offline" },
];

const responsibilities = [
    "Built responsive user interfaces using modern frontend practices.",
    "Worked on reusable UI components and design consistency across pages.",
    "Collaborated on debugging, refinement, and small feature improvements.",
     "Worked on some real world projects(Live Projects).",
];

const learnings = [
    "HTML, CSS, and responsive design fundamentals",
    "JavaScript basics and real-world UI behavior",
    "React and component-driven thinking",
    "Team communication, styling consistency, and problem solving",
];

export default function Experience() {
    return (
        <section id="experience" className="bg-[#edf6ff] text-[#2e241f]">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.3fr] lg:gap-10">
                    <div className="flex flex-col rounded-3xl border border-[#dfeeff] bg-white p-6 shadow-sm">
                        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#cfe2ff] bg-[#edf5ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#385c8d]">
                            <BriefcaseBusiness size={13} />
                            Experience
                        </p>

                        <h1
                            className="mt-6 text-4xl leading-[0.95] tracking-tighter text-[#2d241f] md:text-5xl"
                            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                            My Internship
                            <span className="mt-2 block text-[#3b82f6]">Journey</span>
                        </h1>

                        <div className="mt-8 space-y-3">
                            {highlights.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-center justify-between rounded-xl border border-[#dfeeff] bg-[#f8fbff] px-4 py-3"
                                >
                                    <span className="text-sm font-medium text-[#4f647a]">{label}</span>
                                    <span className="text-sm font-semibold text-[#1f2e3d]">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-5">
                            <div className="rounded-2xl border border-[#d1e0ff] bg-[#edf5ff] p-4">
                                <div className="flex items-center gap-2 text-[#2563eb]">
                                    <Target size={18} />
                                    <h3 className="text-lg font-semibold text-[#1f2e3d]">Career note</h3>
                                </div>
                                <p className="mt-3 text-base leading-7 text-[#3a4a5f]">
                                    This internship helped me build a practical foundation in frontend development and gave me
                                    valuable experience in solving real design and implementation challenges while still learning.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 rounded-3xl border border-[#dfeeff] bg-white p-6 shadow-sm">
                        <div className="rounded-2xl border border-[#dfeeff] bg-[#f9fbff] p-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf3ff] text-[#3b82f6]">
                                    <Clock3 size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5c7ea8]">
                                        Internship Overview
                                    </p>
                                    <h2 className="mt-1 text-2xl font-semibold text-[#1f2e3d]">Frontend Developer Intern</h2>
                                </div>
                            </div>

                            <p className="mt-4 text-base leading-7 text-[#425264]">
                                During my 2-month internship, I focused on frontend development and worked on building
                                responsive interfaces, improving user-facing design, and refining the overall usability of
                                web pages through clean and practical implementation.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-[#dfeeff] bg-[#f3f9ff] p-4">
                                <div className="flex items-center gap-2 text-[#2563eb]">
                                    <Code2 size={18} />
                                    <h3 className="text-lg font-semibold text-[#1f2e3d]">What I did</h3>
                                </div>
                                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#425264]">
                                    {responsibilities.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="rounded-2xl border border-[#dfeeff] bg-[#f3f9ff] p-4">
                                <div className="flex items-center gap-2 text-[#2563eb]">
                                    <Layers3 size={18} />
                                    <h3 className="text-lg font-semibold text-[#1f2e3d]">Main skills</h3>
                                </div>
                                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#425264]">
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                                        <span>Responsive web design</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                                        <span>Component-based UI work</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                                        <span>Layout improvement and debugging</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                                        <span>User-focused styling solutions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-[#dfeeff] bg-[#f9fbff] p-5">
                            <div className="flex items-center gap-2 text-[#2563eb]">
                                <Sparkles size={18} />
                                <h3 className="text-lg font-semibold text-[#1f2e3d]">What I learned</h3>
                            </div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {learnings.map((item) => (
                                    <div key={item} className="flex items-start gap-2 rounded-xl border border-[#dfeeff] bg-white px-3 py-3 text-sm text-[#3d4a5c]">
                                        <TrendingUp size={16} className="mt-0.5 shrink-0 text-[#3b82f6]" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
