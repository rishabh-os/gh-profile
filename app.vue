<template>
  <NuxtPwaManifest />
  <Navbar />
  <div class="flex flex-col justify-center items-center">
    <Hero />
    <Floating />
  </div>
</template>

<script setup>
defineOgImageComponent('NuxtSeo', {
  title: 'Rishabh\'s Profile',
  description: 'My profile on the web',
  theme: '#23a6d5',
  colorMode: 'dark',
})
</script>