
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import ContactSection from "@/components/sections/ContactSection";
import LifeTimeline from "@/components/memorial/LifeTimeline";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LifeTimeline />
        <MemoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
