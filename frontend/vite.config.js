import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      "/api": {
        target: "http://localhost:5000"
      }
    },
    port: 5174, // Specify the port to run on (default is 3000)
  },
});
