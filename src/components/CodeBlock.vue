<template>
	<div
		class="v-code-block-container v-code-block-mb-5"
		:class="codeBlockClasses"
	>
		<div class="v-code-block-container--header" :style="headerStyles">
			<div
				class="v-code-block-container--label v-code-block-pb-1"
				:class="labelClasses"
			>
				<template v-if="slots.label">
					<slot name="label" />
				</template>
				<template v-else>
					{{ props.label }}
				</template>
			</div>

			<div
				class="v-code-block-container--tabs d-flex align-items-end"
				:style="tabGroupStyle"
			>
				<div
					v-if="showCopyButton && showButtons"
					class="v-code-block-container--tab"
					@click="copyCode"
				>
					<div class="v-code-block-container--button-copy">
						<fa-icon
							v-if="showCopyIcons"
							class="fa-fw v-code-block-me-1"
							:class="iconClass"
							:icon="buttonIconValue"
						/>
						{{ buttonTextValue }}
					</div>
				</div>

				<div
					v-if="showRunButton && showButtons && !isMobile"
					class="v-code-block-container--tab"
					@click="runCode"
				>
					<div class="v-code-block-container--button-run">Run</div>
				</div>
			</div>
		</div>
		<div class="v-code-block-container--code">
			<pre :class="`language-${props.lang}`" :style="codeBlockStyles">
				<code :class="`language-${props.lang}`" v-html="renderCode"></code>
			</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	computed,
	onBeforeMount,
	onMounted,
	ref,
	useSlots,
} from 'vue';
import Prism from 'prismjs';
import UAParser from 'ua-parser-js';


// -------------------------------------------------- Emits & Slots //
const emit = defineEmits(['copied', 'run']);
const slots = useSlots();


// -------------------------------------------------- Props //
const props = defineProps({
	code: {
		type: [Object, Array, String, Number],
		required: true,
	},
	codeBlockRadius: {
		type: String,
		required: false,
		default: '0.5rem',
	},
	copyIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-copy',
	},
	copyText: {
		type: String,
		required: false,
		default: 'Copy Code',
	},
	failedIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-xmark',
	},
	indent: {
		type: Number,
		required: false,
		default: 4,
	},
	label: {
		type: String,
		required: false,
		default: 'Code Block',
	},
	lang: {
		type: String,
		required: false,
		default: 'javascript',
	},
	showButtons: {
		type: Boolean,
		required: false,
		default: true,
	},
	showCopyButton: {
		type: Boolean,
		required: false,
		default: true,
	},
	showCopyIcons: {
		type: Boolean,
		required: false,
		default: true,
	},
	showRunButton: {
		type: Boolean,
		required: false,
		default: true,
	},
	successIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-check',
	},
	tabGap: {
		type: String,
		required: false,
		default: '0.25rem',
	}
});


// -------------------------------------------------- Data //
const buttonIconValue = ref('');
const buttonTextValue = ref('');
const convertedCode = ref('');
const copying = ref(false);
const iconClass = ref('fa-solid fa-copy');
const isMobile = ref(false);


// -------------------------------------------------- Computed //
const codeBlockClasses = computed(() => {
	return isMobile.value ? 'v-code-block-container--mobile' : '';
});

const codeBlockStyles = computed(() => {
	const radius = props.codeBlockRadius;
	let borderRadius = `${radius} 0 ${radius} ${radius}`;

	if (!props.showButtons || (!props.showCopyButton && !props.showRunButton)) {
		borderRadius = radius;
	}

	return {
		borderRadius,
	};
});

const headerStyles = computed(() => {
	return {
		gap: props.tabGap,
	};
});

const labelClasses = computed(() => {
	return isMobile.value ? 'v-code-block-container--label-mobile' : '';
});

const renderCode = computed(() => {
	convertCode();
	const html = Prism.highlight(convertedCode.value, Prism.languages[props.lang], props.lang);

	return html;
});

const tabGroupStyle = computed(() => {
	return {
		gap: props.tabGap,
	};
});


// -------------------------------------------------- Mount //
onBeforeMount(() => {
	buttonTextValue.value = props.copyText;
	buttonIconValue.value = props.copyIcon;
});

onMounted(() => {
	mobileCheck();
});


// -------------------------------------------------- Methods //
function copyCode() {
	if (copying.value) {
		return false;
	}

	copying.value = true;

	navigator.clipboard.writeText(convertedCode.value).then(() => {
		buttonIconValue.value = props.successIcon;
		buttonTextValue.value = 'Copied!';
		iconClass.value = 'fa-solid fa-check';
	}, (err) => {
		buttonIconValue.value = props.failedIcon;
		buttonTextValue.value = 'Copy failed!';
		iconClass.value = 'fa-solid fa-xmark';
		console.error('Copy to clipboard failed: ', err);
	});

	setTimeout(() => {
		buttonIconValue.value = props.copyIcon;
		buttonTextValue.value = props.copyText;
		iconClass.value = 'fa-solid fa-copy';
		copying.value = false;
	}, 3000);
}

function convertCode() {
	if (props.lang === 'json') {

		convertedCode.value = JSON.stringify(props.code, null, props.indent);
		return false;
	}

	convertedCode.value = props.code;
	return false;
}

function mobileCheck() {
	const ua = UAParser();
	const device = ua.device;
	isMobile.value = device.type === 'mobile';
}

window.addEventListener("orientationchange", () => {
	mobileCheck();
});

function runCode() {
	emit('run');
}
</script>


<style lang="scss">
@import 'prism-themes/themes/prism-night-owl.css';

.v-code-block {
	&-container {
		&--label {
			&-mobile {
				input,
				select,
				textarea {
					display: none;
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped>
.v-code-block {
	&-container {
		display: block;
		max-width: 100%;

		&--header {
			align-items: end;
			display: flex;
			justify-content: space-between;
			width: 100%;
		}

		&--label {
			overflow: auto;
		}

		&--tabs {
			border: 1px solid transparent;
		}

		&--tab {
			align-items: center;
			background-color: rgba(var(--bs-primary-rgb), 0.1) !important;
			border-radius: 5px 5px 0 0;
			cursor: pointer;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			padding: 5px 15px;
			text-align: center;
			transition: background-color 0.35s ease;
			white-space: nowrap;
			width: fit-content;

			&:hover {
				background-color: rgba(var(--bs-primary-rgb), 0.2) !important;
			}
		}

		&--button {
			&-copy {
				.fa-solid {
					font-size: 14px !important;

					&.fa-copy {
						color: var(--bs-primary) !important;
					}

					&.fa-check {
						color: var(--bs-success);
					}

					&.fa-xmark {
						color: var(--bs-red);
					}
				}
			}
		}

		&--code {
			pre {
				display: flex;

				&[class*='language-'] {
					background-color: #282c34;
					margin-top: 0;
				}
			}
		}
	}

	// Utilities //
	@for $i from 1 through 5 {
		// ----------------------------- MISC MARGIN //
		&-mt-#{$i} {
			margin-top: $i * 0.25rem !important;
		}

		&-me-#{$i} {
			margin-right: $i * 0.25rem !important;
		}

		&-mb-#{$i} {
			margin-bottom: $i * 0.25rem !important;
		}

		&-ms-#{$i} {
			margin-left: $i * 0.25rem !important;
		}

		// ----------------------------- MISC PADDING //
		&-pt-#{$i} {
			padding-top: $i * 0.25rem !important;
		}

		&-pe-#{$i} {
			padding-right: $i * 0.25rem !important;
		}

		&-pb-#{$i} {
			padding-bottom: $i * 0.25rem !important;
		}

		&-ps-#{$i} {
			padding-left: $i * 0.25rem !important;
		}
	}
}
</style>
