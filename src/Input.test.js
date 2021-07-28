import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

// mock entire module for destructuring useState on import
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

const defaultProps = {
  secretWord: "train",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("should not show input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    it("should not show submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("should show input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    it("should show submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

it("should not throw warning with expected props", () => {
  checkProps(Input, defaultProps);
});

// Testing useState
describe("state controlled input field", () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  it("should updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  it("should clear the input after submit", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault: () => {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
