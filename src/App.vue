<template>
  <div id="app">
    <nav-bar-use></nav-bar-use>
    <log-use/>
    <router-view/>
  </div>
</template>

<script>
import navBarUse from "./components/content/navBar/navBarUse";
import logUse from "./views/log/logUse";
export default {
name: 'App',

components:{
  navBarUse,
  logUse
},
  created() {

    this.$store.commit('initAudio')
  }


}
</script>

<style>
@import "./assets/css/base.css";
</style>
