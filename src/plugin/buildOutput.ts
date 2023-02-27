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
	private options: OptionsSettings;
	private defaultStyles: DefaultStyles;
	private callback: (msg: string, msgType: string) => void = () => { };
	public errors = false;

	constructor(options: OptionsSettings, defaultStyles: DefaultStyles, callback: (msg: string, msgType: string) => void) {
		console.log('BuildOutput', { options, defaultStyles });

		this.options = options;
		this.defaultStyles = defaultStyles;
		this.callback = callback;
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
		const results = ['%c%s', options.styles];

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

		return results;
	}
}

export default {
	run(defaultStyles: DefaultStyles) {
		console.log('build', defaultStyles);
	},
};
