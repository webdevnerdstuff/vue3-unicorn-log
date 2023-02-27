/* eslint-disable no-console */
import { reactive, ref } from 'vue';
import BuildOutput from './buildOutput';
import ValidateOptions from './validateOptions';
import { DefaultStyles, OptionsSettings } from '@/types';

// interface OptionsSettings {
// 	array?: (string[] | number[]);
// 	defaultStyles?: object;
// 	disabled?: boolean;
// 	globalOptions?: boolean;
// 	logPrefix?: boolean | string;
// 	magical?: boolean;
// 	name?: string;
// 	objects?: object;
// 	styles?: string;
// 	text?: string;
// 	type?: string;
// }

let globalOptions: OptionsSettings = reactive({
	array: [],
	defaultStyles: {},
	disabled: false,
	globalOptions: false,
	logPrefix: false,
	magical: false,
	name: '[UnicornLog]:',
	objects: {},
	styles: '',
	text: '🦄',
	type: 'log',
}
);
let pluginOptions: OptionsSettings = { ...globalOptions };

const name = ref('UnicornLog');
const logOutput = ref([]);
const logTypes: string[] = [
	'clear',
	'count',
	'countReset',
	'debug',
	'dir',
	'error',
	'group',
	'groupCollapsed',
	'groupEnd',
	'info',
	'log',
	'table',
	'time',
	'timeEnd',
	'timeLog',
	'trace',
	'warn',
];
const magicalStyleNames: string[] = [
	'magic',
	'magical',
	'prism',
	'psychedelic',
	'rainbow',
	'trippy',
	'unicorn',
];
const rainbowLinearGradient = `linear-gradient(to right,
	hsl(0, 100%, 50%),
	hsl(39, 100%, 50%),
	hsl(60, 100%, 50%),
	hsl(120, 100%, 50%),
	hsl(180, 100%, 50%),
	hsl(240, 100%, 50%),
	hsl(300, 100%, 50%),
	hsl(360, 100%, 50%)
)`;
let defaultStyles: DefaultStyles = {
	log: [
		'background-color: black',
		`border-image: ${rainbowLinearGradient} 1`,
		'border-style: solid',
		'border-width: 4px',
		'color: #fff',
		'font-weight: normal',
		'padding: 8px',
	],
	info: [
		'background-color: hsla(225, 100%, 8%, 1)',
		'box-shadow: 999px 0 0 hsla(225, 100%, 8%, 1)',
		'color: hsla(225, 100%, 85%, 1)',
		'display: block',
		'padding: 2px',
	],
	goNuts: [
		`background: ${rainbowLinearGradient}`,
		'color: #f7f7f7',
		'display: block',
		'font-family: "Helvetica", "Arial"',
		'font-size: 15px',
		'font-weight: bold',
		'margin: 5px 0',
		'padding: 10px',
		'text-shadow: 1px 1px 2px #000',
	],
};
const errors = ref(false);

console.log({ logTypes, magicalStyleNames, defaultStyles, errors, globalOptions, pluginOptions, name, logOutput });

// ========================================== Init //
function init() {
	// Do not run if disabled in the Plugin options //
	if (pluginOptions.disabled) {
		console.log('plugin disabled');
		return false;
	}

	// Set Default Styles //
	defaultStyles = { ...defaultStyles, ...pluginOptions.defaultStyles };

	// Run validation functions //
	const valid = ValidateOptions.run(pluginOptions, logTypes, logger);
	errors.value = valid;
	console.log({ valid });

	// Run Build functions //
	const foo = BuildOutput.run(defaultStyles);
	// Object.values(this.build).map((value) => {
	// 	if (typeof value === 'function') {
	// 		return value.call();
	// 	}

	// 	return false;
	// });

	// If errors, don't log //
	if (errors.value) {
		return false;
	}

	consoleOutput();
	return false;
}

function build() {
	// do something
}


// ========================================== Console Output //
function consoleDir(): unknown {
	const value = {
		objects: {},
		array: [],
	};

	if (Object.keys(pluginOptions.objects).length) {
		console.log('a');
		if (Object.keys(pluginOptions.array).length) {
			value.objects = pluginOptions.objects;
		}
		else {
			Object.assign(value, pluginOptions.objects);
		}
	}

	if (Object.keys(pluginOptions.array).length) {
		if (Object.keys(pluginOptions.objects).length) {
			value.array = pluginOptions.array;
		}
		else {
			Object.assign(value, pluginOptions.array);
		}
	}

	if (!Object.keys(value).length) {
		return logger('console.dir() expects the "objects" and/or array option value to be set.', 'error');
	}

	logger('console.dir() does not support colors.', 'info');

	return value;
}

function consoleTable(): unknown[] {
	logger('console.table() does not support colors.', 'info');

	return pluginOptions.array;
}

function consoleMethodNotSupported(logType: string): void {
	errors.value = true;
	logger(`console.${logType}() does not support colors.`, 'info');
}


// ===================== Make the final magic happen now //
function consoleOutput(): void {
	const logType = pluginOptions.type;

	if (logType === 'dir') {
		logOutput.value = [consoleDir()];
	}

	if (logType === 'table') {
		logOutput.value = [consoleTable()];
	}

	// These methods do not support console colors //
	if (logType === 'count' || logType === 'countReset' || logType === 'time' || logType === 'timeEnd' || logType === 'timeLog') {
		logOutput.value = [consoleMethodNotSupported(logType)];
	}

	if (!errors.value) {
		console[logType](...logOutput.value);
	}
}


// ========================================== Unicorn Logger //
function logger(msg = 'An error has occurred.', logType = 'log'): void {
	const label = logType.charAt(0).toUpperCase() + logType.slice(1);
	let style = '';

	if (logType === 'error') {
		errors.value = true;
	}

	if (logType === 'info') {
		style = defaultStyles.info.join(';');
	}

	console[logType]('%c%s', style, `[${name.value} ${label}]: ${msg}`);
}


// ========================================== Export //
const UnicornLog = (options: OptionsSettings) => {
	console.log('init', { options });

	// Set Global Options //
	if (options.globalOptions) {
		globalOptions = { ...options };
		return;
	}

	pluginOptions = { ...pluginOptions, ...options, ...globalOptions };
	console.log({ pluginOptions });

	init();
	return;
};

export default UnicornLog;
