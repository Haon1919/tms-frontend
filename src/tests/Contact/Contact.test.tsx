import React from 'react';
import { shallow } from  'enzyme';
import { Contact } from '../../pages/Contact';

describe('Contact page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Contact/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});