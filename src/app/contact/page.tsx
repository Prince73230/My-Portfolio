import { ArrowUp, ChevronRight, Clock3, MessageSquareText } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const socials = [
    { label: "GitHub", href: "https://github.com/prince73230", icon: FaGithub },
    { label: "Instagram", href: "https://instagram.com/_prince_raj.07", icon: FaInstagram },
    { label: "Telegram", href: "https://t.me/itz_one", icon: FaTelegramPlane },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/princerajsingh07", icon: FaLinkedinIn },
    { label: "Email", href: "mailto:mrfake265@gmail.com", icon: FaEnvelope },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#efe9e1] text-[#2f241f]">
            <section className="relative h-72.5 overflow-hidden bg-[#201b1a] md:h-87.5">
                <div className="absolute inset-0">
                    <img
                        src="/contact-me.png"
                        alt="contact page image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-end justify-start px-6 pb-6 text-center md:px-8 md:pb-8">
                    <div className="rounded-md border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-sm">
                        <nav
                            aria-label="Breadcrumb"
                            className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 md:text-xs"
                        >
                            <a href="/" className="transition hover:text-[#d7a068]">
                                Home Page
                            </a>
                            <ChevronRight size={12} className="text-white/80" />
                            <span className="text-[#f4efe9]">Contact Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="bg-[#efe9e1]">
                <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-14">
                        <div className="pt-2">
                            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#493b34]">
                                <MessageSquareText size={15} className="text-[#b76f3a]" />
                                <span>Send us a message</span>
                            </div>

                            <h2
                                className="mt-6 text-5xl leading-[0.9] tracking-tighter text-[#3a2a24] md:text-7xl"
                                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                            >
                                Get In Touch?
                            </h2>

                         

                            <div className="mt-12 text-[#3a2a24]">
                                <div className="flex items-center gap-3">
                                    <p
                                        className="text-xl font-medium leading-tight md:text-xl"
                                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                                    >
                                       I will reach out you as soon as possible. Thank you for your patience!
                                    </p>
                                </div>
                            </div>
                               <div className="mt-10 flex flex-wrap gap-3">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7c8bb] bg-[#f7f1ea] text-lg text-[#3a2a24] transition hover:-translate-y-0.5 hover:border-[#b76f3a] hover:text-[#b76f3a]"
                                    >
                                        <Icon size={25}/>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative pt-2">
                            <form className="w-full">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="md:col-span-1">
                                        <label htmlFor="name" className="mb-2 block text-base font-medium text-[#3a2a24]">
                                            Full name <span className="text-[#b86d3f]">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name here"
                                            className="w-full rounded-xl border border-[#d9d0c5] bg-[#f5f1ec] px-4 py-3.5 text-base text-[#2e241f] placeholder:text-[#796e66] outline-none transition focus:border-[#b86d3f] focus:ring-2 focus:ring-[#d8a07d]/30"
                                        />
                                    </div>

                                    <div className="md:col-span-1">
                                        <label htmlFor="email" className="mb-2 block text-base font-medium text-[#3a2a24]">
                                            Email address <span className="text-[#b86d3f]">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email here"
                                            className="w-full rounded-xl border border-[#d9d0c5] bg-[#f5f1ec] px-4 py-3.5 text-base text-[#2e241f] placeholder:text-[#796e66] outline-none transition focus:border-[#b86d3f] focus:ring-2 focus:ring-[#d8a07d]/30"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="phone" className="mb-2 block text-base font-medium text-[#3a2a24]">
                                            Phone Number <span className="text-[#b86d3f]">*</span>
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="Phone here"
                                            className="w-full rounded-xl border border-[#d9d0c5] bg-[#f5f1ec] px-4 py-3.5 text-base text-[#2e241f] placeholder:text-[#796e66] outline-none transition focus:border-[#b86d3f] focus:ring-2 focus:ring-[#d8a07d]/30"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="message" className="mb-2 block text-base font-medium text-[#3a2a24]">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            placeholder="Message here"
                                            className="w-full resize-none rounded-xl border border-[#d9d0c5] bg-[#f5f1ec] px-4 py-3.5 text-base text-[#2e241f] placeholder:text-[#796e66] outline-none transition focus:border-[#b86d3f] focus:ring-2 focus:ring-[#d8a07d]/30"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b86d3f] px-3 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-[#a86032]"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15">
                                            <ArrowUp size={16} className="rotate-45" />
                                        </span>
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
