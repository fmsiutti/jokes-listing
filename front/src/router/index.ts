import { createRouter, createWebHistory } from 'vue-router'
import JokesRoutes from '@/modules/jokes/routes/routes'
import HomeRoutes from '@/modules/home/routes/routes'
import store from '@/store'

const router = createRouter({
    history: createWebHistory(),
    routes: [...JokesRoutes, ...HomeRoutes]
})

router.beforeEach(async (to, from, next) => {
    await store.restored;
    next();
})

export default router