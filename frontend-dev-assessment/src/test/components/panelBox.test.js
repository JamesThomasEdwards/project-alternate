import React from 'react'
import PanelBox from '../../components/PanelBox.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render PanelBox component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<PanelBox />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});