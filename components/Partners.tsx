
import React from 'react';

const Partners: React.FC = () => {
  const partners = ['TESLA_GRID', 'SUNRUN_TECH', 'ENPHASE_ENERGY', 'SOLAREDGE', 'PANASONIC_PRO', 'LG_CHEM'];

  return (
    <section className="py-12 border-b border-dark-border bg-dark-950 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-mono text-gray-600 tracking-[0.4em] uppercase">Built with Industry Standards</span>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee items-center gap-24 px-12">
          {partners.concat(partners).map((partner, idx) => (
            <span key={idx} className="text-xl font-black text-white/20 hover:text-white/40 transition-colors font-mono tracking-tighter italic">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
