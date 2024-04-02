import { API_URL } from "../../../common/config"

interface Joke {
    id: number
    type: string
    setup: string
    punchline: string
}

interface State {
    randomJoke: Joke
    loading: boolean
}

interface Store {
    state: State
    commit: (mutation: string, payload?: any) => void
    dispatch: (action: string, payload?: any) => void
}

export default {
    state: {
        loading: true,
        randomJoke: {}
    },
    mutations: {
        updateHomeLoading(state: State, newValue: boolean) {
            state.loading = newValue
        },
        updateRandomJoke(state: State, randomJoke: Joke) {
            state.randomJoke = randomJoke
        },
    },
    actions: {
        getRandomJoke({ commit } : Store){
            commit("updateHomeLoading", true)
            fetch(`${API_URL}/jokes/random`)
                .then(response => response.json())
                .then(joke => {
                    commit("updateHomeLoading", false)
                    commit("updateRandomJoke", joke)
                })
        },
    },
    getters: {
    },
    modules: {}
}