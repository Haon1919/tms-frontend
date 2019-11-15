import React from 'react';
import { shallow } from  'enzyme';
import { Dashboard } from '../../pages/Dashboard';

describe('Dashboard page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Dashboard/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});