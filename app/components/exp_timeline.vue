<script setup lang="ts">
import { motion } from "motion-v"
import type { TimelineItem } from '@nuxt/ui'
defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array as () => TimelineItem[],
        required: true
    }
})
</script>

<template>
    <UPageHeader :title="title" class="border-none" :ui="{
        title: 'font-normal'
    }" />
    <div class="overflow-clip">
        <UTimeline :items="items" size="3xl" :default-value="10" :ui="{
            item: 'max-w-2xl'
        }" class="justify-self-center">
            <template #date="{ item }">
                <motion.div :initial="{
                    translateX: '100%',
                    opacity: 0,
                }" :animate="{
                    translateX: 0,
                    opacity: 1,

                }" :transition="{ duration: 1, type: 'spring' }" class="uppercase">
                    {{ item.date }}
                </motion.div>
            </template>

            <template #title="{ item }">
                <motion.div :initial="{
                    translateX: '100%',
                    opacity: 0,
                }" :animate="{
                    translateX: 0,
                    opacity: 1,

                }" :transition="{ duration: 1, type: 'spring' }">
                    {{ item.title }}
                </motion.div>
            </template>

            <template #description="{ item }">
                <motion.div :initial="{
                    translateX: '100%',
                    opacity: 0,
                }" :animate="{
                    translateX: 0,
                    opacity: 1,

                }" :transition="{ duration: 1, type: 'spring' }">
                    <UAccordion :items="[{ label: item.description, content: item.content }]"
                        :ui="{ content: 'bg-ctp-base rounded-xl items-center align-middle text-center justify-center my-auto', body: 'p-2' }">

                        <!-- ? Only expand if content is present -->
                        <template #trailing="{ open }">
                            <span v-if="!item.content" />
                        </template>

                    </UAccordion>
                </motion.div>
            </template>
        </UTimeline>
    </div>
</template>