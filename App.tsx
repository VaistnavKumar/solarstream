
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Impact from './components/Impact';
import Partners from './components/Partners';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handlePopState = () => {
      const page = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(page);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return (
          <>
            <Portfolio />
            <div className="py-20 bg-dark-950 border-b border-dark-border text-center">
               <h3 className="text-[10px] font-mono text-brand mb-4 tracking-[0.3em] uppercase">/// NEXT STEP</h3>
               <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8">Ready for deployment?</h4>
               <button onClick={() => navigate('process')} className="bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-brand transition-colors">View Deployment Process</button>
            </div>
          </>
        );
      case 'benefits':
        return (
          <>
            <Benefits />
            <Impact />
          </>
        );
      case 'pricing':
        return (
          <>
            <Pricing />
            <FAQ />
          </>
        );
      case 'process':
        return <Process />;
      case 'home':
      default:
        return (
          <>
            <Hero navigate={navigate} />
            <Marquee />
            <Impact />
            <Partners />
            <div className="py-20 border-b border-dark-border text-center bg-dark-950 px-6">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">Energy Freedom.</h2>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto text-xs leading-relaxed uppercase tracking-wider">Join the thousands of homes and businesses already operating on a carbon-neutral, independent power grid.</p>
              <button 
                onClick={() => navigate('solutions')}
                className="text-brand hover:text-white transition-colors uppercase font-mono tracking-[0.2em] text-[11px] font-bold"
              >
                Explore System Specs &rarr;
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans bg-dark-900 text-white selection:bg-brand selection:text-black flex flex-col">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
