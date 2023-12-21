import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10000, // Adjust this value based on your preference (e.g., 1000 KB)
  },
  plugins: [react()],
});
