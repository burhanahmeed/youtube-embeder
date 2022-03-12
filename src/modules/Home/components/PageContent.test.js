/* eslint-disable */
import { mount } from '@vue/test-utils';
import antdv from 'ant-design-vue';
import InputSearch from 'ant-design-vue/lib/input/Search';
import { useRouter } from 'vue-router'

import PageComponent from './PageContent.vue';

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => {}
  }))
}))


describe('test page content component', () => {
  it('should simulate redirect to viewer page', async () => {
    const push = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      push
    }))

    const wrapper = mount(PageComponent, {
      global: {
        plugins: [antdv],
      },
    });

    expect(wrapper.text()).toContain('embd');
    expect(wrapper.findComponent(InputSearch).exists()).toBeTruthy();

    const input = wrapper.find('input.ant-input.ant-input-lg')
    input.element.value = 'https://www.youtube.com/watch?v=a3t3UJGyjpU';
    await input.trigger('input')

    const searchBtn = wrapper.find('button.ant-btn.ant-btn-primary.ant-btn-lg.ant-input-search-button');
    await searchBtn.trigger('click')

    expect(input.element.value).toEqual('https://www.youtube.com/watch?v=a3t3UJGyjpU');

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith({
      name: 'Viewer',
      query: {
        q: 'a3t3UJGyjpU'
      }
    })
  })
});