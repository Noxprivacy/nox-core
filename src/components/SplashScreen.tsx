import { useEffect, useState } from 'react';
import { Shield, Lock, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Smooth increment
      });
    }, 50);

    // Mark as loaded after 2.5s
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    // Complete after 3s with fade out
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 flex items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full animate-grid-flow"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridFlow 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo Container with Animated Rings */}
        <div className="relative mb-8 inline-block">
          {/* Animated Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute w-40 h-40 border-2 border-emerald-500/30 rounded-full animate-spin-slow" />
            {/* Middle Ring */}
            <div className="absolute w-32 h-32 border-2 border-teal-500/40 rounded-full animate-spin-reverse" style={{ animationDuration: '4s' }} />
            {/* Inner Ring */}
            <div className="absolute w-24 h-24 border border-emerald-400/20 rounded-full animate-ping-slow" />
          </div>

          {/* Pulsing Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-emerald-500/30 blur-3xl animate-pulse-glow" />
          </div>
          
          {/* Logo Box with Shield */}
          <div className="relative w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 shadow-2xl shadow-emerald-500/50 flex items-center justify-center transform animate-float-smooth">
            {/* Inner Glow */}
            <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-transparent" />
            
            {/* Shield Icon */}
            <div className="relative">
              <Shield className="w-14 h-14 text-white drop-shadow-lg animate-pulse-subtle" strokeWidth={2.5} />
              <Lock className="w-7 h-7 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle" strokeWidth={3} style={{ animationDelay: '0.3s' }} />
            </div>

            {/* Sparkle Effect */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-spin-slow" />
          </div>
        </div>

        {/* Brand Name with Gradient */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent animate-text-shimmer-continuous">
            NoxPrivacy
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-emerald-400/80 text-sm">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-emerald-400/50" />
            <span className="font-medium tracking-wider">Secure Wallet</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-emerald-400/50" />
          </div>
        </div>

        {/* Modern Progress Bar */}
        <div className="max-w-xs mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Progress Container */}
          <div className="relative h-2 bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-emerald-900/30">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-emerald-600/20 animate-shimmer" />
            
            {/* Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 rounded-full transition-all duration-300 ease-out relative overflow-hidden shadow-lg shadow-emerald-500/50"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Inner Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-emerald-400/70 font-medium">Loading...</span>
            <span className="text-emerald-300 font-bold tabular-nums">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-400/70 text-xs animate-fade-in-up tracking-wide" style={{ animationDelay: '0.4s' }}>
          Privacy-First Transactions on Solana
        </p>

        {/* Loading Dots Animation */}
        <div className="flex items-center justify-center gap-1.5 mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce-dot"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gridFlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-shimmer-continuous {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes bounce-dot {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        .animate-grid-flow {
          animation: gridFlow 20s linear infinite;
        }

        .animate-float-particle {
          animation: float-particle 5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-float-smooth {
          animation: float-smooth 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-text-shimmer-continuous {
          background-size: 200% auto;
          animation: text-shimmer-continuous 3s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-shine {
          animation: shine 3s infinite;
        }

        .animate-bounce-dot {
          animation: bounce-dot 1.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
