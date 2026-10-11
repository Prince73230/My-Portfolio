import {
    ArrowRight,
    BookOpenText,
    CheckCircle2,
    Code2,
    Database,
    FileText,
    Globe2,
    GraduationCap,
    Loader,
    MapPin,
    Network,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";
import { MdLocationPin } from "react-icons/md";

const focusAreas: { label: string; icon: LucideIcon }[] = [
    { label: "Programming", icon: Code2 },
    { label: "Web Development", icon: Globe2 },
    { label: "Database Management", icon: Database },
    { label: "Computer Networks", icon: Network },
    { label: "Cybersecurity", icon: ShieldCheck },
];

const university = "Sri Dev Suman Uttarakhand University";

function TimelineMarker({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative border-l border-sky-500/60 pl-4 sm:pl-5">
            <span
                aria-hidden="true"
                className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.45)]"
            />
            {children}
        </div>
    );
}

function LocationLine() {
    return (
        <p className="mt-1 flex items-center gap-2 text-xs text-slate-600">
            <MapPin size={14} aria-hidden="true" className="shrink-0 text-sky-600" />
            Uttarakhand, India
        </p>
    );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            <span aria-hidden="true" className="h-px w-4 bg-sky-500" />
            {children}
        </p>
    );
}

export default function Education() {
    return (
        <section
            id="education"
            className="relative isolate overflow-x-clip scroll-mt-16 bg-[#eff6ff] px-5 py-5 text-slate-900 sm:px-8 sm:py-10 lg:min-h-screen lg:scroll-mt-15 lg:px-10 lg:py-10 "
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(14,116,190,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(14,116,190,0.045) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute -right-16 -top-24 -z-10 h-56 w-56 rounded-full border border-sky-500/20 bg-[radial-gradient(circle_at_35%_35%,rgba(14,165,233,0.14),rgba(239,246,255,0.02)_65%)] sm:right-8 sm:-top-24 sm:h-64 sm:w-64"
            >
                <span className="absolute inset-[12%] rounded-full border border-sky-500/25 transform-[rotateX(68deg)]" />
                <span className="absolute inset-[12%] rounded-full border border-sky-500/25 transform-[rotateY(68deg)]" />
                <span className="absolute inset-x-0 top-1/2 border-t border-sky-500/25" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-7 lg:grid-cols-[0.72fr_1.55fr] lg:gap-9">
                    <div className="lg:pr-4">
                        <SectionEyebrow>Education</SectionEyebrow>
                        <h2 className="mt-2.5 max-w-md text-3xl font-bold leading-[1.02] text-slate-900 sm:text-4xl">
                            My Academic <span className="block text-sky-600">Journey</span>
                        </h2>
                        <p className="mt-3 max-w-sm text-sm leading-5 text-slate-600">
                            Building a strong foundation in technology and software development.
                        </p>

                        <div className="mt-5">
                            <SectionEyebrow>Key focus areas</SectionEyebrow>
                            <ul className="mt-2.5 flex max-w-sm flex-wrap gap-x-4 gap-y-2">
                                {focusAreas.map(({ label, icon: Icon }) => (
                                    <li key={label} className="flex items-center gap-2 text-xs text-slate-700">
                                        <Icon size={15} aria-hidden="true" className="text-sky-600" />
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <TimelineMarker>
                        <p className="mb-2 font-mono text-xs font-semibold text-sky-700">2024 — 2027</p>
                        <article className="rounded-lg border border-sky-200 bg-white/90 p-3 shadow-[0_8px_24px_rgba(30,64,175,0.07)] sm:p-4">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-sky-200 bg-sky-50 text-sky-700">
                                    <GraduationCap size={28} aria-hidden="true" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                                                Bachelor of Computer Applications
                                            </p>
                                            <h3 className="mt-0.5 text-xl font-semibold text-slate-900">BCA</h3>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                            <Loader size={14} aria-hidden="true" />
                                            Ongoing
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-slate-700">{university}</p>
                                    <LocationLine />
                                    <p className="mt-2 max-w-2xl text-sm leading-5 text-slate-600">
                                        Coursework in development , databases, networks, and security.
                                    </p>
                                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                                        {["Web Development", "Programming", "Database Management", "Computer Networks", "Cybersecurity"].map((skill, index) => (
                                            <li
                                                key={skill}
                                                className={`rounded-full border px-2.5 py-1 text-xs ${index === 0
                                                    ? "border-sky-300 bg-sky-50 text-sky-700"
                                                    : "border-slate-200 bg-slate-50 text-slate-600"
                                                    }`}
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </TimelineMarker>
                </div>

                <div className="my-3 border-t border-sky-200 sm:my-4" />

                <div className="grid gap-7 lg:grid-cols-[0.72fr_1.55fr] lg:gap-9">
                    <div className="lg:pr-4 lg:pt-7">
                        <SectionEyebrow>Higher secondary & secondary</SectionEyebrow>
                        <h3 className="mt-2.5 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                            <span className="text-sky-600">10th & 12th</span> Class
                        </h3>
                        <p className="mt-2.5 max-w-sm text-sm leading-5 text-slate-600">
                            Early studies shaped my interest in technology and problem solving.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <TimelineMarker>
                            <p className="mb-2 font-mono text-xs font-semibold text-sky-700">2022-2024</p>
                            <article className="relative flex h-full min-h-44 flex-col rounded-lg border border-sky-200 bg-white/90 p-3 sm:p-4 lg:p-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-200 bg-sky-50 text-sky-700">
                                        <FileText size={22} aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-slate-900">12th Class</h4>
                                        <p className="mt-0.5 text-xs text-slate-600">Higher Secondary (PCMB)</p>
                                        <p className="mt-0.5 text-xs text-slate-600">ST John's Academy Mahua Hajipur Vaishali</p>
                                    </div>
                                </div>
                                <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                                    <MdLocationPin size={15} />
                                    <p>Bihar, India
                                    </p>                       
                                    </div>

                                <ul className="mt-2 grid grid-cols-2 list-disc gap-x-3 gap-y-0.5 pl-4 pr-16 text-xs leading-4 text-slate-600">
                                    {["Physics", "Chemistry", "Mathematics", "Biology"].map((subject) => (
                                        <li key={subject}>{subject}</li>
                                    ))}
                                </ul>
                                <div className="absolute bottom-3 right-3 rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1.5 text-center">
                                    <p className="text-[11px] text-sky-700">Percentage</p>
                                    <p className="mt-0.5 text-xl font-semibold leading-none text-slate-900">60.2%</p>
                                </div>
                            </article>
                        </TimelineMarker>

                        <TimelineMarker>
                            <p className="mb-2 font-mono text-xs font-semibold text-sky-700">2022</p>
                            <article className="relative flex h-full min-h-44 flex-col rounded-lg border border-sky-200 bg-white/90 p-3 sm:p-4 lg:p-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-200 bg-sky-50 text-sky-700">
                                        <FileText size={22} aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-slate-900">10th Class</h4>
                                        <p className="mt-0.5 text-xs text-slate-600">Kendriya vidyalaya NE Railway Sonpur Saran</p>
                                    </div>
                                </div>
                                <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                                    <MdLocationPin size={15} />
                                    <p>Bihar, India
                                    </p>                       
                                    </div>
                                <ul className="mt-2 grid grid-cols-2 list-disc gap-x-3 gap-y-0.5 pl-4 pr-16 text-xs leading-4 text-slate-600">
                                    {["Mathematics", "Science", "Social Science", "English", "Hindi"].map((subject) => (
                                        <li key={subject}>{subject}</li>
                                    ))}
                                </ul>
                                <div className="absolute bottom-3 right-3 rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1.5 text-center">
                                    <p className="text-[11px] text-sky-700">Percentage</p>
                                    <p className="mt-0.5 text-xl font-semibold leading-none text-slate-900">81.6%</p>
                                </div>
                            </article>
                        </TimelineMarker>
                    </div>
                </div>

                
            </div>
        </section>
    );
}
