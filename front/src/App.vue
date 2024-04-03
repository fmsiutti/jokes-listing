
<template >
  <div :class="{'dark': darkmode}">
    <NavBar :toggledarkmode="toggleDarkMode" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
  import NavBar from './modules/layout/components/NavBar.vue'
  import Footer from './modules/layout/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    },
    data(){
      return{
        darkmode: false
      }
    },
    methods: {
        toggleDarkMode() {
            this.darkmode = !this.darkmode  
        },
    }
  }
</script>