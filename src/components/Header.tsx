import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Zap className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">{COMPANY_INFO.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Électricité Générale</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="relative group py-4">
                  <Link 
                    to={link.path} 
                    className={`text-sm font-bold flex items-center gap-1 transition-colors ${location.pathname === link.path ? 'text-primary-orange' : 'text-slate-600 hover:text-primary-orange'}`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
                  </Link>
                  
                  {link.submenu && (
                    <div className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl border border-slate-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      {link.submenu.map((sub) => (
                        <Link 
                          key={sub.path} 
                          to={sub.path} 
                          className="block px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-orange transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="bg-brand-gradient text-white px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 shadow-lg btn-hover-effect"
              >
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-12 space-y-6 max-h-[80vh] overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="space-y-3">
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)} 
                      className="block text-lg font-black text-slate-900"
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-slate-100">
                        {link.submenu.map(sub => (
                          <Link 
                            key={sub.path} 
                            to={sub.path} 
                            onClick={() => setIsOpen(false)} 
                            className="text-slate-600 font-bold hover:text-primary-orange py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`} 
                    className="w-full bg-brand-gradient text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Appeler AL Électricité
                  </a>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    Envoyer un Email
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Sticky Call Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[60]">
        <a 
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="w-16 h-16 bg-brand-gradient text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary-orange/40 animate-bounce"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </>
  );
};
