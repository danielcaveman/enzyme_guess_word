import moxios from "moxios";
import { getSecretWord, correctGuess, actionTypes } from ".";

describe("correctGuess", () => {
  it("should returns an object with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should return secretWord", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    return getSecretWord().then((secretWord) =>
      expect(secretWord).toBe("party")
    );
  });
});
