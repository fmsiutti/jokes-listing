
<template>
    <div class="joke-single cursor-pointer min-h-56 h-full group bg-main text-white w-full rounded-lg relative" :class="{'hidden': isDeleted}">
        <div class="p-4 group-hover:opacity-0">
            <h3 class="text-xl font-bold tracking-wide">{{setup}}</h3>
        </div>
        <div class="bg-white text-secondary rounded-lg absolute top-0 h-full w-full scale-0 origin-bottom-right opacity-0 ease-in duration-100 group-hover:border-2 group-hover:border-main group-hover:opacity-100 group-hover:scale-100 ">
            <div class="p-4 flex flex-col justify-between h-full">
                <h3 class="text-xl font-bold tracking-wide">{{punchline}}</h3>
                <div class="mt-4 mx-4 border-t border-secondary h-10 flex justify-center items-center">
                    <div class="text-golden flex items-center" v-if="this.rated">
                        <span class="pt-[1px]">{{rated}}</span>
                        <MaterialIcon icon="grade" />
                    </div>
                    <MaterialIcon v-else @click="rate(n)" @mouseover="fillRatings(n)" v-for="n in 5" :key="n" :class="{'text-golden': n <= rating}" :icon="n <= rating ? 'grade' : 'star_outline'" />
                </div>
            </div>
            <button @click="deleteCard(jokeId)" class="flex ease-linear duration-100 items-center border-main border-2 hover:bg-white hover:text-main hover:scale-110 justify-center absolute right-0 bottom-0 translate-x-[25%] translate-y-[25%] rounded-full bg-main text-white w-10 h-10">
                <MaterialIcon icon="delete" />
            </button>
        </div>
    </div>
</template>

<style>
.joke-single:before{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-width: 0 0 32px 32px;
    border-style: solid;
    border-color: #fff #960110;
    border-bottom-right-radius: 0.4rem;
    transition: border linear 100ms
}
.dark .joke-single:before{
    border-style: solid;
    border-color: #0d2a4b #960110;
}
</style>

<script>

import MaterialIcon from '@/components/MaterialIcon.vue';

export default {
    name: 'JokesSingle',
    data(){
        return {
            rating: 0,
            rated: 0,
            isDeleted: false
        }
    },
    components: {
        MaterialIcon
    },
    props: {
        setup: { type: String, required: true },
        punchline: { type: String, required: true },
        jokeId: { type: Number, required: true },
    },
    methods: {
        fillRatings(index) {
            this.rating = index
        },
        rate(stars) {
            this.rated = stars
            // TODO: Add logic to send rating to API
        },
        deleteCard(id) {
            this.$store.dispatch("addToDeletedJokes", id)
        }
    }
}

</script>