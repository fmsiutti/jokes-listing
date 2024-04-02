import { API_URL, JOKES_PER_PAGE } from "../../../common/config"

interface Joke {
    id: number
    type: string
    setup: string
    punchline: string
}

interface State {
    jokesList: [Joke]
    loading: boolean
    selectedCategory: string
    order: number
    currentPage: number
    totalPages: number
    jokesPerPage: number
    deletedJokes: [number]
}

interface Store {
    state: State
    commit: (mutation: string, payload?: any) => void
    dispatch: (action: string, payload?: any) => void
}

export default {
    state: {
        jokesList: [],
        loading: true,
        selectedCategory: "",
        order: 1,
        currentPage: 1,
        totalPages: 0,
        jokesPerPage: JOKES_PER_PAGE,
        deletedJokes: []
    },
    mutations: {
        updateJokesLoading(state: State, newValue: boolean) {
            state.loading = newValue
        },
        updateJokesList(state: State, jokesList: [Joke]) {
            state.jokesList = jokesList
        },
        updateSelectedCategory(state: State, category: string) {
            state.selectedCategory = category
        },
        updateOrder(state: State, order: number) {
            state.order = order
        },
        updateTotalPages(state: State, totalPages: number) {
            state.totalPages = totalPages
        },
        setPage(state: State, page: number) {
            state.currentPage = page
        },
        addToDeletedJokes(state: State, id: number) {
            state.deletedJokes.push(id)
        }
    },
    actions: {
        getJokesList({ commit, state } : Store ){
            commit("updateJokesLoading", true)
            const api = `${API_URL}/jokes/paginated/${state.jokesPerPage}/${state.currentPage - 1}/${state.selectedCategory}`
            fetch(api)
                .then(response => response.json())
                .then(jokesList => {
                    commit("updateJokesLoading", false)
                    commit("updateJokesList", jokesList)
                })
        },
        updateSort({ commit } : Store, order: number){ commit("updateOrder", order) },
        updatePage({ commit, dispatch } : Store, page: number){
            commit("setPage", page)
            dispatch("getJokesList")
        },
        nextPage({ commit, dispatch, state } : Store){
            commit("setPage", Math.min(state.totalPages, state.currentPage + 1))
            dispatch("getJokesList")
        },
        previousPage({ commit, dispatch, state } : Store){
            commit("setPage", Math.max(1, state.currentPage - 1))
            dispatch("getJokesList")
        },
        getJokesCount({ commit, dispatch, state } : Store){
            const api = `${API_URL}/jokes_count/${state.selectedCategory}`
            fetch(api)
                .then(response => response.json())
                .then(jokesCount => {
                    const totalPages = Math.ceil(jokesCount / state.jokesPerPage)
                    commit("updateTotalPages", totalPages)
                    dispatch("updatePage", Math.min(state.totalPages, state.currentPage))

                })
        },
        updateSelectedCategory({ state, commit, dispatch } : Store, category: string) {
            if(state.selectedCategory == category){
                category = ""
            }
            commit("updateSelectedCategory", category)
            dispatch("getJokesList")
            dispatch("getJokesCount")
        },
        addToDeletedJokes({ commit} : Store, id: number) {
            commit('addToDeletedJokes', id)
        }
    },
    getters: {
        getOrderedJokesList(state: State) {
            return state.jokesList.filter(joke => !state.deletedJokes.includes(joke.id)).sort((a, b) => (b.setup < a.setup ? 1 : -1 )* state.order)
        }
    },
    modules: {}
}