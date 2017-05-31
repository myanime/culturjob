<template>
    <div class="container" style="padding-top:50px;">
        <autocomplete :suggestions="cities" :selection.sync="value"></autocomplete>
    </div>
</template>

<script>
    import AutocompleteComponent from './AutocompleteComponent.vue'
    export default{
        data: function () {
            return {
                cities: ['Alabama', 'Kentucky', 'Kolkatta', 'Koira'],
                value: ""
            }
        },
        components:{
            'autocomplete': AutocompleteComponent
        }

    }
</script>
