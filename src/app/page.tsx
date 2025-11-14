import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Banner />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Impact />
      <Footer />
    </div>
  );
}
