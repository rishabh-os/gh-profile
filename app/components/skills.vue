<template>
    <UPageHeader title="Skills" class="border-none" />

    <UPageHeader title="Machine Learning" class="border-none" :ui="{
        title: 'font-normal text-3xl!'
    }" />
    <div class="flex flex-wrap justify-center">

        <SkillBadge class="bg-linear-to-r from-sky-500 to-sky-400 shadow-sky-500" icon=python name="Python" />
        <SkillBadge class="bg-linear-to-r from-[#FF6F00] to-[#FFA800] shadow-orange-500" icon=tensorflow
            name="TensorFlow" />
        <SkillBadge class="bg-linear-to-r from-[#F04B2F] to-[#F05F42] shadow-red-500" icon=pytorch name="Pytorch" />
        <SkillBadge class="bg-linear-to-r from-sky-800 to-sky-600 shadow-sky-600" icon=plotly name="Plotly" />
    </div>

    <UPageHeader title="Mobile Dev" class="border-none" :ui="{
        title: 'font-normal text-3xl!'
    }" />
    <div class="flex flex-wrap justify-center">

        <SkillBadge class="bg-linear-to-r from-blue-500 to-sky-400 shadow-blue-400" icon=flutter name="Flutter" />
        <SkillBadge class="bg-linear-to-r from-blue-500 to-sky-400 shadow-blue-400" icon=dart name="Dart" />
    </div>

    <UPageHeader title="Web Dev" class="border-none" :ui="{
        title: 'font-normal text-3xl!'
    }" />
    <div class="flex flex-wrap justify-center">
        <SkillBadge class="bg-linear-to-r from-emerald-700 to-emerald-500 shadow-emerald-500" icon=vue name="Vue.js" />
        <SkillBadge class="bg-linear-to-r from-sky-600 to-sky-500 shadow-sky-500" icon=react name="React.js" />
        <SkillBadge class="bg-linear-to-r from-[#E03871] to-[#EE40EE] shadow-pink-500" icon=astro name="Astro" />
        <SkillBadge class="bg-linear-to-r from-green-700 to-green-600 shadow-green-500" icon=mongodb name="MongoDB" />
        <SkillBadge class="bg-linear-to-r from-blue-500 to-blue-400 shadow-blue-500" icon=aws name="AWS" />
        <SkillBadge class="bg-linear-to-r from-[#1D63ED] to-[#1D63ED]/50 shadow-blue-500" icon=docker name="Docker" />
        <SkillBadge class="bg-linear-to-r from-slate-900 to-slate-800 shadow-slate-900" icon=tailwindcss
            name="TailwindCSS" />

    </div>
    <UPageHeader title="Fleeting Interests" class="border-none" :ui="{
        title: 'font-normal text-3xl!'
    }" />
    <div class="flex flex-wrap justify-center">

        <SkillBadge class="bg-linear-to-r from-gray-600 to-gray-500 shadow-gray-500" icon=julia name="Julia" />
        <SkillBadge class="bg-linear-to-r from-[#CE412B] to-orange-600 shadow-orange-500" icon=rust name="Rust" />
    </div>

</template>