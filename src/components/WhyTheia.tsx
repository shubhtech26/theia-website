import { motion } from 'motion/react';
import { Sparkles, Zap, Repeat } from 'lucide-react';

const differentiators = [
  {
    icon: Sparkles,
    title: 'AI-Driven Insight',
    description: 'Not just data. Intelligence. Our platform transforms raw network signals into actionable insights that help you stay ahead.',
  },
  {
    icon: Zap,
    title: 'Simple Deployment',
    description: 'Enterprise-grade monitoring without the enterprise complexity. Deploy quickly, scale effortlessly, and start seeing value immediately.',
  },
  {
    icon: Repeat,
    title: 'Continuous Evolution',
    description: 'Every network Theia monitors makes it smarter. Your investment grows more valuable over time as our AI learns and improves.',
  },
];

export function WhyTheia() {
  return (
    <section id="why-theia" className="py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Why Theia is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For 40 years, fiber monitoring hasn\'t evolved. We\'re changing that with a platform built for the modern network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* The Promise Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-12 md:p-16 text-white text-center overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="mb-6 text-white">
              Predict. Detect. Prevent.
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Traditional monitoring is reactive. Theia is proactive. We help you see problems before they happen, detect threats in real-time, and prevent costly downtime.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl mb-2">40+</div>
                <div className="text-blue-200">Years of Fiber History</div>
              </div>
              <div>
                <div className="text-4xl mb-2">100%</div>
                <div className="text-blue-200">Network Visibility</div>
              </div>
              <div>
                <div className="text-4xl mb-2">Real-Time</div>
                <div className="text-blue-200">Fault Detection</div>
              </div>
            </div>
          </div>

          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {[...Array(20)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={Math.random() * 800}
                  cy={Math.random() * 400}
                  r="2"
                  fill="white"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
