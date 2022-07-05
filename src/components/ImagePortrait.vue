<template>
    <div class="overflow-hidden">
        <img 
            :src="imageUrl"
            :alt="alt"
            class="w-12 h-12 object-cover rounded-full"
            height="80"
            width="80"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrl: String,
    alt: String
})
</script>