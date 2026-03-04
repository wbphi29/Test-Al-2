/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { LocalPage } from './pages/LocalPage';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { SEO } from './components/SEO';
import { ScrollToTop } from './components/ScrollToTop';
import { COMMUNES } from './constants';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <SEO 
            title="Électricien Bruxelles 24/7" 
            description="AL Électricité : Électricien agréé à Bruxelles. Dépannage urgent 24h/24, mise en conformité RGIE, installation et rénovation. Devis gratuit."
          />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Local Landing Pages */}
              {COMMUNES.map(c => {
                const slug = `electricien-${c.toLowerCase().replace(/ /g, '-')}`;
                return (
                  /* @ts-ignore */
                  <Route key={slug} path={`/${slug}`} element={<LocalPage />} />
                );
              })}

              {/* Catch-all for other communes or general local search */}
              <Route path="/electricien-:commune" element={<LocalPage />} />
              
              {/* Legal Pages */}
              <Route path="/mentions-legales" element={<div className="py-40 text-center">Mentions Légales - AL Électricité</div>} />
              <Route path="/politique-de-confidentialite" element={<div className="py-40 text-center">Politique de Confidentialité - AL Électricité</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
