import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, ArrowLeft, CheckCircle2, Zap, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES, COMMUNES } from '../constants';
import { SEO } from '../components/SEO';
import type { SsgOptions } from 'vite-plugin-ssg/utils';
import * as Icons from 'lucide-react';

export const ssgOptions: SsgOptions = {
  slug: 'services/installation-electrique',
  routeUrl: '/services/installation-electrique',
};

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-black text-slate-900">Service non trouvé</h1>
          <Link to="/" className="text-primary-orange font-bold flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as any)[service.icon];

  return (
    <div className="flex flex-col">
      <SEO 
        title={service.title} 
        description={`${service.title} à Bruxelles par AL Électricité. Expertise certifiée, intervention rapide et travail soigné. Devis gratuit.`}
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-orange transition-colors font-bold text-sm uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Retour
              </Link>
              <div className="w-20 h-20 bg-brand-gradient rounded-3xl flex items-center justify-center shadow-xl">
                <IconComponent className="text-white w-10 h-10" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                {service.title} à <span className="text-brand-gradient">Bruxelles</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {service.description} Nous assurons un service professionnel, sécurisé et conforme aux normes RGIE pour tous vos besoins en {service.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary-orange/20 btn-hover-effect">
                  <Phone className="w-6 h-6" />
                  Appeler un Expert
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 btn-hover-effect">
                  <Mail className="w-6 h-6" />
                  Email Direct
                </a>
              </div>
            </motion.div>
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  width="800"
                  height="1000"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-600">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Pourquoi nous confier votre {service.title.toLowerCase()} ?</h2>
                <p className="mb-6">
                  Une installation électrique défaillante ou non conforme peut représenter un danger réel pour votre sécurité et celle de vos proches. Chez AL Électricité, nous mettons notre expertise de plus de 15 ans à votre service pour garantir une installation fiable, durable et parfaitement sécurisée.
                </p>
                <div className="grid sm:grid-cols-2 gap-8 my-12">
                  {[
                    { t: "Expertise Technique", d: "Maîtrise complète des dernières technologies et normes RGIE." },
                    { t: "Matériel de Qualité", d: "Utilisation exclusive de composants de marques reconnues." },
                    { t: "Garantie Décennale", d: "Toutes nos interventions majeures sont couvertes et garanties." },
                    { t: "Suivi Personnalisé", d: "Un interlocuteur unique pour toute la durée de vos travaux." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <CheckCircle2 className="text-primary-orange w-6 h-6 mb-4" />
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                      <p className="text-sm leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Notre processus d'intervention</h3>
                <p className="mb-8">
                  Nous suivons une méthodologie rigoureuse pour assurer la qualité de chaque projet :
                </p>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-gradient text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <h5 className="font-bold text-slate-900">Analyse et Diagnostic</h5>
                      <p className="text-sm">Évaluation précise de vos besoins et de l'état actuel de votre installation.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-gradient text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <h5 className="font-bold text-slate-900">Devis Détaillé</h5>
                      <p className="text-sm">Proposition technique et financière transparente, sans engagement.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-gradient text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <h5 className="font-bold text-slate-900">Réalisation des Travaux</h5>
                      <p className="text-sm">Exécution soignée par nos techniciens qualifiés dans le respect des délais.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-8">
              <div className="bg-slate-900 p-8 rounded-[2rem] text-white space-y-6">
                <Zap className="text-primary-yellow w-12 h-12" />
                <h3 className="text-2xl font-black leading-tight">Besoin d'une intervention urgente ?</h3>
                <p className="text-slate-400">Nos électriciens sont disponibles 24h/24 pour tout dépannage à Bruxelles.</p>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="block w-full bg-brand-gradient text-white py-4 rounded-xl font-black text-center text-lg shadow-xl">
                  {COMPANY_INFO.phone}
                </a>
                <Link to="/contact" className="block w-full bg-white/10 text-white py-4 rounded-xl font-bold text-center text-sm border border-white/20">
                  Nous contacter
                </Link>
                <p className="text-center text-xs font-bold uppercase tracking-widest opacity-50">Intervention en 30 min</p>
              </div>

              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-6">
                <h4 className="font-bold text-slate-900">Autres Services</h4>
                <div className="space-y-3">
                  {SERVICES.filter(s => s.id !== service.id).slice(0, 5).map(s => (
                    <Link key={s.id} to={`/services/${s.slug}`} className="block p-4 bg-white rounded-xl border border-slate-100 hover:border-primary-orange transition-colors text-sm font-bold text-slate-600">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-12">Votre électricien de proximité à Bruxelles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {COMMUNES.slice(0, 8).map(c => (
              <Link key={c} to={`/electricien-${c.toLowerCase().replace(/ /g, '-')}`} className="px-6 py-3 bg-white rounded-full text-sm font-bold text-slate-600 shadow-sm border border-slate-100 hover:border-primary-orange transition-colors">
                Électricien {c}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
