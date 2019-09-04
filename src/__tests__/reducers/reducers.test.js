import { calculate } from "../../reducers/calculator";
import calculator from "../../reducers/calculator";
import * as operators from "../../utils/actionTypes";
import {
  onClearClick,
  onNumClick,
  onEqualClick,
  onOpeClick
} from "../../actions/index";

describe("Calculate function", () => {
  it("Calculate handles the PLUS operator", () => {
    expect(calculate(1, 1, operators.PLUS)).toBe(2);
    expect(calculate(5, 5, operators.PLUS)).toBe(10);
  });
  it("Calculate hanlde the SUBTRACT operator", () => {
    expect(calculate(3, 5, operators.SUBTRACT)).toBe(2);
    expect(calculate(34, 234, operators.SUBTRACT)).toBe(200);
  });
  it("Calculate handles the MULTI operator", () => {
    expect(calculate(5, 7, operators.MULTI)).toBe(35);
    expect(calculate(30, 5, operators.MULTI)).toBe(150);
  });
  it("Calculate handle the DIVIDE operator", () => {
    expect(calculate(2, 8, operators.DIVIDE)).toBe(4);
    expect(calculate(9, 99, operators.DIVIDE)).toBe(11);
  });
});

describe("When action is clicked", () => {
  it("When clear is clicked", () => {
    const state = {
      displayValue: "86",
      operator: operators.PLUS,
      previusNumber: 77
    };
    const expectedState = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    expect(calculator(state, onClearClick())).toEqual(expectedState);
    expect(onClearClick()).toEqual({ type: "CLEAR" });
  });
  it("When equal is clicked", () => {
    const state = {
      displayValue: "6",
      operator: operators.PLUS,
      previusNumber: 4
    };
    const expectedState = {
      displayValue: "10",
      operator: null,
      previusNumber: 0
    };
    expect(calculator(state, onEqualClick())).toEqual(expectedState);
    expect(onEqualClick()).toEqual({ type: "INPUT_EQUAL" });
  });
  it("When operator is clicked", () => {
    const state = {
      displayValue: "0",
      operator: operators.PLUS,
      previusNumber: 0,
      lastButton:null
    };
    const expectedState = {
      displayValue: "0",
      operator: operators.PLUS,
      previusNumber: 0,
      lastButton:"PLUS"
    };
    expect(calculator(state, onOpeClick(operators.PLUS))).toEqual(
      expectedState
    );
    expect(onOpeClick(operators.PLUS)).toEqual({
      operator: "PLUS",
      type: "INPUT_OPERATOR"
    });
  });
  it("When operator is clicked (set operator and previusNumber) ", () => {
    const state = {
      displayValue: "4",
      operator: null,
      previusNumber: 0,
      lastButton:null
    };
    const expectedState = {
      displayValue: "0",
      operator: operators.PLUS,
      previusNumber: 4,
      lastButton:"PLUS"
    };
    expect(calculator(state, onOpeClick(operators.PLUS))).toEqual(
      expectedState
    );
    expect(onOpeClick(operators.PLUS)).toEqual({
      operator: "PLUS",
      type: "INPUT_OPERATOR"
    });
  });
  it("When number is clicked", () => {
    const state = {
      displayValue: "9",
      operator: null,
      previusNumber: 0,
      lastButton:null
    };
    const expectedState = {
      displayValue: "91",
      operator: null,
      previusNumber: 0,
      lastButton:1
    };
    expect(calculator(state, onNumClick(1))).toEqual(expectedState);
    expect(onNumClick(1)).toEqual({ number: 1, type: "INPUT_NUMBER" });
  });
});

describe("Complex calculation", () => {
  it("Evaluates the calculation coreectly (2+3+4)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "9",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(2));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(3));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(4));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (2+3+4-4*3", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "15",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(2));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(3));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(4));
    newState = calculator(newState, onOpeClick(operators.SUBTRACT));
    newState = calculator(newState, onNumClick(4));
    newState = calculator(newState, onOpeClick(operators.MULTI));
    newState = calculator(newState, onNumClick(3));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (0-9)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "-9",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(0));
    newState = calculator(newState, onOpeClick(operators.SUBTRACT));
    newState = calculator(newState, onNumClick(9));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (3.6+3.3)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "6.9",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(3.6));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(3.3));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (-30+6)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "-24",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(-30));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(6));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (54/8)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "6.75",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(54));
    newState = calculator(newState, onOpeClick(operators.DIVIDE));
    newState = calculator(newState, onNumClick(8));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (54/8)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "6.75",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(54));
    newState = calculator(newState, onOpeClick(operators.DIVIDE));
    newState = calculator(newState, onNumClick(8));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
  it("Evaluates the calculation coreectly (2+6/2)", () => {
    const state = {
      displayValue: "0",
      operator: null,
      previusNumber: 0
    };
    const expectedState = {
      displayValue: "4",
      operator: null,
      previusNumber: 0
    };

    let newState = calculator(state, onNumClick(2));
    newState = calculator(newState, onOpeClick(operators.PLUS));
    newState = calculator(newState, onNumClick(6));
    newState = calculator(newState, onOpeClick(operators.DIVIDE));
    newState = calculator(newState, onNumClick(2));
    expect(calculator(newState, onEqualClick())).toEqual(expectedState);
  });
});
