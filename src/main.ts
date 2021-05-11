/**
 * Modules
 */
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

/**
 * Compile CSS
 */
import '@/assets/scss/main.scss';

/**
 * Internal Modules
 */
import layouts from '@/layouts';

createApp(App)
  .use(layouts)
  .use(store)
  .use(router)
  .mount('#app')
;
