/* eslint-disable no-console */
import { reactive, ref } from 'vue';
import BuildOutput from './buildOutput';
import ValidateOptions from './validateOptions';
import { DefaultStyles, OptionsSettings } from '@/types';

let globalOptions: OptionsSettings = reactive({
	array: [],
	defaultStyles: {},
	disabled: false,
	globalOptions: false,
	logOutput: [],
	logPrefix: false,
	magical: false,
	name: '[UnicornLog]:',
	objects: {},
	styles: '',
	text: '🦄',
	type: 'log',
});

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


class UnicornLogger {
	private pluginOptions: OptionsSettings = { ...globalOptions };
	private name = ref('UnicornLog');
	private logOutput = ref([]);
	private defaultStyles: DefaultStyles = {
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
	private errors = ref(false);


	// ========================================== Constructor //
	constructor(options: OptionsSettings) {
		this.pluginOptions = { ...this.pluginOptions, ...options };
	}


	// ========================================== Init //
	init() {
		// Do not run if disabled in the Plugin options //
		if (this.pluginOptions.disabled) {
			return false;
		}

		// Set Default Styles //
		this.defaultStyles = { ...this.defaultStyles, ...this.pluginOptions.defaultStyles };

		// Run validation functions //
		const valid = ValidateOptions.run(this.pluginOptions, this.logger);
		this.errors.value = valid;

		// Run Build functions //
		this.pluginOptions = BuildOutput.run(this.pluginOptions, this.defaultStyles);

		// If errors, don't log //
		if (this.errors.value) {
			return false;
		}

		this.consoleOutput();
		return false;
	}


	// ========================================== Console Output //
	consoleDir(): unknown {
		const options = this.pluginOptions;
		const value = {
			objects: {},
			array: [],
		};

		if (Object.keys(options.objects).length) {
			if (Object.keys(options.array).length) {
				value.objects = options.objects;
			}
			else {
				Object.assign(value, options.objects);
			}
		}

		if (Object.keys(options.array).length) {
			if (Object.keys(options.objects).length) {
				value.array = options.array;
			}
			else {
				Object.assign(value, options.array);
			}
		}

		if (!Object.keys(value).length) {
			return this.logger('console.dir() expects the "objects" and/or array option value to be set.', 'error');
		}

		this.logger('console.dir() does not support colors.', 'info');

		return value;
	}

	consoleTable(): unknown[] {
		this.logger('console.table() does not support colors.', 'info');

		return this.pluginOptions.array;
	}

	consoleMethodNotSupported(logType: string): void {
		this.errors.value = true;
		this.logger(`console.${logType}() does not support colors.`, 'info');
	}


	// ===================== Make the final magic happen now //
	consoleOutput(): void {
		const logType = this.pluginOptions.type;
		this.logOutput.value = this.pluginOptions.logOutput;


		if (logType === 'dir') {
			this.logOutput.value = [this.consoleDir()];
		}

		if (logType === 'table') {
			this.logOutput.value = [this.consoleTable()];
		}

		// These methods do not support console colors //
		if (logType === 'count' || logType === 'countReset' || logType === 'time' || logType === 'timeEnd' || logType === 'timeLog') {
			this.logOutput.value = [this.consoleMethodNotSupported(logType)];
		}

		if (!this.errors.value) {
			console[logType](...this.logOutput.value);
		}
	}


	// ========================================== Unicorn Logger //
	// TODO: Need to fix `this` //
	logger(msg = 'An error has occurred.', logType = 'log'): void {
		const label = logType.charAt(0).toUpperCase() + logType.slice(1);
		let style = '';

		console.log('logger', this);

		if (logType === 'error') {
			this.errors.value = true;
		}

		if (logType === 'info') {
			style = this.defaultStyles.info.join(';');
		}

		console[logType]('%c%s', style, `[${this.name.value} ${label}]: ${msg}`);
	}
}


// ========================================== Export //
const UnicornLog = (options: OptionsSettings) => {
	console.log('START', { options });

	// Set Global Options //
	if (options.globalOptions) {
		globalOptions = { ...globalOptions, ...options };
		return;
	}

	const Magic = new UnicornLogger(options);

	Magic.init();

	return;
};

export default UnicornLog;
