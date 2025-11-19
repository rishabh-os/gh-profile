<script setup lang="ts">
import { motion, useInView } from "motion-v"
import { useTemplateRef } from "vue"

const elementRef = useTemplateRef<HTMLElement | null>('elementRef')
// @ts-ignore
const isInView = useInView(elementRef, { once: true })
</script>

<template>
    <motion.div ref="elementRef" :initial="{
        translateX: '100%',
        opacity: 0,
    }" :animate="isInView ? {
        translateX: 0,
        opacity: 1,
    } : {
        translateX: '100%',
        opacity: 0,
    }" :transition="{ duration: 1, type: 'spring', bounce: 0.2 }">
        <slot />
    </motion.div>
</template>