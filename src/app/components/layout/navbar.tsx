"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/*lg devices menu button */}
      <header className="sticky top-0 z-50 hidden border-b border-slate-800 bg-black/95 text-white backdrop-blur-md lg:block">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          {/* Logo */}


          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white transition duration-200 hover:scale-105 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            PRINCE RAJ SINGH
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-7">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`group relative text-[15px] font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400 ${index === 0
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-300"
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* mobile menu*/}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-800 bg-black/95 px-5 text-white backdrop-blur-md lg:hidden">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white transition duration-200 hover:scale-105 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          PRINCE RAJ SINGH
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 transition duration-200 hover:scale-110 hover:bg-white/10 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* Mobile menu code*/}
      <div
        className={`fixed inset-x-0 top-16 z-40 border-b border-slate-800 bg-black transition-all duration-300 lg:hidden ${isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-5 opacity-0"
          }`}
      >
        <nav className="px-6 py-8">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`group relative border-b border-slate-800 py-4 text-lg font-medium transition duration-200 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-cyan-400 ${index === 0
                  ? "text-cyan-400"
                  : "text-slate-200 hover:text-cyan-300"
                  }`}
              >
                {item.name}
                <span className="absolute bottom-3 left-0 h-px w-20 origin-left scale-x-0 bg-cyan-400 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}