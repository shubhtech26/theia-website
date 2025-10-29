import { motion } from 'motion/react';
import { Shield, AlertTriangle, Eye, MapPin, CheckCircle, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function FiberSecurity() {
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-[#141937] to-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4"
          >
            <span className="text-red-400 text-xs md:text-sm font-medium uppercase tracking-wider">
              Physical Layer Security
            </span>
          </motion.div>

          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Detect Fiber Taps Instantly
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI-powered monitoring catches unauthorized access invisible to NOC tools
          </p>
        </motion.div>

        {/* The Problem & Solution - Simplified */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Threat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/30 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white text-2xl font-bold">The Risk</h3>
            </div>
            
            <p className="text-gray-300 text-lg mb-6">
              Fiber taps at the physical layer — invisible to standard NOC tools
            </p>

            <div className="space-y-3">
              {['Microbend & reflection taps', 'Optical splitters', 'Unauthorized splices', 'Hidden connections'].map((threat) => (
                <div key={threat} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>{threat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600/10 to-cyan-600/10 border border-green-500/30 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white text-2xl font-bold">How We Detect</h3>
            </div>

            <p className="text-gray-300 text-lg mb-6">
              AI-powered optical analysis catches intrusions
            </p>

            <div className="space-y-3">
              {[
                { icon: Eye, text: 'Baseline signal fingerprinting' },
                { icon: Zap, text: 'Instant anomaly detection' },
                { icon: MapPin, text: '±2m fault accuracy' }
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.text} className="flex items-center gap-3 bg-black/30 rounded-lg p-3 border border-green-500/20">
                    <Icon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{step.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Live Protection Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Accuracy', value: '±2m' },
            { label: 'Alert Speed', value: '<1s' },
            { label: 'Dispatch', value: 'Auto' },
            { label: 'Audit Trail', value: '100%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
            >
              <div className="text-4xl text-cyan-400 mb-2 font-bold">{stat.value}</div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
