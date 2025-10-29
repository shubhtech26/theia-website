import { motion } from 'motion/react';
import { Sparkles, Zap, Shield, Activity } from 'lucide-react';

interface AICoreProps {
  currentPhase: number;
}

export function AICore({ currentPhase }: AICoreProps) {
  // Select icon based on phase
  const getPhaseIcon = () => {
    switch (currentPhase) {
      case 0: return Sparkles; // Network appears
      case 1: return Activity; // Detecting
      case 2: return Shield; // Fixing
      case 3: return Zap; // Stable
      default: return Sparkles;
    }
  };

  const Icon = getPhaseIcon();

  // Phase-specific colors
  const getPhaseColors = () => {
    switch (currentPhase) {
      case 0: 
        return {
          primary: 'from-purple-600 via-pink-600 to-cyan-600',
          secondary: 'from-purple-500 to-pink-500',
          glow: 'rgba(139, 92, 246, 0.5)',
          glowStrong: 'rgba(139, 92, 246, 0.8)'
        };
      case 1:
        return {
          primary: 'from-red-600 via-orange-600 to-red-600',
          secondary: 'from-red-500 to-orange-500',
          glow: 'rgba(239, 68, 68, 0.5)',
          glowStrong: 'rgba(239, 68, 68, 0.8)'
        };
      case 2:
        return {
          primary: 'from-yellow-600 via-green-600 to-cyan-600',
          secondary: 'from-green-500 to-cyan-500',
          glow: 'rgba(34, 197, 94, 0.5)',
          glowStrong: 'rgba(34, 197, 94, 0.8)'
        };
      case 3:
        return {
          primary: 'from-cyan-600 via-blue-600 to-purple-600',
          secondary: 'from-cyan-500 to-blue-500',
          glow: 'rgba(6, 182, 212, 0.5)',
          glowStrong: 'rgba(6, 182, 212, 0.8)'
        };
      default:
        return {
          primary: 'from-purple-600 via-pink-600 to-cyan-600',
          secondary: 'from-purple-500 to-pink-500',
          glow: 'rgba(139, 92, 246, 0.5)',
          glowStrong: 'rgba(139, 92, 246, 0.8)'
        };
    }
  };

  const colors = getPhaseColors();

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        {/* Outer rotating ring - slower */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${colors.glow}, transparent)`
          }}
        />

        {/* Middle rotating ring - medium speed */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          style={{
            background: `conic-gradient(from 90deg, transparent, ${colors.glowStrong}, transparent)`
          }}
        />

        {/* Inner rotating ring - fastest */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          style={{
            background: `conic-gradient(from 180deg, transparent, ${colors.glow}, transparent)`
          }}
        />

        {/* Pulsing outer glow */}
        <motion.div
          className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-2xl"
          style={{
            background: colors.glow
          }}
          animate={{
            scale: currentPhase === 1 ? [1, 1.4, 1] : [1, 1.2, 1],
            opacity: currentPhase === 1 ? [0.5, 0.8, 0.5] : [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: currentPhase === 1 ? 1.5 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main orb container */}
        <motion.div
          className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${colors.primary} flex items-center justify-center`}
          animate={{
            scale: currentPhase === 2 ? [1, 1.15, 1] : [1, 1.08, 1],
            boxShadow: [
              `0 0 40px ${colors.glow}`,
              `0 0 80px ${colors.glowStrong}`,
              `0 0 40px ${colors.glow}`
            ]
          }}
          transition={{
            duration: currentPhase === 2 ? 2 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Inner orb with gradient */}
          <motion.div
            className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${colors.secondary} flex items-center justify-center overflow-hidden`}
            animate={{
              scale: currentPhase === 1 ? [1, 1.1, 1] : [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: [-200, 200]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Icon */}
            <motion.div
              key={currentPhase}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Icon className="w-12 h-12 text-white relative z-10" strokeWidth={2} />
            </motion.div>
          </motion.div>

          {/* Energy particles orbiting */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: '50%',
                top: '50%'
              }}
              animate={{
                x: [
                  0,
                  Math.cos((i * Math.PI * 2) / 6) * 70,
                  Math.cos(((i + 0.5) * Math.PI * 2) / 6) * 70,
                  0
                ],
                y: [
                  0,
                  Math.sin((i * Math.PI * 2) / 6) * 70,
                  Math.sin(((i + 0.5) * Math.PI * 2) / 6) * 70,
                  0
                ],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Radar sweep effect for detection phase */}
        {currentPhase === 1 && (
          <motion.div
            className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            style={{
              background: `conic-gradient(from 0deg, transparent 270deg, ${colors.glowStrong} 360deg)`,
              borderRadius: '50%'
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Success ripple effect for fixing phase */}
        {currentPhase === 2 && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full border-2"
                style={{
                  borderColor: colors.glowStrong
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [1, 2.5],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}

        {/* Stable pulse rings for idle phase */}
        {currentPhase === 3 && (
          <motion.div
            className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full border-2"
            style={{
              borderColor: colors.glow
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Data streams (small particles flowing towards center) */}
        {currentPhase === 0 && (
          <>
            {[...Array(12)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 12;
              const startX = Math.cos(angle) * 150;
              const startY = Math.sin(angle) * 150;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                  initial={{ x: startX, y: startY, opacity: 0 }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: [0, 1, 0],
                    scale: [1, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeIn"
                  }}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

