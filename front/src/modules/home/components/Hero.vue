
<template>

    <div class="w-full flex flex-col justify-center items-center h-fullscreen dark:bg-primary transition-colors ease-linear duration-100">
        <div v-if="$store.state.Home.loading" class="h-12 bg-light dark:bg-lighter w-4/6 animate-pulse-fast"></div>
        <h1 v-else class="text-primary dark:text-white text-center font-bold max-w-2xl text-5xl">{{$store.state.Home.randomJoke.setup}}</h1>
        <div v-if="$store.state.Home.loading" class="h-12 bg-light dark:bg-lighter w-3/6 mt-2 animate-pulse-fast"></div>
        <h1 v-else class="text-primary dark:text-white animate-appear text-center font-bold max-w-2xl text-5xl mt-2">{{$store.state.Home.randomJoke.punchline}}</h1>
        <CustomButton class="mt-10" type="primary" @click="$store.dispatch('getRandomJoke')">Get another joke</CustomButton>
    </div>

</template>

<script>

    import CustomButton from '@/components/CustomButton.vue'

    export default {
        name: 'Hero',
        components: {
            CustomButton
        },
        computed: {},
        mounted() {
            if(this.$store.state.Home.loading){
                this.$store.dispatch("getRandomJoke");
            }
        },
    }

</script>