import { sortByRating, shuffle } from './sort.js'

const filterByGenre = (show, genre) => {
    return show.genres.includes(genre) 
}

const useFilterShows = (shows, genre) => {
    if (!shows?.length) return

    if (genre) shows = shows.filter(show => filterByGenre(show, genre))

    return shows
        .sort(sortByRating)
        .slice(0, 20)
        .sort(shuffle)
}

export default useFilterShows