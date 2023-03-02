import { App, Plugin } from 'vue';
import { UnicornLog } from '@/plugin';
import { OptionsSettings } from '@/types';

const UnicornLogPlugin = {
	install(app: App, options: OptionsSettings) {
		app.provide('$unicornLog', UnicornLog);

		const allOptions = { globalOptions: true, ...options };

		// eslint-disable-next-line no-param-reassign
		app.config.globalProperties.$unicornLog = UnicornLog(allOptions);
	},
};

export default UnicornLogPlugin as unknown as Plugin;
