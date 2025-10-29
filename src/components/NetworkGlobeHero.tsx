import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { useRef, useState, useEffect } from 'react';
import { NetworkGlobe } from './NetworkGlobe';
import { AICore } from './AICore';

interface Phase {
  name: string;
  duration: number;
  text: string;
  subtitle?: string;
}

const phases: Phase[] = [
  { 
    name: 'network-appears', 
    duration: 4000, 
    text: "Theia AI — The brain of your fiber network.",
    subtitle: "Real-time network monitoring powered by AI"
  },
  { 
    name: 'ai-detects', 
    duration: 3000, 
    text: "Detecting anomalies in real time…",
    subtitle: "AI continuously scans for network issues"
  },
  { 
    name: 'ai-fixes', 
    duration: 3000, 
    text: "Predicting and preventing outages before they happen.",
    subtitle: "Autonomous network healing and optimization"
  },
  { 
    name: 'stable-idle', 
    duration: 4000, 
    text: "Always-on fiber protection. Powered by Theia AI.",
    subtitle: "Continuous intelligent monitoring"
  }
];

export function NetworkGlobeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentPhase, setCurrentPhase] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Phase cycling logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, phases[currentPhase].duration);

    return () => clearTimeout(timer);
  }, [currentPhase]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4"
            style={{
              textShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
            }}
          >
            Detect. Predict. Prevent.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12 text-gray-300 text-xl md:text-2xl"
        >
          AI-powered monitoring for dark fiber networks. Real-time fault detection, predictive analysis, and autonomous protection.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('demo')}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-lg shadow-purple-500/50"
            >
              Get a Demo
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('demo')}
              size="lg" 
              variant="outline"
              className="border-2 border-purple-500/50 bg-transparent text-white hover:bg-purple-500/20 px-10 py-6 text-lg backdrop-blur-sm"
            >
              Login to Platform
            </Button>
          </motion.div>
        </motion.div>

        {/* Network Globe Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 blur-3xl -z-10" />
          
          {/* Main visualization container */}
          <div className="relative bg-[#0f1432]/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl min-h-[600px] flex flex-col items-center justify-center">
            
            {/* Network Globe with AI Core */}
            <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
              <NetworkGlobe currentPhase={currentPhase} />
              <AICore currentPhase={currentPhase} />
            </div>

            {/* Phase-based text overlay */}
            <div className="mt-8 relative h-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-2 text-center px-4">
                    {phases[currentPhase].text}
                  </p>
                  {phases[currentPhase].subtitle && (
                    <p className="text-sm md:text-base text-gray-400 text-center px-4">
                      {phases[currentPhase].subtitle}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Phase indicators */}
            <div className="flex gap-2 mt-6">
              {phases.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentPhase 
                      ? 'w-12 bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'w-8 bg-gray-600'
                  }`}
                  animate={{
                    opacity: index === currentPhase ? 1 : 0.5
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { label: 'Network Uptime', value: '99.9%', color: 'cyan' },
            { label: 'Faults Prevented', value: '10K+', color: 'purple' },
            { label: 'Response Time', value: '<1ms', color: 'pink' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="bg-[#141937]/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className={`text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

