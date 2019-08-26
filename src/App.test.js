import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorContainers from './containers/CalculatorContainers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorContainers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
