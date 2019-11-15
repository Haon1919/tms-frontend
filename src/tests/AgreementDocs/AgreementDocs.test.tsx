import React from 'react';
import { shallow } from  'enzyme';
import { AgreementDocs } from '../../pages/AgreementDocs';

describe('AgreementDocs', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<AgreementDocs/>);
        expect(wrapper.find('section').length).toBeGreaterThanOrEqual(1);
    });
});