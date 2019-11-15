import React from 'react';
import { shallow } from  'enzyme';
import { Landing } from '../../pages/Landing';

describe('Landing page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Landing/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});