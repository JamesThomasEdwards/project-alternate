import React from 'react'
import Header from '../../components/Header.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render Header component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

describe('React unit tests', () => {
    describe('<Header />', () => {
        let wrapper = shallow(<Header headerDataOne='30%'
            headerDataTwo='$2000000'
            headerDataThree='85%'
            toggleHeaderContent={undefined}
            headerDisplay={undefined} />)
        it('Renders a <div> with class "square"', () => {
            expect(wrapper.type()).toEqual('nav');
        });
    });
});
