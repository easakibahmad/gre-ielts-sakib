import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'; // newly added

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
});
