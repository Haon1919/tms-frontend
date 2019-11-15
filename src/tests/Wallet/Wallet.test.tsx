import React from 'react';
import { shallow } from  'enzyme';
import { Wallet } from '../../pages/Wallet';

describe('Wallet page', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Wallet/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});