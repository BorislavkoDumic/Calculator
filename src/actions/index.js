import * as actionTypes from '../utils/actionTypes'

export const onNumClick = number => ({
    type: actionTypes.INPUT_NUMBER,
    number, 
});
export const onOpeClick = operator => ({
    type:actionTypes.INPUT_OPERATOR,
    operator,
});
export const onClearClick = () =>({
    type: actionTypes.CLEAR,
});
export const onEqualClick = () =>({
    type: actionTypes.INPUT_EQUAL,
});

