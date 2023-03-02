<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>text</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="text-simple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="col-xl-8 col-lg-12 mt-2">
					<input
						v-model="text"
						class="form-control"
						placeholder="[Bunnies]:"
						type="text"
					/>
				</div>
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
});
						</pre
					>
				</code>
			</div>
		</div>
	</div>
</template>

<script>


export default {
	name: 'TextExample',
	components: {
	},
	data: () => ({
		text: '[Bunnies]:',
	}),
	methods: {
		simpleExample() {
			if (this.text !== '') {
				// this.$unicornLog({
				// 	text: this.text,
				// });

				return false;
			}

			// this.$unicornLog();
			return false;
		},
	},
};
</script>
