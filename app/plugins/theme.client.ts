export default defineNuxtPlugin((_nuxtApp) => {
  const html = document.documentElement
  html.classList.add('macchiato')
})