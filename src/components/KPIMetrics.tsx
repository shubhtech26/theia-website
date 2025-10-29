import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { CheckCircle, MapPin, Zap, Clock, TrendingDown, Award } from 'lucide-react';

interface Metric {
  icon: any;
  value: string;
  label: string;
  suffix?: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: CheckCircle,
    value: '99.9',
    suffix: '%',
    label: 'Uptime verified service availability',
    color: 'cyan'
  },
  {
    icon: MapPin,
    value: '±2',
    suffix: 'm',
    label: 'Fault Accuracy GIS-precise location',
    color: 'purple'
  },
  {
    icon: Zap,
    value: '<1',
    suffix: 's',
    label: 'Alerting from detection to notification',
    color: 'pink'
  },
  {
    icon: Clock,
    value: '43',
    suffix: '%',
    label: 'MTTR Reduction faster mean time to repair',
    color: 'green'
  },
  {
    icon: TrendingDown,
    value: '28',
    suffix: '%',
    label: 'Fewer Truck Rolls reduced site visits',
    color: 'orange'
  },
  {
    icon: Award,
    value: '99.95',
    suffix: '%',
    label: 'SLA Compliance based on 90-day cohorts',
    color: 'cyan'
  }
];

function AnimatedCounter({ value, suffix, inView }: { value: string; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const hasLessThan = value.includes('<');
  const hasPlusMinus = value.includes('±');

  useEffect(() => {
    if (!inView) return;

    const duration = 1200;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  const displayValue = count === numericValue 
    ? value.replace(/[0-9.]+/, count.toFixed(value.includes('.') ? 1 : 0))
    : count.toFixed(value.includes('.') ? 1 : 0);

  return (
    <span>
      {hasLessThan && '<'}
      {hasPlusMinus && '±'}
      {displayValue.replace(/[^0-9.]/g, '')}
      {suffix}
    </span>
  );
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = metric.icon;

  const colorClasses = {
    cyan: 'from-cyan-600 to-cyan-800',
    purple: 'from-purple-600 to-purple-800',
    pink: 'from-pink-600 to-pink-800',
    green: 'from-green-600 to-green-800',
    orange: 'from-orange-600 to-orange-800'
  };

  const textColorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    green: 'text-green-400',
    orange: 'text-orange-400'
  };

  const glowClasses = {
    cyan: 'group-hover:shadow-cyan-500/50',
    purple: 'group-hover:shadow-purple-500/50',
    pink: 'group-hover:shadow-pink-500/50',
    green: 'group-hover:shadow-green-500/50',
    orange: 'group-hover:shadow-orange-500/50'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
        transition: { duration: 0.2 }
      }}
      className={`group relative bg-[#141937]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-${metric.color}-500/50 transition-all ${glowClasses[metric.color as keyof typeof glowClasses]}`}
    >
      {/* Gradient glow effect on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>

        {/* Value */}
        <div className={`text-4xl md:text-5xl font-bold ${textColorClasses[metric.color as keyof typeof textColorClasses]} mb-3 tracking-tight`}>
          <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
        </div>

        {/* Label */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {metric.label}
        </p>
      </div>

      {/* Corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
    </motion.div>
  );
}

export function KPIMetrics() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#141937]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Numbers That Matter
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real outcomes, measured in production and pilot deployments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs md:text-sm"
        >
          Cohort metrics from production and pilot deployments
        </motion.p>
      </div>
    </section>
  );
}

