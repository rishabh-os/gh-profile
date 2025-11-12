<template>
    <div id="interests" class="max-w-xl mx-auto text-center flex flex-col gap-y-10 py-14">
        <p>
            Although I'm a physics graduate on paper, what I'm truly passionate about is anything related to computers
            and
            coding. I'm very interested in machine learning and AI. I love to develop applications for other people.
            I also happen to be a Linux and FOSS enthusiast.
        </p>
        <p class="font-pinyon text-6xl tracking-widest">
            I use Arch BTW
        </p>
        <p>Here are some of the projects I've worked on:</p>

    </div>

    <UBlogPosts class="pb-10">
        <UBlogPost title="Nowcasting FBK"
            description="A web app to accurately predict the next hour of weather all across Italy"
            image="images/nowcasting-fbk.png" variant="soft">

            <template #footer>
                <UButton to="https://nowcasting.fbk.eu" target="_blank" class="my-4 flex w-max mx-auto" size="lg"
                    variant="ghost" icon="lucide:globe" trailing-icon="lucide:external-link">
                    Website
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="Moniz" description="An app to manage and keep track of your expenses."
            image="images/moniz.png" variant="soft">

            <template #footer>
                <UButton to="https://github.com/rishabh-os/moniz" target="_blank" class="my-4 flex w-max mx-auto"
                    size="lg" variant="ghost" icon="lucide:github" trailing-icon="lucide:external-link">
                    GitHub
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="This website!"
            description="My personal profile on the web, made with Vue, Nuxt.js and TailwindCSS"
            image="images/website.png" variant="soft">

            <template #footer>
                <UButton to="https://github.com/rishabh-os/gh-profile" target="_blank" class="my-4 flex w-max mx-auto"
                    size="lg" variant="ghost" icon="lucide:github" trailing-icon="lucide:external-link">
                    GitHub
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="Dot Files"
            description="A collection of all my dot files for the (objectively) best desktop experience"
            image="images/dotfiles.png" variant="soft">

            <template #footer>
                <UButton to="https://github.com/rishabh-os/Dot-Files" target="_blank" class="my-4 flex w-max mx-auto"
                    size="lg" variant="ghost" icon="lucide:github" trailing-icon="lucide:external-link">
                    GitHub
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="React Flowcharts"
            description="A 3 month freelance project, taken from conceptual idea to execution"
            image="images/flowchart.png" variant="soft">

            <template #footer>
                <UButton to="https://nowcasting.fbk.eu" target="_blank" class="my-4 flex w-max mx-auto" size="lg"
                    variant="ghost" icon="lucide:globe" trailing-icon="lucide:external-link">
                    More info
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="Sidekick" description="A DnD companion app made with Flutter" image="images/list.png"
            variant="soft">

            <template #footer>
                <UButton to="https://github.com/rishabh-os/dnd_sidekick" target="_blank" class="my-4 flex w-max mx-auto"
                    size="lg" variant="ghost" icon="lucide:github" trailing-icon="lucide:external-link">
                    GitHub
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="Mimamsa Buzzers"
            description="An app for handling the final Mains event for Mimamsa, a national level quiz competition for undergraduates"
            image="images/image10.png" variant="soft">

            <template #footer>
                <UButton to="https://gist.github.com/rishabh-os/41aed05521d2e207d7208b4159edec6a" target="_blank"
                    class="my-4 flex w-max mx-auto" size="lg" variant="ghost" icon="lucide:github"
                    trailing-icon="lucide:external-link">
                    Gist
                </UButton>
            </template>
        </UBlogPost>

        <UBlogPost title="Temdex" description="A comprehensive and up-to-date encyclopedia for the game Temtem"
            image="images/temtem_preview.jpg" variant="soft">

            <template #footer>
                <UButton to="https://github.com/rishabh-os/Temdex" target="_blank" class="my-4 flex w-max mx-auto"
                    size="lg" variant="ghost" icon="lucide:github" trailing-icon="lucide:external-link">
                    GitHub
                </UButton>
            </template>
        </UBlogPost>
    </UBlogPosts>
</template>