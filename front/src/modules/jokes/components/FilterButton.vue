
<template>
    <div class="cursor-pointer group w-full rounded-2xl relative
    lg:hover:bg-primary lg:hover:text-white
    lg:dark:hover:bg-white lg:dark:hover:text-primary"
    :class="{
            'bg-primary text-white dark:bg-white dark:text-primary': active,
            'text-primary dark:text-white': !active
        }" >
        <div class="px-4 py-1">
            <h3 class="ease-linear duration-100 tracking-wide">{{label}}</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'JokesSingle',
    props: {
        label: { type: String, required: true },
        active: { type: Boolean, required: false }
    },
}

</script>