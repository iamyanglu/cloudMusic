<template>
  <div id="app">
    <nav-bar-use></nav-bar-use>
    <router-view/>
  </div>
</template>

<script>
import navBarUse from "./components/content/navBar/navBarUse";
export default {
name: 'App',

components:{
  navBarUse
},



}
</script>

<style>
@import "./assets/css/base.css";
</style>
