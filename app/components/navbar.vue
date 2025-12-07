<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Home',
            icon: 'lucide:house',
            to: '#home',

        },
        {
            label: 'Interests',
            icon: 'lucide:star',
            to: '#interests',
        },
        {
            label: 'Experience',
            icon: 'lucide:keyboard',
            to: '#experience',
        },
        {
            label: 'Skills',
            icon: 'lucide:library',
            to: '#skills',
        }
    ],
])
</script>

<template>
    <UHeader mode="drawer" title="" :menu="{
        direction: 'top',
        handle: false,
        overlay: false,
        class: 'bg-default/75 backdrop-blur',
    }">

        <UNavigationMenu :items="items" />

        <template #body>
            <UNavigationMenu :items="items" orientation="vertical" />
        </template>
    </UHeader>
</template>