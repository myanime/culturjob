<template>
    <div>
        <crop-images imageLink="http://localhost:8081/don.jpeg"></crop-images>
    </div>
</template>

<script>
import CroppieImage from './components/image-crop/CroppieImage.vue'


export default {
    name: 'app',
    data: function(){
        return {

        }
    },
    components: {
        "crop-images": CroppieImage,
    }
}
</script>

<style>
</style>
