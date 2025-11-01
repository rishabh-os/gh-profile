<template>
    <div class="max-w-xl mx-auto text-center flex flex-col gap-y-10">
        <p>
            Although I'm a physics graduate on paper, what I'm truly passionate about is anything related to computers
            and
            coding. I'm very interested in machine learning and AI. I love to develop applications for other people.
            I also happen to be a Linux and FOSS enthusiast.
        </p>
        <p class="font-pinyon text-6xl">
            I use Arch BTW
        </p>
        <p>Here are some of the projects I've worked on:</p>

    </div>

    <UBlogPosts>
        <UBlogPost title="Nowcasting FBK"
            description="A web app to accurately predict the next hour of weather all across Italy."
            image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" variant="soft">

            <template #footer>
                <UButton to="https://nowcasting.fbk.eu" target="_blank" class="my-4 flex w-max mx-auto" size="lg"
                    variant="ghost" icon="lucide:globe" trailing-icon="lucide:external-link">
                    Website
                </UButton>
            </template>
        </UBlogPost>
    </UBlogPosts>
</template>