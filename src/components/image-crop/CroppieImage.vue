<template>
    <div class="picture">
        <h1 class="title is-4">Crop Image</h1>
        <div class="imagediv">
            <img id='mycrop' class="my-image"/>
        </div>
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

                this.image = new Image();
                this.image.setAttribute('crossOrigin', 'anonymous'); //optional,  it is needed only if your image is not avalible on same domain.
                this.image.src = "http://icodingclub.github.io/imagecropper/steve-jobs.jpg";

                this.croppie.bind({
                    url: this.imageLink,
                    //orientation: 4
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
        background-color: whitesmoke;
    }
    div.cr-boundary{
        background-color: hotpink;
    }

</style>