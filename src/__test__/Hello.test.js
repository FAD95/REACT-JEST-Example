import React from 'react'
import Hello from '../components/Hello'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Para que Enzyme entienda que trabajara con react
Enzyme.configure({ adapter: new Adapter() })

describe('Tests React', () => {
  test('Check the text in the props', () => {
    const data = { title: 'Hello Jest' }
    const wrapper = mount(<Hello title={data.title} />)
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Hello Jest')
  })
})
