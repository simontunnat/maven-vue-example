import MyParagraph from "../../../main/frontend/components/MyParagraph/MyParagraph.vue";
import {mount} from '@vue/test-utils'
import {expect, test} from 'vitest'

test('MyParagraph', async () => {
  expect(MyParagraph).toBeTruthy()

  const wrapper = mount(MyParagraph, {
    props: {
      text: "Lorem Ipsum",
    },
  })

  expect(wrapper.get('p').text()).toBe('Lorem Ipsum')
})
