import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#1c0710] font-sans text-gray-100 selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
