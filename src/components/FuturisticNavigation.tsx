import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export function FuturisticNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trustCenterOpen, setTrustCenterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTrustCenterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setTrustCenterOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0a0e27]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.5)',
                    '0 0 30px rgba(236, 72, 153, 0.6)',
                    '0 0 20px rgba(139, 92, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10 text-white">T</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Theia
                </span>
                <span className="text-xs text-purple-400">Fiber Intelligence</span>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Features', id: 'features' },
                { label: 'Theia AI', id: 'theia-ai' },
                { label: 'Dashboard', id: 'dashboard' },
                { label: 'Use Cases', id: 'use-cases' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1, color: '#a855f7' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-purple-400 transition-colors relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              
              {/* Trust Center Dropdown */}
              <div ref={dropdownRef} className="relative">
                <motion.button
                  onClick={() => setTrustCenterOpen(!trustCenterOpen)}
                  whileHover={{ scale: 1.1, color: '#a855f7' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-purple-400 transition-colors relative group flex items-center gap-1"
                >
                  Trust Center
                  <ChevronDown className={`w-4 h-4 transition-transform ${trustCenterOpen ? 'rotate-180' : ''}`} />
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <AnimatePresence>
                  {trustCenterOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 right-0 w-48 bg-[#0a0e27]/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-lg shadow-purple-500/20 overflow-hidden z-50"
                    >
                      {[
                        { label: 'SLA', id: 'sla' },
                        { label: 'Security', id: 'security' },
                        { label: 'Compliance', id: 'compliance' }
                      ].map((item, index) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', x: 5 }}
                          className="w-full text-left px-4 py-3 text-gray-300 hover:text-purple-400 transition-colors border-b border-purple-500/10 last:border-b-0"
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('demo')} 
                  variant="outline"
                  className="border-purple-500/50 bg-transparent text-white hover:bg-purple-500/20 hover:border-purple-400"
                >
                  Login to Platform
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('demo')} 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30"
                >
                  Get a Demo
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-[#0a0e27]/95 backdrop-blur-xl border-l border-purple-500/20 md:hidden"
      >
        <div className="flex flex-col gap-6 p-6 pt-24">
          {[
            { label: 'Features', id: 'features' },
            { label: 'Theia AI', id: 'theia-ai' },
            { label: 'Dashboard', id: 'dashboard' },
            { label: 'Use Cases', id: 'use-cases' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-lg hover:text-purple-400 transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-purple-500/20 pt-4">
            <p className="text-gray-500 text-sm mb-3">Trust Center</p>
            {[
              { label: 'SLA', id: 'sla' },
              { label: 'Security', id: 'security' },
              { label: 'Compliance', id: 'compliance' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-base hover:text-purple-400 transition-colors text-left block mb-3"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-6 border-t border-purple-500/20">
            <Button 
              onClick={() => scrollToSection('demo')} 
              variant="outline"
              className="border-purple-500/50 bg-transparent text-white hover:bg-purple-500/20"
            >
              Login to Platform
            </Button>
            <Button 
              onClick={() => scrollToSection('demo')} 
              className="bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Get a Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
