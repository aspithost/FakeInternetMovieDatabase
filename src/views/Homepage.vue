<template>
    <div class="space-y-4 pt-4">
        <section v-for="[genre, shows] in [
            ['Featured', showsFeatured],
            ['Drama', showsDrama], 
            ['Action', showsAction], 
            ['Crime', showsCrime],
            ['Comedy', showsComedy],
            ['Romance', showsRomance],
            ['Science Fiction', showsSciFi],
            ['Thriller', showsThriller],
            ['Worst Shows Of All Time', worstShows]
        ]">
            <h2>{{ genre }} </h2>
           
           <div v-if="genre === 'Worst Shows Of All Time' && !shows.length" class="space-y-1">
                <p>Ever wondered what we all consider the worst shows of all time? It just so happens that I can show you!</p>
                <p>It does take a few seconds, though. Querying over 60.000 shows in the database can do that for you!</p>
     
                <button 
                    @click="getWorstShows(); loadingWorstShows = true"
                    :class="[
                        'bg-[#333] font-semibold rounded-full px-4 py-2 hover:bg-[#444]', 
                        {'cursor-not-allowed animate-pulse' : loadingWorstShows}
                    ]"
                >
                    Yes, Load Worst Shows! 
                </button>

                <p v-if="loadingWorstShows && !shows.length">Loading worst shows, hang on a few seconds!</p>
            </div>

            <ItemList :shows="shows" />  
        </section>
    </div>
</template>

<script setup>
import { computed, ref} from 'vue'

import ItemList from '../components/ItemList.vue'

import useFetch from '../composables/fetch'
import useFilterShows from '../composables/filterShows'
import useGetWorstShows from '../composables/getWorstShows'

const { data: shows, error: showsError } = useFetch('https://api.tvmaze.com/shows')
const { error: worstShowsError, worstShows, getWorstShows } = useGetWorstShows()

const showsFeatured = computed(() => useFilterShows(shows.value))
const showsAction = computed(() => useFilterShows(shows.value, 'Action'))
const showsComedy = computed(() => useFilterShows(shows.value, 'Comedy')) 
const showsCrime = computed(() => useFilterShows(shows.value, 'Crime'))  
const showsDrama = computed(() => useFilterShows(shows.value, 'Drama'))
const showsRomance = computed(() => useFilterShows(shows.value, 'Romance')) 
const showsSciFi = computed(() => useFilterShows(shows.value, 'Action')) 
const showsThriller = computed(() => useFilterShows(shows.value, 'Thriller')) 

const loadingWorstShows = ref(false)

</script>