import { motion } from 'motion/react';
import { Shield, AlertTriangle, Target, Map } from 'lucide-react';
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
          <h2 className="text-white mb-6 text-4xl">Fiber Tap Detection</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Defend your network at the physical layer. While traditional monitoring focuses on uptime, fiber tapping bypasses those tools entirely—Theia sees what others miss.
          </p>
        </motion.div>

        {/* The Hidden Threat */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-600/10 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <h3 className="text-white text-2xl">The Hidden Threat</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Fiber optic networks carry critical data, but they\'re often blind to physical threats. Fiber tapping intercepts light at the source—completely invisible to traditional NOC tools.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-2">What is a Fiber Tap?</h4>
                  <p className="text-gray-400 text-sm">
                    Physical interception using microbends, couplers, or splices that allows data access while keeping signals flowing undetected.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-red-400 mb-2 text-sm">Passive Threats</h5>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Microbend taps</li>
                      <li>• In-line optical splitters</li>
                      <li>• Reflection-based taps</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-orange-400 mb-2 text-sm">Active Threats</h5>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Unauthorized splices</li>
                      <li>• Hidden tail fibers</li>
                      <li>• Maintenance access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#1e2347] to-[#2d3561] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h3 className="text-white text-2xl">How Theia Detects Intrusions</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: 'Baseline Profiling',
                    description: 'Continuous OTDR scanning establishes signal fingerprints for every span in your network.'
                  },
                  {
                    icon: AlertTriangle,
                    title: 'Anomaly Detection',
                    description: 'AI engines detect changes in reflectance, loss patterns, and unexpected optical signatures.'
                  },
                  {
                    icon: Map,
                    title: 'Precise Location',
                    description: 'Pinpoint threats within ±2 meters using GIS mapping and optical distance calculations.'
                  }
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detection Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-white text-2xl mb-8 text-center">Beyond Full Taps: Detecting Unauthorized Access</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Physical Handling',
                items: ['Patch cord movements', 'Splice tray access', 'Fiber slack manipulation', 'Test equipment connections']
              },
              {
                title: 'Construction Risks',
                items: ['Nearby construction activity', 'Accidental contact events', 'Environmental pressures', 'Unscheduled maintenance']
              },
              {
                title: 'Optical Fingerprints',
                items: ['Backscatter changes', 'Reflection anomalies', 'Loss pattern shifts', 'Power level variations']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#141937] border border-white/10 rounded-xl p-6"
              >
                <h4 className="text-white mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1e2347] to-[#2d3561] border border-white/10 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-white text-2xl mb-4">Real-Time Protection Dashboard</h3>
          <p className="text-gray-300 mb-6">
            All security alerts are instantly mapped on Theia\'s live GIS dashboard, giving you precise location data and historical context for every threat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '±2 meter precision', color: 'cyan' },
              { label: 'Maintenance correlation', color: 'purple' },
              { label: 'Instant field dispatch', color: 'green' },
              { label: 'Audit documentation', color: 'pink' }
            ].map((feature) => (
              <div key={feature.label} className="bg-white/5 rounded-lg p-4 text-center">
                <p className={`text-${feature.color}-400 text-sm`}>{feature.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who Needs */}
        <div className="text-center">
          <h3 className="text-white text-2xl mb-4">Who Needs Fiber Security?</h3>
          <p className="text-gray-400 mb-6">Organizations operating or leasing dark fiber infrastructure:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {[
              'Municipal broadband networks',
              'Data center cross-connects',
              'Utilities and grid operators',
              'Campus backbone links'
            ].map((org) => (
              <div key={org} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-gray-300 text-sm">{org}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-white mb-4 text-xl">Protect Your Infrastructure</h4>
            <p className="text-gray-400 mb-6">
              See how Theia\'s fiber tap detection can secure your network against physical-layer threats.
            </p>
            <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700">
              Request Security Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
