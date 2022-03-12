import { Router } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Index.vue'),
  },
  {
    path: '/v',
    name: 'Viewer',
    component: () => import('./views/Viewer.vue'),
  },
];

export default (router: Router) => {
  routes.forEach((route) => {
    router.addRoute(route);
  });
};
