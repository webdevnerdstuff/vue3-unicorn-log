import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import UnicornLog from '@/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

createApp(App)
	.use(UnicornLog)
	.component('fa-icon', FontAwesomeIcon)
	.mount('#app');
