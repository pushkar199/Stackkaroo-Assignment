import DigitalServices from "@/components/DigitalServices";
import Hero from "@/components/Hero";
import HiringServices from "@/components/HiringServices";
import OurStory from "@/components/OurStory";
import SeoServices from "@/components/SeoServices";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full mx-auto">
      <Hero />
      <OurStory />
      <WhyChooseUs />
      <DigitalServices />
      <SeoServices />
      <HiringServices />
    </main>
  );
}
