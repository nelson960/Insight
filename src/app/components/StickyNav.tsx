'use client';

import { useEffect, useState } from 'react';

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3 shadow-lg shadow-black/5 z-50 transition-all duration-300">
      <div className="flex items-center gap-6 text-sm font-medium">
        <button 
          onClick={() => scrollToSection('problem')} 
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Problem
        </button>
        <button 
          onClick={() => scrollToSection('solution')} 
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Solution
        </button>
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          How It Works
        </button>
        <button 
          onClick={() => scrollToSection('who-its-for')} 
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Industries
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-blue-600/25"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}