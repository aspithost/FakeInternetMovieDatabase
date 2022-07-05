<template>
    <span class="flex items-center space-x-2 pt-4">
        <h2> Episodes </h2>
        <span class="text-gray-300"> ({{ numberOfEpisodes }})</span>
    </span>
    <details v-for="(season, index) in episodesBySeason">
        <summary class="space-x-2">
            <span class="text-lg font-semibold">Season {{ index + 1}}</span>
            <span class="text-gray-300">({{ season[0].airdate.slice(0,4)}})</span>
        </summary>
        <details v-for="episode in season" class="px-4 py-1">
            <summary class="font-semibold">
                {{ episode.number }}. {{ episode.name }} 
            </summary>
            <div class="space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                <img 
                    :src="episode.image?.medium"
                    :alt="episode.summary"
                    width="250"
                    height="140"
                    class="rounded-md object-contain"
                />
                
                <div class="flex flex-col justify-between">
                    <span class="text-sm sm:text-base" v-html="episode.summary"></span>   
                    <ShowRating 
                        v-if="episode.rating.average"
                        :rating="episode.rating.average" 
                    />
                </div>
            </div>
        </details>
    </details>
</template>

<script setup>
import ShowRating from './ShowRating.vue'

const props = defineProps({
    numberOfEpisodes: Number,
    episodesBySeason: Array
})
</script>