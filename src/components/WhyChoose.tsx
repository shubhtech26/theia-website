import { motion } from 'motion/react';
import { Activity, Map, Cloud, Bell, BarChart3, Shield } from 'lucide-react';

export function WhyChoose() {
  const features = [
    {
      icon: Activity,
      title: 'Real-Time OTDR',
      description: 'Detect fiber faults as they happen with continuous OTDR scanning and precise fault localization no manual scans needed'
    },
    {
      icon: Map,
      title: 'GIS Visualization',
      description: 'Instantly see your network\'s health on interactive maps that display fiber routes, real-time status, and topologies'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native SaaS',
      description: 'Scales with your infrastructure, multi-tenant, always-on, and designed to integrate with your existing systems'
    },
    {
      icon: Bell,
      title: 'Intelligent Alerting',
      description: 'Get the right alerts, at the right time. Automated incident detection delivers actionable notifications via email, webhooks, and third-party tools'
    },
    {
      icon: BarChart3,
      title: 'Historical Analytics',
      description: 'Track performance trends, verify SLAs, and uncover root causes with time-stamped OTDR event history and reporting'
    },
    {
      icon: Shield,
      title: 'Autonomous Monitoring',
      description: 'Stay protected 24/7 with always-on scanning and smart detection'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl">Why Choose Theia Fiber Monitoring?</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Gain full visibility and control over your dark fiber network with real-time OTDR, live GIS mapping, and intelligent alerts so you can detect faults faster, reduce downtime, and stay ahead of issues.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#141937] to-[#1e2347] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
