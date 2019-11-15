import React from 'react';
import { shallow } from  'enzyme';
import { About } from '../../pages/About';

describe('About page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});