<template>
    <div id="index">

首页

    </div>
</template>

<script>

    import logUse from "../log/logUse";


    export default {
        name: "index",
        components:{

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
        },
        created() {
            this.$store.commit('showLogBox',false)
        }
    }
</script>

<style scoped>

</style>