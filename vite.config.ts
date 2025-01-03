import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://web-page-rag-api.fly.dev',
        changeOrigin: true,
        secure: false,
      }
    }
  }
}); 