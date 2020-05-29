<template>
    <div id="navBar" :style="style">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "navBar",
        props:{
            color:{
                type:String,
                default:'#0f800f'
            }
        },
        computed:{
            style(){
                return {backgroundColor:this.color}
            }
        }
    }
</script>

<style scoped>

#navBar{
    width: 100%;
    height: 49px;
    box-shadow: 0 1px #eeeeee;
    display: flex;
}
.left,.center,.right{
    height: 49px;
}

.left{

   flex: 1;

}
.center{
    display: flex;
    line-height: 49px;
    flex: 2;

    text-align: center;
    cursor: pointer;
 }

    .right{
        flex:1;
    }

</style>