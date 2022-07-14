const sortByRating = (a, b) => {
    return b.rating.average - a.rating.average
}

const shuffle = () => {
    return Math.random() - 0.5
}

export { sortByRating, shuffle }