import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SEO_PAGES = {
  '/about': '/about.html',
  '/process': '/process.html',
  '/portfolio': '/portfolio.html',
  '/faq': '/faq.html',
  '/contact': '/contact.html',
  '/services/design-mockup': '/services/design-mockup.html',
  '/services/working-mockup': '/services/working-mockup.html',
  '/services/cmf': '/services/cmf.html',
}

function seoRewrites() {
  const rewrite = (req) => {
    const [pathname, search] = (req.url || '/').split('?')
    const dest = SEO_PAGES[pathname]
    if (dest) req.url = search ? `${dest}?${search}` : dest
  }
  return {
    name: 'seo-rewrites',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), seoRewrites()],
})
