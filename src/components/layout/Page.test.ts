import { mount } from '@vue/test-utils';

import Page from './Page.vue';

describe('Page layout component', () => {
  test('Throws an error without content', () => {
    expect(() => {
      mount(Page);
    }).toThrow('Page should have content in default slot');
  });

  test('Renders without issues with default content', () => {
    const wrapper = mount(Page, {
      slots: {
        default: 'default slot',
      },
    });

    expect(wrapper.text()).toContain('default slot');
  });

  test('Renders without issues with default and iconBar content', () => {
    const wrapper = mount(Page, {
      slots: {
        default: 'default slot',
        iconBar: 'icon bar slot',
      },
    });

    expect(wrapper.text()).toContain('default slot');
    expect(wrapper.text()).toContain('icon bar slot');
  });
});
