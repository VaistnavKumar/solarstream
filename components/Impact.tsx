
import React from 'react';
import { Leaf, Globe, DollarSign, CloudOff } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    { label: 'CO2 SAVED', value: '450k', unit: 'Tons', icon: CloudOff },
    { label: 'USER SAVINGS', value: '$12M', unit: 'USD', icon: DollarSign },
    { label: 'TOTAL NODES', value: '8.4k', unit: 'Live', icon: Globe },
    { label: 'TREES EQUIV', value: '1.2M', unit: 'Trees', icon: Leaf },
  ];

  return (
    <section className="py-20 border-b border-dark-border bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-3 mb-4">
                <stat.icon className="w-4 h-4 text-brand opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-[9px] font-mono text-gray-500 tracking-[0.3em] uppercase">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white group-hover:text-brand transition-colors">{stat.value}</span>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
