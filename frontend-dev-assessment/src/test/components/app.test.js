import React from 'react'
import App from '../../app.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import BoardContainer from '../../containers/BoardContainer.jsx';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render App component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<App />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

