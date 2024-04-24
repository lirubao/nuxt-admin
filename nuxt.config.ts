// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [
        { name: "description", content: "Everyhing about Nuxt 3" }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.loli.net/icon?family=Material+Icons" }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
