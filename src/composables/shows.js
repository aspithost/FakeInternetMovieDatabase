import { ref } from 'vue'

const error = ref(null)
const shows = ref([])

const getShows = async (url) => {
    try {
        const res = await fetch(url)
        shows.value = await res.json()
    } catch (err) {
        error.value = err
    }
}

const useGetShows = () => {
    return { error, shows, getShows }
}

export default useGetShows