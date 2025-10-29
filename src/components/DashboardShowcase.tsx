import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, AlertCircle, Activity, Zap } from 'lucide-react';

export function DashboardShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="dashboard" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-pink-900/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Network Overview Dashboard
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Real-time visibility into your entire fiber network with AI-powered insights and live analytics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Floating callouts */}
          <FloatingCallout
            delay={1}
            position={{ top: '10%', left: '-5%' }}
            icon={Zap}
            title="AI Insights"
            description="Predictive fault detection"
            color="purple"
          />
          <FloatingCallout
            delay={1.3}
            position={{ top: '30%', right: '-5%' }}
            icon={TrendingUp}
            title="Live Network Graphs"
            description="Real-time performance metrics"
            color="cyan"
          />
          <FloatingCallout
            delay={1.6}
            position={{ bottom: '20%', left: '-5%' }}
            icon={AlertCircle}
            title="Smart Alerts"
            description="Instant anomaly detection"
            color="pink"
          />
          <FloatingCallout
            delay={1.9}
            position={{ bottom: '10%', right: '-5%' }}
            icon={Activity}
            title="OTDR Scans"
            description="Continuous fiber monitoring"
            color="green"
          />

          {/* Main Dashboard */}
          <div className="relative bg-[#0f1432]/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Glow effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl"
            />

            {/* Window controls */}
            <div className="relative z-10 flex items-center gap-3 px-6 py-4 border-b border-purple-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-gray-400 text-sm">Theia Fiber Network Dashboard</div>
            </div>

            {/* Dashboard content */}
            <div className="relative z-10 p-8">
              {/* Top stats row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Network Health', value: '98.7%', trend: '+2.3%', color: 'green' },
                  { label: 'Active Spans', value: '247', trend: '+12', color: 'cyan' },
                  { label: 'OTDR Scans', value: '1,429', trend: '+156', color: 'purple' },
                  { label: 'Active Alerts', value: '3', trend: '-5', color: 'pink' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
                    className={`bg-gradient-to-br from-${stat.color}-900/30 to-${stat.color}-800/20 rounded-xl p-4 border border-${stat.color}-500/30 cursor-pointer`}
                  >
                    <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                    <div className={`text-2xl text-${stat.color}-400 mb-1`}>{stat.value}</div>
                    <div className={`text-xs ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.trend}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Main chart area */}
              <div className="grid lg:grid-cols-3 gap-4">
                {/* Large chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.9 }}
                  className="lg:col-span-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-white mb-1">Network Performance</h3>
                      <p className="text-xs text-gray-400">Last 24 hours</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        Latency
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                        Throughput
                      </span>
                    </div>
                  </div>
                  
                  {/* Animated chart */}
                  <div className="h-48 flex items-end gap-1">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 flex flex-col gap-1"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: 'auto' } : { height: 0 }}
                        transition={{ delay: 1 + i * 0.02 }}
                      >
                        <motion.div
                          className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm"
                          animate={{
                            height: [`${30 + Math.random() * 70}%`, `${30 + Math.random() * 70}%`]
                          }}
                          transition={{
                            duration: 2,
                            delay: 1.5 + i * 0.02,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        <motion.div
                          className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-sm"
                          animate={{
                            height: [`${40 + Math.random() * 60}%`, `${40 + Math.random() * 60}%`]
                          }}
                          transition={{
                            duration: 2.5,
                            delay: 1.5 + i * 0.02,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Side panel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 1 }}
                  className="space-y-4"
                >
                  {/* Recent alerts */}
                  <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-xl p-4 border border-pink-500/30">
                    <h4 className="text-white text-sm mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-pink-400" />
                      Recent Alerts
                    </h4>
                    <div className="space-y-2">
                      {[
                        { type: 'warning', text: 'High latency detected', time: '2m ago' },
                        { type: 'info', text: 'Maintenance scheduled', time: '1h ago' },
                        { type: 'resolved', text: 'Span 42 restored', time: '3h ago' }
                      ].map((alert, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-xs"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-1 ${
                            alert.type === 'warning' ? 'bg-yellow-500' :
                            alert.type === 'info' ? 'bg-blue-500' :
                            'bg-green-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-gray-300">{alert.text}</p>
                            <p className="text-gray-500">{alert.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-4 border border-cyan-500/30">
                    <h4 className="text-white text-sm mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      Live Statistics
                    </h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Avg Response Time', value: '12ms' },
                        { label: 'Uptime', value: '99.98%' },
                        { label: 'Data Processed', value: '2.4TB' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 1.4 + i * 0.1 }}
                          className="flex justify-between items-center"
                        >
                          <span className="text-xs text-gray-400">{stat.label}</span>
                          <span className="text-sm text-cyan-400">{stat.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FloatingCalloutProps {
  delay: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  icon: any;
  title: string;
  description: string;
  color: string;
}

function FloatingCallout({ delay, position, icon: Icon, title, description, color }: FloatingCalloutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="absolute z-20 hidden lg:block"
      style={position}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`bg-gradient-to-br from-${color}-600 to-${color}-800 rounded-xl p-4 shadow-lg shadow-${color}-500/30 border border-${color}-400/30 backdrop-blur-sm min-w-[200px]`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h4 className="text-white">{title}</h4>
        </div>
        <p className="text-sm text-white/80">{description}</p>

        {/* Pointer */}
        <div 
          className={`absolute w-4 h-4 bg-gradient-to-br from-${color}-600 to-${color}-800 rotate-45 ${
            position.left ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2' :
            'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
          }`}
        />
      </motion.div>
    </motion.div>
  );
}
