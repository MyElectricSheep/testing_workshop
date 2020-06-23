import React from "react"
import { shallow, mount } from 'enzyme'
import "../setupTests"

import MyComponent from "../MyComponent"

describe('My Component Test Suite', () => {
    it('Should show the correct text', () => {
        const wrapper = shallow(<MyComponent />) //
        const greatDiv = wrapper.find('div div')
        expect(greatDiv.text()).toBe('This is great!')
    })
      it('Should hide the text when the button is clicked', () => {
        const wrapper = shallow(<MyComponent />)
        const button = wrapper.find('button')
        button.simulate('click')
        const greatDiv = wrapper.find('div div')
        expect(greatDiv.length).toBe(0)
      })
      it('Should update the username state when the user inputs some data', () => {
        const component = mount(<MyComponent />)
        // expect(component.ref('username')).toBe('')
      })
})