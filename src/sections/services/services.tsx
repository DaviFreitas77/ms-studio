"use client";
import { motion } from "framer-motion";
import ShinyText from "@/src/components/ui/ShinyText";

export function Services() {
  return (
    <section
    id="serviços"
    className="relative z-10 overflow-hidden px-5 py-10 text-[#1a1a1a] sm:px-8 sm:py-14 lg:px-10 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(201,162,39,0.04) 0px, rgba(201,162,39,0.04) 2px, transparent 2px, transparent 40px)",
          mixBlendMode: "overlay",
          opacity: 0.9,
        }}
      />
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
            text="Seviços"
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
              Conheça meus serviços
            </h2>
          </div>
        </motion.div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 items-center justify-center max-w-350 gap-2 mx-auto mt-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Manicure</h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">R$ 35,00</div>
          <p className="text-gray-700">
            Ofereço serviços de manicure para cuidar das suas unhas e deixá-las
            lindas.
          </p>
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
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Pedicure</h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">
            R$ 35,00
          </div>
          <p className="text-gray-700">
            Cuido dos seus pés com serviços de pedicure, garantindo que eles
            fiquem saudáveis e bonitos.
          </p>
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
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Banho em gel</h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">R$ 70,00</div>
          <p className="text-gray-700">
            Ofereço serviços de banho em gel para deixar suas unhas
            duradouras e bonitas.
          </p>
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
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Alongamento no molde F1</h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">R$ 100,00</div>
          <p className="text-gray-700">
            Realizo alongamento no molde F1 para criar unhas personalizadas e
            resistentes.
          </p>
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
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Blindagem </h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">
            R$ 60,00
          </div>
          <p className="text-gray-700">
            Ofereço serviços de blindagem para fortalecer suas unhas e protegê-las contra quebras e danos.
          </p>
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
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Design de Sobrancelhas</h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">R$ 20,00</div>
          <p className="text-gray-700">
            Realizo o design de sobrancelhas para realçar a beleza do seu rosto
            e destacar seus olhos.
          </p>
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
          className="bg-[#F6E6D6] rounded-lg p-4 mt-10 max-w-md py-10"
        >
          <h3 className="text-xl font-semibold mb-2">Sombrancelhas com henna </h3>
          <div className="mb-3 text-lg font-semibold text-[#8b6d1f]">
            R$ 25,00
          </div>
          <p className="text-gray-700">
            Ofereço serviços de design com henna para realçar a cor e a forma das suas sobrancelhas
          </p>
        </motion.div>
      
      </section>
    </section>
  );
}
