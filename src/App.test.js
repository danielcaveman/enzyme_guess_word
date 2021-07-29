import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { Provider } from "react-redux";
import { getSecretWord as mockGetSecretWord } from "./actions";

jest.mock("./actions");


const setup = (initialState={}) => {
  // useEffect is not called on shallow
  const store = storeFactory(initialState);
  return mount(<Provider store={store}><App /></Provider>);
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
    setup();
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
