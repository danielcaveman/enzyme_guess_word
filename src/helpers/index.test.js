import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  it("should returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  it("should returns correct count when there are three matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  it("should returns correct count when there are duplicate letters in the match", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
