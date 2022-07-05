import { onUnmounted } from 'vue'

const useEventListener = (target, event, callback) => {
    target.addEventListener(event, callback)
    onUnmounted(() => target.removeEventListener(event, callback))
}   

export default useEventListener