"use client";

import React from "react";

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const defaultTextColor = "text-neutral-600";
  const hoverTextColor = "text-neutral-900";
  const textSizeClass = "text-sm";

  return (
    <a
      href={href}
      className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export function Navbar() {
  const handleScheduleClick = () => {
    const phone = "11988729935";
    const message = "Oii Mirian, vim pelo site e gostaria de marcar um horário com você";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  const logoElement = (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <span className="absolute w-1.5 h-1.5 rounded-full bg-neutral-700 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-neutral-700 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-neutral-700 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-neutral-700 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
    </div>
  );

  const navLinksData = [
    { label: "Início", href: "#início" },
    { label: "Portfólio", href: "#portfólio" },
    { label: "Serviços", href: "#serviços" },

    { label: "Avaliações", href: "#avaliações" },
  ];

  const signupButtonElement = (
    <div className="relative group w-auto">
      <div
        className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-white
                     opacity-80 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-95 group-hover:blur-xl group-hover:-m-3"
      ></div>
      <button 
        onClick={handleScheduleClick}
        className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm text-neutral-900 border border-amber-200 bg-linear-to-br from-[#fff7e6] to-[#efd08a] rounded-lg hover:from-white hover:to-amber-200 transition-all duration-200 w-auto whitespace-nowrap font-light tracking-[0.15em] cursor-pointer">
        Agendar horário
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       rounded-full
                       border border-black/10 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                       w-[calc(100%-2rem)] lg:w-auto
                       transition-all duration-200 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 sm:gap-3">
          {signupButtonElement}
        </div>

        <div className="lg:hidden flex items-center">{signupButtonElement}</div>
      </div>
    </header>
  );
}
