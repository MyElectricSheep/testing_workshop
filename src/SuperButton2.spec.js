import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AwesomeButton from "./SuperButton";

configure({ adapter: new Adapter() });

test("Button", () => {
  const SuperButton = shallow(<AwesomeButton />);

  expect(SuperButton.text()).toEqual("I'm an awesome button");

  SuperButton.find("button").simulate("click");

  expect(SuperButton.text()).toEqual("I'm not a super awesome button?");

  expect(SuperButton.find("button").prop("style")).toHaveProperty(
    "background",
    "red"
  );
});
