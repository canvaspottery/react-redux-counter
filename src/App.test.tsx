import React from "react";
import { mount } from "enzyme";
import App from "./App";

test("something", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(App).length).toEqual(1);
});
