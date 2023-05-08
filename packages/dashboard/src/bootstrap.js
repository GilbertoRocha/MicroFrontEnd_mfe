import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {

	const app = createApp(Dashboard);
	// this mount function is related to vue, and not to our mount function passed to container
	app.mount(el);
};


if (process.env.NODE_ENV === 'development') {

	const devRoot = document.querySelector('#_dashboard-dev-root');

	if (devRoot) {
		mount(devRoot);
	}
}

export { mount };