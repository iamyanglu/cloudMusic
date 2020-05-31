<template>
    <div id="index">


        <log-use v-if="isLog"  @logS="disLog"></log-use>

    </div>
</template>

<script>

    import logUse from "../log/logUse";


    export default {
        name: "index",
        components:{
            navBarUse,
            logUse
        },
        data(){
            return {
                isLog:false,


            }
        },
        methods:{
            showLog(){
                this.isLog = true

            },
            disLog(){
                this.isLog = !this.isLog;
                this.isName = true

            }
        }
    }
</script>

<style scoped>

</style>