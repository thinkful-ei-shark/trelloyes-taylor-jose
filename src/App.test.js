import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store';

it('renders without crashing', () => {
  const element = document.createElement('div');

  ReactDOM.render(<App store={STORE} />, element);

  ReactDOM.unmountComponentAtNode(element);
});
