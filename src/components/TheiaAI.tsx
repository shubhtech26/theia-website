import { motion } from 'motion/react';
import { MessageCircle, Zap, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function TheiaAI() {
  return (
    <section id="theia-ai" className="py-24 bg-gradient-to-b from-[#1a0f3e] via-[#2d1b69] to-[#1a0f3e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl">Meet Theia AI</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            The AI assistant for your fiber network. Ask anything about your network, uncover real-time insights, and get expert-level guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: MessageCircle,
                title: 'Fiber Intelligence On Demand',
                description: 'Ask any question about OTDR scans or fiber health and get expert answers in seconds.'
              },
              {
                icon: Zap,
                title: 'Live Insights, Explained Simply',
                description: 'Understand alert trends, performance metrics, and network anomalies in plain language, instantly.'
              },
              {
                icon: Lightbulb,
                title: 'Smarter Guidance',
                description: 'Get proactive recommendations for maintenance, optimization and infrastructure decisions.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}

            <Button className="bg-white text-purple-900 hover:bg-gray-100 group">
              Try Theia AI Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right side - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-white">T</span>
                </div>
                <div>
                  <h4 className="text-gray-900">Theia AI</h4>
                  <p className="text-sm text-gray-500">Fiber monitoring expert</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="py-6 space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-700 text-sm mb-3">
                    Hi, I\'m Theia AI — your virtual fiber assistant.
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    I\'m here to help you explore our dark fiber monitoring platform, understand OTDR technology, and protect your network with real-time insights.
                  </p>
                  <p className="text-gray-700 text-sm">
                    What would you like to know?
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#2d1b69] text-white rounded-lg px-4 py-2 max-w-[80%]">
                    <p className="text-sm">How does real-time OTDR monitoring work?</p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    Real-time monitoring continuously analyzes your fiber using OTDR sensors to detect faults, measure loss, and locate issues instantly. Our platform enables 24/7 monitoring, giving you continuous, real-time visibility into your network\'s health.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
