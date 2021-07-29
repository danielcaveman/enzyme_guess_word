import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../src/configureStore";

import rootReducer from "../src/reducers";

export const storeFactory = initialState => createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
