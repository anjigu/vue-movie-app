import { crearteStore } from 'vuex'
import movie from './movie'
import about from './about'

export default crearteStore({
    modules: {
        movie,
        about
    }
})