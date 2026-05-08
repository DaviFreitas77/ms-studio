"use client";
import { Slider } from "@/src/components/portfolio/slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export function Portfolio() {
  return (
    <section
      className="relative z-10 overflow-hidden px-5 py-10 text-white sm:px-8 sm:py-14 lg:px-10 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #000000 0%, #12040c 20%, #000000 100%)",
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
            className=" h-px w-12 bg-linear-to-r from-transparent via-white/35 to-transparent hidden lg:block"
          />
          <p className="text-xs tracking-[0.20em] text-[#C9A227]  uppercase ">Portfólio</p>
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
        </motion.div>
      </div>

      <style jsx global>{`
        .portfolio-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .portfolio-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 5px !important;
          background: rgba(201, 162, 39, 0.35);
          opacity: 1;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            width 0.2s ease;
        }

        .portfolio-swiper .swiper-pagination-bullet:hover {
          background: rgba(201, 162, 39, 0.75);
          transform: scale(1.15);
        }

        .portfolio-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #c9a227, #e6c56a);
          box-shadow: 0 0 0 4px rgba(201, 162, 39, 0.12);
        }
      `}</style>
    </section>
  );
}
