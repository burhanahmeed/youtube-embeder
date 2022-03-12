import { App } from 'vue';

import Antdv from '@/src/bootstrap/antdv';
import YoutubeIframe from '@techassi/vue-youtube-iframe';

export { default as moduleRegistration } from './module-registration';

export default {
  install: (app: App) => {
    app.use(Antdv);
    app.use(YoutubeIframe);
  },
};
