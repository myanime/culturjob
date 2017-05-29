<template>
    <div>
        <div class="column is-one-third-desktop is-full-mobile">
            <button class="button is-primary" @click="togglePanel">{{ hideShow}}</button>
            <br><br>
            <select v-model="animationType" class="select">
                <option value="fade">Fade</option>
                <option value="slide">Slide</option>
            </select>
            {{ animationType}}
            <br><br>
            <transition :name="animationType">
                <section class="panel" v-if="showPanel">
                    <p class="panel-heading">Total Users</p>
                    <div class="panel-block">My text</div>
                </section>
            </transition>
            <!--<transition enter-active-class="animated shake">-->
                <!--<section class="panel" v-if="showPanel">-->
                    <!--<p class="panel-heading">Total Users</p>-->
                    <!--<div class="panel-block">My text</div>-->
                <!--</section>-->
            <!--</transition>-->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                showPanel: true,
                hideShow: "Hide",
                animationType: "fade"
            }
        },
        methods: {
            togglePanel(){
                this.showPanel = !this.showPanel;
                this.showPanel ? this.hideShow = "Hide" : this.hideShow = "Show"
            }
        }
    }

</script>
<!--
<style scoped>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }


    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in .5s ease-in forwards;
        transition: opacity 1s;
        opacity: 1;
    }
    .slide-leave{
        opacity: 1;
    }
    .slide-leave-active{
        animation: slide-out .5s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }
    @keyframes slide-in {
        from{
            transform: translateX(-600px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateX(-600px);
        }
    }

</style>
-->