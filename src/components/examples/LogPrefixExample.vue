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
			<div class="col-12">
				<CodeBlock
					:code="logPrefixCode"
					lang="javascript"
					@run="logPrefixExample"
				>
					<template #label>
						<input
							v-model="logPrefix"
							class="form-control"
							placeholder="[Bunnies]:"
							type="text"
						/>
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Name Boolean Option -->
		<div v-if="!isNameOption" id="name-default-example" class="row mb-4">
			<div class="col-12 mb-2">
				If <code>logPrefix</code> option is set as a
				<span class="option-type">Boolean</span> of
				<span class="boolean-style">true</span>, it will use the default
				<code>name</code> option for the prefix.
			</div>

			<div class="col-12">
				<CodeBlock
					:code="logPrefixBoolCode"
					lang="javascript"
					@run="nameDefaultExample"
				>
					<template #label>
						<div class="form-check form-switch">
							<input
								v-model="withName"
								checked
								class="form-check-input"
								role="switch"
								type="checkbox"
							/>
							<label class="form-check-label">
								logPrefix option =
								<span class="boolean-style">{{ withName }}</span> with default
								<code>name</code> option
							</label>
						</div>
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Name Option -->
		<div id="name-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock :code="withNameCode" lang="javascript" @run="nameExample">
					<template #label>
						<div class="form-check form-switch">
							<input
								v-model="withName"
								checked
								class="form-check-input"
								role="switch"
								type="checkbox"
							/>
							<label class="form-check-label">
								logPrefix =
								<span class="boolean-style">{{ withName }}</span> with
								<code>name</code> option set
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

const props = defineProps({
	isNameOption: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const logPrefix = ref('[Bunnies]:');
const withName = ref(true);

const logPrefixCode = `$unicornLog({
	text: 'Hello World',
	logPrefix: '[Bunnies]:',
});`;

const logPrefixBoolCode = `$unicornLog({
	text: 'Hello World',
	logPrefix: true,
});`;

const withNameCode = `$unicornLog({
	text: 'Hello World',
	logPrefix: true,
	name: 'Bob',
});`;

function nameExample() {
	$unicornLog({
		text: 'Hello World',
		logPrefix: withName.value,
		name: props.isNameOption.value ? 'Susan' : 'Bob',
	});
}

function nameDefaultExample() {
	$unicornLog({
		text: 'Hello World',
		logPrefix: withName.value,
	});
}

function logPrefixExample() {
	$unicornLog({
		text: 'Hello World',
		logPrefix: logPrefix.value,
	});
}
</script>
