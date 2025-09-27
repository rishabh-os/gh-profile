<template>
  <div>
    <NuxtPwaAssets />
    <UApp>
      <NuxtLayout>
        <UMain>
          <Navbar />
          <UContainer class="max-w-5xl mt-24">
            <NuxtPage />
          </UContainer>
        </UMain>
      </NuxtLayout>
    </UApp>
  </div>
</template>