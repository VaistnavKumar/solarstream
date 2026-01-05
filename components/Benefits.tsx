
import React from 'react';
import { Sun, Battery, ShieldCheck, Leaf } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 border-b border-dark-border bg-dark-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-mono text-brand mb-4 tracking-[0.3em] uppercase">/// WHY SOLARSTREAM?</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-tight">Infinite Power.<br />Zero Compromise.</h3>
          </div>
          <p className="text-gray-500 max-w-xs text-xs leading-relaxed uppercase tracking-wider">
            Total independence from volatile utilities. Fixed costs. Clean energy. A smarter future for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(220px,auto)]">
          {/* Independence */}
          <div className="md:col-span-2 bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-100 transition-opacity duration-500">
              <Sun className="w-20 h-20 text-brand" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-dark-900 w-10 h-10 flex items-center justify-center border border-dark-border mb-6">
                <span className="font-mono text-brand font-bold text-xs">01</span>
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight mb-2 text-white uppercase tracking-widest">Grid Independence</h4>
                <p className="text-gray-500 text-xs leading-relaxed tracking-wide">Generate and store your own energy. Protect yourself from rolling blackouts and unpredictable pricing surges during peak load hours.</p>
              </div>
            </div>
          </div>

          {/* Tax Incentives */}
          <div className="bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand/50 transition-all duration-500">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-dark-900 w-10 h-10 flex items-center justify-center border border-dark-border mb-6">
                <Leaf className="w-4 h-4 text-brand opacity-60" />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight mb-2 text-white uppercase tracking-widest">Tax Ready</h4>
                <p className="text-gray-500 text-xs leading-relaxed tracking-wide">We manage state and federal incentive claims. Enjoy a lower carbon footprint and higher property value from day one.</p>
              </div>
            </div>
          </div>

          {/* Battery */}
          <div className="bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand/50 transition-all duration-500">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-dark-900 w-10 h-10 flex items-center justify-center border border-dark-border mb-6">
                <Battery className="w-4 h-4 text-brand opacity-60" />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight mb-2 text-white uppercase tracking-widest">VoltStack Pro</h4>
                <p className="text-gray-500 text-xs leading-relaxed tracking-wide">High-density LFP storage ensures your backup power lasts 25+ years with minimal degradation and peak safety standards.</p>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="md:col-span-2 bg-brand text-black p-8 relative overflow-hidden group hover:bg-white transition-colors duration-500">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 flex items-center justify-center border border-black/20 mb-6 bg-black text-brand">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-sm">
                  <h4 className="text-xl font-bold tracking-tight mb-2 uppercase tracking-widest">System Warranty</h4>
                  <p className="text-black/70 text-xs font-bold leading-relaxed tracking-wide">A comprehensive 25-year service agreement. If your yield drops below 92%, we upgrade your hardware free of charge.</p>
                </div>
                <div className="text-[8vw] font-black leading-none tracking-tighter opacity-10 select-none uppercase">
                  ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
