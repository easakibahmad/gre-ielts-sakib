import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'; // newly added
import path from 'path'; 


export default defineConfig({
  plugins: [solidPlugin(),
    tailwindcss(), // newly added
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: { // newly added
      '@': path.resolve(__dirname, './src'),
    },
  },
});
