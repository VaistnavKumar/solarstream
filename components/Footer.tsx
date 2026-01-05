
import React from 'react';
import { ArrowUpRight, Sun } from 'lucide-react';

interface FooterProps {
  navigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer id="contact" className="bg-dark-900 pt-20 pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6 text-brand">
              <Sun className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter uppercase">SolarStream</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-[0.8]">
              Power<br /><span className="text-brand">Forever.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
              The last energy decision you'll ever need to make. Join the decentralized revolution today.
            </p>
            <a href="mailto:hello@solarstream.io" className="inline-flex items-center gap-2 border-b-2 border-brand text-xl font-bold text-white hover:text-brand transition-colors pb-1 group">
              hello@solarstream.io
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24 text-sm text-gray-400">
            <div className="flex flex-col gap-4">
              <span className="text-white font-black uppercase tracking-widest text-[10px]">Platform</span>
              <button onClick={() => navigate('solutions')} className="text-left hover:text-brand transition-colors font-mono text-xs">SOLUTIONS</button>
              <button onClick={() => navigate('benefits')} className="text-left hover:text-brand transition-colors font-mono text-xs">BENEFITS</button>
              <button onClick={() => navigate('pricing')} className="text-left hover:text-brand transition-colors font-mono text-xs">PRICING</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-black uppercase tracking-widest text-[10px]">Company</span>
              <a href="#" className="hover:text-brand transition-colors font-mono text-xs">MISSION</a>
              <a href="#" className="hover:text-brand transition-colors font-mono text-xs">PRIVACY</a>
              <a href="#" className="hover:text-brand transition-colors font-mono text-xs">TERMS</a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-600 font-mono uppercase tracking-[0.3em]">
          <div>© 2024 SOLARSTREAM ENERGY SOLUTIONS.</div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse shadow-[0_0_8px_#ccff00]"></div>
            SYSTEM STATUS: OPTIMAL
          </div>
        </div>
        
        {/* Large Stylized Branding */}
        <div className="mt-16 select-none pointer-events-none">
          <h1 className="text-[15vw] leading-none font-black text-center tracking-tighter text-stroke opacity-10 hover:opacity-20 transition-all duration-700 hover:text-brand/5">
            SOLARSTREAM
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
