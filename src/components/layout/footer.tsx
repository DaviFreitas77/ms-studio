import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="border-t border-black/10 bg-[#faf7f2]">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-6 text-sm text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
				<div className="text-left flex flex-col items-center sm:items-start">
					<span className="font-semibold text-xl">Studio by ms</span>
					<span className="font-light text-sm">Manicure & Pedicure</span>
				</div>

				<div className="flex items-center justify-center gap-4">
					<a
						href="https://instagram.com/studio.by.ms"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
						aria-label="Instagram"
					>
						<FaInstagram size={22} />
					</a>

					<a
						href="https://wa.me/11988729935"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
						aria-label="WhatsApp"
					>
						<FaWhatsapp size={22} />
					</a>
				</div>

				<div className="text-center text-xs text-neutral-600 sm:text-right">
				
					<div>© {new Date().getFullYear()}  Todos os direitos reservados</div>
				</div>
			</div>
		</footer>
	);
}
