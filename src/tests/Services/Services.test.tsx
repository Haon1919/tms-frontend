import React from 'react';
import { shallow } from  'enzyme';
import { Services } from '../../pages/Services';

describe('Services page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Services/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});