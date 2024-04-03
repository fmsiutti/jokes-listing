<script setup>
    const model = defineModel()
</script>

<template>
    <input class="py-2 px-4 border border-light rounded-lg my-2 focus:border-2 focus:border-secondary outline-none" v-model="model" :type="type" :placeholder="placeholder" />
</template>

<script>
    
    export default {
        name: 'CustomInput',
        props: {
            placeholder: {type: String, required: true},
            type: {type: String, required: true}
        }
    }
</script>