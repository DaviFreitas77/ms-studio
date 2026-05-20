"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const feedbacks = [
  {
    id: 1,
    name: "Debora Freitas",
    text: "Melhor atendimento! Minhas unhas nunca estiveram tão bem cuidadas.",
    stars: 5,
  },
  {
    id: 2,
    name: "Sandra Silva",
    text: "Profissional super atenciosa. Adorei as unhas e voltarei sempre!",
    stars: 5,
  },
  {
    id: 3,
    name: "Beatriz Costa",
    text: "Produtos de qualidade excelente — o acabamento dura semanas!",
    stars: 5,
  },
  {
    id: 4,
    name: "Marina Souza",
    text: "Serviço impecável e atendimento muito atencioso. Super recomendo!",
    stars: 5,
  },
  {
    id: 5,
    name: "Juliana Oliveira",
    text: "Design perfeito e cores lindas! Ficou exatamente como imaginava.",
    stars: 5,
  },
  {
    id: 6,
    name: "Carla Mendes",
    text: "Unhas lindas e profissional de primeira qualidade. Muito satisfeita!",
    stars: 5,
  },
  {
    id: 7,
    name: "Fernanda Barbosa",
    text: "Amei o resultado! O acabamento é muito bom e durou muito tempo.",
    stars: 5,
  },
  {
    id: 8,
    name: "Patricia Lima",
    text: "Voltei várias vezes e continuo adorando. Profissional muito competente!",
    stars: 5,
  },
  {
    id: 9,
    name: "Amanda Gomes",
    text: "Recomendo para todas as amigas! Ficou maravilhoso e super confortável.",
    stars: 5,
  },
  {
    id: 10,
    name: "Isabela Martins",
    text: "Experiência sensacional! Equipe simpática e trabalho de excelência.",
    stars: 5,
  },
];

export function Feedbacks() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section 
    id="avaliações"
    className="relative py-16 bg-transparent px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex-1"
          >
            <h3 className="text-3xl font-semibold text-center">
              O que as clientes dizem
            </h3>
            <p className="mt-3 text-gray-600">
              Depoimentos reais para você confiar no meu trabalho.
            </p>
          </motion.div>
        </div>
        <div className="flex gap-2 self-end my-6 justify-end">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev-feedback inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/75 text-black transition-colors hover:bg-white sm:h-11 sm:w-11"
            aria-label="Previous"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next-feedback inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/75 text-black transition-colors hover:bg-white sm:h-11 sm:w-11"
            aria-label="Next"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="feedbacks-swiper px-3 pb-10 relative"
        >
          {feedbacks.map((f, i) => (
            <SwiperSlide key={f.id}>
              <div className="bg-[#F6E6D6] rounded-tr-2xl rounded-bl-2xl p-8 h-full min-h-50 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <div className="font-semibold text-[#1a1a1a]">{f.name}</div>
                    <div className="text-[#8b6d1f] text-sm tracking-[0.18em]">
                      {Array.from({ length: f.stars }).map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-[#3f3427]">"{f.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .feedbacks-swiper .swiper-pagination-bullet {
          background: rgba(139, 109, 31, 0.35);
          opacity: 1;
        }

        .feedbacks-swiper .swiper-pagination-bullet-active {
          background: #8b6d1f;
        }
      `}</style>
    </section>
  );
}
