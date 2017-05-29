<template>
    <div>
        <h1>I am component 4</h1>
        <p>{{ mutualData }}</p>
        <button @click="changeMutualData">Change Data</button>
    </div>
</template>

<script>
    import {eventBus} from '../../main'
    export default{
        props: ["mutualData"],
        methods:{
            changeMutualData: function () {
                this.mutualData = "Pizza";
//                this.$emit('customEmitEvent', this.mutualData);
//                eventBus.$emit('component4Event', this.mutualData);
                eventBus.changeFood(this.mutualData);
            }
        }
    }

</script>