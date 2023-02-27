// import { ref } from 'vue';
import { OptionsSettings } from '@/types';


class ValidateOptions {
	private options: OptionsSettings = {};
	private types: string[] = [];
	private callback: (msg: string, msgType: string) => void = () => { };
	public errors = false;

	constructor(options: OptionsSettings, types: string[], callback: (msg: string, msgType: string) => void) {
		console.log('ValidateStuff', { options, types });

		this.options = options;
		this.types = types;
		this.callback = callback;
	}

	type() {
		console.log('type', this.options.type);

		if (!this.types.includes(this.options.type)) {

			if (this.options.type === 'dirXml') {
				this.errors = true;
				this.callback('console.dir() is not supported console method.', 'warn');
				return false;
			}

			this.errors = true;
			this.callback(`console.${this.options.type}() is not supported at this time or is not a valid console method.`, 'warn');
			return false;
		}

		return;
	}

	styles() {
		const stylesOption: unknown = this.options.styles;

		if (!(stylesOption instanceof Array) && (typeof stylesOption === 'object' || Number.isInteger(stylesOption))) {
			this.errors = true;
			this.callback('The "styles" option is not a String or an Array.', 'error');
		}

		return;
	}

	logPrefix() {
		const logPrefixOption: unknown = this.options.logPrefix;

		if (typeof logPrefixOption === 'object' || logPrefixOption instanceof Boolean) {
			this.errors = true;
			this.callback('The "logPrefix" option is not a string or boolean.', 'error');
		}

		return;
	}

	text() {
		const textOption: unknown = this.options.text;

		if (typeof textOption !== 'string') {
			this.errors = true;
			this.callback('The "text" option is not a string.', 'error');
		}

		return;
	}

	objects() {
		const objectsOption: unknown = this.options.objects;

		if (objectsOption instanceof Array || typeof objectsOption === 'string' || Number.isInteger(objectsOption)) {
			this.errors = true;
			this.callback('The "objects" option is not an object.', 'error');
		}

		return;
	}

	array() {
		const arrayOption: unknown = this.options.array;

		if (!(arrayOption instanceof Array) || typeof arrayOption === 'string' || Number.isInteger(arrayOption)) {
			this.errors = true;
			this.callback('The "array" option is not an array.', 'error');
		}

		return;
	}
}

export default {
	run(options: OptionsSettings, types: string[], callback: (message: '', messageType: '') => void) {
		const validation = new ValidateOptions(options, types, callback);
		const propertyNames = Object.getOwnPropertyNames(ValidateOptions.prototype);

		Object.values(propertyNames).map((functionName) => {
			if (functionName !== 'constructor') {
				validation[functionName]();
			}
		});

		return validation.errors;
	},
};
