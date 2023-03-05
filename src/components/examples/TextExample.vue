<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>text</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="text-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="textCode"
					label="Simple Example"
					lang="javascript"
					@run="textExample"
				>
					<template #label>
						<input
							v-model="text"
							class="form-control"
							placeholder="[Bunnies]:"
							:style="styleData.fieldWidth"
							type="text"
						/>
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
const styleData = inject('styleData');

const text = ref('[Bunnies]:');

const textCode = `$unicornLog({
	text: 'Hello World',
});`;

function textExample() {
	if (text.value !== '') {
		$unicornLog({
			text: text.value,
		});

		return false;
	}

	$unicornLog();
	return false;
}

// export default {
// 	name: 'TextExample',
// 	components: {
// 	},
// 	data: () => ({
// 		text: '[Bunnies]:',
// 	}),
// 	methods: {
// 		simpleExample() {
// 			if (this.text !== '') {
// 				// $unicornLog({
// 				// 	text: this.text,
// 				// });

// 				return false;
// 			}

// 			// $unicornLog();
// 			return false;
// 		},
// 	},
// };
</script>
