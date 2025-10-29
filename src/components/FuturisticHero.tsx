import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { useRef } from 'react';

export function FuturisticHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const words = "Detect. Predict. Prevent.".split(" ");

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Animated heading */}
        <div className="mb-6">
          {words.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: wordIndex * 0.3, duration: 0.8, ease: "easeOut" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  custom={charIndex}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                  style={{
                    textShadow: '0 0 40px rgba(139, 92, 246, 0.5)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block w-4" />
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12 text-gray-300 text-xl md:text-2xl"
        >
          AI-powered monitoring for dark fiber networks. Instantly detect faults, visualize impact, and automate protection with OTDR, GIS, and real-time alerts—all from a single cloud-native platform
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
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

        {/* Floating dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl" />
            
            {/* Dashboard mockup */}
            <div className="relative bg-[#0f1432]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-400 text-sm">Network Dashboard</div>
              </div>

              {/* Dashboard content grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300 text-sm">Network Health</span>
                    <span className="text-green-400 text-sm">98.7%</span>
                  </div>
                  <div className="h-32 flex items-end gap-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-purple-600 to-cyan-400 rounded-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 100}%` }}
                        transition={{
                          delay: 2 + i * 0.05,
                          duration: 0.5,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-gray-300 text-sm mb-2">Active Alerts</div>
                  <div className="text-4xl text-cyan-400 mb-2">3</div>
                  <div className="text-xs text-gray-400">2 resolved today</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Fiber Spans', value: '247', color: 'purple' },
                  { label: 'OTDR Scans', value: '1,429', color: 'pink' },
                  { label: 'Uptime', value: '99.9%', color: 'cyan' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 + i * 0.1 }}
                    className={`bg-${stat.color}-900/20 rounded-lg p-4 border border-${stat.color}-500/30`}
                  >
                    <div className="text-gray-400 text-xs mb-1">{stat.label}</div>
                    <div className={`text-2xl text-${stat.color}-400`}>{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
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
