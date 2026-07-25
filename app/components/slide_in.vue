<script setup lang="ts">
import { motion, useInView } from "motion-v"
import { ref } from "vue"

const props = defineProps<{
    delay?: number
}>()

const containerRef = ref<HTMLElement | null>(null)
const isInView = useInView(containerRef, { once: true })
</script>

<template>
    <div class="overflow-x-hidden">
        <motion.div ref="containerRef" :initial="{
            opacity: 0,
        }" :animate="isInView ? {
            translateX: 0,
            opacity: 1,
        } : {
            translateX: '100%',
            opacity: 0,
        }" :transition="{ duration: 1, type: 'spring', bounce: 0.1, delay: props.delay }" class="h-full">
            <slot />
        </motion.div>
    </div>
</template>