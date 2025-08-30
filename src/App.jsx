
import HeroSection from './HeroSection';
import MemoriesSection from './MemoriesSection';
import ContactSection from './ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="w-full bg-black text-white py-10 text-center shadow-lg">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-shadow-lg">
          parackalfamily
        </h1>
        <p className="font-sans text-lg md:text-xl font-normal mt-3 text-gray-300 tracking-wider">
          In loving memory, we celebrate a life well lived
        </p>
      </header>
      <main className="w-full max-w-7xl flex-1 flex flex-col items-center">
        <HeroSection />
        <MemoriesSection />
        <ContactSection />
      </main>
      <footer className="w-full bg-black text-white text-center py-5 shadow-t-lg">
        <span className="font-display text-lg text-white tracking-wider">
          &copy; {new Date().getFullYear()} parackalfamily. Forever in our hearts.
        </span>
      </footer>
    </div>
  );
}

export default App;
