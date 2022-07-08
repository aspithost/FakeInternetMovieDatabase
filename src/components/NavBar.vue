<template>
    <nav class="base-layout py-4 flex items-center transition-all space-x-2">
        <router-link :to="{ name: 'Homepage' }" class="cursor-pointer hover:opacity-80">
            <img 
                src="/FIMDb.svg" 
                width="75" 
                height="30" 
                alt="FIMDb"
            />
        </router-link>

        <Search />   
    </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import Search from './Search.vue'

import useEventListener from '../composables/eventListener'
import useDebouncer from '../composables/debouncer'

const pages = [
    'Shows',
    'Episodes',
    'Celebs'
]

const onScroll = () => {
    const nav = document.querySelector('nav')
    if (window.scrollY > 100) {
        nav.classList.remove('py-4')
        nav.classList.add('py-2')
    } else if (window.scrollY < 84) {
        nav.classList.remove('py-2')
        nav.classList.add('py-4')
    }
}

onMounted (() => {
    useEventListener(window, 'scroll', useDebouncer(onScroll, 100))
})

</script>