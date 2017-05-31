<template>
    <div class="picture">
        <div class="imagediv">
            <img id='mycrop' class="my-image"/>
        </div>
        <br>
        <button class="button" @click="blobMe">Upload Image</button>
        <br>
        <br>
    </div>
</template>

<script>
    import Croppie from 'croppie'
    export default {
        props: ['imageLink'],
        mounted() {
            this.image = this.imgUrl;
            this.setUpCroppie()
        },
        data(){
            return{
                image: null,
                croppie: null,
            }
        },
        methods:{
            setUpCroppie(){
                var el = document.getElementById('mycrop');
                this.croppie = new Croppie(el, {
                    viewport: { width: 300, height: 100 },
                    boundary: { width: 300, height: 100 },
                    enforceBoundary: true,
                    mouseWheelZoom: false,
                    showZoomer: false,
                    enableOrientation: false
                });
                this.croppie.bind({
                    url: this.imageLink,
                    zoom: false
                });
                //this.croppie.setAttribute('crossOrigin', 'anonymous');
            },
            blobMe: function () {
                this.croppie.result('blob','original').then(function (blob) {
                    console.log(blob);
                    window.open(window.URL.createObjectURL(blob));
                });
            }
        }
    }
</script>

<style>
    .picture{
        background-color: white;
        margin-left: 0px;
    }
    div.cr-boundary{
        background-color: white;
    }

</style>