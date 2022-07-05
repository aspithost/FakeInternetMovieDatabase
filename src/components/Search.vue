<template>
    <div class="sm:relative w-full sm:w-[80%] md:w-[60%]">
        <input 
            class="w-full text-gray-700 px-2.5 pt-2 pb-1 rounded \
                focus:outline-none focus:shadow-[inset_0px_0px_0px_2px] focus:shadow-fimdb" 
            type="search"
            placeholder="Search Shows"
            @input="(() => useDebouncer(onSearchInput))()"
        /> 
        <div 
            v-show="searchResults.length"
            class="absolute left-0 max-h-screen w-full overflow-hidden bg-[#333] pt-6 pb-2"
        >
            <ul class="px-2 space-y-2">
                <li 
                    v-for="result in searchResults.slice(0,10)"
                >
                    <router-link 
                        class="flex items-center group space-x-2 hover:bg-[#555]"
                        :to="{
                            name: 'Show',
                            params: {
                                id: result.show.id,
                                slug: result.show.name
                                    .toLowerCase()
                                    .replace(/\s|\W/g, '-')
                            }
                    }">  
                        <img    
                            v-if="result.show.image?.medium"
                            :src="result.show.image.medium"
                            :alt="result.show.name"
                            height="48"
                            width="48"
                            class="object-cover h-12 w-12 group-hover:opacity-70" 
                        />
                        <span class="flex flex-col">
                            <span>{{ result.show.name }}</span>
                            <span>{{ result.show.premiered?.slice(0,4)}}–{{ result.show.ended ? result.show.ended.slice(0,4): ''}}</span>
                        </span>   
                    </router-link>    
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import useDebouncer from '../composables/debouncer'
import useFetch from '../composables/fetch'

const route = useRoute()

const baseUrl = 'https://api.tvmaze.com/search'

const searchResults = ref([])

const onSearchInput = (e) => {
    let { data: shows, error: showsError } = useFetch(`${baseUrl}/shows?q=${e.target.value}`)
 
    watch(shows, () => {
        searchResults.value = shows.value
    })
}

watch(route, () => {
    searchResults.value = []
})

</script>