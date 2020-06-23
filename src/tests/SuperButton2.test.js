import React from "react";
import { shallow } from "enzyme";
import AwesomeButton from "../SuperButton";
import "../setupTests"

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
