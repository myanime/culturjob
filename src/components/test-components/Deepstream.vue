<template>
    <div>
        <email-form :ds="ds"></email-form>
    </div>
</template>

<script>
    import EmailInput from './NewEmailInput.vue'
    export default{
        data() {
            return {
                ds: null,
            }
        },
        created(){
            this.ds = deepstream('wss://154.deepstreamhub.com?apiKey=a1ca1971-f201-41dd-90ff-1333f7cd51d8').login()
        },
        components:{
            'email-form': EmailInput
        }
    }
</script>

<style scoped>
    .box-one{
        border: solid 1px olive;
    }
    .columns{
        margin: 20px
    }
</style>