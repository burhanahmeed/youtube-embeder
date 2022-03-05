import { App } from 'vue';

import Antdv from '@/src/bootstrap/antdv';

export { default as moduleRegistration } from './module-registration';

export default {
  install: (app: App) => {
    app.use(Antdv);
  },
};
