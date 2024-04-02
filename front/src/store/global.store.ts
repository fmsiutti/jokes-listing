
interface State {
    darkmode: boolean
}

export default {
    state: {
        darkmode: true
    },
    mutations: {
        toggleDarkMode(state: State) {
            state.darkmode = !state.darkmode
        }
    },
    actions: {
        toggleDarkMode({commit} : any) {
            commit('toggleDarkMode')
        }
    },
    getters: {},
    modules: {}
}