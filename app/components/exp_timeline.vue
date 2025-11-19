<script setup lang="ts">
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
                <SlideIn class="uppercase">
                    {{ item.date }}
                </SlideIn>
            </template>

            <template #title="{ item }">
                <SlideIn>
                    {{ item.title }}
                </SlideIn>
            </template>

            <template #description="{ item }">
                <SlideIn>
                    <UAccordion :items="[{ label: item.description, content: item.content }]"
                        :ui="{ content: 'bg-ctp-base rounded-xl items-center align-middle text-center justify-center my-auto', body: 'p-2' }">

                        <!-- ? Only expand if content is present -->
                        <template #trailing="{ open }">
                            <span v-if="!item.content" />
                        </template>

                    </UAccordion>
                </SlideIn>
            </template>
        </UTimeline>
    </div>
</template>