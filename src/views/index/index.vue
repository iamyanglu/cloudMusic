<template>
    <div id="index">
        <navBarUse @logSubmit="showLog" :is-log="isName"/>
        <log-use v-if="isLog"  @logS="disLog"></log-use>

    </div>
</template>

<script>
    import navBarUse from "../../components/content/navBar/navBarUse";
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
                name:'新人',
                isName:false
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