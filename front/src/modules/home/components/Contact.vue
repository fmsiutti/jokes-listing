
<template>

    <div class="w-full flex justify-center items-center bg-secondary transition-colors ease-linear duration-100 h-56 flex-col space-y-4 sm:space-y-0 sm:space-x-12 sm:flex-row">
        <h2 class="text-primary text-center max-w-2xl text-3xl">Wanna reach out?</h2>
        <CustomButton @click="goToEmail" type="secondary">Click here</CustomButton>
    </div>

</template>

<script>

    import CustomButton from '@/components/CustomButton.vue'

    export default {
        name: 'Contact',
        methods: {
            goToEmail() {
                window.open('mailto:felisiutti@gmail.com')
            }
        },
        components: {
            CustomButton
        }
    }

</script>