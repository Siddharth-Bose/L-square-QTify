// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/system',
      '@mui/base',
      '@mui/icons-material',
    ],
  },
  resolve: {
    dedupe: ['react', 'react-dom'], // Ensures React is not duplicated
  },
  build: {

    /** If you set esmExternals to true, this plugins assumes that 
      all external dependencies are ES modules */
 
    commonjsOptions: {
       esmExternals: true 
    },
 }
});
