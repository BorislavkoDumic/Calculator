import React from 'react';

const Dotbtn = ({name, onClick}) => <button className="button"  onClick={onClick} data-cy={`button${name}`} >.</button>;

export default Dotbtn;