<template>
    <div class="navBarItem" @click="toNav">{{tit}}</div>
</template>

<script>
    export default {
        name: "navBarItem",
        props:['tit','link'],
        methods:{
            toNav(){
                this.$router.replace(this.link)
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