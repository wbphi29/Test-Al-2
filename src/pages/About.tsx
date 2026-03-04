import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, Zap, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { COMPANY_INFO, SERVICES, COMMUNES } from '../constants';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="À propos de AL Électricité" 
        description="Découvrez l'histoire et l'expertise de AL Électricité, votre entreprise d'électricité générale de confiance à Bruxelles depuis 2010."
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
                L'expertise Électrique au cœur de <span className="text-brand-gradient">Bruxelles</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Depuis {COMPANY_INFO.foundingDate}, AL Électricité s'engage à fournir des services électriques de haute qualité aux particuliers et professionnels de la capitale. Notre mission : votre sécurité et votre confort.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-4xl font-black text-primary-orange">15+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Années d'Expérience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-primary-orange">5000+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Interventions</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-primary-orange">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Agréé RGIE</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Design-sans-titre-59.webp" 
                  alt="Équipe AL Électricité au travail" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nos Valeurs Fondamentales</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Ce qui nous définit et guide chacune de nos interventions sur le terrain.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Sécurité Absolue", desc: "Nous ne faisons aucun compromis sur la sécurité. Chaque installation est testée rigoureusement selon les normes RGIE." },
              { icon: Clock, title: "Réactivité Maximale", desc: "Parce qu'une panne électrique n'attend pas, nous intervenons en urgence 24h/24 dans tout Bruxelles." },
              { icon: Award, title: "Qualité Artisanale", desc: "Nous allions savoir-faire traditionnel et technologies modernes pour des résultats durables et esthétiques." }
            ].map((val, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <val.icon className="text-primary-orange w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Faites confiance à un expert local</h2>
          <p className="text-xl text-slate-400">Besoin d'un conseil ou d'une intervention ? Nous sommes à votre écoute.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-xl">
              {COMPANY_INFO.phone}
            </a>
            <Link to="/contact" className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white/10 transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
