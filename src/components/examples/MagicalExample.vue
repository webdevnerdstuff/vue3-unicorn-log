<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>magical</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="magical-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock :code="magicalCode" lang="javascript" @run="magicalExample">
					<template #label>
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

const magical = ref(true);
const magicalCode = `$unicornLog({
	text: 'Hello World',
	magical: true,
});`;

function magicalExample() {
	$unicornLog({
		text: 'Hello World',
		magical: magical.value,
	});
}
</script>
