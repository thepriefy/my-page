<template>
  <div id="app">
    <nav class="navbar is-transparent container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger"  @click="showNav = !showNav" :class="{ 'is-active': showNav }" data-target="navbarItems">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarItems" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/education" class="navbar-item">Education&Skills</router-link>
          <router-link to="/activities" class="navbar-item">Activities</router-link>
          <router-link to="/contact" class="navbar-item">Contact</router-link>
        </div>
      </div>
    </nav>
    <transition name="slide-fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

  .margin-bottom-20 {
    margin-bottom: 20px;
  }
</style>
