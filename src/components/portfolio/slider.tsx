import { portfolioSlides } from "../data/portfoilio-data";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Slider() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() => swiperRef.current?.slidePrev()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            900: { slidesPerView: 1.8 },
            1200: { slidesPerView: 3.5 },
          }}
          className="portfolio-swiper pb-12"
        >
          {portfolioSlides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <article className="group h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_80px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image
                    src="/images/nails-work.jpg"
                    alt={slide.title}
                    fill
                    sizes="(max-width: 640px) 95vw, (max-width: 1200px) 55vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="inline-flex rounded-full border border-[#C9A227]/30 bg-[#C9A227]/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#E6C56A]">
                      0{index + 1}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold">
                      {slide.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-gray-300">
                      {slide.text}
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
