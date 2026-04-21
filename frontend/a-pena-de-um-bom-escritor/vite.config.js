import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Otimizar todas as imagens WebP
        if (url.searchParams.has('webp') || url.pathname.endsWith('.webp')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '85',
          })
        }
        return new URLSearchParams()
      }
    })
  ],
  build: {
    // Compressão de assets
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 1000,
  },
})
