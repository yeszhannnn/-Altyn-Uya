import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '5173-iajjiax7f7swdn9budtc8-2b6545af.us2.manus.computer',
      'localhost',
      '127.0.0.1',
      '169.254.0.21',
    ],
  },
})
