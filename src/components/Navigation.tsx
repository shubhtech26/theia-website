import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white">T</span>
          </div>
          <span className="text-xl tracking-tight">Theia</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Platform
          </button>
          <button onClick={() => scrollToSection('ai')} className="text-gray-600 hover:text-gray-900 transition-colors">
            AI & Intelligence
          </button>
          <button onClick={() => scrollToSection('industries')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Industries
          </button>
          <button onClick={() => scrollToSection('why-theia')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Why Theia
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </button>
        </div>

        <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          Request Demo
        </Button>
      </div>
    </nav>
  );
}
