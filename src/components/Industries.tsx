import { motion } from 'motion/react';
import { Building2, Radio, Server, Heart } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Municipal Networks',
    description: 'Keep communities connected with intelligent monitoring that prevents service disruptions and optimizes infrastructure investment.',
  },
  {
    icon: Radio,
    title: 'Service Providers',
    description: 'Deliver superior uptime and customer experience with proactive network management and rapid fault isolation.',
  },
  {
    icon: Server,
    title: 'Data Centers & Hyperscalers',
    description: 'Ensure mission-critical connectivity with real-time visibility into every fiber path and instant anomaly detection.',
  },
  {
    icon: Heart,
    title: 'Healthcare & Campuses',
    description: 'Maintain reliable connectivity for critical operations with predictive monitoring and comprehensive network visibility.',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Built for the Networks That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From municipal infrastructure to hyperscale data centers, Theia brings intelligence to the networks that power our connected world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-500 group-hover:to-purple-600 flex items-center justify-center mb-4 transition-all">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="mb-3">{industry.title}</h4>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
