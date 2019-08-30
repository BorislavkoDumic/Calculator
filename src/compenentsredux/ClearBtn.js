import React from 'react';

const ClearBtn = ({onClick}) => <button className="button-operator" onClick={onClick} data-cy={`button${'Clear'}`} >C</button>

export default ClearBtn