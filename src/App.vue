<template>
   <div class="job-submit" v-if="false">
		<div>

		 <label for="job-title">Job Title</label>
		 <input type="text" id="job-title" class="input">

		 <label for="company-name">Company Name</label>
		 <input id="company-name" class="input">

		 <label>Job Description</label>
		 <textarea class="textarea"></textarea>

		 <br>

		 <div id="on"></div>
		 <div id="off"></div>

		 <label>Preview</label>
		 <br>
		 <tt-switches v-model='enabled' type-bold="true" color='green'></tt-switches>

		 <br>
		 <br>

		 <button class="button submit">Submit</button>

		</div>

		<hr>

		<div class="preview" v-if='enabled'>
			<h1 class="title">Preview</h1>
		</div>

		<hr>

		<custom-switch v-model='dataSwitch'></custom-switch>
		{{ dataSwitch }}

		<hr>

		<input value="Dog">
   </div>
</template>

<script>
import Switches from 'vue-switches';
import TwoTicketsSwitch from './TwoTicketsSwitch.vue'

export default {
    name: 'app',
    data () {
        return {
            enabled: false,
            jobTitle: "",
            companyName: "",
            jobDescription: {
                type: String,
                required: true
            },
            dataSwitch: true,
        }
    },
    components: {
        "tt-switches": Switches,
        "custom-switch": TwoTicketsSwitch,
    }
}
</script>

<style>
.job-submit{
   margin: 10px;
   width: 500px
}

</style>
