import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

// smoke test
it('renders without crashing', () => {
    const element = document.createElement('div');

    ReactDOM.render(<List cards={[]} />, element);

    ReactDOM.unmountComponentAtNode(element);
});



// snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header='string' cards={['l']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});