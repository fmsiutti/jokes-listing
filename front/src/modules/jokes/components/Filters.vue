<template>
    <div class="sm:sticky sm:top-4">
        <h3 class="font-bold mb-4 dark:text-white">Categories: </h3>
        <FilterButton @click="$store.dispatch('updateSelectedCategory', 'programming')" :active="$store.state.Jokes.selectedCategory == 'programming'" label="Programming" />
        <FilterButton @click="$store.dispatch('updateSelectedCategory', 'general')" :active="$store.state.Jokes.selectedCategory == 'general'" label="General" />
        <h3 class="font-bold my-4 dark:text-white">Sort: </h3>
        <FilterButton @click="$store.dispatch('updateSort', 1)" label="Ascending" :active="$store.state.Jokes.order == 1" />
        <FilterButton @click="$store.dispatch('updateSort', -1)" label="Descending" :active="$store.state.Jokes.order == -1" />
    </div>
</template>

<script>

  import FilterButton from './FilterButton.vue'

  export default {
    name: 'Filter',
    components: {
        FilterButton,
    },
    computed: {},
    mounted() {},
  }

</script>