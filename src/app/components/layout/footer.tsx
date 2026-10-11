
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
const socials = [
    { label: "GitHub", href: "https://github.com/prince73230", icon: FaGithub },
    { label: "Instagram", href: "https://instagram.com/_prince_raj.07", icon: FaInstagram },
    { label: "Telegram", href: "https://t.me/itz_one", icon: FaTelegramPlane },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/princerajsingh07", icon: FaLinkedinIn },
    { label: "Email", href: "mailto:mrfake265@gmail.com", icon: FaEnvelope },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-200 dark:border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_25%)]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr_1fr]">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Prince Raj Singh</h2>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                            Frontend developer focused on building modern, responsive, and
                            user-friendly digital experiences that balance design and function.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a href="#" className="text-sm text-slate-300 transition hover:text-blue-400 hover:underline hover:decoration-blue-400 hover:underline-offset-4">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-sm text-slate-300 transition hover:text-blue-400 hover:underline hover:decoration-blue-400 hover:underline-offset-4">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-sm text-slate-300 transition hover:text-blue-400 hover:underline hover:decoration-blue-400 hover:underline-offset-4">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#skills" className="text-sm text-slate-300 transition hover:text-blue-400 hover:underline hover:decoration-blue-400 hover:underline-offset-4">
                                    Skills
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Contact Me
                        </h3>
                        <div className="mt-10 flex flex-wrap gap-3">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="flex h-11 w-11 items-center justify-center  text-lg text-[#f0ebe9] transition   hover:animate-pulse hover:text-[#f0ebe9]"
                                    >
                                        <Icon size={30}/>
                                    </a>
                                ))}
                            </div>
                        <p className="mt-5 text-sm text-slate-400">
                            Thank You for reaching out! I look forward to connecting with you and exploring potential opportunities together.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Prince Raj Singh. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="/components/privacy" className="transition hover:text-blue-400 hover:underline hover:decoration-blue-400 hover:underline-offset-4">Privacy</a>
                        <a href="/components/term&condition" className="transition hover:text-blue-400 hover:underline hover:decoration-blue-400 hover:underline-offset-4">Terms & Condition </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}       