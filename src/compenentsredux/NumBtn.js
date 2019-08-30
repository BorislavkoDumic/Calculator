import React from 'react';

const NumBtn = ({n, onClick}) => <button className="button" onClick={onClick} data-cy={`button${n}`} >{n}</button>;

export default NumBtn;