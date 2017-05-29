<template>
    <div>
        <h1>I am component 2</h1>
        <p>{{ mutualData }}</p>
        <button @click="changeMutualData">Change Data</button>
    </div>
</template>

<script>
    export default{
        props: ["mutualData"]
    }

</script>