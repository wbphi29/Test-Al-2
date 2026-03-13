import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const template = readFileSync('dist/index.html', 'utf-8')

const routes = [
  '/',
  '/blog',
  '/a-propos',
  '/contact',
  '/zones',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/services/installation-electrique',
  '/services/mise-en-conformite',
  '/services/depannage-electrique',
  '/services/renovation-electrique',
  '/services/tableaux-electriques',
  '/services/domotique',
  '/services/eclairage-interieur-exterieur',
  '/services/parlophonie-videophonie',
  '/services/installation-interphone',
  '/services/installation-detecteur-fumee',
  '/services/bornes-de-recharge',
  '/services/mise-a-la-terre',
  '/services/certificat-conformite',
  '/electricien-bruxelles',
  '/electricien-uccle',
  '/electricien-ixelles',
  '/electricien-anderlecht',
  '/electricien-schaerbeek',
  '/electricien-etterbeek',
  '/electricien-woluwe-saint-lambert',
  '/electricien-woluwe-saint-pierre',
  '/electricien-forest',
  '/electricien-molenbeek',
  '/electricien-auderghem',
  '/electricien-jette',
  '/electricien-evere',
  '/electricien-saint-gilles',
  '/electricien-berchem-sainte-agathe',
  '/electricien-koekelberg',
  '/electricien-watermael-boitsfort',
  '/electricien-ganshoren',
  '/electricien-saint-josse',
]

for (const route of routes) {
  const dir = join('dist', route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), template)
  console.log(`Generated: ${route}`)
}

console.log(`Done! ${routes.length} pages generated.`)
