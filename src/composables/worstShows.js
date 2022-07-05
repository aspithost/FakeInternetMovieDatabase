import { ref } from 'vue'

const error = ref(null)
const worstShows = ref([])

const getWorstShows = async () => {
    let pageCounter = 0;
    let shows;
    let worst = [];
    do {
        try {
            const res = await fetch(`https://api.tvmaze.com/shows?page=${pageCounter}`);
            shows = await res.json();
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
    } while (shows.length);
    return worstShows.value = worst
}

export default function useGetWorstShows () {
    return { error, worstShows, getWorstShows }
}