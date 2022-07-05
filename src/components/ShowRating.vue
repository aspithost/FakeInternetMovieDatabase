<template>
    <div class="flex items-center gap-x-1">
        <img 
            src="/star.svg" 
            width="16" 
            height="14" 
            loading="lazy"
            alt="rating" 
        /> 
        <span class="pt-1">
            <span class="text-sm text-gray-200 font-semibold">
                {{ rating.toFixed(1)}}
            </span>
            <span class="text-xs text-gray-400"> 
                / 10
            </span>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    rating: Number
})
</script>