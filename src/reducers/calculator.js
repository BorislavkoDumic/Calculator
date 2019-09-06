import * as actionTypes from "../utils/actionTypes";
import * as operators from "../utils/actionTypes";

const initialState = {
  displayValue: "0",
  operator: null,
  previusNumber: 0,
  lastButton: null
};

export const calculate = (displayValue, previusNumber, operator) => {
  switch (operator) {
    case operators.PLUS:
      return previusNumber + displayValue;
    case operators.SUBTRACT:
      return previusNumber - displayValue;
    case operators.MULTI:
      return previusNumber * displayValue;
    case operators.DIVIDE:
      return previusNumber / displayValue;
    default:
      return displayValue;
  }
};


const calculator = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.INPUT_NUMBER:
        return {
          ...state,
          lastButton: action.number,
          displayValue:
            state.displayValue === "0"
              ? action.number.toString()
              : `${state.displayValue}${action.number}`
        };

    case actionTypes.INPUT_OPERATOR:
      let inputOperator = {
        ...state,
        displayValue: "0",
        operator: action.operator
      };
      if (state.operator && parseFloat(state.displayValue) !== 0) {
          inputOperator.previusNumber = calculate(
          parseFloat(state.displayValue),
          state.previusNumber,
          state.operator
        );
      } else if (!isNaN(inputOperator.lastButton)) {
        inputOperator.previusNumber = parseFloat(state.displayValue);
      }
      inputOperator.lastButton = action.operator;
      return inputOperator;

    case actionTypes.INPUT_EQUAL:
      return {
        displayValue: calculate(
          parseFloat(state.displayValue),
          state.previusNumber,
          state.operator
        ).toString(),
        operator: null,
        previusNumber: 0
      };
    case actionTypes.CLEAR:
      return {
        displayValue: "0",
        operator: null,
        previusNumber: 0
      };
    default:
      return state;
  }
};

export default calculator;
