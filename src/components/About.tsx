import { motion } from 'motion/react';
import { Target, Users, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">
              Born from Optical Experts, Built for Operators
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Theia was founded by veterans of the fiber optics industry who saw firsthand how outdated monitoring tools were holding networks back. We knew there had to be a better way.
            </p>
            <p className="text-gray-600 mb-6">
              Our team combines decades of optical engineering expertise with cutting-edge AI and cloud architecture. We\'re not just building software—we\'re reimagining what fiber infrastructure can be.
            </p>
            <p className="text-gray-600">
              Today, Theia is trusted by operators, data centers, and municipalities who refuse to accept the status quo. Together, we\'re building the next generation of fiber intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'Make every fiber visible, intelligent, and reliable. Transform passive infrastructure into an active, learning system.',
              },
              {
                icon: Users,
                title: 'Our Team',
                description: 'Optical engineers, AI researchers, and cloud architects united by a vision of smarter networks.',
              },
              {
                icon: Lightbulb,
                title: 'Our Innovation',
                description: 'Combining hardware innovation with cloud-scale AI to solve problems that have plagued fiber networks for decades.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Partners section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-6">Growing Together</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We believe in the power of collaboration. Our partner ecosystem includes industry leaders, technology innovators, and channel partners who share our vision of intelligent fiber networks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Partner {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
