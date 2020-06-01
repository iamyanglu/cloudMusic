<template>
    <div>
        {{id}}
    </div>
</template>

<script>
    import {getSongLIst,getLovedSongs} from "../../network/musicRequest";

    export default {
        name: "myList",
        data(){
            return{
                id:0
            }
        },
        created() {
            if(window.localStorage.getItem('logStatus')){
              this.id =  JSON.parse( window.localStorage.getItem('cloudPer')).userId

            }

            getLovedSongs().then(res=>{
                let data = res.data
                console.log(data);
            })

        }
    }
</script>

<style scoped>

</style>