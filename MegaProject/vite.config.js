import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optional: Add a base URL if your app is not deployed at the root of a domain
  // base: '/your-base-url/',
  server: {
    // Optional: Configure server settings
    port: 3000, // You can change this to your preferred port
    open: true, // Automatically open the app in the browser
  },
  // Optional: Configure build settings
  build: {
    outDir: 'dist', // Specify output directory for build
    sourcemap: true, // Enable source maps for easier debugging
  },
});
