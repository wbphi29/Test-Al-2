import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Zap, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, IMG_VERSION, COMMUNES } from '../constants';
import { SEO } from '../components/SEO';
import type { SsgOptions } from 'vite-plugin-ssg/utils';

export const ssgOptions: SsgOptions = {
  slug: 'electricien-bruxelles',
  routeUrl: '/electricien-bruxelles',
};

export const LocalPage: React.FC = () => {
  const { commune } = useParams<{ commune: string }>();
  const communeName = commune ? commune.charAt(0).toUpperCase() + commune.slice(1).replace(/-/g, ' ') : 'Bruxelles';

  // Dynamic SEO variations
  const seoTitle = communeName === 'Bruxelles' 
    ? `Électricien Bruxelles 24/7 | Dépannage & Installation Électrique`
    : `Électricien à ${communeName} | Dépannage Électrique Urgent 24/7`;
  
  const h1Title = communeName === 'Bruxelles'
    ? `Électricité Générale à Bruxelles`
    : `Électricien Agréé à ${communeName}`;

  return (
    <div className="flex flex-col">
      <SEO 
        title={seoTitle} 
        description={`Expert électricien à ${communeName}. Dépannage urgent 24h/24, installation, mise en conformité RGIE et rénovation électrique à ${communeName}. Devis gratuit et intervention rapide.`}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FF7A00,transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary-yellow">
              <MapPin className="w-4 h-4" />
              Service de Proximité : {communeName}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
              {h1Title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              AL Électricité est votre partenaire local pour tous travaux électriques à {communeName}. Nous garantissons une intervention rapide en moins de 30 minutes pour vos urgences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-primary-orange/40 btn-hover-effect">
                <Phone className="w-6 h-6" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all btn-hover-effect">
                Contact Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Pourquoi choisir AL Électricité à {communeName} ?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Habiter à {communeName} nécessite un électricien qui connaît parfaitement le quartier et peut intervenir sans délai. Que vous soyez près de la maison communale ou dans les quartiers résidentiels, nos techniciens sont stratégiquement positionnés pour vous servir.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Disponibilité Totale", d: "Nous sommes présents à {communeName} 24h/24, même les jours fériés." },
                  { t: "Conformité RGIE", d: "Toutes nos interventions respectent les normes belges les plus strictes." },
                  { t: "Prix Compétitifs", d: "Tarifs transparents et adaptés au marché local bruxellois." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Zap className="text-primary-orange w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d.replace('{communeName}', communeName)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/contact" className="text-primary-orange font-bold hover:underline flex items-center gap-2">
                  Prendre contact avec un expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={`https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-4.webp?v=${IMG_VERSION}`} 
                  alt={`Dépannage électrique urgent à ${communeName} par AL Électricité`} 
                  width="800"
                  height="1000"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Commune */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nos interventions à {communeName}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Découvrez l'étendue de nos services électriques pour particuliers et professionnels dans votre commune.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map(s => (
              <Link key={s.id} to={`/services/${s.slug}`} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-orange transition-all group">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary-orange transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{s.description}</p>
                <ArrowRight className="w-5 h-5 text-primary-orange group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Un problème électrique à {communeName} ?</h2>
          <p className="text-xl text-slate-600">Nos techniciens sont en route. Appelez-nous maintenant pour une assistance immédiate.</p>
          <div className="flex flex-col items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-16 py-8 rounded-[2.5rem] font-black text-3xl shadow-2xl shadow-primary-orange/30 hover:scale-105 transition-all">
              {COMPANY_INFO.phone}
            </a>
            <Link to="/contact" className="text-slate-400 font-bold hover:text-primary-orange transition-colors">
              Ou envoyez-nous un email direct
            </Link>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm italic">Urgence 24h/24 • 7j/7 • {communeName}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
