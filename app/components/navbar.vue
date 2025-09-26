<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Home',
            icon: 'lucide:house',
        },
        {
            label: 'About Me',
            icon: 'lucide:info',
        },
        {
            label: 'Interests',
            icon: 'lucide:star',
        },
        {
            label: 'Experience',
            icon: 'lucide:keyboard',
        },
        {
            label: 'Skills',
            icon: 'lucide:library',
        }
    ],
])
</script>

<template>
    <div class="fixed top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
        <UNavigationMenu color="neutral" :items="items"
            class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5" />
    </div>
</template>