import { motion } from 'motion/react';
import { Activity, Map, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function DarkHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#0f1432] to-[#141937] pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-6 text-white text-5xl md:text-6xl"
        >
          Detect. Predict. Prevent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 text-gray-300 text-xl"
        >
          AI-powered monitoring for dark fiber networks. Instantly detect faults, visualize impact, and automate protection with OTDR, GIS, and real-time alerts—all from a single cloud-native platform
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            onClick={() => scrollToSection('demo')}
            size="lg" 
            className="bg-[#2d1b69] hover:bg-[#3d2579] text-white px-8"
          >
            Get a demo
          </Button>
          <Button 
            onClick={() => scrollToSection('demo')}
            size="lg" 
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Login to Platform
          </Button>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Activity,
              title: 'Real-Time Fault Detection',
              description: 'Know exactly where and when fiber issues happen'
            },
            {
              icon: Map,
              title: 'Live GIS Monitoring',
              description: 'Visualize network health across every fiber span'
            },
            {
              icon: Zap,
              title: 'AI-Powered Analysis',
              description: 'Get actionable insights without alert fatigue'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-[#141937]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
