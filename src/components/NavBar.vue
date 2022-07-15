<template>
    <nav class="base-layout py-4 flex items-center transition-all space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
            @click="openAside = !openAside"
            width="24" height="24"
            viewBox="0 0 24 24" 
            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="cursor-pointer">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>

        <aside>
            <ul 
                :class="[
                    'absolute min-h-screen w-full md:w-[50%] lg:w-[40%] xl:w-[30%] left-0 top-0 z-10 space-y-2 py-4 \
                        transition-all duration-500 ease-in-out \
                        bg-[#333] shadow-md',
                        { 'left-[-100%] md:left-[-50%] lg:left-[-40%] xl:left-[-30%]': !openAside}
                ]"
            >
                <li v-for="page in pages" class="cursor-pointer"> 
                    <details class="space-y-1 px-4">
                        <summary class="text-lg font-bold sm:text-xl md:text-2xl">{{ page }}</summary>
                        <div
                            v-for="item in store.state[page.toLowerCase()]" 
                            class="flex justify-between"        
                        >    
                            <router-link
                                @click="openAside = false"
                                class="hover:bg-[#444] w-full px-8 block lg:font-semibold"
                                :to="{
                                    name: `${page.slice(0, -1)}`,
                                    params: {
                                        id: item.id,
                                        slug: item.name
                                            .toLowerCase()
                                            .replace(/\s|\W/, '-')
                                    }
                                }"
                            >
                                {{ item.name }}
                            </router-link>
                            <img 
                                @click="store.remove(page.toLowerCase(), item)"
                                src="/cancel.svg"
                                height="24"
                                width="24"
                                class="hover:opacity-60"  
                            />
                        </div>
                    </details>
                </li>
            </ul>
        </aside>
        
        <div 
            :class="['body-locker', 
                { 'absolute top-0 left-0 min-h-screen w-full bg-[#333] bg-opacity-50': openAside }
            ]">
        </div>
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

import store from '../store'

import Search from './Search.vue'

import useEventListener from '../composables/eventListener'
import useDebouncer from '../composables/debouncer'

const pages = [
    'Shows',
    'Episodes',
    'Celebs'
]

const openAside = ref(false)

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

    useEventListener(document.querySelector('.body-locker'), 'click', () => {
        openAside.value = false
    })

    useEventListener(document, 'keydown', () => {
        if (event.key === 'Escape' && openAside.value) {
            openAside.value = false
        }
    })
})

</script>