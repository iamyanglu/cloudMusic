<template>
    <div class="nameOrLog" >
        <div v-if="isLog">
         hello ! &nbsp;{{name}}
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
            name(){
                return JSON.parse(window.localStorage.getItem('cloudPer')).nickName
            }
        },
        data(){
            return{
                isLog:false
      }
        },methods:{
            toLog(){
                console.log('click');
                this.$emit('toLog')
            }

        },
        created() {
            this.localLog = window.localStorage.getItem('logStatus')
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