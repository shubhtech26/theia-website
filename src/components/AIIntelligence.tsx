import { motion } from 'motion/react';
import { Brain, Gauge, TrendingUp } from 'lucide-react';

export function AIIntelligence() {
  return (
    <section id="ai" className="py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">
              AI That Learns From Every Network
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Theia\'s intelligence doesn\'t just monitor. It understands. Our AI interprets fiber events in real-time, learning patterns and behaviors to deliver insights you can trust.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: 'Continuous Learning',
                  description: 'Every network teaches Theia something new, making predictions more accurate over time.',
                },
                {
                  icon: Gauge,
                  title: 'Instant Detection',
                  description: 'Identify anomalies and threats the moment they occur, with millisecond precision.',
                },
                {
                  icon: TrendingUp,
                  title: 'Predictive Insights',
                  description: 'Know what will happen before it does. Move from reactive to proactive operations.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="text-sm text-gray-500">Network Health Score</span>
                  <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">98.7%</span>
                </div>
                
                {['Fiber Integrity', 'Signal Quality', 'Latency', 'Event Detection'].map((metric, i) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">{metric}</span>
                      <span className="text-gray-500">{95 + i}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${95 + i}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t mt-6">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>3 potential issues predicted and prevented this week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
