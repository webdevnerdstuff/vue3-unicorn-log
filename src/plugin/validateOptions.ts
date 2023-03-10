import { ref } from 'vue';
import { OptionsSettings } from '@/types';

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


class ValidateOptions {
	private options: OptionsSettings = {};
	private callback = null;
	public errors = ref<boolean>(false);
	public name = ref<string>('');

	constructor(options: OptionsSettings, callback: () => void) {
		this.options = options;
		this.callback = callback;
		this.name.value = options.name;
	}

	type() {
		if (!logTypes.includes(this.options.type)) {

			if (this.options.type === 'dirXml') {
				this.errors.value = true;
				this.callback('console.dir() is not supported console method.', 'warn');
				return false;
			}

			this.errors.value = true;
			this.callback(`console.${this.options.type}() is not supported at this time or is not a valid console method.`, 'warn');
			return false;
		}

		return;
	}

	styles() {
		const stylesOption: unknown = this.options.styles;

		if (!(stylesOption instanceof Array) && (typeof stylesOption === 'object' || Number.isInteger(stylesOption))) {
			this.errors.value = true;
			this.callback('The "styles" option is not a String or an Array.', 'error');
		}
	}

	logPrefix() {
		const logPrefixOption: unknown = this.options.logPrefix;

		if (typeof logPrefixOption === 'object' || logPrefixOption instanceof Boolean) {
			this.errors.value = true;
			this.callback('The "logPrefix" option is not a string or boolean.', 'error');
		}
	}

	text() {
		const textOption: unknown = this.options.text;

		if (typeof textOption !== 'string') {
			this.errors.value = true;
			this.callback('The "text" option is not a string.', 'error');
		}
	}

	objects() {
		const objectsOption: unknown = this.options.objects;

		if (objectsOption instanceof Array || typeof objectsOption === 'string' || Number.isInteger(objectsOption)) {
			this.errors.value = true;
			this.callback('The "objects" option is not an object.', 'error');
		}
	}

	array() {
		const arrayOption: unknown = this.options.array;

		if (!(arrayOption instanceof Array) || typeof arrayOption === 'string' || Number.isInteger(arrayOption)) {
			this.errors.value = true;
			this.callback('The "array" option is not an array.', 'error');
		}
	}
}

export default {
	run(options: OptionsSettings, callback: () => void) {
		const validation = new ValidateOptions(options, callback);
		const propertyNames: object = Object.getOwnPropertyNames(ValidateOptions.prototype);

		Object.values(propertyNames).map((functionName) => {
			if (functionName !== 'constructor') {
				validation[functionName]();
			}
		});

		return validation.errors.value;
	},
};
