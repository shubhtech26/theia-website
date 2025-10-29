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
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Catch Fiber Taps Before They Steal Data
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Physical layer security that detects unauthorized access invisible to traditional tools
          </p>
        </motion.div>

        {/* The Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Threat Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white text-2xl">The Threat</h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg">
              Fiber taps intercept your data at the physical layer—completely invisible to NOC tools
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4 border border-red-500/20">
                <h5 className="text-red-400 mb-3 font-semibold">Passive Taps</h5>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Microbend taps
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Optical splitters
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    Reflection taps
                  </li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-orange-500/20">
                <h5 className="text-orange-400 mb-3 font-semibold">Active Threats</h5>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    Unauthorized splices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    Hidden connections
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    Rogue access
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600/10 to-cyan-600/10 border border-green-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white text-2xl">Theia Detects</h3>
            </div>

            <p className="text-gray-300 mb-6 text-lg">
              Catch intrusions with AI-powered optical analysis
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Eye,
                  title: 'Baseline Learning',
                  desc: 'Maps normal signal fingerprints'
                },
                {
                  icon: Zap,
                  title: 'AI Detection',
                  desc: 'Spots anomalies instantly'
                },
                {
                  icon: MapPin,
                  title: 'Precise Location',
                  desc: 'Pinpoints threats to ±2 meters'
                }
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-start gap-4 bg-black/30 rounded-lg p-4 border border-green-500/20">
                    <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* What We Detect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-white text-2xl mb-8 text-center">Beyond Taps: Catch Any Unauthorized Access</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Physical Handling',
                icon: AlertTriangle,
                items: ['Patch cord movements', 'Splice access', 'Test equipment', 'Fiber manipulation']
              },
              {
                title: 'Construction Risks',
                icon: Shield,
                items: ['Nearby digging', 'Accidental contact', 'Environmental pressure', 'Unplanned work']
              },
              {
                title: 'Optical Changes',
                icon: Eye,
                items: ['Backscatter shifts', 'Reflection spikes', 'Loss variations', 'Power anomalies']
              }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#141937] border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Live Protection Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1e2347] to-[#2d3561] border border-purple-500/30 rounded-2xl p-8 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-white text-2xl mb-3 flex items-center gap-3">
              <Shield className="w-8 h-8 text-cyan-400" />
              Live Protection Dashboard
            </h3>
            <p className="text-gray-400 mb-6">
              Every threat mapped instantly with precise location and context
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '±2m accuracy', color: 'cyan', value: 'GPS-level' },
                { label: 'Instant alerts', color: 'purple', value: '<1 sec' },
                { label: 'Field dispatch', color: 'green', value: 'Auto' },
                { label: 'Audit logs', color: 'pink', value: 'Complete' }
              ].map((feature) => (
                <div key={feature.label} className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <div className={`text-2xl text-${feature.color}-400 mb-1`}>{feature.value}</div>
                  <p className="text-gray-400 text-xs">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Who Needs This */}
        <div className="text-center">
          <h3 className="text-white text-2xl mb-6">Who Needs Fiber Security?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              'Municipal networks',
              'Data centers',
              'Utilities & grid',
              'Campus networks'
            ].map((org, index) => (
              <motion.div
                key={org}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-cyan-500/50 transition-all"
              >
                <p className="text-gray-300 text-sm">{org}</p>
              </motion.div>
            ))}
          </div>

          <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 px-8 py-6 text-lg shadow-lg shadow-green-500/30">
            See Security Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
