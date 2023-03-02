<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>disabled</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="disabled-simple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="isDisabled"
						checked
						class="form-check-input"
						role="switch"
						type="checkbox"
					/>
					<label class="form-check-label"
						>disabled =
						<span class="boolean-style">{{ isDisabled }}</span>
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
	disabled: true,
});
						</pre
					>
				</code>
			</div>
		</div>
		<!-- ======================= Disabled Option -->
		<div id="disabled-conditional-example" class="row mb-4">
			<div class="col-12">
				<h6 class="my-0">Using an .env variable</h6>
				<div class="fst-italic">
					Conditionally set so it will log in development, but not on the
					production site.
				</div>
			</div>

			<div class="col-xl-8 col-lg-12">
				<code language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	disabled: process.env.UNICORN_LOG !== 'true',
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
	name: 'DisabledExample',
	components: {
	},
	data: () => ({
		isDisabled: true,
	}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				disabled: this.isDisabled,
			});
		},
	},
};
</script>
