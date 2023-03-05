<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>type</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div id="defaultStyles-simple-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="typeCode"
					label="Simple Example"
					lang="javascript"
					@run="typeExample"
				>
					<template #label>
						<select
							v-model="logType"
							class="form-select"
							:style="styleData.fieldWidth"
							@change="checkType"
						>
							<option v-for="type in types" :key="type">{{ type }}</option>
						</select>
					</template>
				</CodeBlock>
			</div>
			<div v-if="logNote" class="col-12 my-2">
				<div
					class="alert alert-primary d-flex align-items-center mb-0"
					role="alert"
					v-html="logNote"
				></div>
			</div>
		</div>
	</div>
</template>


<script setup>
import { inject, ref } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const $unicornLog = inject('$unicornLog');
const styleData = inject('styleData');

const logNote = ref('');
const logType = ref('log');
const types = [
	'clear',
	'debug',
	'dir',
	'error',
	'group',
	'groupCollapsed',
	'groupEnd',
	'info',
	'log',
	'table',
	'trace',
	'warn',
];

const typeCode = `$unicornLog({
	text: 'Hello World',
	type: 'log',
});`;

function checkType() {
	logNote.value = '';

	const iconSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
			<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
			</symbol>
		</svg>
	`;

	const infoIcon = `
		${iconSvg}
			<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
		`;

	if (logType.value === 'dir' || logType.value === 'table') {
		logNote.value = `${infoIcon}<div>Console method <code>${logType.value}</code> will work, but does not support colors.</div>`;
		return false;
	}

	if (logType.value === 'groupEnd') {
		logNote.value = `${infoIcon}<div><code>groupEnd</code> only works when used with <code>group</code> or <code>groupCollapsed</code><div>`;

		return false;
	}

	return false;
}

function typeExample() {
	if (logType.value === 'dir') {
		$unicornLog({
			text: 'Hello World',
			type: 'dir',
			objects: { foo: 'bar' },
		});

		return false;
	}

	if (logType.value === 'table') {
		$unicornLog({
			text: 'Hello World',
			type: logType.value,
			array: [{ foo: 'foo' }, { foo: 'bar' }],
		});

		return false;
	}

	if (logType.value === 'debug') {
		$unicornLog({
			text: 'Hello World',
			type: logType.value,
			array: [{ foo: 'foo' }, { foo: 'bar' }],
		});

		return false;
	}

	if (logType.value === 'group' || logType.value === 'groupCollapsed') {
		$unicornLog({
			text: `${logType.value}`,
			type: logType.value,
		});

		$unicornLog({
			text: 'Foo',
			type: 'log',
		});

		$unicornLog({
			text: 'Bar',
			type: 'log',
		});

		$unicornLog({
			type: 'groupEnd',
			array: [{ foo: 'foo' }, { foo: 'bar' }],
		});

		return false;
	}

	$unicornLog({
		text: 'Hello World',
		type: logType.value,
	});

	return false;
}
</script>

<script>


export default {
	data: () => ({
		logNote: '',
		logType: 'log',
		types: [
			'clear',
			'debug',
			'dir',
			'error',
			'group',
			'groupCollapsed',
			'groupEnd',
			'info',
			'log',
			'table',
			'trace',
			'warn',
		],
	}),
	methods: {
		checkType() {
			this.logNote = '';

			const iconSvg = `
				<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
					<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
					</symbol>
				</svg>
			`;

			const infoIcon = `
			${iconSvg}
			 <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
			`;

			if (this.logType === 'dir' || this.logType === 'table') {
				this.logNote = `${infoIcon}<div>Console method <code>${this.logType}</code> will work, but does not support colors.</div>`;
				return false;
			}

			if (this.logType === 'groupEnd') {
				this.logNote = `${infoIcon}<div><code>groupEnd</code> only works when used with <code>group</code> or <code>groupCollapsed</code><div>`;

				return false;
			}

			return false;
		},
		simpleExample() {
			if (this.logType === 'dir') {
				// $unicornLog({
				// 	text: 'Hello World',
				// 	type: 'dir',
				// 	objects: { foo: 'bar' },
				// });

				return false;
			}

			if (this.logType === 'table') {
				// $unicornLog({
				// 	text: 'Hello World',
				// 	type: this.logType,
				// 	array: [{ foo: 'foo' }, { foo: 'bar' }],
				// });

				return false;
			}

			if (this.logType === 'debug') {
				// $unicornLog({
				// 	text: 'Hello World',
				// 	type: this.logType,
				// 	array: [{ foo: 'foo' }, { foo: 'bar' }],
				// });

				return false;
			}

			if (this.logType === 'group' || this.logType === 'groupCollapsed') {
				// $unicornLog({
				// 	text: `${this.logType}`,
				// 	type: this.logType,
				// });

				// $unicornLog({
				// 	text: 'Foo',
				// 	type: 'log',
				// });

				// $unicornLog({
				// 	text: 'Bar',
				// 	type: 'log',
				// });

				// $unicornLog({
				// 	type: 'groupEnd',
				// 	array: [{ foo: 'foo' }, { foo: 'bar' }],
				// });

				return false;
			}

			// $unicornLog({
			// 	text: 'Hello World',
			// 	type: this.logType,
			// });

			return false;
		},
	},
};
</script>
