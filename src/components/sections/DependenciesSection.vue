<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Dependencies</h2>
		</div>

		<div class="col-12">
			<a :href="links.vueJs" target="_blank">Vue 3</a>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const styleData = inject('styleData');
const links = inject('links');
</script>

<style lang="scss"></style>

