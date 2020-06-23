import React from 'react'
import { mount } from "enzyme"
import CounterContainer from "../CounterContainer"
import "../setupTests"

describe('Counter Component Test Suite', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<CounterContainer />)
    })
    it('Contains a button to increment the value of the counter', () => {
        const incrementButton = wrapper.find("#increment")
        expect(incrementButton.text()).toBe("+1")
    })
    it('Contains a button to decrement the value of the counter', () => {
        const decrementButton = wrapper.find("#decrement")
        expect(decrementButton.text()).toBe("-1")
    })
    it('Contains a counter div that holds the value of the counter', () => {
        const counterValue = wrapper.find("Counter")
        expect(counterValue.find('p').text()).toEqual('0')
    })
    it('Should increment the counter when the +1 button is clicked', () => {
        wrapper.find("#increment").simulate('click')
        const counterValue = wrapper.find("Counter")
        expect(counterValue.find('p').text()).toEqual('1')
    })
    it('Should decrement the counter when the -1 button is clicked', () => {
        // Be careful here, the original wrapper will still be rendered under the hood
        // and "remembers" the previous click you did! So you need to use beforeEach 
        // instead of beforeAll to remount the component after every test is done
        wrapper.find("#decrement").simulate('click')
        const counterValue = wrapper.find("Counter")
        expect(counterValue.find('p').text()).toEqual('-1')
    })
})