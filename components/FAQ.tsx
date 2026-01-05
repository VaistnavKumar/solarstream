
import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "What happens if it's cloudy?",
      a: "Our N-Type Bi-Facial panels are designed to capture ambient light and ground reflections, maintaining high efficiency even in overcast conditions. Excess energy stored in your VoltStack battery ensures continuous power through the night."
    },
    {
      q: "Is maintenance included?",
      a: "Yes. Our subscription covers all hardware health monitoring, seasonal cleanings, and emergency repairs. If a panel is damaged by environmental factors, we replace it at zero cost to you."
    },
    {
      q: "Can I take the system with me if I move?",
      a: "SolarStream agreements are transferable to the new property owner, often increasing the property's market value. Alternatively, we offer relocation services to uninstall and reinstall the system at your new location."
    },
    {
      q: "What is the VoltStack battery life?",
      a: "Our batteries are rated for 10,000 cycles at 90% depth of discharge. This typically translates to 15-20 years of high-performance use, and we replace them as part of your refresh cycle."
    }
  ];

  return (
    <section className="py-24 border-b border-dark-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Solar Intelligence</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-dark-800 border border-dark-border open:border-brand/30 transition-all duration-300 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-white hover:text-brand transition-colors list-none">
                <span className="uppercase tracking-widest text-sm">{faq.q}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed animate-fadeIn">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
