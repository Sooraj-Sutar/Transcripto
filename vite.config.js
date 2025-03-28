import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // Fixes script paths for deployment
  plugins: [react()],
});
