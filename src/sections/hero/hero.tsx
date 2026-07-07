"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ShinyText from "@/src/components/ui/ShinyText";

export function Hero() {
  const handleScheduleClick = () => {
    const phone = "5511988729935";
    const message = "Oii Mirian, vim pelo site e gostaria de marcar um horário com você";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="início"
      className="relative overflow-hidden bg-linear-to-br from-[#fbf7f0] via-[#f4eadc] to-[#ffffff]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(17,17,17,0.05),transparent_30%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(139,109,31,0.08) 0px, rgba(139,109,31,0.08) 1px, transparent 1px, transparent 120px)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(255,255,255,0.78) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full lg:max-w-400 flex-col items-center justify-center gap-10 px-3 pb-16 pt-28 text-[#1f1a16] sm:px-8 md:pt-36 lg:flex-row lg:gap-26 lg:px-10 lg:pb-24 lg:pt-44">
        <section className="w-full lg:w-1/2">
          <div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeIn",
              }}
              className="flex items-center gap-4 mb-4"
            >
              <span
                aria-hidden="true"
                className=" h-px w-12 bg-linear-to-r from-transparent via-black/20 to-transparent"
              ></span>
              <ShinyText
                text="MANICURE e PEDICURE"
                speed={2}
                delay={0}
                color="#8b6d1f"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className="text-xs tracking-[0.20em] text-[#8b6d1f] uppercase"
              />
            </motion.div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeIn",
              }}
              className="flex items-center gap-4 mb-4"
            >
              <h1 className="inline-block text-3xl leading-tight sm:text-5xl lg:text-6xl lg:leading-19 font-light ">
                Cuidando de{" "}
                <span className="font-medium">cada detalhe das suas unhas</span>
              </h1>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeIn",
              }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-40 h-0.5 bg-[#8b6d1f] mt-2 rounded-full"></div>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeIn",
            }}
          >
            <p className="mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg">
              Cada atendimento é feito com cuidado, atenção aos detalhes e muito
              carinho para valorizar ainda mais sua beleza.
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeIn",
            }}
            className="w-full sm:w-fit"
          >
            <div className="group relative mt-5 inline-flex w-full sm:w-fit">
              <button 
                onClick={handleScheduleClick}
                className="relative z-10 mt-3 w-full cursor-pointer whitespace-nowrap rounded-lg border border-amber-200 bg-linear-to-br from-[#fff7e6] to-[#efd08a] px-8 py-3 text-base font-light tracking-[0.15em] text-neutral-900 transition-all duration-200 hover:from-[#fffaf0] hover:to-[#f3dca2] sm:w-fit sm:px-12">
                Agende seu horário
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-10  max-w-xl flex-wrap gap-2 hidden lg:flex"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeIn",
            }}
          >
            <div className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em]  backdrop-blur-sm">
              Manicure
            </div>

            <div className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em]  backdrop-blur-sm">
              Pedicure
            </div>

            <div className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em]  backdrop-blur-sm">
              Alongamento
            </div>

            <div className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em]  backdrop-blur-sm">
              Esmaltação em gel
            </div>

            <div className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em]  backdrop-blur-sm">
              Blindagem
            </div>

            <div className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em]  backdrop-blur-sm">
              Molde F1
            </div>
          </motion.div>
        </section>
        <section className="w-full lg:w-1/2">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeIn",
            }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 2xl:max-w-2xl">
              <div className="space-y-3 sm:space-y-4">
                <Image
                  src="/images/work-6.png"
                  alt="Nail Art"
                  width={260}
                  height={340}
               
                 
                  className=" w-full rounded-lg object-cover"
                />
                <Image
                  src="/images/manicure-6.png"
                  alt="Nail Art"
                  width={260}
                  height={340}
               
                 
                  className=" w-full rounded-lg object-cover"
                />
              </div>

              <div className="space-y-3 pt-4 sm:space-y-4 sm:pt-6">
                <Image
                  src="/images/me.png"
                  alt="Nail Art"
                  width={300}
                  height={380}
               
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 34vw, 300px"
                  className=" w-full rounded-lg object-cover"
                />

                <Image
                  src="/images/manicure.png"
                  alt="Nail Art"
                  width={260}
                  height={340}
               
                 
                  className=" w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
