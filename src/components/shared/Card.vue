<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src='../../assets/images/comp.jpg' alt="Image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">

                        <img src="../../assets/images/comp.jpg" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ firstname }} {{ lastname}}</p>
                    <p class="subtitle is-6">{{ email }}</p>
                </div>
            </div>

            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a>#css</a> <a>#responsive</a>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imageName: String,
            firstname: String,
            lastname: String,
            email: String,
        },
        data: function () {
            return {
                imageString: '../../assets/images/'
            }
        },
        computed: {
            imagePath: function () {
                return this.imageString + this.imageName
            }
        }
    }
</script>

<style scoped>
    .card{
        width: 300px;
    }
</style>