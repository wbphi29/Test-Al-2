import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Zap, Phone } from 'lucide-react';
import { COMMUNES, COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const Zones: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Zones d'intervention Électricité Bruxelles" 
        description="AL Électricité intervient dans les 19 communes de Bruxelles. Dépannage urgent 24h/24 et travaux électriques de proximité."
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">Nos Zones <span className="text-brand-gradient">d'Intervention</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Nous couvrons l'ensemble des 19 communes de la Région de Bruxelles-Capitale avec une intervention rapide garantie.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMUNES.map((c) => (
              <Link 
                key={c} 
                to={`/electricien-${c.toLowerCase().replace(/ /g, '-')}`}
                className="group p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-primary-orange/20 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-brand-gradient transition-colors">
                    <MapPin className="text-primary-orange group-hover:text-white w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Électricien {c}</h2>
                  <p className="text-slate-600">Service de dépannage urgent et installation électrique à {c}.</p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-primary-orange font-bold group-hover:translate-x-2 transition-transform">
                  Voir les services <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="w-20 h-20 bg-brand-gradient rounded-3xl flex items-center justify-center mx-auto shadow-xl">
            <Zap className="text-white w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black tracking-tight">Besoin d'un électricien dans votre commune ?</h2>
          <p className="text-xl text-slate-400">Nos techniciens sont basés stratégiquement pour intervenir en moins de 30 minutes partout à Bruxelles.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-12 py-6 rounded-2xl font-black text-xl shadow-xl shadow-primary-orange/20">
              Appeler le {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
