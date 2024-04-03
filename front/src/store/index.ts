import { createStore } from 'vuex'
import HomeStore from '../modules/home/store/home.store'
import JokesStore from '../modules/jokes/store/jokes.store'
import GlobalStore from './global.store'

import VuexPersistence from 'vuex-persist';
// import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    // asyncStorage: true,
});

const store = createStore({
    key: 'vuex',
    plugins: [vuexLocal.plugin],
})

store.registerModule("GlobalStore", GlobalStore)
store.registerModule("HomeStore", HomeStore)
store.registerModule("JokesStore", JokesStore)

export default store