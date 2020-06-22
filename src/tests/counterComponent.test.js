import React from 'react'
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CounterComponent from "../CounterComponent"

Enzyme.configure({adapter: new Adapter()})

describe('Counter Component Test Suite', () => {
    it('Contains a counter div that holds the value of the counter', () => {
        const wrapper = shallow(<CounterComponent />)
        
    })
})