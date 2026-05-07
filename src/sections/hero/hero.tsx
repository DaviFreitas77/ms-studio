import Image from "next/image";

export function Hero() {
  return (
    <section>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-[#12040c] to-black" />
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

      <div className="relative z-10 flex items-center justify-center gap-20 px-10 pt-50 pb-30 text-white">
        <section>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-linear-to-r from-transparent via-white/35 to-transparent md:flex"
              ></span>
              <p className="text-[#C9A227]">Manicure & Pedicure</p>
            </div>

            <h1 className="inline-block  text-7xl max-w-80 leading-19">
              The New Standard in Nail Mastery
            </h1>

            <div className="w-40 h-0.5 bg-[#C9A227] mt-2 rounded-full"></div>
          </div>

          <p className="max-w-2xl mt-4 text-lg text-gray-600">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#C9A227] hover:bg-[#c99e2d] text-black font-bold py-3 px-15 rounded mt-5 cursor-pointer">
            Agende seu horário
          </button>

          <div className="flex gap-8 mt-10 bg-black/40 p-6 rounded-lg max-w-xl justify-around">
            <div className="text-center">
              <p className="text-2xl font-extrabold">100+</p>
              <p className="text-sm text-gray-400">Clientes atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold">95%</p>
              <p className="text-sm text-gray-400">Taxa de retorno</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold">150+</p>
              <p className="text-sm text-gray-400">Avaliações</p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex gap-4 items-start ">
            <div>
              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={260}
                height={40}
                className="rounded-lg"
              />
              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={260}
                height={40}
                className="rounded-lg mt-4"
              />
            </div>

            <div>
              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={300}
                height={40}
                className="rounded-lg"
              />

              <Image
                src="/images/nails-art.jpg"
                alt="Nail Art"
                width={260}
                height={40}
                className="rounded-lg mt-4"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
