<template>
    <div class="columns">
        <div class="column is-half-desktop box-one">
            <h1 class="heading">DeepstreamHub Example!</h1>
            <div class="first-name-field">
                <label class="label" for="my-name">First Name</label>
                <p class="control has-icons-left has-icons-right">
                    <input class="input"
                           type="text"
                           id="my-name"
                           placeholder="First Name"
                           v-model="firstname" @input="handleFNameUpdate()"
                    >
                    <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
                     <!--<span class="icon is-small is-right"><i class="fa fa-check"></i></span>-->
                </p>
            </div>

            <div class="name-field">
                <label class="label" for="my-lastname">Last Name</label>
                <p class="control has-icons-right has-icons-left">
                    <input class="input"
                           type="text"
                           id="my-lastname"
                           placeholder="Last Name"
                           v-model="lastname"
                           @input="handleLNameUpdate()">
                    <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
                    <!--<span class="icon is-small is-right"><i class="fa fa-check"></i></span>-->
                </p>

            </div>

            <div class="email-field">
                <label class="label" for="my-email">E-mail</label>
                <p class="control has-icons-right has-icons-left">
                    <input class="input"
                           placeholder="e-mail"
                           type="text"
                           id="my-email" v-model="email"
                           @input="handleEmailUpadate()">
                    <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                    <!--<span class="icon is-small is-right"><i class="fa fa-warning"></i></span>-->
                </p>
                <!--<p class="help is-danger">Invalid Email</p>-->
            </div>

            <br>

            <button class="button" @click="submit">Submit</button>
            <br>
            <input type="text" v-model="node" class="form-control">
            <button class="button" @click="fetchData">Get Data</button>

        </div>
        <div class="column is-half-desktop" style="background-color: olive">
            <h1 class="heading">Data</h1>
            <p>{{ firstname }} {{ lastname }}</p>

            <ul class="list-group">
                <li class="list-group-item" v-for="user in users"> {{user.firstname}} - {{user.lastname}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data: function() {
            return {
                email: '',
                lastname: '',
                firstname: '',
                record: null,
                users: [],
                resource: {},
                node: "data"
            }
        },
        props: ['ds'],
        created: function() {
            let self = this;
            this.record = this.ds.record.getRecord('test/Ryan');

            this.record.subscribe(function(values){
                    self.firstname = values.firstname;
                    self.lastname = values.lastname;
            })
        },
        methods: {
            handleFNameUpdate: function () {
                this.record.set('firstname', this.firstname);
            },
            handleLNameUpdate: function () {
                this.record.set('lastname', this.lastname);
            },
            submit: function () {
                let serverResponse = function (response) {
                    console.log(response);
                };
                let errorHandler = function (error) {
                    console.log(error);
                };

                let objectToSend = {
                    firstname: this.firstname,
                    lastname: this.lastname
                };

                console.log('Submit' + this.lastname);

//                this.$http.post('', objectToSend)
//                    .then(serverResponse, errorHandler)
                this.resource.save({node: this.node}, objectToSend)
                //this.resource.saveAlt(objectToSend)
            },
            fetchData(){
                var handleGetResponse = response => {
                    return response.json()
                };
                var logData = function(data){
                    console.log(data);
                    const resultArray = [];
                    var key = null;
                    for (key in data){
                        console.log(key);
                        console.log(data[key]);
                        resultArray.push(data[key]);
                        console.log(resultArray);
                        this.users = resultArray;
                    }
                };
                var logSingleData = function (data) {
                    console.log('Kitty');
                    console.log(data)
                    this.users.push(data);
                };
//                this.$http.get('').then(handleGetResponse).then(logData)
                this.resource.getData({node: this.node}).then(handleGetResponse).then(logSingleData);
            }

        },
        created(){
            const customActions = {
                saveAlt: {method: "POST", url: "alternative.json"},
                getData: {method: 'GET'}
            };

            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style scoped>
    .box-one{
        border: solid 1px olive
    }
    .columns{
        margin: 20px
    }
</style>