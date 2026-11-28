import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#1c0710] font-sans text-gray-100 selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
