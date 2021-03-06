import React from 'react';
import { togglePanelContent, toggleHeaderContent } from '../../containers/BoardContainer.jsx';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import BoardContainer from '../../containers/BoardContainer.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../../components/Board.jsx';

configure({ adapter: new Adapter() });

test('should render BoardContainer component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<BoardContainer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

describe('BoardContainer test', () => {
    describe('<BoardContainer />', () => {
        const wrapper = shallow(<BoardContainer id={1} key={1} />);
        it('Renders a <div>', () => {
            expect(wrapper.type()).toEqual('div');
        });
    });
});

