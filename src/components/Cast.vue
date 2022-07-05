<template>
    <h2 class="pt-4"> Cast </h2>  
    <div class="md:grid md:grid-cols-2">
        <div v-for="castMember in cast" class="flex items-center space-y-2 space-x-2">
            <ImagePortrait 
                v-if="castMember.character.image"
                :imageUrl="castMember.character.image.medium"
                :alt="castMember.person.name"/>
            <div>
                <div class="font-bold">{{ castMember.person.name }}</div>
                <div class="font-light">{{ castMember.character.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImagePortrait from './ImagePortrait.vue'

const props = defineProps({
    cast: Array
})
</script>