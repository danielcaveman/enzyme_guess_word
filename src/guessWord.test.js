import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

const setup = (state = {}) => {
  const wrapper = mount(<App />);

  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe.skip("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  it("should creates GuessedWords table with one row", () => {
    const guessedWordsRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRows).toHaveLength(1);
  });
});

describe.skip("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "hard", letterMatchCount: 2 },
        { guessedWord: "travel", letterMatchCount: 3 },
      ],
    });
  });
  it("should creates GuessedWords table with four rows", () => {
    const guessedWordsRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRows).toHaveLength(4);
  });
});

describe.skip("guess the secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "train",
      success: false,
      guessedWords: [],
    });
  });
  it("should show congrats message", () => {
    const congrats = findByTestAttr(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  it("should not display input component contents", () => {
    // const congrats = findByTestAttr(wrapper, "component-congrats");
    // expect(congrats.text().length).toBeGreaterThan(0);
  });
});
