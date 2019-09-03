import React from 'react';

const Result = ({name,result}) => (
    <div>
        <span className="input" data-cy={`display${name}`} >{result}</span>
    </div>
);

export default Result;