import { Router } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/src/views/HomePage.vue'),
  },
];

export default (router: Router) => {
  routes.forEach((route) => {
    router.addRoute(route);
  });
};
