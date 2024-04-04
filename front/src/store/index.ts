import { createStore } from 'vuex'
import Home from '../modules/home/store/home.store'
import Jokes from '../modules/jokes/store/jokes.store'
import Global from './global.store'

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

store.registerModule("Global", Global)
store.registerModule("Home", Home)
store.registerModule("Jokes", Jokes)

export default store