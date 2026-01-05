
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sun } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  navigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'border-dark-border bg-dark-900/90 backdrop-blur-md h-16' : 'border-transparent bg-transparent h-20'}`}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <button 
          onClick={() => navigate('home')}
          className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2 group"
        >
          <Sun className="w-6 h-6 text-brand group-hover:rotate-90 transition-transform duration-500" />
          SolarStream
        </button>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`hover:text-white transition-colors uppercase ${currentPage === link.id ? 'text-brand' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => navigate('pricing')}
            className="flex items-center gap-2 bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-dark-border transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-8 text-sm font-bold uppercase tracking-widest">
          <button onClick={() => { navigate('home'); setIsOpen(false); }} className={`text-left hover:text-brand transition-colors ${currentPage === 'home' ? 'text-brand' : ''}`}>Home</button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { navigate(link.id); setIsOpen(false); }}
              className={`text-left hover:text-brand transition-colors ${currentPage === link.id ? 'text-brand' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => { navigate('pricing'); setIsOpen(false); }} className="bg-brand text-black p-4 text-center text-xs font-black uppercase tracking-widest">Subscribe Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
