import AboutSection from "@/components/Home/AboutSection";
import BannerSection from "@/components/Home/BannerSection";
import GrowthServices from "@/components/Home/GrowthServices";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <BannerSection />
      <GrowthServices />
      <Testimonials />
    </>
  );
}
