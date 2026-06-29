import { portfolioSlides } from "../data/portfoilio-data";
import { FreeMode } from "swiper/modules";
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
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/75 text-black transition-colors hover:bg-white sm:h-11 sm:w-11"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/75 text-black transition-colors hover:bg-white sm:h-11 sm:w-11"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      <div className="mt-6">
        <Swiper
          modules={[FreeMode]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          freeMode={true}
          speed={600}
          spaceBetween={12}
          slidesPerView={1.7}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 14 },
            900: { slidesPerView: 2.5, spaceBetween: 18 },
            1200: { slidesPerView: 3.4, spaceBetween: 20 },
            1440: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
        
        >
          {portfolioSlides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <article className="group h-full w-full overflow-hidden rounded-2xl border border-black/10  backdrop-blur-md ">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 640px) 95vw, (max-width: 1200px) 55vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                  />
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="inline-flex rounded-full border border-black/10 bg-white/80 p-1 text-xs text-[#8b6d1f]">
                      0{index + 1}
                    </div>
                    {/* <h3 className="hidden sm:block mt-3 text-xl font-semibold sm:text-2xl">
                      {slide.title}
                    </h3> */}
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
