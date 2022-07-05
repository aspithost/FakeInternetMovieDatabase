<template> 
    <span class="scroller flex overflow-x-scroll gap-x-4 py-4">
        <ItemCard v-for="show in shows" :show="show"/>
    </span>
</template>

<script setup>
import ItemCard from './ItemCard.vue'

const props = defineProps({
    shows: Array
})
</script>

<style scoped>
.scroller {
    scrollbar-width: thin;
    scrollbar-color: #888 #222;
}
::-webkit-scrollbar {
    height: 8px;
}
::-webkit-scrollbar-track {
    background: #222;
}
::-webkit-scrollbar-thumb {
    background: #888;
}
::-webkit-scrollbar-thumb:hover {
    background: #777;
}
::-webkit-scrollbar-thumb:active {
    background: #444;
}
</style>