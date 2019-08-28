import {
  INPUT_NUMBER,
  INPUT_OPERATOR,
  INPUT_EQUAL,
  CLEAR
} from "../../utils/actionTypes";
import {
  onNumClick,
  onOpeClick,
  onEqualClick,
  onClearClick
} from "../../actions/index";

describe("displayActions", () => {
  it("Creates an action to enter number", () => {
    const number = onNumClick(8);
    expect(number).toEqual({ type: INPUT_NUMBER, number: 8 });
  });
  it("Creates an action to enter operator", () => {
    const operator = "PLUS";

    const expectedAction = {
      type: INPUT_OPERATOR,
      operator: operator
    };
    expect(onOpeClick(operator)).toEqual(expectedAction);
  });
  it("Creates an actions to clear the display", () => {
    const expectedAction = {
      type: CLEAR
    };
    expect(onClearClick()).toEqual(expectedAction);
  });
  it("Creates an actions to equal", () => {
    const expectedAction = {
      type: INPUT_EQUAL
    };
    expect(onEqualClick()).toEqual(expectedAction);
  });
  it("Creates an actions to input operator", () => {
    const expectedAction = {
      type: INPUT_OPERATOR
    };
    expect(onOpeClick()).toEqual(expectedAction);
  });
});
