import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Building2, Wifi, HeadphonesIcon, Zap, Shield, Database, CheckCircle, TrendingUp, MapPin } from 'lucide-react';

interface UseCase {
  id: string;
  industry: string;
  icon: any;
  tagline: string;
  scenario: string;
  cause: string;
  solution: string;
  color: string;
}

const useCases: UseCase[] = [
  {
    id: 'datacenter',
    industry: 'Data Center Colocation',
    icon: Database,
    tagline: 'Transform fiber cross-connects into intelligent, monitored infrastructure',
    scenario: 'Enterprises demand low-latency, high-reliability fiber for trading, AI clusters, and replication',
    cause: 'Most cross-connects sold as "dumb pipes" — unmonitored, unverified, zero telemetry',
    solution: 'Per-customer OTDR, real-time monitoring, meter-level fault location, SLA-backed guarantees',
    color: 'cyan'
  },
  {
    id: 'financial',
    industry: 'Financial Services',
    icon: TrendingUp,
    tagline: 'Critical collocated infrastructure with zero tolerance for latency',
    scenario: 'Application slowdowns and latency spikes on high-speed optical links with no visible errors',
    cause: 'Fiber stress, damaged connectors, or passive interference caused subtle signal degradation',
    solution: 'Detects early degradation before alarms trigger. Meter-level accuracy with timestamped GIS reports',
    color: 'green'
  },
  {
    id: 'isp',
    industry: 'Regional ISP',
    icon: Wifi,
    tagline: 'Metro fiber troubleshooting that eliminates unnecessary truck rolls',
    scenario: 'Intermittent packet loss on 10G circuit. No DWDM alarms, power levels within spec',
    cause: '"Dirty fiber" caused subtle degradation below monitoring thresholds, destabilizing signal quality',
    solution: 'Detects irregularities invisible to traditional tools. Precise fault coordinates eliminate wasted dispatch',
    color: 'purple'
  },
  {
    id: 'noc',
    industry: 'NOC Support',
    icon: HeadphonesIcon,
    tagline: 'Prove fiber integrity remotely and avoid costly truck rolls',
    scenario: 'Customer reports timeouts and suspects fiber damage, demanding immediate field investigation',
    cause: 'Fiber was intact. Issues stemmed from upstream equipment or application-layer problems',
    solution: 'NOC reviews live and historical scans instantly. Timestamped traces provide definitive proof',
    color: 'pink'
  },
  {
    id: 'utility',
    industry: 'Utility & Grid',
    icon: Zap,
    tagline: 'SLA assurance for fiber supporting SCADA and smart grid operations',
    scenario: 'Multi-site backbone connecting substations requires NERC compliance and continuous visibility',
    cause: 'Weather stress, contamination, aging splices undermine signal quality in mission-critical links',
    solution: 'Non-intrusive baseline monitoring. Auditable integrity logs for SLA conformance and regulatory docs',
    color: 'orange'
  },
  {
    id: 'government',
    industry: 'Government & Defense',
    icon: Shield,
    tagline: 'Physical-layer security for classified data transport',
    scenario: 'Leased dark fiber traverses third-party infrastructure with no visibility into physical compromise',
    cause: 'Passive optical taps introduce reflectance or insertion loss, indicating unauthorized connections',
    solution: 'Continuous monitoring establishes optical fingerprints. Any deviation triggers targeted OTDR scans',
    color: 'red'
  }
];

export function UseCases() {
  const [selectedCase, setSelectedCase] = useState<string>(useCases[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentCase = useCases.find(c => c.id === selectedCase) || useCases[0];

  return (
    <section ref={ref} id="use-cases" className="relative py-24 bg-gradient-to-b from-[#0a0e27] to-[#141937] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6"
          >
            <span className="text-purple-400 text-xs md:text-sm font-medium uppercase tracking-wider">
              Industry Solutions
            </span>
          </motion.div>

          <h2 className="text-white mb-6 text-4xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Mission-Critical Visibility
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Real-world scenarios where Theia provides critical visibility and rapid problem resolution
          </p>
        </motion.div>

        {/* Industry selector pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isSelected = selectedCase === useCase.id;
            return (
              <motion.button
                key={useCase.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                onClick={() => setSelectedCase(useCase.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all ${
                  isSelected
                    ? `bg-gradient-to-r from-${useCase.color}-600 to-${useCase.color}-800 border-${useCase.color}-500 shadow-lg shadow-${useCase.color}-500/30`
                    : 'bg-white/5 border-white/10 hover:border-purple-500/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-sm md:text-base font-medium ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                  {useCase.industry}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Selected use case details */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Left: Problem & Context */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#141937]/80 to-[#1e2347]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${currentCase.color}-600 to-${currentCase.color}-800 flex items-center justify-center shadow-lg`}>
                  {(() => {
                    const Icon = currentCase.icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">{currentCase.industry}</h3>
                  <p className="text-purple-400 text-sm">{currentCase.tagline}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 text-lg">⚠️</span>
                    </div>
                    <h4 className="text-orange-400 font-semibold">The Scenario</h4>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed pl-10">
                    {currentCase.scenario}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-lg">🔍</span>
                    </div>
                    <h4 className="text-red-400 font-semibold">Root Cause</h4>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed pl-10">
                    {currentCase.cause}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Theia Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-gradient-to-br from-${currentCase.color}-900/20 to-${currentCase.color}-800/10 backdrop-blur-xl border border-${currentCase.color}-500/30 rounded-3xl p-8 relative overflow-hidden`}
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-${currentCase.color}-600/10 rounded-full blur-3xl`} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${currentCase.color}-500/20 flex items-center justify-center`}>
                  <CheckCircle className={`w-7 h-7 text-${currentCase.color}-400`} />
                </div>
                <h4 className="text-white text-2xl font-bold">How Theia Solves This</h4>
              </div>

              <p className={`text-${currentCase.color}-100 text-lg leading-relaxed mb-8`}>
                {currentCase.solution}
              </p>

              {/* Key capabilities */}
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: 'Meter-level fault accuracy' },
                  { icon: TrendingUp, text: 'Real-time continuous monitoring' },
                  { icon: CheckCircle, text: 'Timestamped audit trails' }
                ].map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <motion.div
                      key={capability.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <Icon className={`w-5 h-5 text-${currentCase.color}-400 flex-shrink-0`} />
                      <span className="text-gray-200 text-sm md:text-base">{capability.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              Ready to transform your fiber network?
            </h3>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              From data centers to defense, Theia provides the visibility and control for mission-critical infrastructure
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('demo');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg shadow-purple-500/30 text-lg font-semibold"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

