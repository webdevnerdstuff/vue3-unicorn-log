import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import UnicornLog from '@/index';

const app = createApp(App);

app.use(UnicornLog, {
	// disabled: true
	// type: 'dirXml'
});

app.mount('#app');
