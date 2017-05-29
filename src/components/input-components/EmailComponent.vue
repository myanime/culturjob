<template>
    <div class="email-field">
        <label class="label" for="my-email">E-mail</label>
        <p class="control has-icons-right has-icons-left">
            <input :class="emailClasses"
                   placeholder="e-mail-new"
                   type="text"
                   name="email"
                   v-validate="'required|email'"
                   id="my-email" v-model.lazy="inputEmail"
                   @change="handleEmailUpadate()">
            <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
            <span v-if="!valid" class="icon is-small is-right"><i class="fa fa-warning"></i></span>
            <span v-if="valid && inputEmail" class="icon is-small is-right"><i class="fa fa-check"></i></span>
        </p>
        <p v-if="!valid" class="help is-danger">Geben Sie ein gültige e-mail adresse ein</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputEmail: "",
            }
        },
        computed:{
            emailClasses(){
                return {
                    'input': true,
                    'is-success': this.valid && this.inputEmail,
                    'is-danger': !this.valid
                }
            },
            valid(){
                var isValid = !this.errors.has('email');
                this.$emit('emailValidEvent', isValid);
                return isValid
            }
        },
        methods: {
            handleEmailUpadate(){
                this.$emit('emailChangedEvent', this.inputEmail);
            },
            forceValidate(){
                console.log("Validating Email Field");
                this.$validator.validateAll()
            }
        }
    }

</script>