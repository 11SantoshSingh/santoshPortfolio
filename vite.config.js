import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),          // If you're using React (already in your Vite setup)
    tailwindcss(),    // Add Tailwind CSS plugin
  ],
});