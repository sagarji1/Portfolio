import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Services from './sections/Services';
import Resume from './sections/Resume';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#121316] flex flex-col antialiased selection:bg-[#d9f99d] selection:text-[#14532d]">
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#121316] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-xs font-mono"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Home />
        <Services />
        <Resume />
        <Work />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
