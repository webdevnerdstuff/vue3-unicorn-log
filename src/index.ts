import { App, Plugin } from 'vue';
import { UnicornLog } from '@/plugin';

const UnicornLogPlugin = {
	install(app: App, options) {
		console.log('=============================== install');
		// console.log('app', { app });
		// console.log('options', { options });
		// console.log('this.options', this.options);
		app.provide('$unicornLog', UnicornLog);

		const allOptions = { globalOptions: true, ...options };

		app.config.globalProperties.$unicornLog = UnicornLog(allOptions);
	},
};

export default UnicornLogPlugin as unknown as Plugin;
