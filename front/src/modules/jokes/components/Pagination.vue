
<template>
    <div class="flex justify-center space-x-1 md:space-x-4 mt-8" >
            <PageButton @click="$store.dispatch('updatePage', 1)">
                <MaterialIcon icon="first_page" />
            </PageButton>
            <PageButton @click="$store.dispatch('previousPage')">
                <MaterialIcon icon="navigate_before" />
            </PageButton>
            <PageButton v-for="page in pages" :key="page.name" @click="$store.dispatch('updatePage', page.name)" :active="page.name == $store.state.Jokes.currentPage">
                {{page.name}}
            </PageButton>
            <PageButton @click="$store.dispatch('nextPage')">
                <MaterialIcon icon="navigate_next" />
            </PageButton>
            <PageButton @click="$store.dispatch('updatePage', $store.state.Jokes.totalPages)">
                <MaterialIcon icon="last_page" />
            </PageButton>
    </div>

</template>

<style>
</style>

<script>

import MaterialIcon from '@/components/MaterialIcon.vue'
import PageButton from '@/modules/jokes/components/PageButton.vue'

export default {
    name: 'Pagination',
    components: {
        PageButton,
        MaterialIcon
    },
    computed: {
        maxVisibleButtons() {
            let width = window.innerWidth
            if(width >= 640){
                return 5
            } else{
                return 3
            }
        },
        startPage() {
            // When on the first page
            if (this.$store.state.Jokes.currentPage === 1) {
                return 1;
            }

            // When on the last page
            if (this.$store.state.Jokes.currentPage === this.$store.state.Jokes.totalPages) {
                return Math.max(1, this.$store.state.Jokes.totalPages - (this.maxVisibleButtons - 1));
            }

            // When inbetween
            return this.$store.state.Jokes.currentPage - 1;
        },
        pages() {
            const range = [];

            for (
                let i = this.startPage;
                i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.$store.state.Jokes.totalPages);
                i++
            ) {
                range.push({
                    name: i,
                    isDisabled: i === this.$store.state.Jokes.currentPage
                });
            }

            return range;
        },
    }
}

</script>