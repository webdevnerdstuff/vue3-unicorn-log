<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>array</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="array-simple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Single array</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="simpleExample"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<code language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	array: ['foo', 'bar'],
});
						</pre
					>
				</code>
			</div>
		</div>

		<!-- ======================= Array Objects -->
		<div id="array-objects-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Using an array of objects</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="objectArray"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<code language="js">
					<pre>
const foo = { foo: 'foo ' };
const bar = { bar: 'bar ' };

this.$unicornLog({
	text: 'Hello World',
	array: [foo, bar],
});
						</pre
					>
				</code>
			</div>
		</div>

		<!-- ======================= Array Spread Operator -->
		<div id="array-spread-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Using array spread Operator</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="arraySpreadOperator"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<code language="js">
					<pre>
const foo = ['foo'];
const bar = ['bar'];

this.$unicornLog({
	text: 'Hello World',
	array: [...foo, ...bar],
});
						</pre
					>
				</code>
			</div>
		</div>
	</div>
</template>

<script>
// import { component as VueCodeHighlight } from 'code';


export default {
	name: 'ArraysExample',
	components: {
		// VueCodeHighlight,
	},
	data: () => ({}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				array: ['foo', 'bar'],
			});
		},
		objectArray() {
			const foo = { foo: 'foo ' };
			const bar = { bar: 'bar ' };

			this.$unicornLog({
				text: 'Hello World',
				array: [foo, bar],
			});
		},
		arraySpreadOperator() {
			const foo = ['foo'];
			const bar = ['bar'];

			this.$unicornLog({
				text: 'Hello World',
				array: [...foo, ...bar],
			});
		},
	},
};
</script>
