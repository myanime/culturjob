<template>
    <div class="picture">
        <div class="imagediv">
            <img id='mycrop' class="my-image"/>
        </div>
        <br>
        <button class="button" @click="blobMe">Blob Me</button>
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
                    viewport: { width: 200, height: 60 },
                    boundary: { width: 300, height: 200 },

                    showZoomer: true,
                    enableOrientation: false
                });
                this.croppie.bind({
                    url: this.imageLink,
                });
                //this.croppie.setAttribute('crossOrigin', 'anonymous');
            },
            blobMe: function () {
                this.croppie.result('blob').then(function (blob) {
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
        margin: 50px;
        background-color: white;
    }
    div.cr-boundary{
        background-color: navajowhite;
    }

</style>