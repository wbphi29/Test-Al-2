import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES, COMMUNES } from '../constants';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Contactez AL Électricité" 
        description="Contactez AL Électricité à Bruxelles pour vos urgences ou projets électriques. Pas de formulaire, contact direct par téléphone ou email."
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FF7A00,transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight">Contact <span className="text-brand-gradient">Direct</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Chez AL Électricité, nous privilégions le contact direct pour une réactivité maximale. Pas de formulaires interminables, appelez-nous ou envoyez-nous un email.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Phone CTA */}
            <div className="bg-brand-gradient p-12 rounded-[3rem] text-white space-y-8 shadow-2xl shadow-primary-orange/30">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                <Phone className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black leading-tight">Urgences & Devis par Téléphone</h2>
              <p className="text-xl opacity-90">
                Nos électriciens sont à votre écoute 24h/24 pour tout dépannage urgent ou demande d'information.
              </p>
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="block w-full bg-white text-primary-orange py-8 rounded-2xl font-black text-center text-4xl shadow-xl hover:scale-[1.02] transition-transform"
              >
                {COMPANY_INFO.phone}
              </a>
              <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest opacity-80">
                <Clock className="w-5 h-5" />
              Intervention en 30 min à Bruxelles
              </div>
            </div>

            {/* Email CTA */}
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white space-y-8 shadow-2xl">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center">
                <Mail className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black leading-tight">Demandes par Email</h2>
              <p className="text-xl text-slate-400">
                Pour vos projets de rénovation, mise en conformité ou installation, envoyez-nous vos détails par email.
              </p>
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="block w-full bg-slate-800 text-white py-8 rounded-2xl font-black text-center text-3xl border border-white/10 hover:bg-slate-700 transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
              <div className="space-y-4 pt-4 border-t border-white/10">
                <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Informations Entreprise</p>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <p><span className="text-slate-500">Nom :</span> {COMPANY_INFO.name}</p>
                  <p><span className="text-slate-500">TVA :</span> {COMPANY_INFO.tva}</p>
                  <p><span className="text-slate-500">Zone :</span> {COMPANY_INFO.area}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Area Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Zone d'intervention : Toute la Région Bruxelloise</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nous couvrons les 19 communes de Bruxelles pour tout type de travaux électriques.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COMMUNES.map(c => (
              <Link 
                key={c} 
                to={`/electricien-${c.toLowerCase().replace(/ /g, '-')}`}
                className="px-6 py-3 bg-white rounded-full text-sm font-bold text-slate-600 shadow-sm border border-slate-100 hover:border-primary-orange transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Footer */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="text-primary-orange font-bold hover:underline">Retour à l'accueil</Link>
          <div className="flex gap-8">
            <Link to={`/services/${SERVICES[0].slug}`} className="text-slate-600 hover:text-primary-orange font-medium">Installation</Link>
            <Link to={`/services/${SERVICES[1].slug}`} className="text-slate-600 hover:text-primary-orange font-medium">Conformité</Link>
            <Link to={`/electricien-uccle`} className="text-slate-600 hover:text-primary-orange font-medium">Uccle</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
