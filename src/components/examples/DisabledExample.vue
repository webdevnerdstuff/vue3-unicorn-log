<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>disabled</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="disabled-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="disabledCode"
					lang="javascript"
					@run="disabledExample"
				>
					<template #label>
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
					</template>
				</CodeBlock>
			</div>
		</div>
		<!-- ======================= Disabled Option -->
		<div id="disabled-conditional-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="disabledEnvCode"
					lang="javascript"
					:showCopyButton="false"
					:showRunButton="false"
					@run="disabledExample"
				>
					<template #label>
						<h6 class="my-0">Using an .env variable</h6>
						<div class="fst-italic">
							Conditionally set so it will log in development, but not on the
							production site.
						</div>
					</template>
				</CodeBlock>
			</div>
		</div>
	</div>
</template>


<script setup>
import { inject, ref } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const $unicornLog = inject('$unicornLog');

const isDisabled = ref(true);

const disabledCode = `$unicornLog({
	text: 'Hello World',
	disabled: true,
});`;

const disabledEnvCode = `$unicornLog({
	text: 'Hello World',
	disabled: process\u200b.env.UNICORN_LOG !== 'true',
});`;

function disabledExample() {
	$unicornLog({
		text: 'Hello World',
		disabled: isDisabled.value,
	});
}
</script>
