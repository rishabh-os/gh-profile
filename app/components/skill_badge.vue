<script setup lang="ts">
import { motion, useInView } from "motion-v"
import { ref } from "vue"

interface SkillProps {
    icon: string
    name: string
    class: string
}

const props = defineProps<SkillProps>()

const badgeRef = ref<HTMLElement | null>(null)
// @ts-expect-error
// ? Idk y no intellisense
const isInView = useInView(badgeRef, { once: true })
</script>

<template>
    <motion.div ref="badgeRef" class="mb-2 font-inter saturate-[.80]" :style="{
        scale: isInView ? 1 : 2,
        opacity: isInView ? 1 : 0,
        transition: 'all 1.5s cubic-bezier(0.05, 0.7, 0.1, 1.0) 0.6s',
    }">

        <div
            :class="props.class + ' m-4 flex h-12 w-40 content-center items-center justify-center rounded-lg px-2 py-2.5 text-center shadow-lg'">

            <NuxtImg :src="'/images/logos/' + props.icon + '.svg'" class="h-8 w-8" />
            <p className="prose ml-2 font-medium text-white">{{ props.name }}</p>
        </div>

    </motion.div>
</template>