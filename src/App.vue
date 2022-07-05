<template>
    <div class="app min-h-screen bg-[#111] text-gray-200">

        <header class="lg:grid lg:grid-cols-11 sticky top-0 bg-[#222] w-full z-10">
            <NavBar class="base-layout" />
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

const route = useRoute()
</script>