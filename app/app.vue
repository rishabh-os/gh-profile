<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "macchiato"
  }
})
</script>

<template>
  <NuxtPwaAssets />
  <UApp>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>