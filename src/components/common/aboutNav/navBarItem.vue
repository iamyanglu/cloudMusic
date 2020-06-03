<template>
    <div class="navBarItem" @click="toNav" :style="getStyle">{{tit}}</div>
</template>

<script>
    export default {
        name: "navBarItem",
        props:['tit','link'],
        methods:{
            toNav(){
                this.$router.replace(this.link)
            }
        },
        computed:{
        getStyle(){
            if(this.$route.path.indexOf(this.link)> -1)
            {
                return{color:'red'}
            }
        }
        }
    }
</script>

<style scoped>
.navBarItem{
    flex: 1;
    transition: all 0.5s;
}
.navBarItem:hover{
    color: red;
}
</style>