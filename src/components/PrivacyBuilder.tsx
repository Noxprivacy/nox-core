import { InteractiveBuilder } from './InteractiveBuilder';
import { Shield, Lock, Eye, ArrowRight, Send, Key, Check, Zap } from 'lucide-react';

export function PrivacyBuilder() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl sm:text-5xl mb-4">
          Visual Circuit <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Builder</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Design custom zero-knowledge circuits with drag & drop - Build privacy-preserving proofs visually
        </p>
      </div>

      {/* Interactive Builder */}
      <InteractiveBuilder />

      {/* How It Works */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
            <Lock className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-white text-xl mb-3">1. Add Components</h3>
          <p className="text-gray-400 text-sm">
            Click components from the sidebar to add inputs, operations, and outputs to your circuit.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
          <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">
            <ArrowRight className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-white text-xl mb-3">2. Connect Nodes</h3>
          <p className="text-gray-400 text-sm">
            Drag nodes to position them and create logical connections between components.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
            <Check className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-white text-xl mb-3">3. Generate Code</h3>
          <p className="text-gray-400 text-sm">
            Export your circuit as Circom code, ready to compile and deploy on NoxPrivacy.
          </p>
        </div>
      </div>

      {/* Privacy Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg flex-shrink-0">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Zero-Knowledge Proofs</h4>
              <p className="text-gray-400 text-sm">
                Create circuits that prove statements without revealing the underlying data using ZK-SNARK technology.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-lg flex-shrink-0">
              <Key className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Privacy-Preserving Logic</h4>
              <p className="text-gray-400 text-sm">
                Build complex privacy logic with range checks, comparisons, and cryptographic operations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-lg flex-shrink-0">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Instant Compilation</h4>
              <p className="text-gray-400 text-sm">
                Generate optimized Circom code instantly and compile circuits in seconds for rapid development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg flex-shrink-0">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Production Ready</h4>
              <p className="text-gray-400 text-sm">
                Export battle-tested circuits that are audited and optimized for gas efficiency and security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Example Use Cases */}
      <div className="mt-12 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
        <h3 className="text-white text-2xl mb-6 text-center">Example Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Age Verification</h4>
            <p className="text-gray-400 text-sm">Prove you're over 18 without revealing your birth date</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Income Range</h4>
            <p className="text-gray-400 text-sm">Prove income is within a range without exact amount</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">KYC Compliance</h4>
            <p className="text-gray-400 text-sm">Verify identity attributes without exposing PII</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Credit Score</h4>
            <p className="text-gray-400 text-sm">Prove creditworthiness without revealing score</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Voting Systems</h4>
            <p className="text-gray-400 text-sm">Anonymous voting with verifiable eligibility</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Token Gating</h4>
            <p className="text-gray-400 text-sm">Prove token ownership without wallet exposure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
