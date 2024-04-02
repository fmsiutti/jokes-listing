import { createStore } from 'vuex'
import HomeStore from '@/modules/home/store/home.store'
import JokesStore from '@/modules/jokes/store/jokes.store'
import GlobalStore from '@/store/global.store'

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

store.registerModule("Global", GlobalStore)
store.registerModule("Home", HomeStore)
store.registerModule("Jokes", JokesStore)

export default store