<template>
	<div>
		<!-- ======================= Simple Example -->
		<div class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h5 class="my-0">Simple Example</h5>
			</div>
			<div class="col-xl-4 col-6 d-flex justify-content-end">
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
this.$unicornLog();
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
	name: 'SimpleExample',
	components: {
		// VueCodeHighlight,
	},
	data: () => ({}),
	methods: {
		simpleExample() {
			this.$unicornLog();
		},

	},
};
</script>
