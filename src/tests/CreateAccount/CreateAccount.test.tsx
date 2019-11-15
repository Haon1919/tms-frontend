import React from 'react';
import { shallow } from  'enzyme';
import { CreateAccount } from '../../pages/CreateAccount';

describe('CreateAccount page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<CreateAccount />);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});