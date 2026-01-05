
import React from 'react';
import { Sun } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = ['Photovoltaic', 'Grid Independence', 'Battery Storage', 'Smart Monitoring', 'Sustainable', 'Tier-1 Tech'];
  
  return (
    <div className="border-b border-dark-border bg-dark-800 overflow-hidden py-4 select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 px-6">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-4xl font-bold uppercase tracking-tighter text-stroke opacity-50">{item}</span>
              <Sun className="w-8 h-8 text-brand" />
            </React.Fragment>
          ))}
        </div>
        <div className="flex animate-marquee items-center gap-12 px-6" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`copy-${idx}`}>
              <span className="text-4xl font-bold uppercase tracking-tighter text-stroke opacity-50">{item}</span>
              <Sun className="w-8 h-8 text-brand" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
