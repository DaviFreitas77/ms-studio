import { Hero } from "@/src/sections/hero/hero";
import { InfoBar } from "@/src/sections/infoBar/infoBar";
import { Feedbacks } from "@/src/sections/feedbacks/feedbacks";
import { Portfolio } from "@/src/sections/portfolio/portfolio";
import { Services } from "@/src/sections/services/services";
import { ScrollProgress } from "@/src/components/ui/scroll-progress";
import { NailModels } from "@/src/sections/nails-models/nail-models";
import { Location } from "@/src/sections/location/location";


export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f7f3ec]">
      <ScrollProgress />
      <Hero />
      <InfoBar />
      <Portfolio />
      <NailModels/>
      <Services />
      <Location />
      <Feedbacks />
    </main>
  );
}
