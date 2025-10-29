import React, { useState, useEffect, createElement } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { AlertTriangle, CheckCircle2, Eye, Brain, Shield, Zap, TrendingUp } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  action: string;
  description: string;
  icon: any;
  duration: number;
  color: string;
  bgColor: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Real-Time Monitoring",
    action: "Theia AI is continuously monitoring your fiber network...",
    description: "AI scans OTDR traces across all 247 fiber spans in real-time",
    icon: Eye,
    duration: 4000,
    color: "cyan",
    bgColor: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 2,
    title: "Fault Detection",
    action: "⚠️ Fiber break detected at 12.4km on Span 247!",
    description: "AI instantly identifies the exact fault location using signal analysis",
    icon: AlertTriangle,
    duration: 3500,
    color: "red",
    bgColor: "from-red-500/20 to-orange-500/20"
  },
  {
    id: 3,
    title: "AI Analysis",
    action: "Analyzing root cause and predicting network impact...",
    description: "Machine learning analyzes patterns and recommends automated fixes",
    icon: Brain,
    duration: 3500,
    color: "purple",
    bgColor: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Auto-Recovery",
    action: "✓ Network restored! Rerouting traffic automatically...",
    description: "System self-heals and prevents downtime before users are affected",
    icon: Shield,
    duration: 4000,
    color: "green",
    bgColor: "from-green-500/20 to-emerald-500/20"
  }
];

export function ProductStoryHero() {
  const [currentStep, setCurrentStep] = useState(0);
  const [otdrData, setOtdrData] = useState<number[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate OTDR trace data based on current step
  useEffect(() => {
    const generateOTDRData = () => {
      const points = 50;
      const data: number[] = [];
      for (let i = 0; i < points; i++) {
        let value = 100 - (i * 1.5);
        
        if (currentStep === 1 && i > 25 && i < 30) {
          value -= 45; // Sharp fault
        }
        
        value += (Math.random() - 0.5) * 1.5;
        data.push(Math.max(0, value));
      }
      return data;
    };

    setOtdrData(generateOTDRData());
  }, [currentStep]);

  // Auto-cycle through steps
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const currentStepData = steps[currentStep];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      
      {/* Fixed header content - doesn't blur on scroll */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
        
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
AI-powered fiber monitoring with live OTDR, GIS visualization, and instant fault resolution.        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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
      </div>

      {/* FIXED Animation Container - Prevents blur on scroll */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 will-change-transform">

        {/* Main Product Visualization - FIXED SIZE */}
        <div className="relative bg-[#0f1432]/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden"
          style={{ 
            minHeight: '700px',
            maxHeight: '700px',
            transform: 'translateZ(0)', // Hardware acceleration to prevent blur
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Animated gradient background based on step */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${currentStepData.bgColor} blur-3xl opacity-30`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Top Action Bar - Shows what's happening */}
          <div className="relative z-20 p-6 border-b border-purple-500/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                      currentStep === 1 ? 'from-red-600 to-orange-600' :
                      currentStep === 2 ? 'from-purple-600 to-pink-600' :
                      currentStep === 3 ? 'from-green-600 to-emerald-600' :
                      'from-cyan-600 to-blue-600'
                    } flex items-center justify-center shadow-lg`}
                    animate={{ 
                      rotate: currentStep === 2 ? 360 : 0,
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      rotate: { duration: 2, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    {createElement(currentStepData.icon, { 
                      className: "w-6 h-6 text-white",
                      strokeWidth: 2.5
                    })}
                  </motion.div>
                  
                  <div>
                    <motion.div
                      className="flex items-center gap-2 mb-1"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        currentStep === 1 ? 'bg-red-500' :
                        currentStep === 2 ? 'bg-purple-500' :
                        currentStep === 3 ? 'bg-green-500' :
                        'bg-cyan-500'
                      }`} />
                      <span className="text-gray-400 text-sm uppercase tracking-wider">
                        Step {currentStep + 1} of 4
                      </span>
                    </motion.div>
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                      {currentStepData.action}
                    </h3>
                  </div>
                </div>

                {/* Live indicator */}
                <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
                  <motion.div
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-red-400 text-sm font-medium">LIVE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 p-8 h-[550px]">
            <div className="grid lg:grid-cols-3 gap-6 h-full">
              
              {/* Left: OTDR Visualization */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Fiber Span Visual */}
                <div className="relative">
                  <motion.div
                    className={`relative bg-[#0a0e27] rounded-xl p-6 border-2 transition-all ${
                      currentStep === 1 ? 'border-red-500 shadow-lg shadow-red-500/50' : 'border-cyan-500/30'
                    }`}
                    animate={{
                      borderColor: currentStep === 1 ? '#ef4444' : 'rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    {/* Floating status badge */}
                    <AnimatePresence>
                      {currentStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-30 flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Brain className="w-4 h-4" />
                          </motion.div>
                          <span>AI analyzing and repairing...</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-medium">Fiber Span 247: SF → Oakland</h4>
                      <span className="text-gray-400 text-sm">24.8 km total length</span>
                    </div>

                    {/* Animated fiber line */}
                    <div className="relative h-20 bg-black/50 rounded-lg mb-4 overflow-hidden">
                      {/* Fiber line */}
                      <motion.div 
                        className={`absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 ${
                          currentStep === 1 ? 'bg-gradient-to-r from-cyan-500 via-red-500 to-pink-500' :
                          currentStep === 2 ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500' :
                          currentStep === 3 ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500' :
                          'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500'
                        }`}
                        animate={{
                          boxShadow: currentStep === 1 
                            ? ['0 0 10px #ef4444', '0 0 30px #ef4444', '0 0 10px #ef4444']
                            : currentStep === 2
                            ? ['0 0 10px #eab308', '0 0 30px #eab308', '0 0 10px #eab308']
                            : ['0 0 10px #06b6d4', '0 0 20px #06b6d4', '0 0 10px #06b6d4']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Light pulse */}
                      {(currentStep === 0 || currentStep === 3) && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400 rounded-full blur-md"
                          animate={{ left: ['0%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      {/* Fault marker */}
                      {currentStep === 1 && (
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        >
                          <div className="relative">
                            <AlertTriangle className="w-8 h-8 text-red-500" fill="currentColor" />
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-red-500"
                              animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Recovery indicator */}
                      {currentStep === 2 && (
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Brain className="w-8 h-8 text-yellow-500" />
                        </motion.div>
                      )}

                      {/* Distance markers */}
                      <div className="absolute bottom-1 left-0 right-0 flex justify-between px-2 text-xs text-gray-500">
                        <span>0km</span>
                        <motion.span
                          className={currentStep === 1 || currentStep === 2 ? 'text-red-400 font-bold' : ''}
                          animate={currentStep === 1 ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          12.4km {(currentStep === 1 || currentStep === 2) && '⚠️'}
                        </motion.span>
                        <span>24.8km</span>
                      </div>
                    </div>

                    {/* OTDR Graph */}
                    <div className="bg-black/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">OTDR Signal Trace</span>
                        <span className={`text-sm font-medium ${
                          currentStep === 1 ? 'text-red-400' :
                          currentStep === 2 ? 'text-yellow-400' :
                          currentStep === 3 ? 'text-green-400' :
                          'text-cyan-400'
                        }`}>
                          {currentStep === 1 ? 'FAULT DETECTED' :
                           currentStep === 2 ? 'ANALYZING...' :
                           currentStep === 3 ? 'RESTORED' :
                           'NORMAL'}
                        </span>
                      </div>
                      
                      <svg className="w-full h-32" viewBox="0 0 500 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="trace-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={
                              currentStep === 1 ? "#ef4444" : 
                              currentStep === 2 ? "#eab308" :
                              currentStep === 3 ? "#10b981" : 
                              "#06b6d4"
                            } stopOpacity="0.5" />
                            <stop offset="100%" stopColor={
                              currentStep === 1 ? "#ef4444" : 
                              currentStep === 2 ? "#eab308" :
                              currentStep === 3 ? "#10b981" : 
                              "#06b6d4"
                            } stopOpacity="0.1" />
                          </linearGradient>
                        </defs>

                        {/* Grid */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <line
                            key={i}
                            x1="0"
                            y1={i * 30}
                            x2="500"
                            y2={i * 30}
                            stroke="rgba(139, 92, 246, 0.1)"
                            strokeWidth="1"
                          />
                        ))}

                        {/* Trace line */}
                        <motion.path
                          d={`M 0,${120 - otdrData[0]} ${otdrData.map((point, i) => 
                            `L ${(i / otdrData.length) * 500},${120 - point}`
                          ).join(' ')}`}
                          fill="url(#trace-grad)"
                          stroke={
                            currentStep === 1 ? "#ef4444" : 
                            currentStep === 2 ? "#eab308" :
                            currentStep === 3 ? "#10b981" : 
                            "#06b6d4"
                          }
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5 }}
                        />

                        {/* Fault point marker */}
                        {(currentStep === 1 || currentStep === 2) && (
                          <motion.circle
                            cx="260"
                            cy={120 - (otdrData[26] || 50)}
                            r="5"
                            fill={currentStep === 1 ? "#ef4444" : "#eab308"}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    className="bg-[#0a0e27] rounded-lg p-4 border border-cyan-500/30"
                    animate={{
                      borderColor: currentStep === 0 ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    <div className="text-3xl text-cyan-400 mb-1">99.9%</div>
                    <div className="text-gray-400 text-xs">Uptime</div>
                  </motion.div>

                  <motion.div
                    className="bg-[#0a0e27] rounded-lg p-4 border"
                    animate={{
                      borderColor: currentStep === 1 ? 'rgba(239, 68, 68, 0.8)' : 'rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    <div className={`text-3xl mb-1 ${currentStep === 1 || currentStep === 2 ? 'text-red-400' : 'text-purple-400'}`}>
                      {currentStep === 1 || currentStep === 2 ? '12.4km' : '—'}
                    </div>
                    <div className="text-gray-400 text-xs">Fault Location</div>
                  </motion.div>

                  <motion.div
                    className="bg-[#0a0e27] rounded-lg p-4 border border-pink-500/30"
                    animate={{
                      borderColor: currentStep === 3 ? 'rgba(16, 185, 129, 0.8)' : 'rgba(236, 72, 153, 0.3)'
                    }}
                  >
                    <div className={`text-3xl mb-1 ${currentStep === 3 ? 'text-green-400' : 'text-pink-400'}`}>
                      &lt;1ms
                    </div>
                    <div className="text-gray-400 text-xs">Response</div>
                  </motion.div>
                </div>
              </div>

              {/* Right: Status & Description */}
              <div className="space-y-6">
                
                {/* Current Step Description */}
                <motion.div
                  className={`bg-gradient-to-br ${currentStepData.bgColor} rounded-xl p-6 border-2 ${
                    currentStep === 1 ? 'border-red-500/50' :
                    currentStep === 2 ? 'border-purple-500/50' :
                    currentStep === 3 ? 'border-green-500/50' :
                    'border-cyan-500/50'
                  }`}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(139, 92, 246, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.5)',
                      '0 0 20px rgba(139, 92, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      currentStep === 1 ? 'from-red-600 to-orange-600' :
                      currentStep === 2 ? 'from-purple-600 to-pink-600' :
                      currentStep === 3 ? 'from-green-600 to-emerald-600' :
                      'from-cyan-600 to-blue-600'
                    } flex items-center justify-center flex-shrink-0`}>
                      {createElement(currentStepData.icon, { 
                        className: "w-6 h-6 text-white"
                      })}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {currentStepData.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {currentStepData.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar for current step */}
                  <div className="relative h-2 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute inset-y-0 left-0 ${
                        currentStep === 1 ? 'bg-red-500' :
                        currentStep === 2 ? 'bg-purple-500' :
                        currentStep === 3 ? 'bg-green-500' :
                        'bg-cyan-500'
                      } rounded-full`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: steps[currentStep].duration / 1000, ease: "linear" }}
                    />
                  </div>
                </motion.div>

                {/* AI Status */}
                <div className="bg-[#0a0e27] rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center"
                      animate={{ rotate: currentStep === 2 ? 360 : 0 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium">Theia AI</h4>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={currentStep}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-gray-400"
                        >
                          {currentStep === 0 && "Monitoring all spans..."}
                          {currentStep === 1 && "Fault detected! Analyzing..."}
                          {currentStep === 2 && "Repairing and rerouting..."}
                          {currentStep === 3 && "Network stable ✓"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Mini activity log */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      <span>Scanning 247 fiber spans</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      <span>1,429 OTDR scans completed</span>
                    </div>
                    <AnimatePresence>
                      {currentStep >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-red-400"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                          <span>Alert: Span 247 fault detected</span>
                        </motion.div>
                      )}
                      {currentStep >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-green-400"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span>Recovery complete</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* What's Next indicator */}
                {currentStep < 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4"
                  >
                    <p className="text-purple-300 text-sm flex items-center gap-2">
                      <span className="text-lg">→</span>
                      <span>Next: {steps[currentStep + 1].title}</span>
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
