import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SuperButton from "../SuperButton";

Enzyme.configure({ adapter: new Adapter() });

describe("Super Button Test Suite", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<SuperButton />);
  });
  it('Should contain a button with the text: "I\'m an awesome button"', () => {
    const button = wrapper.find("button");
    // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html
    // https://enzymejs.github.io/enzyme/docs/api/selector.html
    expect(button.text()).toBe("I'm an awesome button");
    // .text() Returns a string of the rendered text of the current render tree.
    // Alternatively https://enzymejs.github.io/enzyme/docs/api/render.html
    // Use enzyme's render function to generate HTML from your React tree, and analyze the resulting HTML structure.
  });
  it("Should have its text value change on click", () => {
    wrapper.find("button").simulate("click"); // Here we go by element tag name syntax (input, div, span, etc.)
    expect(wrapper.text()).toBe("I'm not a super awesome button?");
  });
  it("Should have a red background and white color for text", () => {
    expect(wrapper.find("button").prop("style")).toHaveProperty(
      "background",
      "red"
    );
    expect(wrapper.find("button").prop("style")).toHaveProperty(
      "color",
      "white"
    );
  });
});
