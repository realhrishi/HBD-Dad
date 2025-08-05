import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/hbd-dad/',
=======
>>>>>>> c37a940093bd7d2ce54ccbccd88dec384783ce2f
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
