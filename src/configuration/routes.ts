import type { Component } from 'vue';

import Home from '../pages/Home.vue';
import Account from '../pages/Account.vue';

interface Route {
  path: string;
  component: Component;
}

const routes: Route[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/account',
    component: Account,
  },
];

export { routes };
