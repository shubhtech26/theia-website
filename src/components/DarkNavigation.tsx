import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function DarkNavigation() {
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
      scrolled ? 'bg-[#0a0e27]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-white">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl text-white tracking-tight">Theia</span>
            <span className="text-xs text-gray-400">Fiber Intelligence</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection('theia-ai')} className="text-gray-300 hover:text-white transition-colors">
            Theia Agent
          </button>
          <button onClick={() => scrollToSection('sla')} className="text-gray-300 hover:text-white transition-colors">
            SLA
          </button>
          <button onClick={() => scrollToSection('security')} className="text-gray-300 hover:text-white transition-colors">
            Security
          </button>
          <button onClick={() => scrollToSection('use-cases')} className="text-gray-300 hover:text-white transition-colors">
            Use Cases
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            onClick={() => scrollToSection('demo')} 
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Login to Platform
          </Button>
          <Button 
            onClick={() => scrollToSection('demo')} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
