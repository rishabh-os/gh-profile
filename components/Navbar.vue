<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <Icon name="fluent:navigation-20-filled" class="h-8 w-8" />
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Interests</a></li>
                    <li><a>Experience</a></li>
                    <li><a>Skills</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>About Me</a></li>
                <li><a>Interests</a></li>
                <li><a>Experience</a></li>
                <li><a>Skills</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="flex">
                <select class="select w-full max-w-xs" v-model="colorMode.preference">
                    <option disabled selected>Theme</option>
                    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                </select>
            </div>
            <label class="swap swap-flip">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                <Icon name="ph:sun-bold" class="swap-on w-10 h-10" />
                <Icon name="ph:moon-bold" class="swap-off w-10 h-10" />
            </label>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
    'system',
    "light",
    "dark",
    "pastel",
    "dracula",
];
</script>