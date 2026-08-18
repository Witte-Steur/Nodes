import { createRouter, createWebHistory } from 'vue-router';

import { mount } from '@vue/test-utils';

import type { Router } from 'vue-router';

import { routes } from './configuration/routes.ts';

import App from './App.vue';

let router: Router;

describe('App layout component', () => {
  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    });
  });

  test('Shows the Nodes page by default', async () => {
    router.push('/');

    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Nodes');
  });

  test('Shows the Account page when accessed', async () => {
    router.push('/account');

    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Account');
  });
});
