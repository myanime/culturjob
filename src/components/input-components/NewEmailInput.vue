<template>
    <div class="columns">
        <div class="column is-half-desktop box-one">

            <h1 class="heading">Example!</h1>

            <div class="input-fields" v-if="notSubmitted">
                <name-input ref="firstNameComponent"
                            label-name="First Name"
                            input-placeholder="First Name"
                            @nameValidEvent="validateForm.firstNameValid = $event"
                            @nameChangeEvent="user.firstName = $event"></name-input>
                <name-input ref="lastNameComponent"
                            label-name="Last Name"
                            input-placeholder="Last Name"
                            @nameValidEvent="validateForm.lastNameValid = $event"
                            @nameChangeEvent="user.lastName = $event"></name-input>
                <email-input ref="emailComponent"
                             @emailChangedEvent="user.email = $event"
                             @emailValidEvent="validateForm.emailValid = $event"></email-input>
            </div>
            <br>
            <button class="button" @click="submitForm">Submit</button>
            <button class="button" @click="getData">Get Data</button>

        </div>
        <div class="column is-half-desktop box-two">
            <h1 class="heading">Data</h1>

            <crop-images imageLink="http://localhost:8081/don.jpeg"></crop-images>

            <!--<dropzone id="myVueDropzone" style="width: 300px"-->
                      <!--useFontAwesome="true"-->
                      <!--url="https://httpbin.org/post"-->
                      <!--maxNumberOfFiles.number="1"-->
                      <!--v-on:vdropzone-success="showSuccess">-->
                <!--&lt;!&ndash; Optional parameters if any! &ndash;&gt;-->
                <!--<input type="hidden" name="token" value="xxx">-->
            <!--</dropzone>-->

            <!--<br>-->

            <!--<img :src="images.google" alt="">-->
            <!--{{ images.google }}-->

            <div v-for="user in myData">
                <card imageName="comp.jpg"
                      :firstname="user.firstname"
                      :lastname="user.lastname"
                      :email="user.email">
                </card>
                <br>
            </div>
        </div>

    </div>
</template>



<script>
    import EmailInput from './EmailComponent.vue'
    import NameInput from './NameComponent.vue'
    import Card from '../shared/Card.vue'
    import Dropzone from 'vue2-dropzone'
    import CroppieImage from '../image-crop/CroppieImage.vue'


    // Js Snippets
    import { serverResponse } from '../request-response-helpers/request-helper'
    import { errorHandler } from '../request-response-helpers/request-helper'

    export default{
        data: function() {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                },
                validateForm: {
                    firstNameValid: false,
                    lastNameValid: false,
                    emailValid: false,
                },
                notSubmitted: true,
                myData: [],
                images: {
                    google: 'https://firebasestorage.googleapis.com/v0/b/ryanbase-cefdb.appspot.com/o/gooo.png?alt=media&token=c7d4b313-4817-4ee5-8167-8a1b21421e44'
                }
            }
        },
        computed: {
            formIsValid(){
                return (this.validateForm.firstNameValid &&
                    this.validateForm.lastNameValid &&
                    this.validateForm.emailValid &&
                    this.user.firstName &&
                    this.user.lastName &&
                    this.user.email)
                }
        },
        methods: {
            emailValid: function (value) {
                value ? this.validForm = true : this.validForm = false
            },
            'showSuccess': function (file) {
                console.log('A file was successfully uploaded')
            },
            postData: function () {
                this.$http.post('new.json', this.user).then(serverResponse, errorHandler);
                // this.resource.save(this.user)
            },
            forceValidateAll: function() {
                this.$refs.emailComponent.forceValidate();
                this.$refs.firstNameComponent.forceValidate();
                this.$refs.lastNameComponent.forceValidate();
            },
            getData: function () {
                var handleResponse = function (response) {
                    var dataArray = [];
                    var object = response.body;
                    for (var key in object){
                        dataArray.push(object[key]);
                    }
                    this.myData = dataArray;
                };
                var handleJSON = function (response) {
                    return response.json();
                };
                var displayData = function (data) {
                    var dataArray = [];
                    for (var key in data){
                        dataArray.push(data[key])
                    }
                    this.myData = dataArray;
                };

                this.$http.get('new.json').then(handleResponse).then(displayData)
            },
            submitForm(){
                this.forceValidateAll();
                if(this.formIsValid){
                    console.log(this.formIsValid);
                    console.log("Submitted");
                    this.postData();
                    this.notSubmitted = false;
                }
                else {
                    console.log("Fix Problems");
                }
            }
        },
        created() {
            var customActions = {
                save: {method: "POST", url: 'custom.json'}
            };
            this.resource = this.$resource('default.json', {}, customActions)
        },
        components: {
            'email-input': EmailInput,
            'name-input': NameInput,
            'card': Card,
            'dropzone': Dropzone,
            "crop-images": CroppieImage,
        }
    }
</script>

<style scoped>
    .box-one{
        border: solid 1px olive
    }
    .box-two{
        border: solid 1px olive;
        border-left: none;
    }
    .columns{
        margin: 20px
    }
    .image{
        background-color: darkgrey;
    }
</style>