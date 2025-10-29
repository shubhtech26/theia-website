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

  const borderColorClasses = {
    cyan: 'group-hover:border-cyan-500/50',
    purple: 'group-hover:border-purple-500/50',
    pink: 'group-hover:border-pink-500/50',
    green: 'group-hover:border-green-500/50',
    orange: 'group-hover:border-orange-500/50'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.2 }
      }}
      className={`group relative bg-gradient-to-br from-[#141937]/80 to-[#1e2347]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all ${borderColorClasses[metric.color as keyof typeof borderColorClasses]} ${glowClasses[metric.color as keyof typeof glowClasses]}`}
    >
      {/* Gradient glow effect on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 shadow-lg ${glowClasses[metric.color as keyof typeof glowClasses]}`}
        >
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
        </motion.div>

        {/* Value */}
        <div className={`text-5xl md:text-6xl font-bold ${textColorClasses[metric.color as keyof typeof textColorClasses]} mb-4 tracking-tight`}>
          <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
        </div>

        {/* Label */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          {metric.label}
        </p>
      </div>

      {/* Animated corner accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} opacity-0 transition-opacity duration-300`}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)', filter: 'blur(20px)' }}
      />
    </motion.div>
  );
}

export function KPIMetrics() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27] overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-xs md:text-sm font-medium uppercase tracking-wider">
              Proven Performance
            </span>
          </motion.div>
          
          <h2 className="text-white mb-6 text-4xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Numbers That Matter
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Real outcomes, measured in production and pilot deployments
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-gray-400 text-xs md:text-sm">
              Cohort metrics from production and pilot deployments
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

