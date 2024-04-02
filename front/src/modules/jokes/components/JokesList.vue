<template>
    <div class="flex flex-wrap basis-full">
        <div v-for="item in 12" v-if="$store.state.Jokes.loading" class="p-2 w-full md:w-1/2 xl:w-1/3" >
            <div class="min-h-56 h-full group bg-light dark:border-lighter dark:bg-lighter animate-pulse-fast text-white w-full rounded-lg relative"></div>
        </div>
        <div v-else v-for="joke in $store.getters.getOrderedJokesList" :key="joke.id" class="p-2 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
            <JokesSingle :setup="joke.setup" :punchline="joke.punchline" :jokeId="joke.id" />
        </div>
    </div>
</template>

<script>

  import JokesSingle from '@/modules/jokes/components/JokesSingle.vue'

  export default {
    name: 'JokesList',
    components: {
        JokesSingle,
    },
    computed: {
    },
  }

</script>