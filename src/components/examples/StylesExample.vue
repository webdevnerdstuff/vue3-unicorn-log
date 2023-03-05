<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>styles</code></h5>
			</div>

			<div class="col-12">
				For a list of the different available styles, refer to the
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output"
					target="_blank"
					>Web APIs MDN Styling Console Output
				</a>
				developer documentation. Depending on the browser, some styles may not
				work.
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="defaultStyles-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="defaultStylesCode"
					lang="javascript"
					@run="stylesExample"
				>
					<template #label>
						<input
							v-model="defaultStyles"
							class="form-control"
							placeholder="[Bunnies]:"
							:style="styleData.fieldWidth"
							type="text"
						/>
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Array Example -->
		<div id="defaultStyles-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="stylesArrayCode"
					label="Using an Array"
					lang="javascript"
					@run="arrayExample"
				>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Word Example -->
		<div id="defaultStyles-word-example" class="row mb-2">
			<div class="col-12">
				You can also set the <code>style</code> option to a magical word to make
				the magic happen. This can also be set with the
				<code>magical</code> option to <span class="boolean-style">true</span>.
			</div>
		</div>

		<div id="defaultStyles-word-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock :code="magicalWordCode" lang="javascript" @run="wordExample">
					<template #label>
						<select
							v-model="magicalWord"
							class="form-select"
							:style="styleData.fieldWidth"
						>
							<option v-for="word in magicalWords" :key="word">
								{{ word }}
							</option>
						</select>
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

const defaultStyles = ref('color: DeepPink; font-size: 2rem;');
const magicalWord = ref('unicorn');
const magicalWords = [
	'magic',
	'magical',
	'prism',
	'psychedelic',
	'rainbow',
	'trippy',
	'unicorn',
];

const defaultStylesCode = `$unicornLog({
	text: 'Hello World',
	styles: '${defaultStyles.value}',
});`;

const stylesArrayCode = `$unicornLog({
	text: 'Hello World',
	styles: [
		'background: black',
		'border: 1px dashed magenta',
		'color: magenta',
		'font-family: monospace',
		'font-size: 2em',
		'padding: 10px',
	],
});`;

const magicalWordCode = `$unicornLog({
	text: 'Hello World',
	styles: 'unicorn',
});`;

function arrayExample() {
	$unicornLog({
		text: 'Hello World',
		styles: [
			'background: black',
			'border: 1px dashed magenta',
			'color: magenta',
			'font-family: monospace',
			'font-size: 2em',
			'padding: 10px',
		],
	});
}

function stylesExample() {
	$unicornLog({
		text: 'Hello World',
		styles: defaultStyles.value,
	});
}

function wordExample() {
	$unicornLog({
		text: `Using the word ${magicalWord.value}`,
		styles: magicalWord.value,
	});
}

</script>
