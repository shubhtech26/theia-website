import { motion } from 'motion/react';
import { Clock, Bell, FileText, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function SLAEnforcement() {
  return (
    <section id="sla" className="py-24 bg-[#0a0e27]">
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
            className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4"
          >
            <span className="text-green-400 text-xs md:text-sm font-medium uppercase tracking-wider">
              SLA Assurance
            </span>
          </motion.div>

          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Never Miss an SLA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Automated tracking, timestamped evidence, zero penalties
          </p>
        </motion.div>

        {/* Animated SLA Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#141937] to-[#1e2347] border border-purple-500/30 rounded-3xl p-8 mb-10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: '99.9%', label: 'Uptime', color: 'green' },
                { value: '<12min', label: 'Response Time', color: 'cyan' },
                { value: '0', label: 'Violations', color: 'purple' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-black/30 rounded-xl p-6 border border-${stat.color}-500/30 hover:border-${stat.color}-500/60 transition-all`}
                >
                  <div className={`text-5xl text-${stat.color}-400 mb-2 font-bold`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
