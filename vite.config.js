import postcss from './postcss.config.js';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  css:{
    postcss
  }
})