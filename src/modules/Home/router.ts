import { Router } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Index.vue'),
  },
];

export default (router: Router) => {
  routes.forEach((route) => {
    router.addRoute(route);
  });
};
