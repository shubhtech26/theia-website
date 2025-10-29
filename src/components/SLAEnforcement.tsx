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
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Never Miss an SLA Again
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Prove performance, avoid penalties, and build trust with automated SLA tracking
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Clock,
              title: '24/7 Monitoring',
              points: ['Continuous OTDR scans', 'Live network status', 'Instant health checks']
            },
            {
              icon: Bell,
              title: 'Smart Alerts',
              points: ['Real-time notifications', 'Precise fault location', 'Faster response']
            },
            {
              icon: FileText,
              title: 'Auto Reports',
              points: ['Timestamped events', 'MTTR tracking', 'Compliance ready']
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
                className="bg-[#141937] border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-3 text-lg font-semibold">{feature.title}</h4>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Visual SLA Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#141937] to-[#1e2347] border border-purple-500/30 rounded-2xl p-8 mb-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-white text-2xl mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-400" />
              SLA Dashboard
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/30 rounded-lg p-5 border border-green-500/30">
                <div className="text-4xl text-green-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime This Month</div>
              </div>
              <div className="bg-black/30 rounded-lg p-5 border border-cyan-500/30">
                <div className="text-4xl text-cyan-400 mb-2">12min</div>
                <div className="text-gray-400 text-sm">Avg Response Time</div>
              </div>
              <div className="bg-black/30 rounded-lg p-5 border border-purple-500/30">
                <div className="text-4xl text-purple-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">SLA Violations</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-white text-sm font-medium">Custom Thresholds</p>
                  <p className="text-gray-500 text-xs">Set your SLA targets</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">Active</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <Bell className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white text-sm font-medium">Auto Escalation</p>
                  <p className="text-gray-500 text-xs">Smart alert routing</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">On</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <div className="text-center">
          <h3 className="text-white text-2xl mb-8">Why It Matters</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: 'Avoid penalties' },
              { icon: CheckCircle, text: 'Build trust' },
              { icon: FileText, text: 'Audit ready' },
              { icon: TrendingUp, text: 'Improve uptime' },
              { icon: Clock, text: 'Faster response' },
              { icon: Bell, text: 'Stay informed' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                >
                  <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg shadow-lg shadow-purple-500/30">
            See SLA Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
