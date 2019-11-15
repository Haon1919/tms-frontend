import React from 'react';
import { shallow } from  'enzyme';
import { Lesson } from '../../pages/Lesson';

describe('Lesson page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Lesson/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});