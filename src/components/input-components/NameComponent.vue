<template>
    <div class="name-field">
        <label class="label" :for="labelName">{{ labelName }}</label>
        <p class="control has-icons-right has-icons-left">
            <input :class="nameClasses"
                   type="text"
                   name="name"
                   v-validate="'required|max:40'"
                   :id="labelName"
                   :placeholder="inputPlaceholder"
                   v-model="name"
                   @input="handleNameUpdate()">
            <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
            <span v-if="!valid" class="icon is-small is-right"><i class="fa fa-warning"></i></span>
            <span v-if="valid && name" class="icon is-small is-right"><i class="fa fa-check"></i></span>
            <p v-if="!valid" class="help is-danger">Ungültige Eingabe</p>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                isValid: false,
            }
        },
        props: {
            labelName: "",
            inputPlaceholder: ""
        },
        computed: {
            nameClasses(){
                return {
                    'input': true,
                    'is-success': this.valid && this.name,
                    'is-danger': !this.valid
                }
            },
            valid(){
                var isValid = !this.errors.has('name');
                this.$emit('nameValidEvent', isValid);
                return isValid
            }
        },
        methods: {
            handleNameUpdate(){
                this.$emit('nameChangeEvent', this.name)
            },
            forceValidate() {
                this.$validator.validateAll()
            }
        }

    }

</script>
