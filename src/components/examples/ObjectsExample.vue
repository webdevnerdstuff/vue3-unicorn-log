<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>objects</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="objects-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="objectCode"
					label="Single object"
					lang="javascript"
					@run="objectExample"
				/>
			</div>
		</div>

		<!-- ======================= Multiple Objects -->
		<div id="objects-multiple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="multipleObjectsCode"
					label="Multiple objects"
					lang="javascript"
					@run="multipleObjectsExample"
				/>
			</div>
		</div>

		<!-- ======================= Object Spread Operator -->
		<div id="objects-spread-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="spreadOperatorCode"
					label="Using object spread Operator"
					lang="javascript"
					@run="objectSpreadOperatorExample"
				/>
			</div>
		</div>
	</div>
</template>


<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const $unicornLog = inject('$unicornLog');

const objectCode = `$unicornLog({
	text: 'Hello World',
	objects: { foo: 'bar' },
});`;

const multipleObjectsCode = `const foo = { foo: 'foo ' };
const bar = { bar: 'bar ' };

$unicornLog({
	text: 'Hello World',
	objects: { foo, bar },
});`;

const spreadOperatorCode = `const foo = { foo: 'foo ' };
const bar = { bar: 'bar ' };

$unicornLog({
	text: 'Hello World',
	objects: { ...foo, ...bar },
});`;

function objectExample() {
	$unicornLog({
		text: 'Hello World',
		objects: { foo: 'bar' },
	});
}

function multipleObjectsExample() {
	const foo = { foo: 'foo ' };
	const bar = { bar: 'bar ' };

	$unicornLog({
		text: 'Hello World',
		objects: { foo, bar },
	});
}

function objectSpreadOperatorExample() {
	const foo = { foo: 'foo' };
	const bar = { bar: 'bar' };

	$unicornLog({
		text: 'Hello World',
		objects: { ...foo, ...bar },
	});
}
</script>
