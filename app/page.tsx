import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Investment from "@/components/sections/Investment";
import Amenities from "@/components/sections/Amenities";
import Team from "@/components/sections/Team";
import Projects from "@/components/sections/Projects";
import ForestConservation from "@/components/sections/ForestConservation";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Investment />
      <Amenities />
      <Team />
      <Projects />
      <ForestConservation />
      <Contact />
    </main>
  );
}
