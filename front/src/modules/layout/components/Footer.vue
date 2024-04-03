<template>
    <div class="flex justify-between flex-wrap items-center p-6 w-full border-b border-light dark:bg-primary dark:border-lighter transition-colors ease-linear duration-100 h-32">
        <MainLogo />
        <p class="mt-4 sm:mt-0 dark:text-white">Made by fmsiutti, felisiutti@gmail.com</p>
    </div>
</template>

<script>
    import MainLogo from '@/components/MainLogo.vue';

    export default {
        components: {
            MainLogo
        }
    }
</script>
