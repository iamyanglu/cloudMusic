<template>
    <div class="logUse">
        <log title="网易云登录"  @logS="disLog">
            <img src="../../assets/img/phone.png" slot="fir"/>
            <img src="../../assets/img/pass.png" slot="sec"/></log>
    </div>
</template>
<script>
    import log from '@/components/common/aboutLog/log'
    export default {
        name: "logUse",
        components:{
            log
        },methods:{
            disLog(){
                this.$emit('logS')
            }
        }
    }
</script>

<style scoped>
    .logUse{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
    }

</style>