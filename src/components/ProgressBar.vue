<template>
    <progress 
        class="flex"
        max="100" 
        min="1" 
        value="1"
    ></progress>
</template>

<script setup>
import { onMounted } from 'vue'

import useDebouncer from '../composables/debouncer'
import useEventListener from '../composables/eventListener'

const getScrollPosition = () => {
    const progressBar = document.querySelector('progress')
    const percentage = document.documentElement.scrollTop / 
        (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
    
    if(percentage >= 0) {
        progressBar.value = percentage < 1 ? 1 : percentage
    }
}

onMounted (() => {
    useEventListener(window, 'scroll', useDebouncer(getScrollPosition, 20))
})

</script>

<style scoped>
progress {
/* style rules */
    background-color: #f8e8b0;
    /* chrome, edge, opera, safari apply "webkit" stylesheet for progress bar*/
    -webkit-appearance: none;
    accent-color: #E6B91E; /* sep 2021 - mar 2022 */
    height: 6px;
    border-radius: 6px;
}
progress::-webkit-progress-bar {
/* style rules background in chrome, edge, opera */
    background-color: #f8e8b0;
    border-radius: 6px;
}
progress::-webkit-progress-value {
/* style rules chrome edge opera value bar colour */
    background-color: #E6B91E;
    border-radius: 6px; 
    transition: width 0.4s ease-in;
}
progress::-moz-progress-bar {
/* style rules ff equivalent to ::-webkit-progress-value */
    background-color: #E6B91E;
    border-radius: 6px;
    transition: width 0.4s ease-in;
}
</style>