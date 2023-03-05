<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Console Methods</h2>
		</div>

		<div class="col-12">
			For a description of the different log methods, refer to the
			<a :href="links.consoleApi" target="_blank">Web APIs MDN</a>
			developer documentation for console.
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const styleData = inject('styleData');
const links = inject('links');
</script>

<style lang="scss"></style>
