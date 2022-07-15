import { ref } from 'vue'

import shuffle from './shuffle'

const error = ref(null)
const worstShows = ref([])

const getWorstShows = async () => {
    let pageCounter = 0;
    let worst = [];
    let getShows = true;
    
    while (getShows) {
        try {
            const res = await fetch(`https://api.tvmaze.com/shows?page=${pageCounter}`);
            const shows = await res.json();
            if (!shows.length) getShows = false

            const sortedShows = shows
                .filter(show => show.rating.average > 1 && show.rating.average < 4)
                .sort((a,b) => a.rating.average - b.rating.average)
                .slice(0,3);
            worst = [...worst, ...sortedShows]
                .sort((a,b) => a.rating.average - b.rating.average)
                .slice(0, 20);
            pageCounter += 1;
        } catch (err) {
            error.value = err.message
        }
    } 
    return worstShows.value = worst.sort(shuffle)
}

export default function useGetWorstShows () {
    return { error, worstShows, getWorstShows }
}