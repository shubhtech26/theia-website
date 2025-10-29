import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { useRef, useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Activity, MapPin, Zap } from 'lucide-react';

interface Alert {
  id: number;
  type: 'fault' | 'warning' | 'resolved';
  message: string;
  location: string;
  time: string;
}

export function FiberMonitoringHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeAlert, setActiveAlert] = useState(0);
  const [otdrData, setOtdrData] = useState<number[]>([]);
  const [faultDetected, setFaultDetected] = useState(false);

  const alerts: Alert[] = [
    { id: 1, type: 'warning', message: 'Signal degradation detected', location: 'Span 247 - 12.4km', time: '2s ago' },
    { id: 2, type: 'fault', message: 'Fiber break detected', location: 'Span 247 - 12.4km', time: 'now' },
    { id: 3, type: 'resolved', message: 'Issue resolved - Network stable', location: 'Span 247 - 12.4km', time: '1s ago' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulate OTDR trace data
  useEffect(() => {
    const generateOTDRData = () => {
      const points = 50;
      const data: number[] = [];
      for (let i = 0; i < points; i++) {
        let value = 100 - (i * 1.5); // Normal attenuation
        
        // Add fault at specific point (phase 2)
        if (activeAlert === 1 && i > 25 && i < 30) {
          value -= 40; // Sharp drop indicating fault
        }
        
        // Add noise
        value += (Math.random() - 0.5) * 2;
        data.push(Math.max(0, value));
      }
      return data;
    };

    setOtdrData(generateOTDRData());
    setFaultDetected(activeAlert === 1);
  }, [activeAlert]);

  // Cycle through alert phases
  useEffect(() => {
    const durations = [4000, 3000, 3000]; // Duration for each alert
    const timer = setTimeout(() => {
      setActiveAlert((prev) => (prev + 1) % alerts.length);
    }, durations[activeAlert]);

    return () => clearTimeout(timer);
  }, [activeAlert, alerts.length]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4"
            style={{
              textShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
            }}
          >
            Detect. Predict. Prevent.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12 text-gray-300 text-xl md:text-2xl text-center"
        >
          AI-powered monitoring for dark fiber networks. Real-time fault detection, predictive analysis, and autonomous protection.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('demo')}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-lg shadow-purple-500/50"
            >
              Get a Demo
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('demo')}
              size="lg" 
              variant="outline"
              className="border-2 border-purple-500/50 bg-transparent text-white hover:bg-purple-500/20 px-10 py-6 text-lg backdrop-blur-sm"
            >
              Login to Platform
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Product Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 blur-3xl -z-10" />
          
          {/* Main container */}
          <div className="relative bg-[#0f1432]/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
            
            {/* Header with live indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-gray-300 text-sm md:text-base">Live Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-sm">
                <Activity className="w-4 h-4" />
                <span>247 Spans Active</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Left: OTDR Trace Visualization */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* Fiber Span Visual */}
                <div className="bg-[#141937]/60 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-lg">Fiber Span 247</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco → Oakland</span>
                    </div>
                  </div>

                  {/* Animated fiber line with pulse */}
                  <div className="relative h-24 bg-[#0a0e27] rounded-lg mb-4 overflow-hidden border border-cyan-500/20">
                    {/* Fiber line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50" />
                    
                    {/* Light pulse traveling */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
                      animate={{
                        left: ['0%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Fault location marker */}
                    <AnimatePresence>
                      {faultDetected && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center"
                          >
                            <AlertTriangle className="w-4 h-4 text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Distance markers */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                      <span>0 km</span>
                      <span>6.2 km</span>
                      <span>12.4 km</span>
                      <span>18.6 km</span>
                      <span>24.8 km</span>
                    </div>
                  </div>

                  {/* OTDR Trace Graph */}
                  <div className="bg-[#0a0e27] rounded-lg p-4 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">OTDR Trace</span>
                      <div className="flex gap-3 text-xs">
                        <span className="text-cyan-400">Loss: 0.24 dB/km</span>
                        <span className={faultDetected ? "text-red-400" : "text-green-400"}>
                          {faultDetected ? "Fault: 12.4km" : "Status: Normal"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Graph */}
                    <svg className="w-full h-40" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                        </linearGradient>
                        {faultDetected && (
                          <linearGradient id="fault-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                          </linearGradient>
                        )}
                      </defs>

                      {/* Grid lines */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          y1={i * 37.5}
                          x2="500"
                          y2={i * 37.5}
                          stroke="rgba(139, 92, 246, 0.1)"
                          strokeWidth="1"
                        />
                      ))}

                      {/* OTDR trace line */}
                      <motion.path
                        d={`M 0,${150 - otdrData[0]} ${otdrData.map((point, i) => `L ${(i / otdrData.length) * 500},${150 - point}`).join(' ')}`}
                        fill="url(#trace-gradient)"
                        stroke={faultDetected ? "#ef4444" : "#06b6d4"}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />

                      {/* Fault marker on graph */}
                      {faultDetected && (
                        <motion.circle
                          cx="260"
                          cy={150 - (otdrData[26] || 50)}
                          r="4"
                          fill="#ef4444"
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </svg>
                  </div>
                </div>

                {/* Real-time metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    animate={{ 
                      borderColor: faultDetected ? 'rgba(239, 68, 68, 0.5)' : 'rgba(139, 92, 246, 0.2)'
                    }}
                    className="bg-[#141937]/60 rounded-lg p-4 border transition-colors"
                  >
                    <div className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-gray-400 text-xs">Network Uptime</div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      borderColor: faultDetected ? 'rgba(239, 68, 68, 0.5)' : 'rgba(139, 92, 246, 0.2)'
                    }}
                    className="bg-[#141937]/60 rounded-lg p-4 border transition-colors"
                  >
                    <div className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-1">
                      {faultDetected ? '12.4' : '0'} km
                    </div>
                    <div className="text-gray-400 text-xs">Fault Distance</div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      borderColor: faultDetected ? 'rgba(239, 68, 68, 0.5)' : 'rgba(139, 92, 246, 0.2)'
                    }}
                    className="bg-[#141937]/60 rounded-lg p-4 border transition-colors"
                  >
                    <div className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600 mb-1">
                      &lt;1ms
                    </div>
                    <div className="text-gray-400 text-xs">Response Time</div>
                  </motion.div>
                </div>
              </div>

              {/* Right: Live Alerts & Map Preview */}
              <div className="space-y-4">
                
                {/* Live Alerts */}
                <div className="bg-[#141937]/60 rounded-xl p-5 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-white">Live Alerts</h3>
                  </div>

                  <div className="space-y-3 max-h-64 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeAlert}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-lg border ${
                          alerts[activeAlert].type === 'fault' 
                            ? 'bg-red-500/10 border-red-500/50' 
                            : alerts[activeAlert].type === 'warning'
                            ? 'bg-yellow-500/10 border-yellow-500/50'
                            : 'bg-green-500/10 border-green-500/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {alerts[activeAlert].type === 'resolved' ? (
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              alerts[activeAlert].type === 'fault' ? 'text-red-400' : 'text-yellow-400'
                            }`} />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm mb-1">{alerts[activeAlert].message}</p>
                            <p className="text-gray-400 text-xs mb-1">{alerts[activeAlert].location}</p>
                            <p className="text-gray-500 text-xs">{alerts[activeAlert].time}</p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* GIS Map Preview */}
                <div className="bg-[#141937]/60 rounded-xl p-5 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white text-sm">Network Map</h3>
                  </div>

                  {/* Simplified map visualization */}
                  <div className="relative h-40 bg-[#0a0e27] rounded-lg overflow-hidden border border-cyan-500/20">
                    {/* Map grid */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />

                    {/* Fiber routes */}
                    <svg className="absolute inset-0 w-full h-full">
                      <motion.path
                        d="M 20,100 Q 80,60 140,100"
                        stroke="url(#fiber-gradient)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                      <motion.path
                        d="M 140,100 L 220,80"
                        stroke={faultDetected ? "#ef4444" : "url(#fiber-gradient)"}
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />

                      <defs>
                        <linearGradient id="fiber-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>

                      {/* Network nodes */}
                      <circle cx="20" cy="100" r="5" fill="#06b6d4" />
                      <circle cx="140" cy="100" r="5" fill="#8b5cf6" />
                      <circle cx="220" cy="80" r="5" fill={faultDetected ? "#ef4444" : "#ec4899"} />

                      {/* Fault marker on map */}
                      {faultDetected && (
                        <motion.circle
                          cx="180"
                          cy="90"
                          r="8"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </svg>
                  </div>
                </div>

                {/* AI Status Indicator */}
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center"
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-white text-sm font-medium">Theia AI Active</p>
                      <p className="text-gray-400 text-xs">
                        {activeAlert === 0 && "Monitoring network..."}
                        {activeAlert === 1 && "Analyzing fault..."}
                        {activeAlert === 2 && "Network restored"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

