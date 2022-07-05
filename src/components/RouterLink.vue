<template>
    <router-link 
        :to="{ 
            name: 'Show',
            params: {
                id: id,
                slug: slug
                    .toLowerCase()
                    .replace(/\s|\W/g, '-')
            }
        }"
    >
        <slot></slot>
    </router-link>
</template>

<script setup>
const props = defineProps({
    id: String,
    slug: String
})
</script>