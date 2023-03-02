<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>objects</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="objects-simple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Single object</h6>
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
	objects: { foo: 'bar' },
});
						</pre
					>
				</code>
			</div>
		</div>

		<!-- ======================= Multiple Objects -->
		<div id="objects-multiple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Multiple objects</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="multipleObjects"
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
	objects: { foo, bar },
});
						</pre
					>
				</code>
			</div>
		</div>

		<!-- ======================= Object Spread Operator -->
		<div id="objects-spread-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Using object spread Operator</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="objectSpreadOperator"
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
	objects: { ...foo, ...bar },
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
	name: 'ObjectsExample',
	components: {
		// VueCodeHighlight,
	},
	data: () => ({}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				objects: { foo: 'bar' },
			});
		},
		multipleObjects() {
			const foo = { foo: 'foo ' };
			const bar = { bar: 'bar ' };

			this.$unicornLog({
				text: 'Hello World',
				objects: { foo, bar },
			});
		},
		objectSpreadOperator() {
			const foo = { foo: 'foo' };
			const bar = { bar: 'bar' };

			this.$unicornLog({
				text: 'Hello World',
				objects: { ...foo, ...bar },
			});
		},
	},
};
</script>
