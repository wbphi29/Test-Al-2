import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, COMMUNES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Votre partenaire de confiance pour tous travaux d'électricité générale à Bruxelles. Dépannage urgent 24h/24 et 7j/7.
            </p>
            <div className="space-y-3">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-3 text-white font-bold hover:text-primary-yellow transition-colors">
                <Phone className="w-5 h-5 text-primary-orange" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary-orange" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-orange" />
                {COMPANY_INFO.area}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Zones d'intervention</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {COMMUNES.slice(0, 10).map(c => (
                <Link key={c} to={`/electricien-${c.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">{c}</Link>
              ))}
            </div>
          </div>

          {/* Contact direct */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact direct</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                  <ArrowRight className="w-4 h-4 text-primary-orange" />
                  Page de contact
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                  <ArrowRight className="w-4 h-4 text-primary-orange" />
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                  <ArrowRight className="w-4 h-4 text-primary-orange" />
                  Notre blog
                </Link>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-6 py-3 rounded-xl font-black text-center block shadow-lg mt-6">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés. TVA: {COMPANY_INFO.tva}
          </p>
          <div className="flex gap-8 text-sm">
            <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-white">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
