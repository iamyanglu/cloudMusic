<template>
    <div class="paPage">
        <a @click="otherPage(0)">首页</a> <a @click="otherPage(1)">上一页</a>
        <a @click="otherPage(2)">下一页</a><a @click="otherPage(3)">尾页</a>
        <div><input v-model.Number="whPage"><div class="btnPage" @click="otherPage(4)">跳转</div></div>
    </div>
</template>

<script>
    export default {
        name: "paging",
        props:['totalPage'],
        data(){
            return {
                whPage: '',
                current:0

            }
        },
        created() {
            console.log('总页数为',this.totalPage);
        },
        methods:{
            otherPage(fun,){
                        if(fun ===0)
                        {
                            this.current = 0
                            this.$emit('page',{
                                fun
                            })
                        }
                        else if(fun === 1){
                            if(this.current > 0)
                            {
                                this.current -=1
                                this.$emit('page',{
                                    fun,
                                    page:this.current
                                })
                            }else{
                                window.alert('已是首页')
                            }
                        }
                        else if(fun === 2){
                            if(this.current < this.totalPage){
                                this.current+=1
                                this.$emit('page',{
                                    fun,
                                    page:this.current
                                })

                            }
                            else{
                                window.alert('已是最后一页')
                            }
                        }
                        else if(fun === 3){

                            this.current = this.totalPage
                            this.$emit('page',{
                                fun,
                                page:this.current
                            })
                        }
                        else {
                            if(this.whPage >0 && this.whPage <= this.totalPage)
                            {
                                this.current = this.whPage
                                this.$emit('page',{
                                    fun:4,
                                    page:this.whPage
                                })
                            }
                            else{
                                window.alert('超出范围')
                            }
                        }



            }

        }
    }
</script>

<style scoped>
    .paPage{


        height: 39px;
        display: flex;


    }
    .paPage a{
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        line-height: 35px;
        width: 58px;
        height: 35px;
        border: 1px black solid;
    }
    .paPage input{
        height: 35px;
        border: none;
        margin-right: 10px;
        border-bottom: 1px solid black;
    }
    .paPage div{
        display: inline-block;
    }
    .paPage .btnPage
    {    display: inline-block;
        margin-right: 20px;
        text-align: center;
        line-height: 35px;
        width: 58px;
        height: 35px;
        border: 1px black solid;
    }
</style>