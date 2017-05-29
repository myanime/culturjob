<template>
    <div>
    <div style="position:relative" :class="{'open':openSuggestion}">
        <input class="form-control" type="text" v-model="selection"
            @keydown.enter = 'enter'
            @keydown.down = 'down'
            @keydown.up = 'up'
            @input = 'change'
        >
        <ul class="dropdown-menu" style="width:100%">
            <li v-for="(suggestion, index) in matches"
                :class="{'active': isActive(index)}"
                @click="suggestionClick(index)">
                <a href="#">{{ suggestion }}</a>
            </li>
        </ul>
    </div>
    </div>
</template>


<script>
    export default {
        data: function() {
            return {
                open: false,
                current: 0,
            }
        },
        props: {
            suggestions: {
                type: Array,
                required: true
            },
            selection: {
                type: String,
                required: true,
                twoWay: true
            }
        },
        computed: {
            matches: function () {
                        return this.suggestions.filter((str) => {
                            return str.indexOf(this.selection) >= 0;
                            });
            },
            openSuggestion: function () {
                return this.selection !== '' &&
                       this.matches.length != 0 &&
                       this.open === true;
            }
        },
        methods: {
            //When enter pressed on the input
            enter() {
                this.selection = this.matches[this.current];
                this.open = false;
            },

            //When up pressed while suggestions are open
            up() {
                if(this.current > 0)
                    this.current--;
            },

            //When up pressed while suggestions are open
            down() {
                console.log("KeyDown");
                if(this.current < this.suggestions.length - 1)
                    this.current++;
            },

            //For highlighting element
            isActive(index) {
                return index === this.current;
            },

            //When the user changes input
            change() {
                if (this.open == false) {
                    this.open = true;
                    this.current = 0;
                }
            },

            //When one of the suggestion is clicked
            suggestionClick(index) {
                this.selection = this.matches[index];
                this.open = false;
            },
        }
    }
</script>