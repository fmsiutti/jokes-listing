<template>
    <button class="ease-linear duration-100 rounded-full border-2"
        :class="{
            'border-main bg-main text-white hover:bg-white hover:text-main': type == 'primary',
            'border-primary text-primary hover:bg-primary hover:text-white': type == 'secondary',
            'border-primary bg-primary text-white dark:bg-white dark:text-primary': type == 'secondary-full',
            'p-4 flex items-center justify-center w-10 h-10': circle,
            // 'px-6 py-4': !circle,
            'text-xl px-6 py-4': size == 'lg',
            'text-md px-6 py-2': size == 'md',
            'text-sm py-2': size == 'sm',
        }">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: {
            type: {type: String, required: true},
            circle: {type: Boolean, required: true},
            size: {type: String, required: false, default: "lg"}
        },
        computed: {
            typeClasses() {
                let customClasses = ''
                switch (this.type) {
                    case 'primary':
                        customClasses = 'border-main bg-main text-white hover:bg-white hover:text-main'
                        break;
                    case 'secondary':
                        customClasses = 'border-primary text-primary hover:bg-primary hover:text-white'
                        break;
                    case 'secondary-full':
                        customClasses = ' border-primary bg-primary text-white dark:bg-white dark:text-primary'
                        break;
                    default:
                        customClasses = ''
                        break;
                }
                if(this.circle) {
                    customClasses += ' p-4 flex items-center justify-center w-10 h-10 '
                }else {
                     customClasses += ' px-6 py-4 '
                }
                return customClasses
            }
        }
    }
</script>