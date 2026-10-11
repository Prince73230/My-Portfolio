
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Prince Raj Singh",
    description:
        "Privacy Policy for the personal portfolio website of Prince Raj Singh.",
};

export default function Privacy() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#070b14] text-slate-200">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(13,148,136,0.3),transparent_32%),radial-gradient(circle_at_15%_95%,rgba(37,99,235,0.2),transparent_30%),linear-gradient(115deg,#070b14_0%,#091522_54%,#063d46_100%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(100,116,139,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.2) 1px, transparent 1px)",
                    backgroundSize: "57px 57px",
                }}
            />

            <nav className="relative z-10 mx-auto max-w-6xl px-6 pt-6 sm:pt-8">
                <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
                    <a href="/" className="transition-colors hover:text-cyan-300">
                        Home
                    </a>
                    <span className="text-slate-600">/</span>
                    <span className="text-cyan-300">Privacy Policy</span>
                </div>
            </nav>

            <section className="relative z-10 px-6 pb-20 pt-14 sm:pb-24 sm:pt-16">
                <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                            Privacy by design
                        </div>

                        <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 sm:text-7xl">
                            Your privacy,
                            <span className="block bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                                handled with care.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                            This policy explains what information may be collected when you
                            visit this portfolio and how it is handled.
                        </p>

                        <p className="mt-6 text-sm text-slate-500">
                            Last updated: October 1, 2026
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="relative overflow-hidden rounded-[26px] border border-emerald-500/30 bg-[#04110b] p-5 font-mono shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_0_35px_rgba(16,185,129,0.18),inset_0_0_35px_rgba(0,0,0,0.9)]">
                            <div
                                className="pointer-events-none absolute inset-0 z-10 opacity-20"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.08) 50%, rgba(0,0,0,0.12) 50%)",
                                    backgroundSize: "100% 4px",
                                }}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_45%),radial-gradient(circle_at_bottom,rgba(6,78,59,0.35),transparent_58%)]" />
                            <div className="pointer-events-none absolute -left-16 -top-14 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

                            <div className="relative z-20 space-y-4">
                                <div className="border-b border-emerald-500/35 pb-2">
                                    <h2 className="text-[10px] font-bold tracking-[0.28em] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                                        PRIVACY_MONITOR
                                    </h2>
                                </div>

                                <div className="space-y-3 py-1 text-[11px] leading-6 sm:text-xs">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-red-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">&gt;</span>
                                        <span className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
                                            reviewing data collection
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <span className="text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">&gt;</span>
                                        <span className="text-emerald-300 drop-shadow-[0_0_8px_rgba(110,231,183,0.8)]">
                                            contact information: protected
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <span className="text-blue-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">&gt;</span>
                                        <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                                            third-party sharing:{' '}
                                            <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                                                limited
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-emerald-500/35 pt-3 text-[11px] font-semibold sm:text-xs">
                                    <span className="text-emerald-300 drop-shadow-[0_0_8px_rgba(110,231,183,0.8)]">
                                        Policy status
                                    </span>
                                    <div className="flex items-center space-x-1.5">
                                        <span className="text-[10px] text-green-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">■</span>
                                        <span className="text-green-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                                            current
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative z-10 px-6 pb-16">
                <div className="dark mx-auto max-w-5xl space-y-12 rounded-3xl border border-slate-700/80 bg-[#0b1220]/95 p-6 shadow-2xl shadow-black/25 sm:p-10">
                    {/* Introduction */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            1. Introduction
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Welcome to the portfolio website of Prince Raj Singh. This
                            Privacy Policy explains how information may be collected, used,
                            stored, and protected when you visit or interact with this
                            website.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            By using this website, you acknowledge that you have read and
                            understood this Privacy Policy. If you do not agree with any
                            part of this policy, please discontinue use of the website.
                        </p>
                    </div>

                    {/* Information Collection detail */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            2. Information We May Collect
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            This portfolio is primarily intended to showcase projects,
                            skills, experience, and professional information. Depending on
                            the features available on the website, we may receive the
                            following types of information:
                        </p>

                        <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600 dark:text-slate-400">
                            <li>
                                Information you voluntarily provide through a contact form,
                                such as your name, email address, and message.
                            </li>
                            <li>
                                Technical information such as browser type, device type,
                                operating system, IP address, and general usage information.
                            </li>
                            <li>
                                Information collected automatically through analytics,
                                cookies, or similar technologies, if such services are enabled.
                            </li>
                        </ul>
                    </div>

                    {/* How Information Is Used */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            3. How Information Is Used
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Information collected through this website may be used for
                            legitimate purposes such as:
                        </p>

                        <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600 dark:text-slate-400">
                            <li>Responding to messages and professional inquiries.</li>
                            <li>Improving the functionality and performance of the website.</li>
                            <li>Understanding how visitors interact with the website.</li>
                            <li>Maintaining website security and preventing abuse.</li>
                            <li>Monitoring and troubleshooting technical issues.</li>
                        </ul>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Information will not be intentionally used for purposes unrelated
                            to the operation of this portfolio without appropriate notice.
                        </p>
                    </div>

                    {/* Contact Forms */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            4. Contact Forms and Communications
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            If you contact me through a contact form or email, the information
                            you provide may be used solely to respond to your inquiry,
                            communicate with you, or discuss a professional opportunity.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Please avoid submitting sensitive personal information through
                            the contact form.
                        </p>
                    </div>

                    {/* Cookies */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            5. Cookies and Similar Technologies
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            This website may use cookies or similar technologies to remember
                            preferences, maintain functionality, improve security, or
                            understand website usage.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            You can control or disable cookies through your browser settings.
                            However, disabling certain cookies may affect some website
                            functionality.
                        </p>
                    </div>

                    {/* Analytics */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            6. Analytics and Third-Party Services
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            If analytics or other third-party services are used on this
                            website, those services may collect information about visitors
                            according to their own privacy policies.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Examples may include website analytics, hosting services, form
                            processing services, fonts, icons, embedded content, or other
                            external services required for website functionality.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            This website does not control the privacy practices of external
                            services. Visitors should review the privacy policies of those
                            services where appropriate.
                        </p>
                    </div>

                    {/* External Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            7. External Links
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            This portfolio may contain links to external websites and
                            platforms, including professional profiles, project repositories,
                            social media platforms, documentation, and other resources.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Once you leave this website, the privacy practices of the
                            external website will apply. I am not responsible for the
                            privacy policies, security, or content of third-party websites.
                        </p>
                    </div>

                    {/* Data Sharing */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            8. Sharing of Information
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Personal information will not be sold or rented to third parties.
                            Information may only be shared with service providers or other
                            parties when reasonably necessary to operate, secure, maintain,
                            or improve the website, or when required by applicable law.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            9. Data Security
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Reasonable technical and organizational measures may be used to
                            protect information submitted through this website. However, no
                            method of transmitting or storing information online can be
                            guaranteed to be completely secure.
                        </p>
                    </div>

                    {/* Data Retention */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            10. Data Retention
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Information may be retained only for as long as reasonably
                            necessary to fulfill the purpose for which it was collected,
                            respond to communications, maintain records, resolve issues, or
                            comply with legal obligations.
                        </p>
                    </div>

                    {/* Children Privacy */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            11. Children&apos;s Privacy
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            This website is not specifically directed toward children. I do
                            not knowingly collect personal information from children through
                            this website. If you believe that a child has provided personal
                            information, please contact me so that appropriate action can be
                            taken.
                        </p>
                    </div>

                    {/* Your Rights */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            12. Your Privacy Rights
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Depending on where you live and applicable law, you may have
                            certain rights regarding your personal information, including the
                            right to request access, correction, deletion, or information
                            about how your data is handled.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            To make a privacy-related request, you can contact me using the
                            contact information provided below.
                        </p>
                    </div>

                    {/* Changes */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            13. Changes to This Privacy Policy
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            This Privacy Policy may be updated from time to time to reflect
                            changes to the website, services, technology, or applicable legal
                            requirements.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            Any changes will be posted on this page with an updated
                            &quot;Last updated&quot; date.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            14. Contact
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                            If you have questions, concerns, or requests regarding this
                            Privacy Policy, you can contact me through the contact section of
                            this website.
                        </p>

                        <div className="mt-5">
                            <p className="font-semibold text-slate-900 dark:text-white">
                                Prince Raj Singh
                            </p>

                            <a
                                href="mailto:your-email@example.com"
                                className="mt-1 inline-block text-blue-600 hover:underline dark:text-blue-400"
                            >
                                your-email@example.com
                            </a>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="border-t border-slate-200 pt-8 dark:border-slate-800">
                        <p className="text-sm leading-6 text-slate-500 dark:text-slate-500">
                            This Privacy Policy is provided for general informational
                            purposes and should be customized according to the actual
                            technologies, analytics tools, forms, cookies, hosting providers,
                            and other services used by this website. It is not a substitute
                            for legal advice.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

