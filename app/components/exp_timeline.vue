<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <UPageHeader :title="title" class="border-none" :ui="{
        // ? Make the text centered
        wrapper: 'lg:flex-col',
    }" />
    <div class="overflow-clip">
        <UTimeline :items="items" size="3xl" :default-value="10" :ui="{
            item: 'max-w-2xl'
        }" class="justify-self-center">
            <template #description="{ item }">
                <UAccordion :items="[{ label: item.description, content: item.content }]"
                    :ui="{ content: 'bg-ctp-base rounded-xl items-center align-middle text-center justify-center my-auto', body: 'py-2' }">

                    <!-- ? Only expand if content is present -->
                    <template #trailing="{ open }">
                        <span v-if="!item.content" />
                    </template>

                </UAccordion>
            </template>
        </UTimeline>
    </div>
</template>