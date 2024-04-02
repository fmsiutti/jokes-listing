<template>
    <div class="flex justify-between w-full border-b border-light dark:bg-primary dark:border-lighter transition-colors ease-linear duration-100">
        <div>
            <router-link class="h-16 w-28 flex items-center ease-linear duration-100 pl-6 font-medium hover:text-main text-primary dark:text-white" to="/">
                <img width="70px" src="../assets/logo.svg" />
            </router-link>
        </div>
        <button @click="toggleNavbar"  class="px-4 sm:hidden"><MaterialIcon class="text-3xl text-primary dark:text-white" icon="menu" /></button>
        <div @click="toggleNavbar" class="fixed top-0 left-0 h-dvh w-full bg-black opacity-75 z-20 sm:hidden" :class="{'hidden': !navbarOpen}"></div>
        <div class="
            bg-white dark:bg-primary fixed right-0 top-0 z-20 h-dvh flex-col w-[75vw] items-start translate-x-0 origin-right transition-transform ease-out duration-200
            flex sm:relative sm:bg-transparent sm:dark:bg-transparent sm:h-auto sm:flex-row sm:w-1/2 sm:justify-between sm:items-center pr-6"
            :class="{'translate-x-full sm:translate-x-0': !navbarOpen}">
            <button @click="toggleNavbar"  class="px-4 sm:hidden absolute right-0 top-4"><MaterialIcon class="text-3xl text-primary dark:text-white" icon="close" /></button>
            <div class="
                flex flex-col
                sm:flex-row">
                <router-link @click="toggleNavbar" class="h-16 w-28 flex items-center ease-linear duration-100 pl-6 font-medium hover:text-main text-primary dark:text-white" to="/">
                    Home
                </router-link>
                <router-link @click="toggleNavbar" class="h-16 w-28 flex items-center ease-linear duration-100 pl-6 font-medium hover:text-main text-primary dark:text-white" to="/jokes">
                    Jokes
                </router-link>
            </div>
            <div class="flex pl-6 py-4">
                <button class="w-14 dark:border-white border-primary border rounded-full text-left bg-light dark:bg-lighter dark:pl-[22px] ease-out duration-100" @click="toggledarkmode">
                    <MaterialIcon class="hidden dark:block text-white bg-primary rounded-full w-[32px] px-1 py-0.5" icon="dark_mode" />
                    <MaterialIcon class="block dark:hidden text-primary bg-white rounded-full w-[32px] px-1 py-0.5" icon="light_mode" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    
    import MaterialIcon from '@/components/MaterialIcon.vue';

    export default {
        name: 'NavBar',
        components: {
            MaterialIcon
        },
        data() {
            return {
                navbarOpen: false
            }
        },
        methods: {
            toggleNavbar() {
                this.navbarOpen = !this.navbarOpen
            }
        },
        props: {
            toggledarkmode: {type: Function, required: true },
        }
    }

</script>