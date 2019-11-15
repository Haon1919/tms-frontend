import React from 'react';
import { shallow } from  'enzyme';
import { Blog } from '../../pages/Blog';

describe('Blog page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Blog/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});