import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})


// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/fooddeliveryapp/',
//   build: {
//     outDir: '../backend/public',
//   },
// });



// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     outDir: '../backend/public',
//   },
// });



