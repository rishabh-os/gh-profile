<template>

    <div class="flex text-7xl mt-48 font-mono mx-auto font-bold text-wrap">
        <div v-for="(item, index) in 'Welcome!'" :key="index">
            <div v-motion-roll-bottom :delay="index * 50">
                {{ item }}
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">

</script>