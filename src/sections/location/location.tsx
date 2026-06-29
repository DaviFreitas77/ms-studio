"use client";

import Image from "next/image";
import { MapPin, Navigation, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


const locationHighlights = [
  {
    icon: MapPin,
    title: "Sede em Guaianases",
    text: "Atendimento com base na Zona Leste de São Paulo.",
  },
  {
    icon: Navigation,
    title: "Atendimento a domicílio",
    text: "Consulte a disponibilidade para o seu bairro no agendamento.",
  },
  {
    icon: Sparkles,
    title: "Cuidado no seu tempo",
    text: "Você escolhe o melhor horário e recebe um atendimento caprichado.",
  },
];

export function Location() {
  return (
    <section
      id="atendimento"
      className="relative z-10 overflow-hidden px-5 py-10 text-[#1a1a1a] sm:px-8 sm:py-14 lg:px-10 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #faf7f1 0%, #f4eadc 48%, #ffffff 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(139,109,31,0.055) 0px, rgba(139,109,31,0.055) 1px, transparent 1px, transparent 42px)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.35 }}
        >

          <div className="mt-8 grid gap-3">

            {locationHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border border-[#d6b66d]/35 bg-white/65 p-4 shadow-[0_14px_35px_rgba(95,65,25,0.06)] backdrop-blur-sm"
                >


                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3dfad] text-[#8b6d1f]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f1a16] text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-neutral-700 ">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg  p-4 sm:p-6">


            <div className="relative mx-auto aspect-square w-full max-w-[38rem]">
              <Image
                src="/images/mapa.png"
                alt="Mapa de atendimento com Guaianases em destaque"
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-contain drop-shadow-[0_22px_35px_rgba(65,45,20,0.18)]"
                priority={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
