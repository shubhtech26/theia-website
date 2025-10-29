import { motion } from 'motion/react';
import { Clock, Bell, FileText, Settings, CheckCircle } from 'lucide-react';
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
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl">SLA Enforcement with Theia Fiber</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Prove your performance. Monitor and enforce SLAs with real-time visibility, automated reporting, and built-in accountability.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-white text-2xl mb-8 text-center">Real-Time SLA Management</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: '24/7 Inline Monitoring',
                description: 'Continuous OTDR scans and live GIS mapping provide instant health status across your entire network.'
              },
              {
                icon: Bell,
                title: 'Immediate Alert Response',
                description: 'Get notified the moment degradation or outages occur, with precise location data for faster resolution.'
              },
              {
                icon: FileText,
                title: 'Automated Reporting',
                description: 'Auto-logged events with timestamps, MTTR tracking, and downloadable compliance reports for audit purposes.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#141937] border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Configuration Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#141937] to-[#1e2347] border border-white/10 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-white text-2xl mb-8">Smart SLA Configuration</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-white text-sm">Custom Thresholds</p>
                  <p className="text-gray-400 text-xs">Set specific SLA thresholds for different service levels</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">Active</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white text-sm">Alert Escalation</p>
                  <p className="text-gray-400 text-xs">Automatic alerts and escalation workflows</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">Automated</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white text-sm">Real-Time Compliance</p>
                  <p className="text-gray-400 text-xs">Monitor compliance status across all services</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded">Monitoring</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="text-center">
          <h3 className="text-white text-2xl mb-8">Why SLA Enforcement Matters</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              'Reduce SLA penalties',
              'Build customer trust',
              'Demonstrate accountability',
              'Audit-ready documentation',
              'Boost customer retention',
              'Live network map integration'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <p className="text-gray-300 text-sm">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h4 className="text-white mb-4 text-xl">See It in Action</h4>
            <p className="text-gray-400 mb-6">
              Request a demo to learn how Theia simplifies SLA monitoring and helps you deliver on your commitments.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
