import React from 'react';

const OpeBtn = ({operator, onClick}) => <button className="button-operator"  onClick={onClick}>{operator}</button>;

export default OpeBtn;