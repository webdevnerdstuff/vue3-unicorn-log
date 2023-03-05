<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>array</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="array-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="arrayCode"
					label="Single array"
					lang="javascript"
					@run="arrayExample"
				/>
			</div>
		</div>

		<!-- ======================= Array Objects -->
		<div id="array-objects-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="arrayObjectsCode"
					label="Using an array of objects"
					lang="javascript"
					@run="arrayObjectsExample"
				/>
			</div>
		</div>

		<!-- ======================= Array Spread Operator -->
		<div id="array-spread-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="spreadOperatorCode"
					label="Using array spread Operator"
					lang="javascript"
					@run="arraySpreadOperatorExample"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const $unicornLog = inject('$unicornLog');

const arrayCode = `$unicornLog({
	text: 'Hello World',
	array: ['foo', 'bar'],
});`;

const arrayObjectsCode = `const foo = { foo: 'foo ' };
const bar = { bar: 'bar ' };

$unicornLog({
	text: 'Hello World',
	array: [foo, bar],
});`;

const spreadOperatorCode = `const foo = ['foo'];
const bar = ['bar'];

$unicornLog({
	text: 'Hello World',
	array: [...foo, ...bar],
});`;

function arrayExample() {
	$unicornLog({
		text: 'Hello World',
		array: ['foo', 'bar'],
	});
}

function arrayObjectsExample() {
	const foo = { foo: 'foo ' };
	const bar = { bar: 'bar ' };

	$unicornLog({
		text: 'Hello World',
		array: [foo, bar],
	});
}

function arraySpreadOperatorExample() {
	const foo = ['foo'];
	const bar = ['bar'];

	$unicornLog({
		text: 'Hello World',
		array: [...foo, ...bar],
	});
}
</script>
