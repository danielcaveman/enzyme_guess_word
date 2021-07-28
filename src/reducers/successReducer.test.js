import { actionTypes } from "../actions";
import successReducer from "./successReducer";

it("should returns false when the previous state is undefined", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

it("should returns the previous state when the action is unknown", () => {
  const newState = successReducer(true, { type: "UNKNOWN_ACTION" });
  expect(newState).toBe(true);
});

it("should returns true when the action type is `CORRECT_GUESS`", () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
