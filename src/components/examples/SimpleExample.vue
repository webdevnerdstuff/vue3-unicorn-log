<template>
	<div>
		<!-- ======================= Simple Example -->
		<div class="row mb-4">
			<div class="col-12">
				<CodeBlock
					code="$unicornLog();"
					label="Simple Example"
					lang="javascript"
					@run="simpleExample"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const $unicornLog = inject('$unicornLog');

function simpleExample() {
	$unicornLog();
}
</script>
