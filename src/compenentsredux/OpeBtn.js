import React from 'react';

const OpeBtn = ({operator,name, onClick}) => <button className="button-operator"  onClick={onClick} data-cy={`button${name}`} >{operator}</button>;

export default OpeBtn;