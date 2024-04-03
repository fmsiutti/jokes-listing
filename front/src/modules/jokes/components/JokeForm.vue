<template>
    <form ref="jokesForm" class="flex flex-col bg-white" @submit.prevent="submitJoke">
        <p class="font-bold">Add New Joke</p>
        <CustomInput required v-model="setup" type="text" placeholder="Setup" />
        <CustomInput required v-model="punchline" type="text" placeholder="Punchline" />
        <CustomInput required v-model="category" type="text" placeholder="Category" />
        <CustomButton class="my-2" size="sm" type="primary">Submit</CustomButton>
    </form>
</template>

<script>

import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
    name: 'JokeForm',
    components: {
      CustomInput,
      CustomButton
    },
    data() {
      return {
        setup: null,
        punchline: null,
        category: null
      }
    },
    props: {
      submitcallback: {type: Function, required: true}
    },
    computed: {
      propModel: {
        get () { return this.prop },
        set (value) { this.$emit('update:prop', value) },
      },
    },
    methods: {
      submitJoke() {
        this.$store.dispatch('addNewJoke', {
          setup: this.setup,
          punchline: this.punchline,
          category: this.category,
          id: Math.floor(Math.random() * 10000)
        })
        this.$refs.jokesForm.reset();
        this.submitcallback()
      }
    }
}

</script>