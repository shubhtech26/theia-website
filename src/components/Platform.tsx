import { motion } from 'motion/react';
import { Eye, MapPin, Activity, Shield } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Real-Time Visibility',
    description: 'See what\'s happening inside your network at every meter of fiber, with instant alerts and comprehensive dashboards.',
  },
  {
    icon: MapPin,
    title: 'GIS Integration',
    description: 'Visualize your entire network infrastructure on interactive maps, with precise geolocation of every event and asset.',
  },
  {
    icon: Activity,
    title: 'Predictive Analytics',
    description: 'Our AI learns from every network, identifying patterns and predicting faults before they become outages.',
  },
  {
    icon: Shield,
    title: 'Proactive Protection',
    description: 'Move from reactive troubleshooting to proactive prevention. Keep your network running at peak performance.',
  },
];

export function Platform() {
  return (
    <section id="platform" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            One Platform. Complete Intelligence.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Theia brings together smart sensors, AI, and cloud-based analytics to deliver unprecedented visibility across every span of fiber.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Visual representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-blue-900 p-12 text-white overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="mb-4 text-white">From Enterprise to Mid-Mile to Data Center</h3>
            <p className="text-blue-100 max-w-2xl">
              Every meter of fiber becomes a source of intelligence. Monitor, analyze, and optimize across your entire network infrastructure.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 300">
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={50 + i * 50}
                  cy={150}
                  r="4"
                  fill="#60A5FA"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
              {[...Array(7)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={50 + i * 50}
                  y1={150}
                  x2={100 + i * 50}
                  y2={150}
                  stroke="#60A5FA"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
