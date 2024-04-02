
<template>
  <span class="material-icons">{{icon}}</span>
</template>

<script>

  export default {
    name: 'MaterialIcon',
    props: {
      icon: {type: String, required: true}
    }
  }

</script>
