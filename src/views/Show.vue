<template>
    <div 
        v-if="show" 
        class="overflow-hidden space-y-2"
    >
        <h1 class="pt-4 md:pt-6"> {{ show.name }}</h1>
        <div class="flex justify-between">
            <span class="pt-1 space-x-2 divide-x divide-gray-300">
                <span>{{ show.premiered?.slice(0,4)}}–{{ show.ended ? show.ended.slice(0,4): ''}}</span>  
                <span class="pl-2">{{ show.averageRuntime }}m</span>
            </span>
            <span class="flex space-x-4">
                <ShowRating 
                    v-if="show.rating.average"
                    :rating="show.rating.average" 
                    class="inline-flex" 
                />
                <a 
                    class="link-base pt-1"
                    :href="`https://imdb.com/title/${show.externals.imdb}`"
                    target="_blank"
                >   
                    IMDb
                </a>
                <a 
                    class="link-base pt-1"
                    :href="`https://thetvdb.com/?id=${show.externals.thetvdb}&tab=series`"
                    target="_blank"
                >   
                    tvdb
                </a>
            </span>
        </div>

        <figure v-if="backgroundImageUrl === false && show.image">
            <img 
                :srcset="`${show.image.medium} 210w,
                    ${show.image.original} 680w`"
                sizes="(max-width: 767px) 210px, 680px"
                :src="show.image.original"
                :alt="show.name" 
                class="rounded-lg"
            />
        </figure>

        <img v-else
            :src="backgroundImageUrl"
            :alt="show.name"
            width="976"
            height="549"
            class="min-w-full aspect-[16/9] rounded-lg"
        />

        <div class="space-x-1 py-2">
            <span 
                v-for="genre in show.genres" 
                class="rounded-lg border border-white px-2"
            >
                {{ genre}}
            </span>
        </div>

        <div v-html="show.summary"></div>

        <div v-if="creators" class="pt-2">
            <h2 v-if="creators.length > 1">Creators</h2>
            <h2 v-else> Creator</h2>
            <div class="flex space-x-2 pt-2">
                <span v-for="creator in creators" class="flex space-x-2">
                    <ImagePortrait 
                        v-if="creator.person.image"
                        :imageUrl="creator.person.image.medium"
                        :alt="creator.person.name"
                    />
                    <span class="self-center">
                        <span class="font-bold ">{{ creator.person.name }}</span>
                    </span>  
                </span>
            </div>
        </div>

        <Episodes 
            v-if="episodesBySeason[0].length"
            :numberOfEpisodes="data._embedded.episodes.length"
            :episodesBySeason="episodesBySeason" 
        />

        <Cast :cast="cast" />
    </div>

</template>

<script setup>
import { computed } from 'vue'

import Cast from '../components/Cast.vue'
import Episodes from '../components/Episodes.vue'
import ImagePortrait from '../components/ImagePortrait.vue'
import ShowRating from '../components/ShowRating.vue'

import useFetch from '../composables/fetch'

const props = defineProps({
    id: String,
    slug: String,
})

const showsUrl = `https://api.tvmaze.com/shows/${props.id}`

const { data: data, error: testError } = useFetch(`${showsUrl}?embed[]=cast&embed[]=crew&embed[]=episodes&embed[]=images`)

const backgroundImageUrl = computed(() => {
    const images = data.value?._embedded?.images
    if (!images) return 
    for (let i = 0; i < images.length; i++) {
        if (images[i].type === 'background') {
            return images[i].resolutions.original.url
        }
    }
    return false
})

const cast = computed (() => {
    const cst = data.value?._embedded.cast
    return !cst ? [] : cst
})

const creators = computed (() => {
    const crw = data.value?._embedded.crew
    return !crw ? [] : crw.filter(crewMember => crewMember.type === 'Creator')
})

const episodesBySeason = computed (() => {
    let eps = data.value?._embedded.episodes;
    if (!eps) return []

    // eps = JSON.parse(JSON.stringify(eps)) // Unkunecessary, used in previous versions 

    const seasons = getShowSeasons(eps)

    return seasons
})

const show = computed (() => {
    const shw = data.value
    return !shw ? null : shw
})

const getShowSeasons = (arr) => {
    let index = 0;
    let seasons = []

    const spliceArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            // if (arr[i].season !== index + 1) {
                if (arr[i].season > index + 1) {
                const season = arr.splice(0, arr.indexOf(arr[i]))
                seasons.push(season)
                index += 1
                return spliceArray(arr)
            }
        }
        // if (index === 0) seasons.push(arr) // Wrong! Didn't append final season
        if (arr) seasons.push(arr)
    }

    spliceArray(arr)

    return seasons
}

</script>