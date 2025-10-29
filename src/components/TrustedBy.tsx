import { motion } from 'motion/react';

const companies = [
  'MetroFiber',
  'CityLink',
  'GridWave Utilities',
  'CampusNet',
  'CoreX Data Centers',
  'Northshore ISP'
];

export function TrustedBy() {
  return (
    <section className="py-12 md:py-16 bg-[#0a0e27] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Trusted by leading fiber operators and critical infrastructure teams
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -2,
                opacity: 1,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="relative px-6 py-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm transition-all group-hover:border-purple-500/50 group-hover:bg-white/10">
                <h3 className="text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all font-medium text-sm md:text-base whitespace-nowrap">
                  {company}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500 text-xs"
        >
          Names represent customers and pilot partners
        </motion.p>
      </div>
    </section>
  );
}

