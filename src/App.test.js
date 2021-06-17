import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";

jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

const setup = () => {
  // useEffect is not called on shallow
  return mount(<App />);
};

it("should renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

describe("getSecretWord", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  it("should getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  it("should not run getSecretWord on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    // to simulate app update
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
