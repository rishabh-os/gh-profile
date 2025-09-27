<script setup lang="ts">
const work_items = ref([
    {
        date: 'September 2023 - Current',
        title: 'Data Scientist, Fondazione Bruno Kessler, Italy',
        description: 'Working with large scale state of the art deep learning models for analyzing spatio-temporal data to enable precise predictions.',
        icon: 'i-lucide-rocket',
        content: 'I\'m working on it!'
    },
    {
        date: 'June 2022 - June 2023',
        title: 'Associate Solution Advisor, Deloitte, India',
        description: 'Engaged in thorough analysis and validation of financial models for banks. Conducted assessments, used statistical methods, and collaborated with teams to improve accuracy and performance.',
        icon: 'lucide:banknote',
        content: 'Confidentiality agreements forbid me from going into more detail. Suffice to say, the clients we worked with were large MNCs that greatly benefited from the work we did together.'
    }
])
const education_items = ref([
    {
        date: 'August 2017 - May 2022',
        title: 'BS-MS Dual Degree in Physics, IISER, Pune',
        description: 'There isn\'t much to say academically here, so instead I\'ll just say a few words about the experiences I\'ve had at IISER. I\'m extremely grateful to all my friends for the best 5 years of my life. IISER was an unforgettable adventure, and one that I will cherish for the rest of my life.',
        icon: 'lucide:graduation-cap',
    }
])
</script>

<template>
    <ExpTimeline title="Work" :items="work_items" />
    <ExpTimeline title="Projects" :items="work_items" />
    <ExpTimeline title="Education" :items="education_items" />

</template>