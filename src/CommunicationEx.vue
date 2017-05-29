<template>
   <div class="job-submit" v-if="false">
		<div>
			<component-1 :mutualData="mutualData" @customEmitEvent="mutualData = $event"></component-1>
			<hr>
			<component-2 :mutualData="mutualData"></component-2>
			<hr>
			<component-3 :mutualData="mutualData" :myProp="changeData"></component-3>
			<hr>
			<component-4 :mutualData="mutualData"></component-4>
			<hr>
		</div>
   </div>
</template>

<script>
import Component1 from './components/test-components/Component1.vue'
import Component2 from './components/test-components/Component2.vue'
import Component3 from './components/test-components/Component3.vue'
import Component4 from './components/test-components/Component4.vue'

export default {
    name: 'app',
    data () {
        return {
			componentOneData: "",
			componentTwoData: "",
			mutualData: "Fish",
        }
    },
	methods:{
        changeData: function () {
			this.mutualData = "pasta"
        }
	},
    components: {
        "component-1": Component1,
        "component-2": Component2,
        "component-3": Component3,
        "component-4": Component4,
    }
}
</script>

<style>
.job-submit{
   margin: 10px;
   width: 500px
}

</style>
