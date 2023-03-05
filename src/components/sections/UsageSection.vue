<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Usage</h2>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="setupCode"
				label="Composition API (setup)"
				lang="javascript"
			/>
			<CodeBlock
				:code="scriptSetupCode"
				label="Composition API (script setup)"
				lang="javascript"
			/>
		</div>

		<div class="col-12">
			<CodeBlock :code="optionsApi" label="Options API" lang="javascript" />
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const styleData = inject('styleData');

const setupCode = `<script setup>
import { inject } from 'vue';

const $unicornLog = inject('$unicornLog');

$unicornLog();
<\/script>`;

const scriptSetupCode = `<script>
import { inject } from 'vue';

export default {
	setup() {
		const $unicornLog = inject('$unicornLog');

		$unicornLog();

		return {};
	},
};
<\/script>`;

const optionsApi = `<script>
export default {
	inject: ['$unicornLog'],
	mounted() {
		this.$unicornLog();
	},
};
<\/script>`;
</script>

<style lang="scss"></style>
