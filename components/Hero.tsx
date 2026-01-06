
import React from 'react';
import { ArrowDownRight, Zap } from 'lucide-react';

interface HeroProps {
  navigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <header className="relative md:pt-40 md:pb-28 pt-28 pb-16 overflow-hidden border-b border-dark-border min-h-[75vh] flex items-center bg-dark-950">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        @keyframes beamDrop {
          0% { top: -50%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 150%; opacity: 0; }
        }
        @keyframes textRoll {
          0% { transform: translate3d(0, 110%, 0) rotateX(-50deg); opacity: 0; }
          100% { transform: translate3d(0, 0, 0) rotateX(0deg); opacity: 1; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-textRoll {
          animation: textRoll 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: bottom center;
          will-change: transform, opacity;
        }
      `}</style>
      
      <div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'glowPulse 8s ease-in-out infinite' }}></div>

      {/* Vertical Energy Flow Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute left-[8%] md:left-[15%] top-0 w-[1px] h-full bg-white/5">
             <div 
               className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-transparent via-[#22c55e] to-transparent shadow-[0_0_25px_#22c55e] opacity-80"
               style={{ animation: 'beamDrop 6s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
             ></div>
         </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand/30 rounded-full bg-brand/5 text-brand text-[10px] font-bold tracking-widest uppercase mb-8 animate-fadeInUp opacity-0">
              <Zap className="w-3 h-3" />
              <span>SolarStream Subscription</span>
            </div>

            {/* H1 - Roll Animation */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] uppercase mb-8 perspective-container">
              <div className="overflow-hidden">
                <div className="animate-textRoll opacity-0" style={{ animationDelay: '0.1s' }}>
                  Own the Sun.
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="animate-textRoll opacity-0 text-brand" style={{ animationDelay: '0.25s' }}>
                  Free the Grid.
                </div>
              </div>
            </h1>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl font-light leading-relaxed animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
              Decentralized power is here. Design, install, and monitor your personal energy farm for a fixed monthly rate. Zero upfront costs.
            </p>
          </div>

          {/* Action Group */}
          <div className="w-full md:w-auto flex flex-col gap-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={() => navigate('solutions')}
              className="w-full md:w-64 flex items-center justify-between bg-brand text-black px-6 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all duration-300 group shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              View System
              <ArrowDownRight className="w-4.5 h-4.5 group-hover:-rotate-90 transition-transform duration-300" />
            </button>
            <div className="text-[9px] text-gray-500 font-mono text-right tracking-widest leading-loose uppercase">
              * $0 Capital Outlay<br />
              * 24/7 Monitoring
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
