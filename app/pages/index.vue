<template>
    <UPageHero title="Welcome to my website!" class="font-mono" />
    <UPageCard
        description="Hi! My name's Rishabh Wanjari. I completed my BS-MS at IISER, Pune. I currently work at Fondazione Bruno Kessler, Italy. And no, I'm still not over my college life ending."
        variant="soft" reverse class="rounded-3xl text-center max-w-xl mx-auto">
        <NuxtImg src="images/PXL_20220111_082227181.jpg" class="rounded-full object-cover w-64 h-64 mx-auto" />
    </UPageCard>

    <UPageHeader title="Contact Me" class="border-none" :ui="{
        // ? Make the text centered
        wrapper: 'lg:flex-col',
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

        <UButton to="mailto:rishabhwanjari1@gmail.com" target="_blank" class="my-4 flex w-max mx-auto" size="lg"
            icon="lucide:mail">
            rishabhwanjari1@gmail.com
        </UButton>

    </UPageBody>


</template>