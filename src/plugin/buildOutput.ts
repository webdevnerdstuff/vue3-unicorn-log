import { DefaultStyles, OptionsSettings } from '@/types';

const magicalStyleNames: string[] = [
	'magic',
	'magical',
	'prism',
	'psychedelic',
	'rainbow',
	'trippy',
	'unicorn',
];


class BuildOutput {
	public options: OptionsSettings;
	private defaultStyles: DefaultStyles;
	private callback: () => void = () => { };
	public errors = false;
	public outputResults = null;

	constructor(options: OptionsSettings, defaultStyles: DefaultStyles) {
		this.options = options;
		this.defaultStyles = defaultStyles;
	}


	// Add Prefix if option set //
	prefix() {
		const prefixOption = this.options.logPrefix;

		if (prefixOption) {
			if (typeof prefixOption === 'string') {
				this.options.text = `${prefixOption} ${this.options.text}`;
			}
			else {
				this.options.text = `${this.options.name} ${this.options.text}`;
			}
		}
	}

	// Build log styles //
	styles() {
		const options = this.options;
		let styles: string | boolean = options.styles;

		// If styles should be magical AF //
		if ((options.type === 'log' || options.type === 'info') && (magicalStyleNames.includes(options.styles) || options.magical)) {
			styles = this.defaultStyles.goNuts.join(';');
		}
		// Styles for info method //
		else if (styles === '' && options.type === 'info') {
			styles = this.defaultStyles.info.join(';');
		}
		// Default styles //
		else {
			styles = styles || this.defaultStyles.log.join(';');
		}

		// If styles is an array, join them //
		if (Array.isArray(styles)) {
			styles = styles.join(';');
		}

		this.options.styles = styles;
	}

	// Build the output //
	output() {
		const options = this.options;
		const resultsBase = ['%c%s', options.styles];
		const results = [];

		// Build the output results //
		if (options.text) {
			results.push(options.text);
		}

		if (options.array.length) {
			results.push(options.array);
		}

		if (Object.keys(options.objects).length) {
			results.push(options.objects);
		}

		const outputResults = [...resultsBase, ...results];

		this.options.logOutput = outputResults;
	}
}

export default {
	run(options: OptionsSettings, defaultStyles: DefaultStyles) {
		const output = new BuildOutput(options, defaultStyles);
		const propertyNames = Object.getOwnPropertyNames(BuildOutput.prototype);

		Object.values(propertyNames).map((functionName) => {
			if (functionName !== 'constructor') {
				output[functionName]();
			}
		});

		return output.options;
	},
};
