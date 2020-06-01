<template>

        <div class="logBox" v-show="showLogBox">
            <div class="logCancle"><img src="../../../assets/img/logCancle.png" @click="cancleLog"/></div>
            <div class="titLog">{{title}} </div>
            <div class="inputGroup">

                <div class="logItem"> <span><slot name="fir"></slot></span> <input placeholder="user" v-model="user"></div>
                <div class="logItem">  <span><slot name="sec"></slot></span> <input placeholder="secret" v-model="pass" type="password"></div>


            </div>
            <div class="log"><a @click="login">登录</a></div>
        </div>




</template>

<script>

    import {logByPhone} from "../../../network/request";

    export default {
        props:['title'],
        name: "log",
        computed:{
            showLogBox(){
                return this.$store.state.showLog
            }
        },
        methods:{
            cancleLog(){
                this.$store.commit('showLogBox',false)
            },
            login(){
             if(   /\d{11}/.test(this.user))
             { logByPhone({
                 user:this.user,
                 pass:this.pass

             }).then(value=>{
                if(value.data.code === 200)
                {
                    this.$emit('logS')
                    let data = value.data
                    let obj = {}
                    console.log(data);
                    obj.userId = data.profile.userId
                    obj.token = data.token;
                    obj.cookie = data.cookie;
                    obj.nickName = data.profile.nickname;
                    //登录框消失 显示用户名 对vux 和 localstorage 进行操作
                    this.$store.commit('getName', obj.nickName)
                    this.$store.commit('showLogBox', false)
                    this.$store.commit('log')
                    obj = JSON.stringify(obj)
                    window.localStorage.setItem('cloudPer',obj);
                    window.localStorage.setItem('logStatus',true)
                }else{
                    window.alert(value.data.msg)
                }

             })

             }
             else{
                window.alert('要11位的手机号哦')
             }


            }
        },
        data(){
            return{
                user:'',
                pass:'',
                fromPath:''
            }
        },
        created() {
          if(this.$route.meta.path)
          {
              this.fromPath = this.$route.meta.path
          }

        }
    }
</script>

<style scoped>

    .logCancle{
        width: 100%;
        height: 20px;

        position: relative;
    }
    .logCancle img{
        position:absolute;
        width: 20px;
        height: 20px;
        cursor: pointer;
        right: 0;
    }

    .logBox{
        padding: 15px;
        width: 400px;

        margin: 50px auto;

        border: 1px solid black;
    }
    .titLog{
        font-weight: bold;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid black;
    }
  .
    .logBox{


    }
    .inputGroup {
        width: 100%;
    }
    .inputGroup input{
        border: none;
        box-shadow: 0 0 2px #2c3e50;
        margin-top: 20px;
        width: 80%;
        height: 30px;
    }
    .inputGroup input:hover{
        box-shadow: 0 0 2px deepskyblue;

    }
    .inputGroup span img{
        margin-left: 10px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
    .log{
        margin-top: 20px;
        width:100%;
        text-align: center;
        padding-bottom: 20px;
        cursor: pointer;
        border-bottom: 1px solid black;
    }
</style>