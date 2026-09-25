import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/haithem-new-portfolio-/', // 👈 مسار المستودع لحل الصفحة البيضاء
})