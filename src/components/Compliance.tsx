import { motion } from 'motion/react';
import { Shield, FileCheck, Lock, Eye } from 'lucide-react';

export function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#141937]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Enterprise-Grade Compliance
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built for regulated industries with audit-ready documentation and security standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'SOC 2 Ready',
              description: 'Security controls and audit trails'
            },
            {
              icon: FileCheck,
              title: 'NERC CIP',
              description: 'Critical infrastructure protection'
            },
            {
              icon: Lock,
              title: 'Data Privacy',
              description: 'GDPR and CCPA compliant'
            },
            {
              icon: Eye,
              title: 'Audit Logs',
              description: 'Complete activity tracking'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#141937] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/60 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-2 font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

