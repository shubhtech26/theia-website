import { motion } from 'motion/react';
import { useMemo } from 'react';

interface NetworkGlobeProps {
  currentPhase: number;
}

interface FiberLine {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  controlX: number;
  controlY: number;
  isFaulty?: boolean;
}

interface NetworkNode {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export function NetworkGlobe({ currentPhase }: NetworkGlobeProps) {
  // Generate network nodes in a circular pattern
  const nodes: NetworkNode[] = useMemo(() => {
    const centerX = 400;
    const centerY = 300;
    const radius = 180;
    const nodeCount = 12;

    return Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i * 2 * Math.PI) / nodeCount;
      return {
        id: i,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        angle
      };
    });
  }, []);

  // Generate fiber lines connecting nodes
  const fiberLines: FiberLine[] = useMemo(() => {
    const lines: FiberLine[] = [];
    const centerX = 400;
    const centerY = 300;

    // Create connections between adjacent nodes and some cross-network connections
    nodes.forEach((node, i) => {
      // Connect to next node (circular connection)
      const nextNode = nodes[(i + 1) % nodes.length];
      const midX = (node.x + nextNode.x) / 2;
      const midY = (node.y + nextNode.y) / 2;
      const dx = nextNode.x - node.x;
      const dy = nextNode.y - node.y;
      const perpX = -dy * 0.15;
      const perpY = dx * 0.15;

      lines.push({
        id: lines.length,
        x1: node.x,
        y1: node.y,
        x2: nextNode.x,
        y2: nextNode.y,
        controlX: midX + perpX,
        controlY: midY + perpY,
        isFaulty: i === 3 // Mark one line as potentially faulty
      });

      // Add some cross-network connections
      if (i % 3 === 0) {
        const oppositeNode = nodes[(i + 6) % nodes.length];
        lines.push({
          id: lines.length,
          x1: node.x,
          y1: node.y,
          x2: oppositeNode.x,
          y2: oppositeNode.y,
          controlX: centerX,
          controlY: centerY,
          isFaulty: false
        });
      }
    });

    return lines;
  }, [nodes]);

  // Determine line colors based on phase
  const getLineColor = (line: FiberLine) => {
    if (currentPhase === 1 && line.isFaulty) {
      // Phase 2: Detection - faulty line is red
      return '#ef4444';
    } else if (currentPhase === 2 && line.isFaulty) {
      // Phase 3: Fixing - transitioning yellow
      return '#eab308';
    } else {
      // Phase 1 & 4: Normal operation - cyan/purple gradient
      return 'url(#fiber-gradient)';
    }
  };

  const getLineOpacity = (line: FiberLine) => {
    if (currentPhase === 1 && line.isFaulty) {
      return 1; // Highlight faulty line
    }
    return 0.6;
  };

  return (
    <svg 
      className="absolute inset-0 w-full h-full" 
      viewBox="0 0 800 600"
      style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}
    >
      <defs>
        {/* Gradient for fiber lines */}
        <linearGradient id="fiber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
        </linearGradient>

        {/* Gradient for healthy state */}
        <linearGradient id="healthy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Pulse animation gradient */}
        <radialGradient id="pulse-gradient">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central globe circle */}
      <motion.circle
        cx="400"
        cy="300"
        r="180"
        fill="transparent"
        stroke="rgba(139, 92, 246, 0.2)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: currentPhase === 0 ? [0, 1] : 1,
          scale: currentPhase === 0 ? [0.8, 1] : 1
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Inner circle */}
      <motion.circle
        cx="400"
        cy="300"
        r="140"
        fill="transparent"
        stroke="rgba(139, 92, 246, 0.15)"
        strokeWidth="1"
        strokeDasharray="5,5"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: currentPhase === 0 ? [0, 0.5] : 0.5,
          rotate: 360
        }}
        transition={{ 
          opacity: { duration: 2 },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
        style={{ transformOrigin: '400px 300px' }}
      />

      {/* Fiber lines (network connections) */}
      {fiberLines.map((line, index) => (
        <g key={line.id}>
          {/* Main fiber line */}
          <motion.path
            d={`M ${line.x1} ${line.y1} Q ${line.controlX} ${line.controlY} ${line.x2} ${line.y2}`}
            stroke={getLineColor(line)}
            strokeWidth="2.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: currentPhase === 0 ? [0, 1] : 1,
              opacity: getLineOpacity(line),
              stroke: getLineColor(line)
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.5 + index * 0.08 },
              stroke: { duration: 0.8 },
              opacity: { duration: 0.5 }
            }}
          />

          {/* Light pulses traveling along lines */}
          {!line.isFaulty || currentPhase === 0 || currentPhase === 3 ? (
            <motion.circle
              r="4"
              fill="url(#fiber-gradient)"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <animateMotion
                dur={`${3 + index * 0.2}s`}
                repeatCount="indefinite"
                path={`M ${line.x1} ${line.y1} Q ${line.controlX} ${line.controlY} ${line.x2} ${line.y2}`}
              />
            </motion.circle>
          ) : null}

          {/* Fault indicator on faulty line */}
          {line.isFaulty && currentPhase === 1 && (
            <motion.circle
              cx={line.controlX}
              cy={line.controlY}
              r="8"
              fill="#ef4444"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              filter="url(#glow)"
            />
          )}
        </g>
      ))}

      {/* Network nodes */}
      {nodes.map((node, index) => (
        <motion.g key={node.id}>
          {/* Node glow */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="12"
            fill="url(#pulse-gradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: currentPhase === 0 ? [0, 1] : [1, 1.5, 1],
              opacity: currentPhase === 0 ? [0, 0.3] : [0.3, 0.1, 0.3]
            }}
            transition={{ 
              scale: { 
                duration: currentPhase === 0 ? 1 : 2, 
                delay: currentPhase === 0 ? 0.8 + index * 0.05 : 0,
                repeat: currentPhase === 0 ? 0 : Infinity 
              },
              opacity: { duration: 2, repeat: Infinity }
            }}
          />
          
          {/* Node core */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="5"
            fill="url(#fiber-gradient)"
            initial={{ scale: 0 }}
            animate={{ 
              scale: currentPhase === 0 ? [0, 1] : 1
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8 + index * 0.05 
            }}
            filter="url(#glow)"
          />
        </motion.g>
      ))}

      {/* Detection pulse rings (Phase 2) */}
      {currentPhase === 1 && (
        <>
          <motion.circle
            cx="400"
            cy="300"
            r="50"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [1, 3.5],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.circle
            cx="400"
            cy="300"
            r="50"
            fill="none"
            stroke="#ec4899"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [1, 3.5],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </>
      )}

      {/* Healing wave effect (Phase 3) */}
      {currentPhase === 2 && (
        <motion.circle
          cx="400"
          cy="300"
          r="50"
          fill="none"
          stroke="url(#healthy-gradient)"
          strokeWidth="3"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [1, 4],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut"
          }}
          filter="url(#glow)"
        />
      )}

      {/* Stable operation glow (Phase 4) */}
      {currentPhase === 3 && (
        <motion.circle
          cx="400"
          cy="300"
          r="200"
          fill="none"
          stroke="url(#fiber-gradient)"
          strokeWidth="1"
          opacity="0.3"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </svg>
  );
}

