<template>
  <div id="app">

    <nav-bar-use></nav-bar-use>
    <log-use/>

    <router-view v-show="show"/>
  </div>
</template>

<script>
import navBarUse from "./components/content/navBar/navBarUse";
import loading from "./views/loading/loading";
import logUse from "./views/log/logUse";
export default {
name: 'App',

components:{
  navBarUse,
  logUse,
  loading
},
  computed:{
  show(){
    return !this.$store.state.showLog
  }
  },
  data(){
  return{
    isShow:true
  }
  },
  methods:{

  },
  created() {

    this.$store.commit('initAudio')
  }


}
</script>

<style>
@import "./assets/css/base.css";
  #app{
    background-image: linear-gradient(#EAE5C9,#6CC6CB);
  }
</style>
