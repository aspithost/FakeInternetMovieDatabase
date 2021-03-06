import shuffle from './shuffle'

const filterByGenre = (show, genre) => {
    return show.genres.includes(genre) 
}

const sortByRating = (a, b) => {
    return b.rating.average - a.rating.average
}

const useFilterShows = (shows, genre) => {
    if (!shows.length) return

    if (genre) shows = shows.filter(show => filterByGenre(show, genre))

    return shows
        .sort(sortByRating)
        .slice(0, 20)
        .sort(shuffle)
}

export default useFilterShows