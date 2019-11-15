import React from 'react';
import { shallow } from  'enzyme';
import { Calendar } from '../../pages/Calendar';

describe('Calendar page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Calendar />);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});