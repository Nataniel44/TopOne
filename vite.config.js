import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: 'img/**/*', dest: 'dist/img' }],
      verbose: true,
    }),
  ],
  base: '/TopOne/',
});
