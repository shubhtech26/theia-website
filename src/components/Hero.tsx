import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${i * 300} 0 Q ${i * 300 + 150} ${200 + i * 100} ${i * 300 + 300} ${100 + i * 50}`}
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-8"
        >
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-blue-600">Next-Generation Fiber Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Fiber Networks Deserve the Same Intelligence as the Data They Carry
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 text-gray-600 text-xl"
        >
          We combine cutting-edge hardware and cloud-based AI to turn fiber infrastructure into a living, learning system. Predict faults, detect risks, prevent downtime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            onClick={() => scrollToSection('platform')}
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 group"
          >
            Explore Theia
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg" 
            variant="outline"
            className="border-2"
          >
            Request Demo
          </Button>
        </motion.div>

        {/* Floating network visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-4xl h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                {/* Network nodes and connections */}
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
                
                {/* Animated connections */}
                {[[100, 200, 300, 150], [300, 150, 500, 180], [500, 180, 700, 200], [100, 200, 250, 280], [250, 280, 550, 260], [550, 260, 700, 200]].map((points, i) => (
                  <motion.line
                    key={i}
                    x1={points[0]}
                    y1={points[1]}
                    x2={points[2]}
                    y2={points[3]}
                    stroke="url(#line-gradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 1 + i * 0.1, repeat: Infinity, repeatDelay: 4 }}
                  />
                ))}
                
                {/* Nodes */}
                {[[100, 200], [300, 150], [500, 180], [700, 200], [250, 280], [550, 260]].map((pos, i) => (
                  <motion.circle
                    key={i}
                    cx={pos[0]}
                    cy={pos[1]}
                    r="8"
                    fill="#3B82F6"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: 1.2 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                  />
                ))}
              </svg>
            </div>
            
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center"
              >
                <p className="text-sm text-gray-500">Real-time network intelligence</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
