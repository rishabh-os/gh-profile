<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Home',
            icon: 'lucide:house',
            to: '/',
        },
        {
            label: 'Interests',
            icon: 'lucide:star',
            to: '/interests',
        },
        {
            label: 'Experience',
            icon: 'lucide:keyboard',
            to: '/experience',
        },
        {
            label: 'Skills',
            icon: 'lucide:library',
            to: '/skills',
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