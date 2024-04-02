
<template>
  <div class="items-end sm:items-stretch min-h-fullscreen flex flex-col sm:flex-row sm:space-x-4 p-6 dark:bg-primary transition-colors ease-linear duration-100 relative">
    <button @click="toggleFilters" class="sm:hidden flex items-center justify-center sticky z-10 top-4 right-4 w-10 h-10 rounded-full bg-primary text-white dark:bg-white dark:text-primary">
      <MaterialIcon icon="filter_list" />
    </button>
    <div class="absolute opacity-0 scale-0 z-10 bg-white dark:bg-primary w-72 ease-out duration-200 origin-top-right
      sm:relative sm:scale-100 sm:opacity-100 sm:bg-transparent sm:dark:bg-transparent
      sm:w-1/3 lg:w-1/4 border border-light p-4 rounded-lg dark:border-lighter"
      :class="{'opacity-100 scale-100': filtersOpen}">
        <button @click="toggleFilters" class="sm:hidden flex items-center justify-center absolute z-10 top-4 right-4 rounded-full text-primary dark:text-white">
          <MaterialIcon icon="close" />
        </button>
        <Filters />
    </div>
    <div class="mt-4 sm:mt-0 sm:w-2/3 lg:w-3/4 border border-light p-4 rounded-lg dark:border-lighter">
      <JokesList />
      <Pagination />
    </div>
  </div>
</template>

<script>

  import Filters from '@/modules/jokes/components/Filters.vue'
  import JokesList from '@/modules/jokes/components/JokesList.vue'
  import Pagination from '@/modules/jokes/components/Pagination.vue'
  import MaterialIcon from '@/components/MaterialIcon.vue';

  export default {
      name: 'Jokes',
      data(){
        return {
          filtersOpen: false
        }
      },
      methods: {
        toggleFilters() {
          this.filtersOpen = !this.filtersOpen
        }
      },
      components: {
        Filters,
        JokesList,
        Pagination,
        MaterialIcon
      },
      mounted() {
        if(this.$store.state.Jokes.loading){
          this.$store.dispatch("getJokesList");
          this.$store.dispatch("getJokesCount");
        }
      },
  }

</script>