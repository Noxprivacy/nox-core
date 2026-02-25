import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

export function NoxRobot() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);
  const messageTimeoutRef = useRef<NodeJS.Timeout>();

  const messages = [
    "Hi! I'm Nox, your privacy guardian! 🛡️",
    "Privacy is a fundamental right! 🔒",
    "Zero-knowledge proofs are like magic! ✨",
    "Solana network is super fast! ⚡",
    "Your secrets are safe with me! 🌟",
    "Let's build a private future! 🚀",
    "Anonymous transactions for everyone! 💜",
    "Privacy technology for freedom! 🦅",
    "Your data, your control! 🔐",
    "Welcome to the future of privacy! 🌌",
  ];

  useEffect(() => {
    // Initial greeting after 1 second
    setTimeout(() => {
      showRandomMessage();
    }, 1000);

    // Show random messages periodically
    const messageInterval = setInterval(() => {
      if (Math.random() > 0.6) { // 40% chance
        showRandomMessage();
      }
    }, 10000); // Every 10 seconds

    // Eye blinking animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000); // Random blink every 3-5 seconds

    return () => {
      clearInterval(messageInterval);
      clearInterval(blinkInterval);
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    };
  }, []);

  const showRandomMessage = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
    setShowMessage(true);

    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }

    messageTimeoutRef.current = setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <div className="relative">
        {/* Speech Bubble */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-4 w-72"
            >
              <div className="bg-gradient-to-r from-emerald-500/95 to-teal-500/95 backdrop-blur-xl px-5 py-3 rounded-2xl border border-emerald-400/50 shadow-2xl shadow-emerald-500/30">
                <p className="text-white text-sm font-medium leading-relaxed">
                  {message}
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-8 -mt-1">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-10 border-l-transparent border-r-transparent border-t-emerald-500/95" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimalist Professional Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.5
          }}
          className="relative pointer-events-auto cursor-pointer"
          style={{ willChange: 'transform' }}
          whileHover={{ scale: 1.12, rotate: 5 }}
          onClick={showRandomMessage}
        >
          {/* Outer Rotating Rings */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 w-28 h-28"
            style={{ willChange: 'transform' }}
          >
            <div className="absolute inset-0 border border-emerald-400/30 rounded-full" />
            <motion.div 
              className="absolute top-1/2 left-0 w-2 h-2 bg-emerald-400 rounded-full -translate-y-1/2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="absolute top-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full -translate-x-1/2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </motion.div>

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-2 w-24 h-24"
            style={{ willChange: 'transform' }}
          >
            <div className="absolute inset-0 border border-teal-400/20 rounded-full" />
            <motion.div 
              className="absolute bottom-1/2 right-0 w-1.5 h-1.5 bg-teal-400 rounded-full translate-y-1/2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </motion.div>

          {/* Main Glow with Pulse */}
          <motion.div 
            className="absolute inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-2xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Animation with Bounce */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
            style={{ willChange: 'transform' }}
          >
            {/* Main Orb Body */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              
              {/* Glass Morphism Sphere */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-slate-900/90 via-emerald-950/70 to-teal-950/70 rounded-full border border-emerald-400/60 shadow-2xl shadow-emerald-500/30 backdrop-blur-xl overflow-hidden">
                
                {/* Inner Glow Pulse - More Dynamic */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [0.7, 1.1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
                />

                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 96 96">
                    <defs>
                      <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <circle cx="48" cy="48" r="40" fill="none" stroke="url(#gridGrad)" strokeWidth="0.5" />
                    <circle cx="48" cy="48" r="30" fill="none" stroke="url(#gridGrad)" strokeWidth="0.5" />
                    <circle cx="48" cy="48" r="20" fill="none" stroke="url(#gridGrad)" strokeWidth="0.5" />
                    <line x1="48" y1="8" x2="48" y2="88" stroke="url(#gridGrad)" strokeWidth="0.5" />
                    <line x1="8" y1="48" x2="88" y2="48" stroke="url(#gridGrad)" strokeWidth="0.5" />
                    <line x1="20" y1="20" x2="76" y2="76" stroke="url(#gridGrad)" strokeWidth="0.5" />
                    <line x1="76" y1="20" x2="20" y2="76" stroke="url(#gridGrad)" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Center Shield Icon with MORE Movement */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 bg-emerald-400/30 rounded-full blur-lg scale-150"
                      />
                      
                      {/* Animated Eyes Above Shield - BLINKING */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2.5">
                        {/* Left Eye */}
                        <motion.div
                          animate={{
                            scaleY: isBlinking ? 0.1 : 1,
                          }}
                          transition={{
                            duration: 0.1,
                          }}
                          className="w-2.5 h-2.5 bg-emerald-300 rounded-full shadow-lg shadow-emerald-400/50"
                        />
                        {/* Right Eye */}
                        <motion.div
                          animate={{
                            scaleY: isBlinking ? 0.1 : 1,
                          }}
                          transition={{
                            duration: 0.1,
                          }}
                          className="w-2.5 h-2.5 bg-emerald-300 rounded-full shadow-lg shadow-emerald-400/50"
                        />
                      </div>
                      
                      <Shield className="w-10 h-10 text-emerald-400 relative z-10" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                </div>

                {/* "NOX" Badge with Pulse */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="px-2 py-0.5 bg-emerald-500/20 rounded-full border border-emerald-400/40"
                  >
                    <span className="text-emerald-400 font-bold text-xs tracking-wider" style={{ fontFamily: 'monospace' }}>
                      NOX
                    </span>
                  </motion.div>
                </div>

                {/* Scanning Line - Faster */}
                <motion.div
                  animate={{
                    y: [-96, 96],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent blur-sm"
                  style={{ willChange: 'transform' }}
                />

                {/* Highlight Shine */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm" />
              </div>

              {/* Orbiting Particles - MORE Dynamic */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i === 0 ? '#10b981' : i === 1 ? '#14b8a6' : i === 2 ? '#f59e0b' : '#8b5cf6',
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 7 + i * 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-1.5 h-1.5" style={{
                    transform: `translate(-50%, -50%) translateY(${-45 - i * 5}px)`,
                  }}>
                    <motion.div
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.7, 1.4, 0.7],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: i === 0 ? '#10b981' : i === 1 ? '#14b8a6' : i === 2 ? '#f59e0b' : '#8b5cf6',
                        boxShadow: `0 0 12px ${i === 0 ? '#10b981' : i === 1 ? '#14b8a6' : i === 2 ? '#f59e0b' : '#8b5cf6'}`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
