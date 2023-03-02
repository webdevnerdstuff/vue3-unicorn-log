<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0">
					<code>{{ isNameOption ? 'name' : 'logPrefix' }}</code>
				</h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div v-if="!isNameOption" id="logPrefix-simple-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<input
					v-model="logPrefix"
					class="form-control"
					placeholder="[Bunnies]:"
					type="text"
				/>
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
	logPrefix: '[Bunnies]:',
});
						</pre
					>
				</code>
			</div>
		</div>

		<!-- ======================= Name Boolean Option -->
		<div v-if="!isNameOption" id="name-default-example" class="row mb-4">
			<div class="col-12 mb-2">
				If <code>logPrefix</code> option is set as a
				<span class="option-type">Boolean</span> of
				<span class="boolean-style">true</span>, it will use the
				<code>name</code> option for the prefix.
			</div>

			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="withName"
						checked
						class="form-check-input"
						role="switch"
						type="checkbox"
					/>
					<label class="form-check-label"
						>logPrefix option =
						<span class="boolean-style">{{ withName }}</span> with default
						<code>name</code> option
					</label>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="exampleNameDefault"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<code language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	logPrefix: true,
});
						</pre
					>
				</code>
			</div>
		</div>

		<!-- ======================= Name Option -->
		<div id="name-example" class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="withName"
						checked
						class="form-check-input"
						role="switch"
						type="checkbox"
					/>
					<label class="form-check-label"
						>logPrefix = <span class="boolean-style">{{ withName }}</span> with
						<code>name</code> option set
					</label>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-outline-primary btn-sm"
					type="button"
					@click="exampleName"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<code language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	logPrefix: true,
	name: '{{ isNameOption ? 'Susan' : 'Bob' }}',
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
	name: 'LogPrefixExample',
	props: {
		isNameOption: {
			type: Boolean,
			default: false,
		},
	},
	// inject: ['$unicornLog'],
	components: {
		// VueCodeHighlight,
	},
	data: () => ({
		logPrefix: '[Bunnies]:',
		withName: true,
	}),
	methods: {
		exampleName() {
			// this.$unicornLog({
			// 	text: 'Hello World',
			// 	logPrefix: this.withName,
			// 	name: this.isNameOption ? 'Susan' : 'Bob',
			// });
		},
		exampleNameDefault() {
			// this.$unicornLog({
			// 	text: 'Hello World',
			// 	logPrefix: this.withName,
			// });
		},
		simpleExample() {
			// this.$unicornLog({
			// 	text: 'Hello World',
			// 	logPrefix: this.logPrefix,
			// });
		},
	},
};
</script>
