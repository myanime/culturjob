<template>
    <div>
        <h1>I am component 3</h1>
        <p>{{ mutualData }}</p>
        <button @click="myProp">Change Data</button>
    </div>
</template>

<script>
    import {eventBus} from '../../main'
    export default{

        props: {
            mutualData: String,
            myProp: Function
        },
        methods:{
            changeMutualData: function () {
                this.mutualData = "Pizza";
                this.$emit('customEmitEvent', this.mutualData);
            }
        },
        created(){
            eventBus.$on('component4Event', (food) => {
                console.log("event recieved");
                this.mutualData = food;
            });
        }
    }

</script>