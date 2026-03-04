import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Zap, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Mise en conformité électrique à Bruxelles : Guide complet 2026",
    excerpt: "Tout ce que vous devez savoir pour réussir votre contrôle électrique RGIE et obtenir votre certificat de conformité sans stress.",
    date: "15 Février 2026",
    author: "AL Électricité",
    image: "/images/mise-en-conformite-electrique.png"
  },
  {
    id: 2,
    title: "Dépannage électrique : Les 5 réflexes à avoir en cas de panne",
    excerpt: "Votre courant a sauté ? Voici les étapes de sécurité à suivre avant d'appeler votre électricien d'urgence à Bruxelles.",
    date: "10 Février 2026",
    author: "AL Électricité",
    image: "/images/depannage-electrique-urgent.png"
  },
  {
    id: 3,
    title: "Pourquoi installer une borne de recharge à domicile ?",
    excerpt: "Avantages, coûts et primes disponibles pour l'installation d'une station de recharge pour véhicule électrique en Belgique.",
    date: "05 Février 2026",
    author: "AL Électricité",
    image: "/images/cablage-electrique-professionnel.png"
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Blog Électricité Bruxelles" 
        description="Conseils d'experts, guides de mise en conformité et actualités de l'électricité à Bruxelles par AL Électricité."
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">Le Blog de <span className="text-brand-gradient">l'Électricité</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Conseils, normes et innovations pour votre installation électrique à Bruxelles.</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gradient text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Conseils
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 group-hover:text-primary-orange transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary-orange font-bold group-hover:translate-x-2 transition-transform pt-4">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="w-20 h-20 bg-brand-gradient rounded-3xl flex items-center justify-center mx-auto shadow-xl">
            <Zap className="text-white w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black tracking-tight">Vous avez un projet électrique ?</h2>
          <p className="text-xl text-slate-400">Ne laissez pas vos questions sans réponse. Nos experts vous conseillent gratuitement.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-12 py-6 rounded-2xl font-black text-xl shadow-xl shadow-primary-orange/20">
              Appeler le {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Envoyer un Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
