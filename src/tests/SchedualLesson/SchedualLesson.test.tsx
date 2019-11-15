import React from 'react';
import { shallow } from  'enzyme';
import { SchedualLesson } from '../../pages/SchedualLesson';

describe('SchedualLesson page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<SchedualLesson/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});