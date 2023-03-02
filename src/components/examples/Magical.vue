<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>magical</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="magical-simple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="magical"
						checked
						class="form-check-input"
						role="switch"
						type="checkbox"
					/>
					<label class="form-check-label"
						>magical =
						<span class="boolean-style">{{ magical }}</span>
					</label>
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
	magical: true,
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
	name: 'MagicalExample',
	components: {
		// VueCodeHighlight,
	},
	data: () => ({
		magical: true,
	}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				magical: this.magical,
			});
		},
	},
};
</script>
