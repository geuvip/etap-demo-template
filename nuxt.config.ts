

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },



  server: {
    host: '0.0.0.0', // Tüm IP adreslerinden erişim sağlamak için
    port: 3000 // Port numarası
  },

  modules: [
    '@pinia/nuxt', // Pinia modülü
  
  ],

  

  css: [
    '~/assets/styles/main.scss',
    'bootstrap/dist/css/bootstrap.css'
  ],
  

  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' }
  ],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://jsonplaceholder.typicode.com'
    }
  },
})
