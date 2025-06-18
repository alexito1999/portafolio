import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '#icons', replacement: path.resolve(__dirname, 'src/components/icons/Icons.jsx') },
      { find: '#button', replacement: path.resolve(__dirname, 'src/components/Button.jsx') },
      { find: '#link', replacement: path.resolve(__dirname, 'src/components/Link.jsx') },
      { find: '#assets', replacement: path.resolve(__dirname, 'src/assets') }
    ]
  },
})
