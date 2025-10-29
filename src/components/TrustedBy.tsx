import { motion } from 'motion/react';
import { Building2, Network, Zap, Database, Radio, Globe } from 'lucide-react';

interface Company {
  name: string;
  icon: any;
}

const companies: Company[] = [
  { name: 'MetroFiber', icon: Network },
  { name: 'CityLink', icon: Building2 },
  { name: 'GridWave Utilities', icon: Zap },
  { name: 'CampusNet', icon: Radio },
  { name: 'CoreX Data Centers', icon: Database },
  { name: 'Northshore ISP', icon: Globe }
];

export function TrustedBy() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#0a0e27] via-[#0d1129] to-[#0a0e27] border-y border-white/5">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
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
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4"
          >
            <span className="text-purple-400 text-xs md:text-sm font-medium uppercase tracking-wider">
              Trusted By Industry Leaders
            </span>
          </motion.div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Powering fiber networks for critical infrastructure and enterprise teams
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-[#141937]/60 to-[#1e2347]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/5 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500" />
                  
                  <div className="relative flex flex-col items-center justify-center h-full gap-3">
                    {/* Logo Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/60 transition-all"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-purple-400 transition-colors" strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Company Name */}
                    <h3 className="text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all font-medium text-xs md:text-sm text-center leading-tight">
                      {company.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}

