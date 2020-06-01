<template>
    <div class="nameOrLog" >
        <div v-if="logName">
         hello ! &nbsp;{{this.$store.state.nickName}}
        </div>
        <div  class="log" v-else >
            <div @click="toLog">
                登录
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "logAndName",

        watch:{

        },
        computed:{
          logName(){
              console.log(this.$store.state.isLog);
              return this.$store.state.isLog
          }
        },
        data(){
            return{
                isLog:false
      }
        },methods:{
            toLog(){
               this.$store.commit('showLogBox',true)
            }

        },
        created() {
            if(window.localStorage.getItem('logStatus')){
               let obj = window.localStorage.getItem('cloudPer')
                obj = JSON.parse(obj)
                this.$store.commit('getName', obj.nickName)
                this.$store.commit('showLogBox', false)
                this.$store.commit('log')
            }

        },
        mounted() {

        }
    }
</script>

<style scoped>
.nameOrLog{
    cursor: pointer;
    width: 100%;
    height: 49px;
    text-align: center;
    line-height: 49px;
}
.nameOrLog .log{
        color: red;
        text-align: center;
        line-height: 49px;
        height: 49px;
        width: 100%;
    cursor: pointer;
    }
</style>