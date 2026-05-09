import { Hero } from "@/src/sections/hero/hero";
import { InfoBar } from "@/src/sections/infoBar/infoBar";
import { Portfolio } from "@/src/sections/portfolio/portfolio";
import { Services } from "@/src/sections/services/services";


export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f7f3ec]">
      <Hero />
      <InfoBar/>
      <Portfolio/>
      <Services/>
    </main>
  );
}
