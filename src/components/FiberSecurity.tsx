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
            className="bg-gradient-to-br from-green-600/10 to-cyan-600/10 border-2 border-green-500/50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white text-2xl font-bold">How We Detect</h3>
            </div>

            <p className="text-gray-300 text-lg mb-6">
              Our three-layer detection system identifies unauthorized access through continuous optical monitoring, AI-powered anomaly detection, and precision location tracking.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-white text-2xl font-bold mb-3">Security Performance Metrics</h3>
          <p className="text-gray-300 text-base max-w-3xl mx-auto">
            Our security system delivers pinpoint accuracy within 2 meters, sub-second alerting, automated field dispatch, and complete audit trails for compliance and investigation.
          </p>
        </motion.div>

        {/* Live Protection Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { label: 'Fault Location Precision', value: '±2m', desc: 'GPS-level accuracy for pinpointing threats' },
            { label: 'Alert Response Time', value: '<1s', desc: 'From detection to notification' },
            { label: 'Field Dispatch', value: 'Auto', desc: 'Automated team coordination' },
            { label: 'Documentation', value: '100%', desc: 'Complete audit trail logging' }
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
              <p className="text-white text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
           
           <  span className="block w-full h-6"></span>

          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-xl shadow-lg shadow-cyan-500/30 font-semibold text-lg"
          >
            Learn More About Fiber Security
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
