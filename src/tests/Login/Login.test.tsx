import React from 'react';
import { shallow } from  'enzyme';
import { Login } from '../../pages/Login';

describe('Login page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});