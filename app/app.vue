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
    <UMain data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>