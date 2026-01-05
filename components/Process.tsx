
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { phase: 'PHASE_01', title: 'Site Audit', desc: 'Drone-assisted scanning of your property to optimize panel placement for maximum irradiance.' },
    { phase: 'PHASE_02', title: 'Permitting', desc: 'We handle the bureaucratic complexity of local utility connections and city engineering permits.' },
    { phase: 'PHASE_03', title: 'Activation', desc: 'One-day installation by our certified technicians. Flip the switch and start saving instantly.' },
  ];

  return (
    <section id="process" className="py-24 border-b border-dark-border bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand mb-4">/// WORKFLOW</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Power Independence<br />in 14 Days.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-dark-border">
          {steps.map((step, idx) => (
            <div key={idx} className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
              <span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand transition-colors">{step.phase}</span>
              <h4 className="text-xl font-bold uppercase mb-4">{step.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}

          {/* Scale Step */}
          <div className="border-b border-r border-dark-border p-8 bg-dark-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand/5"></div>
            <span className="text-xs font-mono text-brand mb-6 block">PHASE_04</span>
            <h4 className="text-xl font-bold uppercase mb-4 text-white">Monitoring</h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Continuous hardware health checks and automated maintenance alerts included.</p>
            <div className="h-1 w-full bg-dark-700 overflow-hidden relative">
              <div className="h-full bg-brand w-1/2 animate-[progress_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default Process;
