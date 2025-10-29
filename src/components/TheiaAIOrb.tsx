import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Zap, Lightbulb, Sparkles, Send } from 'lucide-react';

const messages = [
  {
    from: 'ai',
    text: 'Hi! I\'m Theia AI, your fiber network assistant. How can I help?'
  },
  {
    from: 'user',
    text: 'How does OTDR monitoring work?'
  },
  {
    from: 'ai',
    text: 'OTDR continuously analyzes your fiber to detect faults and locate issues instantly. You get 24/7 visibility into network health with real-time alerts.',
    typing: true
  }
];

export function TheiaAIOrb() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timer1 = setTimeout(() => setVisibleMessages(1), 500);
    const timer2 = setTimeout(() => setVisibleMessages(2), 2000);
    const timer3 = setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(3);
      }, 1500);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isInView]);

  return (
    <section ref={ref} id="theia-ai" className="relative py-24 overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Powered by AI</span>
          </motion.div>

          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Meet Theia AI
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your intelligent assistant for fiber network monitoring and analysis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              {
                icon: MessageCircle,
                title: 'Ask Anything',
                description: 'Get instant expert answers about OTDR scans and fiber health',
                color: 'purple'
              },
              {
                icon: Zap,
                title: 'Real-Time Insights',
                description: 'Understand alerts and metrics in plain language',
                color: 'pink'
              },
              {
                icon: Lightbulb,
                title: 'Smart Recommendations',
                description: 'Proactive guidance for maintenance and optimization',
                color: 'cyan'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)' }}
                  className="flex gap-4 bg-[#141937]/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 cursor-pointer group transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color}-600 to-${feature.color}-800 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-${feature.color}-500/50`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-white mb-1 font-semibold">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Try Theia AI Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg shadow-purple-500/30 font-semibold text-center"
            >
              Try Theia AI Now
            </motion.button>
          </motion.div>

          {/* Right side - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glowing orb avatar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 40px rgba(139, 92, 246, 0.5)',
                    '0 0 80px rgba(236, 72, 153, 0.6)',
                    '0 0 40px rgba(139, 92, 246, 0.5)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Outer glow rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.4), transparent)'
                  }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 90deg, transparent, rgba(236, 72, 153, 0.4), transparent)'
                  }}
                />

                {/* Core orb */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Chat Interface */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mt-16 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple-200"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <h4 className="text-white font-semibold">Theia AI</h4>
                    <p className="text-sm text-purple-100">Online</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 h-80 overflow-y-auto">
                {messages.slice(0, visibleMessages).map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={message.from === 'user' ? 'flex justify-end' : 'flex justify-start'}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-3 ${
                        message.from === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-xl px-4 py-3">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input area */}
              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Ask me anything about fiber monitoring..."
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled
                  />
                  <button className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
