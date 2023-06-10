export default defineNuxtConfig({
  modules: ['@nuxthq/ui'],
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: process.env.NUXT_API_SECRET,

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
    },
  },
  devtools: { enabled: true },
});
