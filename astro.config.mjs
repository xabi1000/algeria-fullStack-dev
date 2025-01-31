import { defineConfig } from 'astro/config'
import deno from '@deno/astro-adapter'

export default defineConfig({
  output: 'server',
  adapter: deno(),
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
  // Opcional: Prefijo para el idioma por defecto
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'ar'],
    routing: {
      prefixDefaultLocale: true,
    },
    typescript: {
      strict: false, // Reduce el chequeo de tipos
      check: false, // Desactiva la verificación de tipos en el build
    },
  },
  vite: {
    build: {
      assetsInclude: ['**/*.json'], // <-- Aquí
    },
  },
})
