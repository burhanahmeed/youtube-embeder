import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Bootstrap, { moduleRegistration } from '@/src/bootstrap';
import Router from '@/src/routers';
import App from './App.vue';

import '@/src/assets/styles/tailwind.css';
import '@/src/assets/styles/custom.less';

moduleRegistration();

createApp(App)
  .use(Bootstrap)
  .use(Router)
  .use(createPinia())
  .mount('#app');
