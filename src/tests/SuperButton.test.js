import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import SuperButton from '../SuperButton'

Enzyme.configure({ adapter: new Adapter() })

describe('Super Button Test Suite', () => {
    it('Should contain a button with the text: "I\'m an awesome button"', () => {
        const wrapper = shallow(<SuperButton/>)
        const button = wrapper.find('button')
        expect(button.text()).toBe('I\'m an awesome button')
    })
      it('Should have its text value change on click', () => {
            const wrapper = shallow(<SuperButton/>)
            wrapper.find("button").simulate("click")
            expect(wrapper.text()).toBe("I\'m not a super awesome button?")
      })
        it('Should have a red background and white color for text', () => {
            const wrapper = shallow(<SuperButton/>)
            expect(wrapper.find("button").prop('style')).toHaveProperty('background', 'red')
            expect(wrapper.find("button").prop('style')).toHaveProperty('color', 'white')
        })
})