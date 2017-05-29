<template>
    <div>
        <h1>I am component 1</h1>
        <p>{{ mutualData }}</p>
        <button @click="changeMutualData">Change Data</button>
    </div>
</template>

<script>
    export default{
        props: ["mutualData"],
        methods:{
            changeMutualData: function () {
                this.mutualData = "Pizza";
                this.$emit('customEmitEvent', this.mutualData);
            }
        }
    }

</script>