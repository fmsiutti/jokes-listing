
<template >
  <div :class="{'dark': darkmode}">
    <NavBar :toggledarkmode="toggleDarkMode" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import NavBar from './modules/layout/components/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
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