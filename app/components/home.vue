<script setup lang="ts">
import { motion, MotionValue } from "motion-v"
import { useScroll, useTransform, useSpring } from "motion-v"
const { scrollYProgress } = useScroll();

function useParallax(value: MotionValue, distance: number) {
    const range = useTransform(value, [0, 0.3], [distance, -distance])
    return useSpring(range, { stiffness: 1000, damping: 100 })
}

const y = useParallax(scrollYProgress, 200);
</script>

<template>
    <motion.div :initial="{
        scale: 0.5,
        opacity: 0,
    }" :animate="{
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 1,
            stiffness: 100,
            damping: 10,
            restSpeed: 0.5,
            delay: 0.5,
            duration: 1,
        }
    }">
        <UPageHero title="Welcome to my website!" class="font-mono" />
    </motion.div>
    <motion.div :style="{ translateY: y }">
        <UPageCard
            description="Hi! My name's Rishabh Wanjari. I completed my BS-MS at IISER, Pune. I currently work at Fondazione Bruno Kessler, Italy. And no, I'm still not over my college life ending."
            variant="soft" reverse
            class="rounded-3xl text-center max-w-xl mx-auto shadow-2xl shadow-primary border-2 border-primary my-20 bg-ctp-crust z-10">
            <!-- ? Manually specify background to override bg-elevated/50 class -->
            <NuxtImg src="images/PXL_20220111_082227181.jpg" class="rounded-full object-cover w-64 h-64 mx-auto" />
        </UPageCard>
    </motion.div>

    <UPageHeader title="Contact Me" class="border-none -z-10" :ui="{
        title: 'mx-auto'
    }" />

    <UPageBody class="text-center mt-0">
        Here are some links to my accounts across the Internet:
        <div class="flex gap-2 my-4 justify-center">
            <NuxtLink to="https://github.com/rishabh-os" target="_blank">
                <UAvatar src="https://github.com/rishabh-os" size="3xl" icon="mdi:github" />
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/in/rishabh-wanjari" target="_blank">
                <UAvatar size="3xl" icon="mdi:linkedin" />
            </NuxtLink>
        </div>

        You can also contact me directly, via email:

        <UButton to="mailto:rishabhwanjari1@gmail.com" target="_blank" class="my-4 flex w-max mx-auto animated-gradient"
            size="lg" icon="lucide:mail">
            rishabhwanjari1@gmail.com
        </UButton>

    </UPageBody>


</template>