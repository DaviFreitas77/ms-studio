"use client";
import { Slider } from "@/src/components/portfolio/slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import ShinyText from "@/src/components/ui/ShinyText";

export function Portfolio() {
  return (
    <section
      id="portfólio"
      className="relative z-10 overflow-hidden px-5 py-10 text-[#1a1a1a] sm:px-8 sm:py-14 lg:px-10 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #faf7f1 0%, #f3e8d9 45%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="mb-2 lg:mb-4  flex items-center gap-3 sm:gap-4 w-full text-center justify-center lg:justify-start"
        >
          <span
            aria-hidden="true"
            className=" h-px w-12 bg-linear-to-r from-transparent via-black/20 to-transparent hidden lg:block"
          />
          <ShinyText
            text="Portfólio"
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
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col gap-6"
        >
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl text-center lg:text-start font-semibold leading-tight sm:text-4xl ">
              Veja alguns trabalhos recentes.
            </h2>
          </div>

          <div className="w-full">
            <Slider />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: "easeIn",
            }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-black/10 p-8 text-center sm:p-10 relative overflow-hidden"
            style={{
              backgroundImage: "url('/images/fundo-porfolio.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <p className="text-sm tracking-[0.15em] text-[#f5dfa8] uppercase">
                Inspire-se
              </p>
              <h3 className="text-xl font-semibold text-white sm:text-2xl mt-2">
                Acompanhe mais no meu Instagram
              </h3>
              <p className="max-w-md text-sm text-white/90 mt-3">
                Veja os trabalhos mais recentes, dicas de beleza e muito mais conteúdo exclusivo.
              </p>
              <a
                href="https://www.instagram.com/studio.by.ms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#8b6d1f]/30 bg-linear-to-r from-[#f8ebcf] to-[#e8c47a] px-6 py-2.5 text-sm font-medium text-[#36280f] transition-transform hover:-translate-y-0.5 mt-4"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
                @sudio.by.ms
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

    
    </section>
  );
}
