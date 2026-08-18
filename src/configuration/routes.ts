import type { Component } from 'vue';

import Home from '../components/pages/Home.vue';
import Account from '../components/pages/Account.vue';

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
