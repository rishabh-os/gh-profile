<template>
    <USeparator type="solid" class="h-px pt-4" />
    <UFooter>
        <p className="text-center">
            Last updated on {{ useRuntimeConfig().public.date }} <br />
            If
            you like the monospace
            font,
            check out
            <NuxtLink href="https://github.com/rubjo/victor-mono" target="_blank"
                className="underline decoration-2 underline-offset-2 font-bold text-ctp-blue">
                Victor Mono
            </NuxtLink>
            <br />
            The theme is
            <NuxtLink href="https://catppuccin.com" target="_blank"
                className="underline decoration-2 underline-offset-2 font-bold text-ctp-blue">
                Catpuccin (Macchiato)
            </NuxtLink>
        </p>
    </UFooter>
</template>