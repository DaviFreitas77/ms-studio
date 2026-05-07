export function InfoBar() {
  return (
    <div className="relative z-10 bg-black py-4 flex items-center text-center text-xs text-white justify-center uppercase tracking-[0.25em] gap-10">
      <div>
        <p>Atendimento a domicílio</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden h-px w-12 bg-linear-to-r from-transparent via-white/35 to-transparent md:flex"
      />
       <div>
        <p>Agende para quando quiser</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden h-px w-12 bg-linear-to-r from-transparent via-white/35 to-transparent md:flex"
      />
      <div>
        <p>Resultado que você ama</p>
      </div>
    </div>
  );
}
