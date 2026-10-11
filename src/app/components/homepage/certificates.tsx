
"use client";

import {
	Award,
	Code2,
	LockKeyhole,
	ShieldCheck,
	type LucideIcon,
	CalendarDays,
	Download,
	RotateCw,
	icons,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type CertificateStatus = "Certified" | "Completed" | "In progress";

export type Certificate = {
	id: string;
	title: string;
	subtitle: string;
	provider: string;
	year: string;
	description: string;
	status: CertificateStatus;
	image: string;
	icon: LucideIcon;
};

export const certificates: Certificate[] = [
	{
		id: "Ethical-Hacking",
		title: "Ethical Hacking",
		subtitle: "Online Course",
		provider: "Udemy",
		year: "2024",
		description: "Penetration testing, vulnerability assessment, and security fundamentals.",
		status: "Completed",
		icon: ShieldCheck,
		image: "/certificate-image/certificate-1.jpg",
	},
	{
		id: "NIIT-Foundation",
		title: "INDUS CSR DTV Program",
		subtitle: "Certification Course",
		provider: "NIIT Foundation",
		year: "2025",
		description: "Program of Digital Literacy.",
		status: "Completed",
		icon: Award,
		image: "/certificate-image/certificate2.jpg",
	},
	{
		id: "Career-Edge",
		title: "Career Edge- IT for Non-IT",
		subtitle: "Online Course",
		provider: "TCS iON",
		year: "2025",
		description: "IT industry Overview .",
		status: "Completed",
		icon: ShieldCheck,
		image: "/certificate-image/certifcate3.jpg",
	},

	{
		id: "Career-Edge2",
		title: "Career Edge- Young Professional",
		subtitle: "Online Course",
		provider: "TCS iON",
		year: "2025",
		description: "Communication,Presentation,Business & more skills.",
		status: "Completed",
		icon: Award,
		image: "/certificate-image/certificate-4.jpg",
	},
	{
		id: "The Digital Adda",
		title: "Internet of Things (IoT)",
		subtitle: "Online Course",
		provider: "The Digital Adda",
		year: "2025",
		description: "IOT using Arduino and Raspberry Pi.",
		status: "Completed",
		icon: ShieldCheck,
		image: "/certificate-image/certificate5.jpg",
	},
];

const statusStyles: Record<CertificateStatus, string> = {
	Certified: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
	Completed: "border-sky-400/40 bg-sky-400/10 text-sky-300",
	"In progress": "border-amber-400/40 bg-amber-400/10 text-amber-300",
};

function CertificateCard({ certificate }: { certificate: Certificate }) {
	const [rotation, setRotation] = useState(0);
	const Icon = certificate.icon;

	return (
		<article className="h-88 w-full min-w-0 perspective-distant lg:h-92">
			<div
				className="relative h-full w-full transform-3d transition-transform duration-700 motion-reduce:transition-none"
				style={{ transform: `rotateY(${rotation}deg)` }}
			>
				<div className="absolute inset-0 overflow-hidden rounded-lg border border-sky-900/80 bg-slate-950 shadow-lg transition duration-300 hover:border-sky-500/70 hover:shadow-[0_14px_36px_rgba(14,165,233,0.16)]" style={{ backfaceVisibility: "hidden" }}>
					<button
						type="button"
						aria-label={`Rotate ${certificate.title} certificate to show details`}
						onClick={() => setRotation((current) => current + 180)}
						className="group relative block h-full w-full focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-sky-400"
					>
						<Image
							src={certificate.image}
							alt={`${certificate.title} certificate`}
							fill
							sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 40vw"
							className="object-cover p-0 transition-transform duration-300 group-hover:scale-[1.03]"
						/>
						<span className="absolute inset-x-0 bottom-0 bg-slate-950/80 px-3 py-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
							Click to see certificate details
						</span>
					</button>
				</div>

				<div
					className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-sky-500/70 bg-slate-950 p-4 shadow-[0_18px_50px_rgba(2,132,199,0.16)] sm:p-5"
					style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
				>
					<button
						type="button"
						aria-label={`Rotate ${certificate.title} card back to its image`}
						onClick={() => setRotation((current) => current + 180)}
						className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-sm border border-sky-800 bg-sky-950 text-sky-200 transition-colors hover:bg-sky-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					>
						<RotateCw size={18} aria-hidden="true" />
					</button>
					<div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-sky-700/80 bg-sky-950/70 text-sky-300 sm:h-12 sm:w-12">
						<Icon size={24} aria-hidden="true" />
					</div>
					<p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300 sm:mt-6">
						{certificate.provider} · {certificate.year}
					</p>
					<h3 className="mt-2 text-xl font-semibold leading-tight text-white">{certificate.title}</h3>
					<p className="mt-1 text-sm text-slate-300">{certificate.subtitle}</p>
					<p className="mt-3 flex-1 text-xs leading-5 text-slate-300/90 sm:mt-5 sm:text-sm sm:leading-6">{certificate.description}</p>
					<span className={`self-start rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[certificate.status]}`}>
						{certificate.status}
					</span>
					<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
						<a
							href={certificate.image}
							download={`${certificate.id}.jpg`}
							className="inline-flex items-center gap-2 rounded-sm bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						>
							<Download size={15} aria-hidden="true" /> Download certificate
						</a>
						<span className="inline-flex items-center gap-1 text-[10px] text-sky-300">
							<RotateCw size={13} aria-hidden="true" /> Click image to flip back
						</span>
					</div>
				</div>
			</div>
		</article>
	);
}

export default function Certificates() {
	return (
		<section
			id="certificates"
			className="relative isolate scroll-mt-16 overflow-hidden bg-[#03101e] px-5 py-10 text-white sm:px-8 sm:py-12 lg:scroll-mt-20 lg:px-10 lg:py-14"
		>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 opacity-35"
				style={{
					backgroundImage:
						"linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
					backgroundSize: "44px 44px",
				}}
			/>

			<div className="relative mx-auto max-w-7xl">
				<div className="grid gap-7 border-b border-sky-900/70 pb-6 md:grid-cols-[1.15fr_0.9fr_0.8fr] md:items-center md:gap-8 md:pb-7">
					<div>

						<h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
							My
							<span className=" text-sky-400"> Certifications</span>

						</h2>
						<p className="mt-3 max-w-md text-sm leading-5 text-slate-300">
							Credentials that reflect my ongoing learning across technology and Web Developing.
						</p>
					</div>

					<div className="border-l border-sky-800 pl-5 md:pl-7">
						<p className="max-w-xs text-sm leading-5 text-slate-300">
							Learning never stops — it just upgrades.
						</p>

					</div>

					<div aria-hidden="true" className="relative hidden h-28 items-center justify-center md:flex">
						<div className="absolute h-24 w-40 -rotate-12 rounded-[50%] border border-sky-500/70 shadow-[0_0_24px_rgba(14,165,233,0.2)]" />
						<div className="absolute h-24 w-40 rotate-18 rounded-[50%] border border-blue-500/50" />
						<div className="relative grid h-20 w-24 place-items-center rounded-lg border border-sky-700 bg-slate-950/90 text-sky-300 shadow-[0_12px_40px_rgba(2,132,199,0.18)]">
							<Award size={38} strokeWidth={1.4} />
							<span className="absolute -bottom-2 right-3 h-8 w-5 rotate-12 border-x border-b border-sky-400 bg-sky-950" />
						</div>
					</div>
				</div>

				<div className="mt-5">
					<div>
						<div className="mb-3 flex items-center justify-between gap-3">
							<p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200">
								Certificates <span aria-hidden="true" className="h-px w-4 bg-sky-500" />
							</p>
						</div>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
							{certificates.map((certificate) => (
								<CertificateCard key={certificate.id} certificate={certificate} />
							))}
						</div>
					</div>


				</div>


			</div>
		</section>
	);
}
