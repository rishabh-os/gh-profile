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
        <UTimeline :items="items" size="3xl" :default-value="3" :ui="{
            item: 'even:flex-row-reverse even:-translate-x-[calc(100%-3rem)] even:text-right  max-w-96'
        }" class="translate-x-[calc(50%-1rem)]">
            <template #description="{ item }">
                <UAccordion :items="[{ label: item.description, content: item.content }]"
                    :ui="{ content: 'bg-blue-100 rounded-xl items-center align-middle text-center justify-center my-auto', body: 'py-2' }" />
            </template>
        </UTimeline>
    </div>
</template>