import React from "react";
import CalculatorContainer from "./containers/CalculatorContainers";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
describe("Snapshot, container renders correctly", () => {
  it("Matches the snapshot", () => {
    const store = createStore(reducer);
    const tree = renderer
      .create(
        <Provider store={store}>
          <CalculatorContainer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
