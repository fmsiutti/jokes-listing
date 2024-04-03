
<template>
  <div class="absolute z-10 sm:relative flex justify-end w-full pt-6 pr-6 dark:bg-primary bg-white ease-linear duration-100">
    <CustomButton @click="toggleJokeForm" type="primary" size="md" >
      Submit your own Joke
    </CustomButton>
    <div class="w-2/3 sm:w-1/2 z-20 h-72 rounded-lg bg-white border p-4 border-light dark:border-lighter absolute z-10 scale-0 opacity-0 ease-out duration-200 origin-top-right" :class="{'opacity-100 scale-100': jokeFormOpen}">
      <button @click="toggleJokeForm" class="flex items-center justify-center absolute z-10 top-4 right-4 rounded-full text-primary">
        <MaterialIcon icon="close" />
      </button>
      <JokeForm :submitcallback="toggleJokeForm" />
    </div>
  </div>
  <div class="items-start sm:items-stretch min-h-fullscreen flex flex-col sm:flex-row sm:space-x-4 p-6 dark:bg-primary transition-colors ease-linear duration-100 relative">
    <CustomButton @click="toggleFilters" type="secondary-full" circle class="sm:hidden sticky z-10">
      <MaterialIcon icon="filter_list" />
    </CustomButton>
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
  import JokeForm from '@/modules/jokes/components/JokeForm.vue'
  import JokesList from '@/modules/jokes/components/JokesList.vue'
  import Pagination from '@/modules/jokes/components/Pagination.vue'
  import MaterialIcon from '@/components/MaterialIcon.vue';
  import CustomButton from '@/components/CustomButton.vue';

  export default {
      name: 'Jokes',
      data(){
        return {
          filtersOpen: false,
          jokeFormOpen: false
        }
      },
      methods: {
        toggleFilters() {
          this.filtersOpen = !this.filtersOpen
        },
        toggleJokeForm() {
          this.jokeFormOpen = !this.jokeFormOpen
        }
      },
      components: {
        Filters,
        JokeForm,
        JokesList,
        Pagination,
        MaterialIcon,
        CustomButton
      },
      mounted() {
        if(this.$store.state.Jokes.loading){
          this.$store.dispatch("getJokesList");
          this.$store.dispatch("getJokesCount");
        }
      },
  }

</script>