<template>
    <div class="column is-half-desktop">
        <button class="button" @click="changeArray">Change Array</button>
        <br><br>

            <ul class="list-group">
                <transition-group name="slide">
                    <li class="list-group-item"
                        v-for="(number, index) in myArray"
                        @click="removeItem(index)"
                        style="cursor: pointer"
                        :key="number">{{ number }}</li>
                </transition-group>
            </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                myArray: [1,2,3,4,5]
            }
        },
        methods: {
            changeArray(){
                var position = Math.floor(Math.random() * this.myArray.length)
                this.myArray.splice(position, 0, Math.random())
            },
            removeItem(index){
                this.myArray.splice(index, 1)
            }
        }
    }

</script>

<style scoped>
    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave{

    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        /*position: absolute;*/
    }
    .slide-move{
        transition: tranform 1s;
    }

    @keyframes side-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0px);
        }
    }
    @keyframes slide-out{
        from {
            transform: translateY(0px)
        }
        to {
            transform: translateY(20px)
        }
    }
</style>