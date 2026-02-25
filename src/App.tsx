import { Shield, Lock, Eye, ArrowRight, Github, Send, Menu, X, Zap, Globe, Cpu, FileKey, Users, Code, Database, Network, Server, Blocks, Key, Check, Clock, Sparkles, Rocket, MessageCircle, TrendingUp, Loader, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PrivacyBuilder } from './components/PrivacyBuilder';
import { PrivacyDock } from './components/PrivacyDock';
import { PhoneMockup } from './components/PhoneMockup';
import { AnimatedNavItem, AnimatedLaunchButton } from './components/AnimatedNavigation';
import { FloatingParticles } from './components/FloatingParticles';
import { AnimatedGradientText } from './components/AnimatedGradientText';
import { GlowingCard } from './components/GlowingCard';
import { CyberBeams } from './components/CyberBeams';
import { OrbitingElements } from './components/OrbitingElements';
import { MatrixRain } from './components/MatrixRain';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Documentation } from './components/Documentation';
import { Examples } from './components/Examples';
import { Whitepaper } from './components/Whitepaper';
import { NoxRobot } from './components/NoxRobot';
import { SplashScreen } from './components/SplashScreen';
      return; // Suppress Jotai warning
    }
    originalWarn(...args);
  };
}

type PageView = 'home' | 'builder' | 'dock' | 'docs' | 'examples' | 'whitepaper';

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function Navigation({ currentPage, setCurrentPage }: { currentPage: PageView; setCurrentPage: (page: PageView) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = 'NoxPrivacy | Privacy-First Crypto on Solana';
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Check if it's Builder or Dock
    if (href === '#builder') {
      setCurrentPage('builder');
      return;
    }
    if (href === '#dock') {
      setCurrentPage('dock');
      return;
    }
    
    // For other sections, scroll to them
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Builder', href: '#builder' },
    { name: 'Dock', href: '#dock' },
    { name: 'Community', href: '#community' }
  ];

  const NoxLogo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group cursor-pointer">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981">
            <animate attributeName="stop-color" values="#10b981; #14b8a6; #10b981" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="50%" stopColor="#14b8a6">
            <animate attributeName="stop-color" values="#14b8a6; #f59e0b; #14b8a6" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" stopColor="#f59e0b">
            <animate attributeName="stop-color" values="#f59e0b; #10b981; #f59e0b" dur="3s" repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-1 0"
            to="1 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="glowStrong">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feFlood floodColor="#10b981" floodOpacity="0.8" result="glowColor"/>
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
          <feMerge>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background with pulse animation */}
      <rect width="40" height="40" rx="10" fill="url(#logoGradient)" opacity="0.15" className="group-hover:opacity-25 transition-opacity">
        <animate attributeName="opacity" values="0.1; 0.2; 0.1" dur="2s" repeatCount="indefinite"/>
      </rect>
      
      {/* Border with animated gradient */}
      <rect x="1" y="1" width="38" height="38" rx="9" stroke="url(#logoGradient)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite"/>
      </rect>
      
      {/* Main N letter with glow */}
      <g className="group-hover:scale-110 transition-transform origin-center">
        <path 
          d="M13 13 L16 13 L16 22 L24 13 L27 13 L27 27 L24 27 L24 18 L16 27 L13 27 Z" 
          fill="url(#logoGradient)"
          filter="url(#glowStrong)"
          strokeWidth="0.5"
          stroke="url(#logoGradient)"
        >
          <animate attributeName="opacity" values="0.9; 1; 0.9" dur="2s" repeatCount="indefinite"/>
        </path>
        
        {/* Shimmer overlay on N */}
        <path 
          d="M13 13 L16 13 L16 22 L24 13 L27 13 L27 27 L24 27 L24 18 L16 27 L13 27 Z" 
          fill="url(#shimmerGradient)"
          opacity="0.4"
        />
      </g>
      
      {/* Animated corner dot */}
      <circle cx="29" cy="11" r="2" fill="#f59e0b" filter="url(#glow)">
        <animate attributeName="opacity" values="0.7; 1; 0.7" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="r" values="2; 2.5; 2" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Orbiting particles */}
      <circle cx="10" cy="10" r="1" fill="#10b981" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="30" cy="30" r="1" fill="#14b8a6" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="180 20 20"
          to="540 20 20"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="animate-logo-float">
              <NoxLogo />
            </div>
            <div className="relative">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-teal-300 group-hover:to-amber-300 transition-all duration-300">
                NoxPrivacy
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <AnimatedNavItem
                key={item.name}
                name={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                index={index}
              />
            ))}
            <AnimatedLaunchButton index={navItems.length} />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500/20 animate-fade-in">
            {navItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-gray-300 hover:text-emerald-400 hover:translate-x-2 py-2 transition-all duration-300 hover:bg-emerald-500/5 rounded-lg px-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-2 rounded-lg mt-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30">
              Launch App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  const NoxLogo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group cursor-pointer">
      <defs>
        <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981">
            <animate attributeName="stop-color" values="#10b981; #14b8a6; #10b981" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="50%" stopColor="#14b8a6">
            <animate attributeName="stop-color" values="#14b8a6; #f59e0b; #14b8a6" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" stopColor="#f59e0b">
            <animate attributeName="stop-color" values="#f59e0b; #10b981; #f59e0b" dur="3s" repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        <linearGradient id="shimmerGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-1 0"
            to="1 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <filter id="glowFooter">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="glowStrongFooter">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feFlood floodColor="#10b981" floodOpacity="0.8" result="glowColor"/>
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
          <feMerge>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background with pulse animation */}
      <rect width="40" height="40" rx="10" fill="url(#logoGradientFooter)" opacity="0.15" className="group-hover:opacity-25 transition-opacity">
        <animate attributeName="opacity" values="0.1; 0.2; 0.1" dur="2s" repeatCount="indefinite"/>
      </rect>
      
      {/* Border with animated gradient */}
      <rect x="1" y="1" width="38" height="38" rx="9" stroke="url(#logoGradientFooter)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite"/>
      </rect>
      
      {/* Main N letter with glow */}
      <g className="group-hover:scale-110 transition-transform origin-center">
        <path 
          d="M13 13 L16 13 L16 22 L24 13 L27 13 L27 27 L24 27 L24 18 L16 27 L13 27 Z" 
          fill="url(#logoGradientFooter)"
          filter="url(#glowStrongFooter)"
          strokeWidth="0.5"
          stroke="url(#logoGradientFooter)"
        >
          <animate attributeName="opacity" values="0.9; 1; 0.9" dur="2s" repeatCount="indefinite"/>
        </path>
        
        {/* Shimmer overlay on N */}
        <path 
          d="M13 13 L16 13 L16 22 L24 13 L27 13 L27 27 L24 27 L24 18 L16 27 L13 27 Z" 
          fill="url(#shimmerGradientFooter)"
          opacity="0.4"
        />
      </g>
      
      {/* Animated corner dot */}
      <circle cx="29" cy="11" r="2" fill="#f59e0b" filter="url(#glowFooter)">
        <animate attributeName="opacity" values="0.7; 1; 0.7" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="r" values="2; 2.5; 2" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Orbiting particles */}
      <circle cx="10" cy="10" r="1" fill="#10b981" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="30" cy="30" r="1" fill="#14b8a6" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="180 20 20"
          to="540 20 20"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );

  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash === '#builder') {
      setCurrentPage('builder');
    } else if (currentHash === '#dock') {
      setCurrentPage('dock');
    } else if (currentHash === '#docs') {
      setCurrentPage('docs');
    } else if (currentHash === '#examples') {
      setCurrentPage('examples');
    } else if (currentHash === '#whitepaper') {
      setCurrentPage('whitepaper');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Show splash screen on first load
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Interactive NoxPrivacy Robot Mascot */}
      <NoxRobot />
      
      {/* Show Builder Page */}
      {currentPage === 'builder' && (
        <div className="fixed inset-0 z-40 bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-y-auto h-full">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Back to Home</span>
                </button>
              </div>
              <PrivacyBuilder />
            </div>
          </div>
        </div>
      )}

      {/* Show Dock Page */}
      {currentPage === 'dock' && (
        <div className="fixed inset-0 z-40 bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-y-auto h-full">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Back to Home</span>
                </button>
              </div>
              <PrivacyDock onNavigateToWhitepaper={() => setCurrentPage('whitepaper')} />
            </div>
          </div>
        </div>
      )}

      {/* Show Documentation Page */}
      {currentPage === 'docs' && (
        <div className="fixed inset-0 z-40 bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-y-auto h-full">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Back to Home</span>
                </button>
              </div>
              <Documentation />
            </div>
          </div>
        </div>
      )}

      {/* Show Examples Page */}
      {currentPage === 'examples' && (
        <div className="fixed inset-0 z-40 bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-y-auto h-full">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Back to Home</span>
                </button>
              </div>
              <Examples />
            </div>
          </div>
        </div>
      )}

      {/* Show Whitepaper Page */}
      {currentPage === 'whitepaper' && (
        <div className="fixed inset-0 z-40 bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 overflow-y-auto h-full">
            <Whitepaper onBack={() => setCurrentPage('dock')} />
          </div>
        </div>
      )}

      {/* Show Home Page */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ willChange: 'opacity' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ willChange: 'opacity' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-glow-pulse" style={{ willChange: 'opacity' }}></div>
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite',
              willChange: 'transform'
            }}></div>
          </div>

          {/* Cyber Beams - Futuristic laser beams */}
          <CyberBeams />

          {/* Matrix Rain - Digital rain effect - REMOVED for performance */}
          {/* <MatrixRain /> */}

          {/* Orbiting Elements - Floating crypto icons */}
          <OrbitingElements />

          {/* Floating Particles - REDUCED from 30 to 12 */}
          <FloatingParticles count={12} />

          {/* Rotating Rings with gradient */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 border border-emerald-500/10 rounded-full animate-spin-slow" style={{ willChange: 'transform' }}></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 border border-teal-500/10 rounded-full animate-spin-reverse" style={{ willChange: 'transform' }}></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 border-2 border-transparent bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 rounded-full blur-sm animate-spin-slow" style={{ willChange: 'transform' }}></div>

          {/* Holographic data streams */}
          <div className="absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-data-stream" style={{ willChange: 'transform' }}></div>
          <div className="absolute right-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-teal-400/30 to-transparent animate-data-stream" style={{ animationDelay: '1s', willChange: 'transform' }}></div>
          
          {/* Pulsing nodes */}
          <div className="absolute top-1/4 right-1/5 w-3 h-3 bg-emerald-400/60 rounded-full animate-bounce-gentle blur-sm" style={{ willChange: 'transform' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-teal-400/60 rounded-full animate-bounce-gentle blur-sm" style={{ animationDelay: '0.5s', willChange: 'transform' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-bounce-gentle blur-sm" style={{ animationDelay: '1s', willChange: 'transform' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 text-sm">Now Live on Pump.fun</span>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
              The Future of <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Private</span> Transactions
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Experience truly anonymous and secure cryptocurrency transactions with military-grade encryption and zero-knowledge proofs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 hover:-translate-y-1 animate-background-pan">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Start Trading Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('docs')}
                className="group bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-emerald-500/30 hover:border-emerald-500/50 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Read Documentation
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 mb-16">
              <a href="https://x.com/noxprivacy?s=21" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg transition-all border border-emerald-500/20 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-emerald-500/30">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://t.me/noxprivacy" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg transition-all border border-emerald-500/20 hover:border-teal-500/50 text-gray-300 hover:text-teal-400 hover:scale-110 hover:-rotate-6 hover:shadow-lg hover:shadow-teal-500/30">
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="group bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg transition-all border border-emerald-500/20 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-emerald-500/30">
                <Github className="w-5 h-5 group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Trusted By Industry Leaders</h3>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-right whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set 2 */}
              <div className="flex items-center gap-6 ml-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set 3 */}
              <div className="flex items-center gap-6 ml-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set 4 */}
              <div className="flex items-center gap-6 ml-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm">About NoxPrivacy</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Redefining <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Financial Privacy</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              NoxPrivacy is a next-generation cryptocurrency built on the foundation of absolute privacy and security. 
              We believe financial freedom begins with financial privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-lg flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-3">Our Mission</h3>
                    <p className="text-gray-400">
                      To empower individuals with true financial sovereignty through cutting-edge privacy technology. 
                      We're building a future where your transactions are your business alone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-3">Our Vision</h3>
                    <p className="text-gray-400">
                      A world where privacy is not a luxury but a fundamental right. NoxPrivacy aims to be 
                      the gold standard for private, secure, and untraceable cryptocurrency transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
                <h3 className="text-white text-2xl mb-6">Why NoxPrivacy?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white mb-1">Untraceable Transactions</p>
                      <p className="text-gray-400 text-sm">Advanced cryptographic techniques ensure complete anonymity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white mb-1">Decentralized & Secure</p>
                      <p className="text-gray-400 text-sm">No central authority can access or control your funds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white mb-1">Lightning Fast</p>
                      <p className="text-gray-400 text-sm">Process thousands of private transactions per second</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white mb-1">Low Fees</p>
                      <p className="text-gray-400 text-sm">Minimal transaction costs without compromising privacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-xl mb-2">Community Driven</h4>
                <p className="text-gray-400">
                  Built by privacy advocates, for privacy advocates. Join our growing community of users worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-xl mb-2">Open Source</h4>
                <p className="text-gray-400">
                  Complete transparency with fully auditable code. Trust through verification, not through authority.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-xl mb-2">Innovation First</h4>
                <p className="text-gray-400">
                  Constantly evolving with the latest advancements in cryptography and blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-teal-400 animate-zap-electric" />
              <span className="text-teal-300 text-sm">Core Features</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Unmatched <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Privacy Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Advanced technology stack designed to protect your financial freedom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 animate-slide-in-up">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow-pulse">
                <Lock className="w-6 h-6 text-white animate-lock-shake" />
              </div>
              <h3 className="text-white text-xl mb-3">Zero-Knowledge Proofs</h3>
              <p className="text-gray-400">
                Validate transactions without revealing any sensitive information using cutting-edge ZK-SNARK technology.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow-pulse" style={{ animationDelay: '0.5s' }}>
                <Eye className="w-6 h-6 text-white animate-eye-blink" />
              </div>
              <h3 className="text-white text-xl mb-3">Stealth Addresses</h3>
              <p className="text-gray-400">
                Generate unique, one-time addresses for every transaction, making it impossible to link payments.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow-pulse" style={{ animationDelay: '1s' }}>
                <FileKey className="w-6 h-6 text-white animate-key-rotate" />
              </div>
              <h3 className="text-white text-xl mb-3">Ring Signatures</h3>
              <p className="text-gray-400">
                Mix your transaction with others, making it cryptographically impossible to determine the true sender.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow-pulse" style={{ animationDelay: '1.5s' }}>
                <Database className="w-6 h-6 text-white animate-database-pulse" />
              </div>
              <h3 className="text-white text-xl mb-3">Encrypted Amounts</h3>
              <p className="text-gray-400">
                Transaction amounts are hidden using homomorphic encryption while maintaining verifiability.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow-pulse" style={{ animationDelay: '2s' }}>
                <Network className="w-6 h-6 text-white animate-network-flow" />
              </div>
              <h3 className="text-white text-xl mb-3">Tor Integration</h3>
              <p className="text-gray-400">
                Built-in Tor support ensures your IP address and location remain completely anonymous.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all animate-glow-pulse" style={{ animationDelay: '2.5s' }}>
                <Key className="w-6 h-6 text-white animate-key-swing" />
              </div>
              <h3 className="text-white text-xl mb-3">Multi-Signature Support</h3>
              <p className="text-gray-400">
                Enhanced security with multi-sig wallets while maintaining complete transaction privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-emerald-400 animate-cpu-process" />
              <span className="text-emerald-300 text-sm">Technology Stack</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Powered by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Advanced Technology</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Built on cutting-edge cryptographic protocols and blockchain architecture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-lg">
                  <Server className="w-6 h-6 text-white animate-server-blink" />
                </div>
                <h3 className="text-white text-2xl">Blockchain Architecture</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Blocks className="w-4 h-4 text-emerald-400 animate-blocks-stack" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Proof of Stake Consensus</p>
                    <p className="text-gray-400 text-sm">Energy-efficient validation with enhanced security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-teal-400 animate-globe-spin" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Sharding Technology</p>
                    <p className="text-gray-400 text-sm">Parallel processing for maximum throughput</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Database className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white mb-1">UTXO Model</p>
                    <p className="text-gray-400 text-sm">Enhanced privacy through unspent transaction outputs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-2xl">Cryptographic Protocols</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Key className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white mb-1">ZK-SNARK Technology</p>
                    <p className="text-gray-400 text-sm">Succinct non-interactive zero-knowledge proofs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white mb-1">EdDSA Signatures</p>
                    <p className="text-gray-400 text-sm">Fast and secure elliptic curve cryptography</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <FileKey className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Bulletproofs</p>
                    <p className="text-gray-400 text-sm">Compact range proofs for encrypted amounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Phone Mockup - Replace Technical Specifications */}
          <PhoneMockup />
        </div>
      </section>

      {/* Banner with Rotating Logo */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />
            
            {/* Main Banner Card */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 sm:p-12 overflow-hidden">
              {/* Corner Glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left - Rotating Logo */}
                <div className="relative flex-shrink-0">
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 w-56 h-56 -left-14 -top-14"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                  </motion.div>

                  {/* Middle Ring */}
                  <motion.div
                    className="absolute inset-0 w-44 h-44 -left-10 -top-10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full border border-teal-500/30" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                  </motion.div>

                  {/* Logo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <NoxLogo />
                    </motion.div>
                  </div>
                </div>

                {/* Center/Right - Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      NoxPrivacy
                    </span>
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-4" />
                  <p className="text-xl sm:text-2xl text-emerald-400/80 mb-6">
                    Privacy Protocol on Solana Blockchain
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm backdrop-blur-xl">
                      🔒 Zero-Knowledge Proofs
                    </div>
                    <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-sm backdrop-blur-xl">
                      ⚡ Lightning Fast
                    </div>
                    <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm backdrop-blur-xl">
                      🛡️ Maximum Security
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-teal-400 animate-clock-tick" />
              <span className="text-teal-300 text-sm">Development Roadmap</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Journey Ahead</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A clear path to becoming the world's leading privacy cryptocurrency
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 hidden lg:block"></div>
            
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center ring-4 ring-emerald-500/20">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Completed</span>
                    <span className="text-gray-400">Q1 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 1: Foundation</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 animate-checkmark" />
                      Official website and web platform launch
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 animate-checkmark" />
                      Community establishment and social media presence
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 animate-checkmark" />
                      Launch on Pump.fun
                    </li>
                    <li className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                      DexScreener paid and booster
                    </li>
                    <li className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                      Initial marketing campaign
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center ring-4 ring-teal-500/20 animate-pulse">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm">In Progress</span>
                    <span className="text-gray-400">Q2 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 2: Growth</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Testnet launch with core privacy features
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Smart contract integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Security audit by leading firms
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Mobile wallet applications (iOS & Android)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Major exchange listings
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Cross-chain bridge implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Community governance launch
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center ring-4 ring-emerald-500/20">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">Upcoming</span>
                    <span className="text-gray-400">Q3 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 3: Expansion</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Privacy DEX integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Layer 2 scaling solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Enterprise partnerships
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Advanced privacy features (quantum-resistant)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center ring-4 ring-teal-500/20">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-sm">Future</span>
                    <span className="text-gray-400">Q4 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 4: Global Adoption</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      Merchant payment solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      DeFi ecosystem expansion
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      Global marketing campaign
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      Privacy protocol licensing
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-emerald-400 animate-users-group" />
              <span className="text-emerald-300 text-sm">Join Our Community</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Be Part of the <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Privacy Revolution</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Connect with privacy advocates, developers, and enthusiasts from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <a href="https://x.com/noxprivacy?s=21" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl w-fit mb-4 group-hover:animate-bounce-subtle">
                <XIcon className="w-8 h-8 text-white animate-social-float" />
              </div>
              <h3 className="text-white text-xl mb-2">X (Twitter)</h3>
              <p className="text-gray-400 mb-4">Follow us for the latest updates and announcements</p>
              <div className="flex items-center gap-2 text-emerald-400">
                <span>Follow @NoxPrivacy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="https://t.me/noxprivacy" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-4 rounded-2xl w-fit mb-4 group-hover:animate-bounce-subtle">
                <Send className="w-8 h-8 text-white animate-telegram-send" />
              </div>
              <h3 className="text-white text-xl mb-2">Telegram</h3>
              <p className="text-gray-400 mb-4">Join our active community chat and get instant support</p>
              <div className="flex items-center gap-2 text-teal-400">
                <span>Join Group</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="#" className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl w-fit mb-4 group-hover:animate-bounce-subtle">
                <MessageCircle className="w-8 h-8 text-white animate-discord-pulse" />
              </div>
              <h3 className="text-white text-xl mb-2">Discord</h3>
              <p className="text-gray-400 mb-4">Connect with developers and contribute to the project</p>
              <div className="flex items-center gap-2 text-emerald-400">
                <span>Join Server</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-white text-3xl mb-4">Ready to Experience True Privacy?</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Start trading NoxPrivacy today and take control of your financial privacy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/30">
                Buy on Pump.fun
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('whitepaper')}
                className="group bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-emerald-500/30 hover:border-emerald-500/50 flex items-center gap-2"
              >
                <FileKey className="w-5 h-5" />
                View Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-emerald-500/20 bg-slate-950/50 backdrop-blur-xl overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/5 via-slate-950 to-teal-950/5" />
        
        {/* Floating Particles in Footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Animated Top Border Line */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Section with Animation */}
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <NoxLogo />
              </motion.div>
              <span className="text-white text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                NoxPrivacy
              </span>
            </motion.div>

            {/* Animated Divider */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-500/50" />
              <motion.div
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-500/50" />
            </motion.div>

            {/* Description with Gradient Animation */}
            <motion.p
              className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The future of private, secure, and anonymous cryptocurrency transactions.
              <br />
              <span className="text-emerald-400/70">Built on Solana • Powered by Zero-Knowledge</span>
            </motion.p>

            {/* Social Links with Hover Animation */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="https://x.com/noxprivacy?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://t.me/noxprivacy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 text-emerald-400" />
              </motion.a>
              
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-emerald-400" />
              </motion.a>
            </motion.div>

            {/* Copyright with Fade Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-500 text-xs">
                © 2026 NoxPrivacy. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Privacy First • Security Always • Decentralized Forever
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Animated Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent blur-sm"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </footer>
        </>
      )}
    </div>
  );
}
