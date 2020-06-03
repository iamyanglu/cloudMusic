<template>
    <div class="loadBox">
    <div class="anBox"></div>

    </div>
</template>

<script>
    export default {
        name: "loading",
        methods:{
            init(){
                let loadBox = document.querySelector('.loadBox')
                let w = document.documentElement.clientWidth;
                let h = document.documentElement.clientHeight;
                loadBox.style.width =w +'px';
                loadBox.style.height = h +'px'
                console.log(loadBox);

            },
        },
      mounted() {
            this.init()
      }
    }
</script>

<style scoped>
.loadBox{
    background-color: #fff;
    z-index: 999;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}
    .anBox{


        animation: loaded infinite 2s;
    }
    @keyframes loaded {

        0%{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: lightblue;
        }
        25%{
            width: 100px;
            height: 100px;

            background-color: lightpink;
        }
        50%{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: lightgreen;
        }
        75%{
            width: 100px;
            height: 100px;

            background-color: lightsalmon;

        }
        100%{
            width: 100px;
            height: 100px;

            background-color: lightgray;
        }
    }
</style>