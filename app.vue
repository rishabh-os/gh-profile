<template>
  <NuxtPwaManifest />
  <Navbar />
  <div v-locomotive class="flex flex-col justify-center items-center">
    <Hero />
    <div data-scrol-section class="h-screen">

      <Floating />
    </div>
  </div>
  <div class="h-screen"></div>
</template>

<script setup>
defineOgImageComponent('NuxtSeo', {
  title: 'Rishabh\'s Profile',
  description: 'My profile on the web',
  theme: '#23a6d5',
  colorMode: 'dark',
})
</script>