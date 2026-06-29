import { IoHomeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
export function InfoBar() {
  return (
    <div className="relative z-10 bg-[#dfbc5b] py-3 px-4 flex flex-col items-center text-center text-[11px] text-white uppercase tracking-[0.12em] gap-4  sm:flex-row sm:justify-center sm:tracking-[0.25em] sm:gap-10 border border-gray-100/5">
      <div className="inline-flex items-center gap-2">
        <IoHomeOutline size={16} />
        <p className="uppercase">Atendimento a domicílio</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden h-px w-10 bg-linear-to-r from-transparent via-white/35 to-transparent sm:block"
      />
       <div className="inline-flex items-center gap-2">
        <CiCalendar size={16} />
        <p>Agende para quando quiser</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden h-px w-10 bg-linear-to-r from-transparent via-white/35 to-transparent sm:block"
      />
      <div className="inline-flex items-center gap-2">
        <FaRegHeart size={16}/>
        <p>Resultado que você ama</p>
      </div>
    </div>
  );
}
