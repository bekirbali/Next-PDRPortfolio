import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import NeyeIhtiyacinVar from "./components/NeyeIhtiyacinVar";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <NeyeIhtiyacinVar />
      <About />
      <CTA />
    </div>
  );
}
