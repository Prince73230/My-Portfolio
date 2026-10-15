import { ArrowUpRight, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
    {
        title: "Instanet",
        type: "Frontend Development",
        description:
            "A broadband internet service provider website that provides information about the company, its services, and contact details.",
        liveUrl: "https://instanet.in/",
        sourceUrl: "",
        image: "/projects/instanet.png",
    },
    {
        title: "GoWheels",
        type: "Full Stack Development",
        description:
            "A full working car rental website that allows users to browse available cars, make reservations, and manage their bookings.",
        liveUrl: "",
        sourceUrl: "https://github.com/Prince73230/Go-Wheels",
        image: "/projects/gowheels.png",
    },

    {
        title: "Xp-Tracker",
        type: "Full functional Web Application",
        description:
            "A task management web application that allows users to create, update, and delete tasks, as well as mark them as completed.",
        liveUrl: "",
        sourceUrl: "https://github.com/Prince73230/XP-Tracker",
        image: "/projects/xp-tracker.png",
    },
    {
        title: "Task Manager",
        type: "Simple Web Application",
        description:
            "A simple task management web application that allows users to create, update, and delete tasks, as well as mark them as completed.",
        liveUrl: "",
        sourceUrl: "https://github.com/Prince73230/Task-Manager",
        image: "/projects/task-manager.png",
    },

];



export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-[#f5f4ef] px-5 py-20 text-[#202722] sm:px-8 sm:py-24 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <header className="mb-12 flex flex-col justify-between gap-7 border-b border-[#d8ddd7] pb-8 md:flex-row md:items-end">
                    <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#448064]">
                            Things I've made
                        </p>
                        <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                            My projects
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-[#59635c] sm:text-base">
                        All my projects are available on my GitHub profile. You can check them out for more details and code examples.
                    </p>
                </header>

                {projects.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, index) => {
                            return (
                                <article key={project.title} className="group flex min-w-0 flex-col overflow-hidden border border-[#dce0da] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#9bb8a6] hover:shadow-[0_20px_45px_-28px_rgba(27,54,39,0.45)]">
                                    <div className="relative aspect-[1.45/1] overflow-hidden bg-[#dce9df] p-5 sm:p-7">
                                        {project.image ? (
                                            <img src={project.image} alt={`${project.title} project preview`} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                                        ) : (
                                            <div aria-hidden="true" className="relative flex h-full flex-col overflow-hidden border border-black/10 bg-white/80 p-4 shadow-[0_14px_35px_-22px_rgba(0,0,0,0.5)] transition duration-500 group-hover:-translate-y-1 sm:p-5">
                                                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                                    <div className="flex gap-1.5">
                                                        <span className="h-2 w-2 rounded-full bg-[#e77b64]" />
                                                        <span className="h-2 w-2 rounded-full bg-[#efc15d]" />
                                                        <span className="h-2 w-2 rounded-full bg-[#73b68d]" />
                                                    </div>
                                                    <span className="h-1.5 w-14 rounded-full bg-black/10" />
                                                </div>
                                                <div className="grid flex-1 grid-cols-[1fr_0.8fr] gap-4 pt-4">
                                                    <div className="flex flex-col justify-center">
                                                        <span className="mb-3 h-1.5 w-8 rounded-full bg-[#438467]" />
                                                        <span className="max-w-40 text-xl font-semibold leading-tight text-[#26332b] sm:text-2xl">{project.title}</span>
                                                        <span className="mt-4 h-1.5 w-3/4 rounded-full bg-[#b8d1c0]" />
                                                        <span className="mt-2 h-1.5 w-1/2 rounded-full bg-[#b8d1c0]" />
                                                    </div>
                                                    <div className="flex flex-col justify-center gap-2">
                                                        <div className="aspect-[1.35/1] rounded-sm bg-[#438467]" />
                                                        <div className="h-6 rounded-sm bg-[#b8d1c0]" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </div>

                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#64806e]">
                                            <Layers3 size={14} aria-hidden="true" />
                                            <span>{project.type}</span>
                                        </div>
                                        <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#202722]">{project.title}</h3>
                                        <p className="mt-3 flex-1 text-sm leading-6 text-[#626b64]">{project.description}</p>




                                        {(project.liveUrl || project.sourceUrl) && (
                                            <div className="mt-6 flex gap-4 border-t border-[#e7eae5] pt-4">
                                                {project.liveUrl && (
                                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#276d4d] transition hover:text-[#d7583d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#276d4d]">
                                                        Visit site <ArrowUpRight size={16} aria-hidden="true" />
                                                    </a>
                                                )}
                                                {project.sourceUrl && (
                                                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#46534a] transition hover:text-[#d7583d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#276d4d]">
                                                        <FaGithub size={16} aria-hidden="true" /> Source
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="border border-dashed border-[#b8c5bb] px-6 py-16 text-center">
                        <p className="text-lg font-semibold text-[#34443a]">New work is on the way.</p>
                        <p className="mt-2 text-sm text-[#68746b]">Check back soon for the latest projects.</p>
                    </div>
                )}


            </div>
        </section>
    );
}
