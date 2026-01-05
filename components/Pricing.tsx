
import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Residential',
      price: '89',
      features: ['Up to 4kW Output', 'Inverter Included', 'Standard App', 'Annual Health Check', 'Tier-1 Photovoltaics'],
      cta: 'Subscribe',
      featured: false
    },
    {
      name: 'Business',
      price: '249',
      features: ['Up to 15kW Output', 'VoltStack (5kWh)', 'Priority Monitoring', 'Load Balancing', 'Full Warranty'],
      cta: 'Get Business',
      featured: true
    },
    {
      name: 'Industrial',
      price: 'Custom',
      features: ['Custom MW Arrays', 'Unlimited Storage', 'Grid Integration', '24/7 Support', 'Redundant Hardware'],
      cta: 'Consult Sales',
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 border-b border-dark-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-mono text-brand mb-4 tracking-[0.4em] uppercase">/// PRICING MODEL</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Clean Energy Access.</h3>
          <p className="text-gray-500 text-xs uppercase tracking-widest">Flat monthly rates. No inflation. Forever power.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-8 border transition-all duration-500 relative ${
                plan.featured 
                  ? 'bg-dark-900 border-brand md:-translate-y-2 shadow-[0_0_40px_rgba(204,255,0,0.05)] scale-102' 
                  : 'bg-dark-800 border-dark-border hover:border-gray-600'
              }`}
            >
              {plan.featured && <div className="absolute top-0 right-0 bg-brand text-black text-[9px] font-black uppercase px-3 py-1 tracking-widest">Recommended</div>}
              <div className="mb-8">
                <h4 className={`text-lg font-bold uppercase tracking-widest ${plan.featured ? 'text-brand' : 'text-white'}`}>{plan.name}</h4>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-mono font-bold text-white">{plan.price === 'Custom' ? plan.price : `$${plan.price}`}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600 text-[10px] font-mono uppercase">/mo</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-10 text-[11px] text-gray-400 font-mono tracking-wide">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5"><Check className="w-3.5 h-3.5 text-brand opacity-60" /> {f}</li>
                ))}
              </ul>
              <button className={`mt-auto w-full py-4 text-center text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${plan.featured ? 'bg-brand text-black hover:bg-white' : 'border border-white/20 hover:bg-white hover:text-black'}`}>{plan.cta}</button>
            </div>
          ))}
        </div>

        <div className="bg-dark-800 border border-dark-border p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
           <div className="w-12 h-12 bg-brand/5 rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-brand opacity-60" />
           </div>
           <div className="text-center md:text-left">
              <h5 className="text-sm font-bold uppercase mb-1 tracking-widest">Referral Rewards</h5>
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">Invite neighbors to SolarStream. Get 3 months free upon their activation.</p>
           </div>
           <button className="md:ml-auto border border-brand/30 text-brand px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-brand hover:text-black transition-all">Details</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
