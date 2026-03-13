import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Zap, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';
import type { SsgOptions } from 'vite-plugin-ssg/utils';

export const ssgOptions: SsgOptions = {
  slug: 'blog/mise-en-conformite-electrique-bruxelles-guide-2026',
  routeUrl: '/blog/1',
};

export const BlogPost: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Mise en conformité électrique à Bruxelles : Guide complet 2026" 
        description="Tout ce que vous devez savoir pour réussir votre contrôle électrique RGIE et obtenir votre certificat de conformité sans stress à Bruxelles."
      />

      <section className="pt-20 pb-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-orange transition-colors font-bold text-sm uppercase tracking-widest mb-12">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
            Mise en conformité électrique à Bruxelles : Guide complet 2026
          </h1>
          <div className="flex items-center gap-6 text-slate-500 font-bold text-sm uppercase tracking-widest border-b border-slate-200 pb-8">
            <span>Par AL Électricité</span>
            <span>•</span>
            <span>15 Février 2026</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
            <p className="text-xl font-medium text-slate-900 leading-relaxed">
              La mise en conformité électrique est une étape cruciale pour tout propriétaire à Bruxelles. Que ce soit lors de la vente d'un bien, après une rénovation majeure ou simplement pour garantir la sécurité de votre foyer, comprendre les exigences du RGIE (Règlement Général sur les Installations Électriques) est indispensable.
            </p>

            <h2 className="text-3xl font-black text-slate-900 pt-8">1. Pourquoi la mise en conformité est-elle obligatoire ?</h2>
            <p>
              En Belgique, et particulièrement dans la Région de Bruxelles-Capitale, la loi impose que toute installation électrique domestique soit conforme aux normes de sécurité. L'objectif principal est de prévenir les risques d'incendie d'origine électrique et les accidents par électrocution. Une installation non conforme est non seulement dangereuse, mais elle peut également entraîner des complications majeures avec votre assurance en cas de sinistre.
            </p>

            <h2 className="text-3xl font-black text-slate-900 pt-8">2. Les points clés du contrôle RGIE</h2>
            <p>
              Lors du passage de l'organisme agréé, plusieurs éléments seront scrupuleusement vérifiés :
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Les schémas électriques :</strong> Vous devez disposer d'un schéma unifilaire et d'un schéma de position de l'installation.</li>
              <li><strong>La mise à la terre :</strong> La présence d'une boucle de terre efficace est fondamentale pour évacuer les courants de défaut.</li>
              <li><strong>Les dispositifs différentiels :</strong> Ils doivent être présents et tester régulièrement pour couper le courant en cas de fuite.</li>
              <li><strong>L'isolation des conducteurs :</strong> Aucun fil dénudé ou boîte de dérivation ouverte ne doit être accessible.</li>
              <li><strong>La protection contre les surintensités :</strong> Les disjoncteurs doivent être correctement calibrés selon la section des câbles.</li>
            </ul>

            <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white my-16 space-y-8">
              <Zap className="text-primary-yellow w-16 h-16" />
              <h3 className="text-3xl font-black">Besoin d'une mise en conformité rapide ?</h3>
              <p className="text-slate-400 text-xl">
                AL Électricité prépare votre installation et coordonne le passage de l'organisme agréé pour vous garantir un certificat positif.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-brand-gradient text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" /> {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-black text-slate-900 pt-8">3. Les étapes pour réussir votre mise en conformité</h2>
            <p>
              Réussir son contrôle électrique ne s'improvise pas. Voici la marche à suivre recommandée par nos experts :
            </p>
            <h3 className="text-2xl font-bold text-slate-900">Étape 1 : Le pré-diagnostic</h3>
            <p>
              Faites appel à un électricien professionnel pour réaliser un audit de votre installation. Cela permet d'identifier les infractions potentielles avant le passage officiel de l'inspecteur.
            </p>
            <h3 className="text-2xl font-bold text-slate-900">Étape 2 : La réalisation des schémas</h3>
            <p>
              Si vous ne les possédez plus, votre électricien devra redessiner les schémas unifilaires et de position. C'est souvent l'infraction la plus courante lors des ventes immobilières.
            </p>
            <h3 className="text-2xl font-bold text-slate-900">Étape 3 : Les travaux de remise aux normes</h3>
            <p>
              Remplacement des prises sans terre, installation de différentiels manquants, ou réfection complète du tableau électrique si nécessaire.
            </p>

            <h2 className="text-3xl font-black text-slate-900 pt-8">Conclusion</h2>
            <p>
              La mise en conformité électrique à Bruxelles est un investissement pour votre sécurité et la valeur de votre patrimoine. Ne attendez pas le dernier moment, surtout si vous envisagez de vendre votre bien. Chez AL Électricité, nous vous accompagnons de A à Z pour transformer cette obligation légale en une simple formalité technique.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-black text-slate-900">Une question sur vos schémas électriques ?</h2>
          <p className="text-slate-600">Nos experts vous répondent directement par téléphone.</p>
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="inline-flex bg-brand-gradient text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-xl">
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  );
};
