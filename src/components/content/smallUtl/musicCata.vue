<template>
    <div class="musicUtl" v-show="showNow">
        <div class="navSongName">正在播放:<div>{{audio.name}}</div></div>
        <div @click="pauseAudio">暂停</div>
        <div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "musicCata",
        computed:{
            audio(){
                return {name:this.$store.state.name,
                        }
            },
            showNow(){
                return this.$store.state.playId>0
            }
        },
        methods:{
            pauseAudio(){
                this.$store.commit('myAudio',{
                    behavior:'pause'
                })
                this.$store.commit('playId',0)
            }
        }
    }
</script>

<style scoped>
.musicUtl{
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.musicUtl .navSongName{
    margin-right: 20px;
}
.musicUtl .navSongName div{
    display: inline-block;
    color: red;
}

</style>