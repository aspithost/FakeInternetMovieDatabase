<template>
    <div class="app min-h-screen bg-[#111] text-gray-200">

        <header class="w-full z-10 sticky top-0 bg-[#222]">
            <div class="lg:grid lg:grid-cols-11">
                <NavBar />
            </div>
            <ProgressBar v-show="route.name === 'Show'" class="w-full md:hidden" />
        </header>

        

        <main class="lg:grid lg:grid-cols-11">
            <div class="base-layout">
                <router-view :key="route.path" />
            </div>
        </main>
        
        <footer class="lg:grid lg:grid-cols-11">
            <Footer class="base-layout" />
        </footer>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import ProgressBar from './components/ProgressBar.vue'

const route = useRoute()
</script>