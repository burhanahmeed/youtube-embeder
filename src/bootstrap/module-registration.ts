import Router from '@/src/routers';
import { Router as HomeRouter } from '@/src/modules/Home';

const registerModule = ({ route }: any) => {
  route(Router);
};

export default () => {
  const modules = [
    { route: HomeRouter },
  ];

  modules.forEach((module) => {
    registerModule({ route: module.route });
  });
};
