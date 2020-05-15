import Vue from 'vue';
import VueMeta from 'vue-meta';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(VueMeta);

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

/**
 * Compile CSS
 */
import '@/assets/scss/main.scss';

/**
 * Internal Modules
 */
import Layouts from '@/layouts';

Vue.use(Layouts);

Vue.config.productionTip = false;

/**
 * Define the application instance.
 *
 * @var {Object}
 */
const instance = App;

/**
 * Setup and configure the application instance before it gets mounted.
 *
 * @var {Object}
 */
const app = new Vue({
  router,
  store,
  render: h => h(instance),
});

/**
 * Attach the application instance to the window object.
 */
declare global {
  interface Window {
    app: any;
  }
}
window.app = app;

/**
 * Mount the application.
 */
app.$mount('#app');
