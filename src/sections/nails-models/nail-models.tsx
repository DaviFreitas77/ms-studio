"use client";

import { SliderModelsNails } from "@/src/components/nails-models/slide-models-nails";

import ShinyText from "@/src/components/ui/ShinyText";
import { motion } from "motion/react";


export function NailModels() {
  return (
    <section
      id="nail-models"
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
            text="Estilos de unhas"
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
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl text-center lg:text-start font-semibold leading-tight sm:text-4xl ">
            Formatos que valorizam suas mãos
          </h2>
        </div>

        <div className="w-full mt-12">
          <SliderModelsNails />
        </div>
      </div>
    </section>
  );
}
