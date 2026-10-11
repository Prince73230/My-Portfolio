import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Prince Raj Singh",
  description:
    "Terms and Conditions governing the use of Prince Raj Singh's personal portfolio website.",
};

export default function TermsAndConditions() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_22%)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <nav className="relative z-10 mx-auto max-w-5xl px-6 pt-6 sm:pt-8">
        <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
          <a href="/" className="transition-colors hover:text-blue-600">
            Home
          </a>
          <span className="text-slate-400">/</span>
          <span className="text-blue-600">Terms &amp; Conditions</span>
        </div>
      </nav>

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <header className="mb-12 rounded-4xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            Legal
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            These terms explain how this portfolio website may be used and what
            to expect while browsing and interacting with it.
          </p>

          <p className="mt-6 text-sm text-slate-500">Last updated: October 1, 2026</p>
        </header>

        <section className="space-y-8 rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-7 text-slate-600">
              By accessing this website, you agree to use it in a lawful and
              respectful way and to comply with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">2. Purpose of the Website</h2>
            <p className="mt-3 leading-7 text-slate-600">
              This website is a personal portfolio for showcasing projects,
              experience, education, and professional information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">3. Acceptable Use</h2>
            <p className="mt-3 leading-7 text-slate-600">
              You agree not to misuse the website, attempt unauthorized access, or
              interfere with its functionality or security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p className="mt-3 leading-7 text-slate-600">
              The website content, visuals, and materials are protected by
              applicable intellectual property rights unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">5. External Links</h2>
            <p className="mt-3 leading-7 text-slate-600">
              This website may contain links to third-party websites. These links
              are provided for convenience and do not imply endorsement or control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">6. Accuracy</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Efforts are made to keep the information accurate and up to date,
              but content may change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">7. Contact</h2>
            <p className="mt-3 leading-7 text-slate-600">
              If you have any questions or concerns, please contact me through the
              contact section available on the website.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm leading-7 text-slate-700">
              These terms are intended as a straightforward guide for using this
              portfolio website and may be updated from time to time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
