import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages serves the site under /<repo>/, so the base path comes from the deploy workflow
// (VITE_BASE=/safar-saathi-site/); locally it is "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
