import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface NoxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
  variant?: 'default' | 'compact' | 'icon-only';
}

export function NoxLogo({ 
  size = 'md', 
  animated = true, 
  showText = true,
  variant = 'default'
}: NoxLogoProps) {
  
  const sizes = {
    sm: { container: 'h-8', icon: 'w-5 h-5', text: 'text-lg', spacing: 'gap-1.5' },
    md: { container: 'h-10', icon: 'w-6 h-6', text: 'text-xl', spacing: 'gap-2' },
    lg: { container: 'h-14', icon: 'w-8 h-8', text: 'text-3xl', spacing: 'gap-3' },
    xl: { container: 'h-20', icon: 'w-12 h-12', text: 'text-5xl', spacing: 'gap-4' },
  };

  const currentSize = sizes[size];

  if (variant === 'icon-only') {
    return (
      <motion.div
        className={`relative ${currentSize.container} aspect-square flex items-center justify-center`}
        whileHover={animated ? { scale: 1.05 } : {}}
        transition={{ duration: 0.2 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl"
          animate={animated ? {
            opacity: [0.3, 0.5, 0.3],
            scale: [0.9, 1.1, 0.9],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Icon Container */}
        <div className={`relative ${currentSize.container} aspect-square bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-xl shadow-lg shadow-emerald-500/30 flex items-center justify-center border border-emerald-400/30`}>
          <Shield className={`${currentSize.icon} text-white`} strokeWidth={2} />
        </div>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className={`flex items-center ${currentSize.spacing}`}
        whileHover={animated ? { scale: 1.02 } : {}}
        transition={{ duration: 0.2 }}
      >
        {/* Icon */}
        <div className={`relative ${currentSize.container} aspect-square`}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg blur-lg"
            animate={animated ? {
              opacity: [0.3, 0.5, 0.3],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <div className={`relative ${currentSize.container} aspect-square bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg shadow-lg shadow-emerald-500/30 flex items-center justify-center border border-emerald-400/30`}>
            <Shield className={`${currentSize.icon} text-white`} strokeWidth={2} />
          </div>
        </div>

        {/* Text */}
        {showText && (
          <div className="flex items-baseline gap-0">
            <span className={`${currentSize.text} font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent`}>
              NOX
            </span>
          </div>
        )}
      </motion.div>
    );
  }

  // Default variant - Full logo with detailed design
  return (
    <motion.div
      className={`flex items-center ${currentSize.spacing}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Hexagonal Shield Icon */}
      <div className={`relative ${currentSize.container} aspect-square`}>
        {/* Outer Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl blur-xl"
          animate={animated ? {
            opacity: [0.4, 0.6, 0.4],
            scale: [0.95, 1.05, 0.95],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Rotating Ring */}
        {animated && (
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`${currentSize.container} aspect-square border border-emerald-400/30 rounded-xl`} />
          </motion.div>
        )}

        {/* Main Icon Container */}
        <div className={`relative ${currentSize.container} aspect-square bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 rounded-xl shadow-2xl shadow-emerald-500/30 flex items-center justify-center border border-emerald-400/60 overflow-hidden`}>
          
          {/* Inner Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
            animate={animated ? {
              opacity: [0.2, 0.4, 0.2],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 40 40">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Shield Icon */}
          <motion.div
            animate={animated ? {
              scale: [1, 1.05, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="relative z-10"
          >
            <Shield className={`${currentSize.icon} text-emerald-400`} strokeWidth={2} />
          </motion.div>

          {/* Highlight */}
          <div className="absolute top-1 left-1 w-3 h-3 bg-white/20 rounded-full blur-sm" />
        </div>
      </div>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-0">
            <motion.span 
              className={`${currentSize.text} font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent tracking-tight`}
              animate={animated ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              } : {}}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              NOX
            </motion.span>
            <span className={`${currentSize.text} font-light text-gray-400`}>
              Privacy
            </span>
          </div>
          
          {size === 'lg' || size === 'xl' ? (
            <motion.div 
              className="flex items-center gap-1 -mt-1"
              animate={animated ? {
                opacity: [0.5, 0.8, 0.5],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent w-12" />
              <span className="text-[10px] text-emerald-400/60 font-medium tracking-wider uppercase">
                Powered by Solana
              </span>
            </motion.div>
          ) : null}
        </div>
      )}
    </motion.div>
  );
}

// Export as default for easy import
export default NoxLogo;
