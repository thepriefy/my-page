<template>
  <div class="hello">
    <img src="https://image.freepik.com/free-vector/website-under-construction_8329.jpg" alt="This site is under construction.">
    <h2>{{ msg_2 }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Sorry, this site is under construction.',
        msg_2: 'Made with Vue.js and Bulma.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
