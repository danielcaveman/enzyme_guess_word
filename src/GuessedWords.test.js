import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it("should not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it("should renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  it("should show instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions").text();
    expect(instructions.length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});
