import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Upcoming from "@/components/Upcoming";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Upcoming />
      <Services />
      <WhyUs />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
