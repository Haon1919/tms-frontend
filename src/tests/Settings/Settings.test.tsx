import React from 'react';
import { shallow } from  'enzyme';
import { Settings } from '../../pages/Settings';

describe('Settings page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});