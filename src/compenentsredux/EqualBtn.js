import React from 'react';

const EqualBtn = ({name,onClick}) => <button className="button" onClick={onClick} data-cy={`button${name}`} >=</button>;

export default EqualBtn;