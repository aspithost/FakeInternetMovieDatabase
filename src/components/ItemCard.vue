<template>
    <div>
        <router-link 
            :to="{ 
                name: 'Show',
                params: {
                    id: show.id,
                    slug: show.name
                        .toLowerCase()
                        .replace(/\s|\W/g, '-')
                }
            }"
        >
            <div class="rounded-t-md overflow-hidden">
                <img 
                    :src="show.image.medium" 
                    :alt="show.name"
                    width="210"
                    height="295"
                    loading="lazy"
                    class="aspect-[42/59] min-w-[130px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[210px] object-cover rounded-md \
                        hover:scale-105 duration-300 opacity-80 hover:opacity-100" 
                />
            </div>
        </router-link>
        <div class="bg-[#222] rounded-b-md px-4 py-2">
            <ShowRating :rating="show.rating.average" />
            <router-link 
                :to="{ 
                    name: 'Show',
                    params: {
                        id: show.id,
                        slug: show.name
                            .toLowerCase()
                            .replace(/\s|\W/, '-')
                    }
                }"
            >
                <h3 class="clip-text hover:text-white"> {{ show.name }}</h3>
            </router-link> 
            <router-link 
                :to="{ 
                    name: 'Show',
                    params: {
                        id: show.id,
                        slug: show.name
                            .toLowerCase()
                            .replace(/\s|\W/, '-')
                    }
                }"
            >
                <div class="bg-[#333] rounded-md px-2 xl:px-4 text-center py-1 my-2 hover:bg-[#444]">
                    <span class="text-sm xl:text-base">Details</span>
                </div>
            </router-link> 
        </div>
    </div>
</template>

<script setup>
import ShowRating from './ShowRating.vue'

const props = defineProps({
    show: Object
})
</script>