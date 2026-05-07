"use client";
import { Slider } from "@/src/components/portfolio/slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




export function Portfolio() {

  return (
    <section className="relative z-10 px-10 pb-24 pt-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-4">
          <spanc
            aria-hidden="true"
            className="hidden h-px w-12 bg-linear-to-r from-transparent via-white/35 to-transparent md:flex"
          />
          <p className="text-[#C9A227]">Designs delicados e acabamento limpo</p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight ">
              Veja alguns trabalhos recentes.
            </h2>
          </div>

          <Slider/>
        </div>

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
