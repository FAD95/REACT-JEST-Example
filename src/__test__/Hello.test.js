import React from 'react'
import Hello from '../components/Hello'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Para que Enzyme entienda que trabajara con react
Enzyme.configure({ adapter: new Adapter() })


