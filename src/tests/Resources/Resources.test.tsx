import React from 'react';
import { shallow } from  'enzyme';
import { Resources } from '../../pages/Resources';

describe('Resources page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Resources/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});