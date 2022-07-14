import { reactive } from 'vue'

const createStore = () => {
    const privateState = reactive({})

    const state = (() => {
        return privateState
    })();

    const add = (target, obj) => {
        if (typeof obj !== 'object') return
        if (!privateState[target]) privateState[target] = []
        for (let i = 0; i < privateState[target].length; i++) {
            if (privateState[target][i].id === obj.id) return
        }  
        privateState[target].push(obj)
    }

    const remove = (target, obj) => {
        if (typeof obj !== 'object') return
        for (let i = 0; i < privateState[target].length; i++) {
            if (privateState[target][i].id === obj.id) {
                privateState[target].splice(privateState[target].indexOf(obj), 1)
            }
        }
    }

    const exists = (target, obj) => {
        if (!privateState[target]) return
        for (let i = 0; i < privateState[target].length; i++) {
            if (privateState[target][i].id === obj.id) return true
        }
    }

    const set = (target, arr) => {
        if (!Array.isArray(arr)) return
        privateState[target] = arr
    }


    const clear = (target) => {
        privateState[target] = []
    }

    return { state, add, remove, exists, set, clear }    
}

const store = createStore()

export default store