import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Activity, Map, Zap, Bell, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time OTDR',
    description: 'Continuous scanning detects faults instantly with precise location'
  },
  {
    icon: Map,
    title: 'GIS Visualization',
    description: 'Interactive maps show fiber routes and network health at a glance'
  },
  {
    icon: Zap,
    title: 'AI Analysis',
    description: 'Smart insights without alert fatigue using pattern recognition'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Automated detection with instant email and webhook notifications'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track trends and verify SLAs with time-stamped event history'
  },
  {
    icon: Shield,
    title: 'Always-On Protection',
    description: '24/7 autonomous monitoring keeps your network secure'
  }
];

export function AnimatedFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Complete Fiber Network Intelligence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time visibility and automated protection for your dark fiber infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard key={feature.title} feature={feature} icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, icon: Icon, index }: { feature: typeof features[0]; icon: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
      }}
      className="group bg-gradient-to-br from-[#141937]/80 to-[#1e2347]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/60 transition-all cursor-pointer relative overflow-hidden"
    >
      {/* Animated glow on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-cyan-600/10 transition-all duration-500"
      />

      <div className="relative z-10">
        {/* Animated icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-purple-500/50"
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </motion.div>

        <h3 className="text-white mb-2 text-lg font-semibold">{feature.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/0 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
      </div>
    </motion.div>
  );
}
