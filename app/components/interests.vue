<script setup lang="ts">
const projects = [
    {
        title: "Nowcasting FBK",
        description: "A web app to accurately predict the next hour of weather all across Italy",
        image: "images/nowcasting-fbk.png",
        link: "https://nowcasting.fbk.eu",
        linkText: "Website",
        icon: "lucide:globe"
    },
    {
        title: "Moniz",
        description: "An app to manage and keep track of your expenses.",
        image: "images/moniz.png",
        link: "https://github.com/rishabh-os/moniz",
        linkText: "GitHub",
        icon: "lucide:github"
    },
    {
        title: "This website!",
        description: "My personal profile on the web, made with Vue, Nuxt.js and TailwindCSS",
        image: "images/website.png",
        link: "https://github.com/rishabh-os/gh-profile",
        linkText: "GitHub",
        icon: "lucide:github"
    },
    {
        title: "Dot Files",
        description: "A collection of all my dot files for the (objectively) best desktop experience",
        image: "images/dotfiles.png",
        link: "https://github.com/rishabh-os/Dot-Files",
        linkText: "GitHub",
        icon: "lucide:github"
    },
    {
        title: "React Flowcharts",
        description: "A 3 month freelance project, taken from conceptual idea to execution",
        image: "images/flowchart.png",
        link: "https://nowcasting.fbk.eu",
        linkText: "More info",
        icon: "lucide:globe"
    },
    {
        title: "Sidekick",
        description: "A DnD companion app made with Flutter",
        image: "images/list.png",
        link: "https://github.com/rishabh-os/dnd_sidekick",
        linkText: "GitHub",
        icon: "lucide:github"
    },
    {
        title: "Mimamsa Buzzers",
        description: "An app for handling the final Mains event for Mimamsa, a national level quiz competition for undergraduates",
        image: "images/image10.png",
        link: "https://gist.github.com/rishabh-os/41aed05521d2e207d7208b4159edec6a",
        linkText: "Gist",
        icon: "lucide:github"
    },
    {
        title: "Temdex",
        description: "A comprehensive and up-to-date encyclopedia for the game Temtem",
        image: "images/temtem_preview.jpg",
        link: "https://github.com/rishabh-os/Temdex",
        linkText: "GitHub",
        icon: "lucide:github"
    }
]
</script>

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

    <UBlogPosts>
        <SlideIn v-for="(project, index) in projects" :key="project.title" :delay="(index % 3) * 0.1">
            <UBlogPost :title="project.title" :description="project.description" :image="project.image" variant="soft"
                class="h-full">
                <template #footer>
                    <UButton :to="project.link" target="_blank" class="my-4 flex w-max mx-auto" size="lg"
                        variant="ghost" :icon="project.icon" trailing-icon="lucide:external-link">
                        {{ project.linkText }}
                    </UButton>
                </template>
            </UBlogPost>
        </SlideIn>
    </UBlogPosts>
</template>