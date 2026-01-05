
import React from 'react';
import { BarChart3, CloudSun, Cpu, Smartphone, ShieldCheck } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-20 border-b border-dark-border bg-dark-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-mono text-brand mb-4 tracking-[0.3em] uppercase">/// CORE TECHNOLOGY</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">Smart Power Infrastructure.</h3>
          </div>
          <p className="text-gray-500 max-w-xs text-xs leading-relaxed text-right md:text-left uppercase tracking-wide">
            Enterprise-grade monitoring and high-efficiency photovoltaic cells powering thousands of grid-independent nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-container">
          {/* Energy Monitor Card */}
          <div className="group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-[450px] transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(204,255,0,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 gap-2 z-20">
              <BarChart3 className="w-3.5 h-3.5 text-brand" />
              <div className="ml-2 h-4 w-40 bg-dark-800 rounded flex items-center px-2 text-[9px] text-gray-600 font-mono tracking-widest">REALTIME_GRID_V2.0</div>
            </div>
            <div className="pt-14 h-full bg-dark-900 p-6 flex flex-col gap-6 group-hover:translate-y-[-5px] transition-transform duration-700 ease-out">
              <div className="flex justify-between items-center">
                <div className="px-2 py-0.5 rounded bg-brand/20 text-brand text-[9px] font-bold animate-pulse uppercase tracking-widest">OUTPUT: 12.4 kW</div>
                <div className="w-3 h-3 rounded-full bg-brand/40"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-800 p-4 rounded border border-white/5">
                  <div className="text-[9px] text-gray-500 font-mono mb-2 uppercase tracking-widest">VOLTAGE</div>
                  <div className="text-xl font-bold">240.2V</div>
                </div>
                <div className="bg-dark-800 p-4 rounded border border-white/5">
                  <div className="text-[9px] text-gray-500 font-mono mb-2 uppercase tracking-widest">EFFICIENCY</div>
                  <div className="text-xl font-bold text-brand">98.4%</div>
                </div>
              </div>
              <div className="flex-1 bg-dark-800 rounded border border-white/5 p-4 relative overflow-hidden flex items-center justify-center">
                 <div className="relative w-40 h-40 border-2 border-brand/20 rounded-full flex items-center justify-center">
                    <div className="absolute inset-1 border border-brand/40 border-dashed rounded-full animate-[spin_15s_linear_infinite]"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white tracking-tighter">OPTIMAL</div>
                      <div className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Load Logic</div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-30">
              <div className="text-[10px] font-mono text-brand mb-1 uppercase tracking-widest">Hardware Layer</div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tighter">StreamFlow Interface</h4>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-52 hover:scale-[1.01] transition-transform duration-500">
               <div className="absolute inset-0 bg-dark-800 flex items-center justify-center p-8">
                  <div className="w-full h-full grid grid-cols-8 gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    {Array.from({length: 32}).map((_, i) => (
                      <div key={i} className="bg-brand/20 border border-brand/10"></div>
                    ))}
                  </div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <Cpu className="w-10 h-10 text-brand group-hover:scale-110 transition-transform opacity-60" />
               </div>
              <div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                <h4 className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">Neural Predictor Engine</h4>
              </div>
            </div>

            <div className="group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-52 hover:scale-[1.01] transition-transform duration-500">
              <div className="pt-10 h-full bg-dark-900 p-8 flex items-center justify-between">
                <div className="space-y-4">
                  <div className="w-24 h-1.5 bg-brand/20 rounded"></div>
                  <div className="w-40 h-10 bg-dark-800 border border-white/10 rounded-lg flex items-center px-4 gap-3">
                    <Smartphone className="w-4 h-4 text-brand opacity-60" />
                    <div className="w-20 h-1.5 bg-white/10 rounded"></div>
                  </div>
                </div>
                <CloudSun className="w-12 h-12 text-brand/10 group-hover:text-brand/30 transition-colors" />
              </div>
              <div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                <h4 className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">Remote Control Hub</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: ShieldCheck, title: 'Node Security', desc: 'Hardware-level encryption protecting every power node in your local network.' },
            { icon: BarChart3, title: 'Cost Optimizer', desc: 'Intelligent grid switching ensures you always use the cheapest energy source.' },
            { icon: Smartphone, title: 'Cloud Sync', desc: 'Monitor energy yield and hardware health from anywhere on any device.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-dark-850 p-6 border border-dark-border rounded-xl group hover:border-brand/30 transition-colors">
              <item.icon className="w-6 h-6 text-brand mb-5 group-hover:scale-110 transition-transform opacity-70" />
              <h5 className="text-sm font-bold uppercase mb-2 tracking-widest">{item.title}</h5>
              <p className="text-xs text-gray-500 leading-relaxed tracking-wide">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
