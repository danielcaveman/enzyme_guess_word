import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

it("should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
