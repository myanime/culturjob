<template>
	<div>
		<div id="on" @click="switched(true)" :class="{active: value}">On</div>
		<div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
	</div>
</template>

<script>
	export default{
		props: ['value'],
		methods: {
			switched(isOn){
				this.$emit('input', isOn)
			}
		}
	}
</script>

<style scoped>
	#on, #off {  
		width: 40px;
		height: 30px;
		background-color: lightgrey;
		padding: 5px;
		display: inline-block;
		margin-top: 10px;
		margin-right: -4px;
		cursor: pointer;
		text-align: center;
	}
	#on:hover, #on.active {
		background-color: lightgreen;
	}
	#off:hover, #off.active {
		background-color: lightcoral;
	}
</style>