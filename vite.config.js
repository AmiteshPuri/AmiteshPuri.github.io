import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site served from the domain root: base '/'.
// Assets are referenced through import.meta.env.BASE_URL (see src/util.jsx),
// so nothing breaks if this is ever moved under a sub-path.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
