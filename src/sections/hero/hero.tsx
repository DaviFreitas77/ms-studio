import Image from "next/image";

export function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black via-[#12040c] to-black" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(201,162,39,0.08) 0px, rgba(201,162,39,0.08) 1px, transparent 1px, transparent 120px)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 pb-16 pt-28 text-white sm:px-8 md:pt-36 lg:flex-row lg:gap-16 lg:px-10 lg:pb-24 lg:pt-44">
        <section className="w-full lg:w-1/2">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span
                aria-hidden="true"
                className=" h-px w-12 bg-linear-to-r from-transparent via-white/35 to-transparent"
              ></span>
              <p className="text-sm tracking-[0.15em] text-[#C9A227] sm:text-base">
                Manicure & Pedicure
              </p>
            </div>

            <h1 className="inline-block max-w-xl text-4xl leading-tight sm:text-5xl lg:text-7xl lg:leading-19">
              The New Standard in Nail Mastery
            </h1>

            <div className="w-40 h-0.5 bg-[#C9A227] mt-2 rounded-full"></div>
          </div>

          <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-5 w-full cursor-pointer rounded bg-[#C9A227] px-8 py-3 text-base font-bold text-black hover:bg-[#c99e2d] sm:w-auto sm:px-12">
            Agende seu horário
          </button>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 rounded-lg bg-black/40 p-4 sm:gap-8 sm:p-6">
            <div className="text-center">
              <p className="text-xl font-extrabold sm:text-2xl">100+</p>
              <p className="text-xs text-gray-400 sm:text-sm">
                Clientes atendidos
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-extrabold sm:text-2xl">95%</p>
              <p className="text-xs text-gray-400 sm:text-sm">
                Taxa de retorno
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-extrabold sm:text-2xl">150+</p>
              <p className="text-xs text-gray-400 sm:text-sm">Avaliações</p>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={260}
                height={340}
                quality={85}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 260px"
                className="h-auto w-full rounded-lg object-cover"
              />
              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={260}
                height={340}
                quality={85}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 260px"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>

            <div className="space-y-3 pt-4 sm:space-y-4 sm:pt-6">
              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={300}
                height={380}
                quality={85}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 34vw, 300px"
                className="h-auto w-full rounded-lg object-cover"
              />

              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={260}
                height={340}
                quality={85}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 260px"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
