export function InfoBar() {
  return (
    <div className="relative z-10 bg-black py-3 px-4 flex flex-col items-center text-center text-[11px] text-white uppercase tracking-[0.12em] gap-2 sm:flex-row sm:justify-center sm:tracking-[0.25em] sm:gap-10">
      <div>
        <p>Atendimento a domicílio</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden h-px w-10 bg-linear-to-r from-transparent via-white/35 to-transparent sm:block"
      />
      <div>
        <p>Agende para quando quiser</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden h-px w-10 bg-linear-to-r from-transparent via-white/35 to-transparent sm:block"
      />
      <div>
        <p>Resultado que você ama</p>
      </div>
    </div>
  );
}
