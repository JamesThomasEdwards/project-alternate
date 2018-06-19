// React;
import React from 'react';
// File;
import Header from '../../components/Header.jsx';
// Testing;
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

describe('Header component test', () => {
    describe('<Header />', () => {
        let wrapper = shallow(<Header headerDataOne='30%'
            headerDataTwo='$2000000'
            headerDataThree='85%'
            toggleHeaderContent={undefined}
            headerDisplay={undefined} />)
        it('Renders a <nav>', () => {
            expect(wrapper.type()).toEqual('nav');
        });
    });
});
