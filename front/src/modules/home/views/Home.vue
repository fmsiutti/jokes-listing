
<template>
  <Hero />
  <Contact />
</template>

<script>

  import Hero from '@/modules/home/components/Hero.vue'
  import Contact from '@/modules/home/components/Contact.vue'

  export default {
      name: 'Home',
      components: {
        Hero,
        Contact
      }
  }

</script>