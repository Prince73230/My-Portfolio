"use client";

import { useEffect, useState } from "react";
import {
    FaCss3Alt,
    FaFigma,
    FaHtml5,
    FaReact,
    FaWordpress,
} from "react-icons/fa6";
import { SiC, SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
    {
        name: "C",
        percentage: 80,
        Icon: SiC,
        cardClassName: "border-[#e2dfe4] bg-[#f3f0f5] text-[#56505c] transition-all duration-300 hover:border-[#1d063c] hover:bg-[#1d063c] hover:text-[#efe2ff] hover:shadow-[0_22px_38px_-20px_rgba(84,35,141,0.9)]",
        iconClassName: "text-[#5f536a] transition-colors duration-300 group-hover:text-[#4de2ff]",
        percentClassName: "text-[#3b3a40] transition-colors duration-300 group-hover:text-[#e5d7ff]",
    },
    {
        name: "CSS",
        percentage: 90,
        Icon: FaCss3Alt,
        cardClassName: "border-[#e2dfe4] bg-[#f3f0f5] text-[#56505c] transition-all duration-300 hover:border-[#1d063c] hover:bg-[#1d063c] hover:text-[#efe2ff] hover:shadow-[0_22px_38px_-20px_rgba(84,35,141,0.9)]",
        iconClassName: "text-[#5f536a] transition-colors duration-300 group-hover:text-[#4de2ff]",
        percentClassName: "text-[#3b3a40] transition-colors duration-300 group-hover:text-[#e5d7ff]",
    },
    {
        name: "NEXT JS",
        percentage: 85,
        Icon: SiNextdotjs,
        cardClassName: "border-[#e2dfe4] bg-[#f3f0f5] text-[#56505c] transition-all duration-300 hover:border-[#1d063c] hover:bg-[#1d063c] hover:text-[#efe2ff] hover:shadow-[0_22px_38px_-20px_rgba(84,35,141,0.9)]",
        iconClassName: "text-[#5f536a] transition-colors duration-300 group-hover:text-[#4de2ff]",
        percentClassName: "text-[#3b3a40] transition-colors duration-300 group-hover:text-[#e5d7ff]",
    },
    {
        name: "Tailwind CSS",
        percentage: 90,
        Icon: SiTailwindcss,
        cardClassName: "border-[#e2dfe4] bg-[#f3f0f5] text-[#56505c] transition-all duration-300 hover:border-[#1d063c] hover:bg-[#1d063c] hover:text-[#efe2ff] hover:shadow-[0_22px_38px_-20px_rgba(84,35,141,0.9)]",
        iconClassName: "text-[#5f536a] transition-colors duration-300 group-hover:text-[#4de2ff]",
        percentClassName: "text-[#3b3a40] transition-colors duration-300 group-hover:text-[#e5d7ff]",
    },
    {
        name: "HTML",
        percentage: 95,
        Icon: FaHtml5,
        cardClassName: "border-[#e2dfe4] bg-[#f3f0f5] text-[#56505c] transition-all duration-300 hover:border-[#1d063c] hover:bg-[#1d063c] hover:text-[#efe2ff] hover:shadow-[0_22px_38px_-20px_rgba(84,35,141,0.9)]",
        iconClassName: "text-[#5f536a] transition-colors duration-300 group-hover:text-[#4de2ff]",
        percentClassName: "text-[#3b3a40] transition-colors duration-300 group-hover:text-[#e5d7ff]",
    },
    {
        name: "JavaScript",
        percentage: 20,
        Icon: SiJavascript,
        cardClassName: "border-[#e2dfe4] bg-[#f3f0f5] text-[#56505c] transition-all duration-300 hover:border-[#1d063c] hover:bg-[#1d063c] hover:text-[#efe2ff] hover:shadow-[0_22px_38px_-20px_rgba(84,35,141,0.9)]",
        iconClassName: "text-[#5f536a] transition-colors duration-300 group-hover:text-[#4de2ff]",
        percentClassName: "text-[#3b3a40] transition-colors duration-300 group-hover:text-[#e5d7ff]",
    },
];

function SkillCard({
    name,
    percentage,
    Icon,
    cardClassName,
    iconClassName,
    percentClassName,
}: {
    name: string;
    percentage: number;
    Icon: React.ComponentType<{ className?: string }>;
    cardClassName: string;
    iconClassName: string;
    percentClassName: string;
}) {
    const [fill, setFill] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setFill(percentage), 180);
        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div
            key={name}
            className={`group relative rounded-[28px] border p-5 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.55)] transition-all duration-300 ease-out
                 hover:-translate-y-3 hover:shadow-[0_24px_42px_-22px_rgba(97,71,166,0.7)] ${cardClassName}`}
        >
            <div className="flex h-47 flex-col items-center justify-center rounded-[22px] transition-transform duration-300 group-hover:scale-[1.02]">
                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-[18px] text-5xl ${iconClassName}`}>
                    <Icon aria-hidden="true" />
                </div>

                <div className={`text-3xl font-semibold tracking-tight ${percentClassName}`}>
                    {percentage}%
                </div>
            </div>

            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-300/70 transition-colors duration-300 group-hover:bg-slate-600/50">
                <div
                    className="h-full rounded-full bg-linear-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] transition-[width] duration-1000 ease-out"
                    style={{ width: `${fill}%` }}
                />
            </div>

            <p className="mt-4 text-center text-xl font-medium tracking-tight text-slate-700 transition-colors duration-300 group-hover:text-slate-100">
                {name}
            </p>
        </div>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#f7f4f9] px-5 py-16 text-slate-800 sm:px-8 lg:px-10 lg:py-20"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-80"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(122, 95, 159, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122, 95, 159, 0.08) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            />

            <div className="relative mx-auto max-w-7xl">
                <header className="mb-10 text-center md:mb-14">
                    <h2 className="text-4xl font-black tracking-tighter text-cyan-500 sm:text-5xl lg:text-7xl">
                        My Skills
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-xl">
                        We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and your customers.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
