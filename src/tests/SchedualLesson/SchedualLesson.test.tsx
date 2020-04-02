import React from 'react';
import { shallow } from  'enzyme';
import { ScheduleLesson } from '../../pages/ScheduleLesson';

describe('ScheduleLesson page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<ScheduleLesson/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});