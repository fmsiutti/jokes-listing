
<template>
    <button
        class="rounded-md p-1 lg:p-4 w-8 lg:w-14 font-bold ease-linear duration-100
        hover:bg-primary hover:text-white
        dark:border-white dark:hover:text-primary dark:hover:bg-white text-xs sm:text-sm"
        :class="{
            'bg-primary text-white dark:bg-white dark:text-primary': active,
            'text-primary dark:text-white': !active
        }"
    >
        <slot></slot>
    </button>
</template>

<style>
</style>

<script>

export default {
    name: 'PageButton',
    props: {
        active: {type: Boolean, required: false, default: false},
    },
}

</script>