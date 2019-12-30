import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ContextValueWrapper } from "./ContextValueWrapper";

describe('Header', () => {
    const wrapper = mount(
        <BrowserRouter>
            <ContextValueWrapper>
                <Header />
            </ContextValueWrapper>
        </BrowserRouter>
    );
    
    it('should render without errors', () => {
        expect(wrapper.length).toBeGreaterThan(0);
    });

    it('should close the menue on path changes', () => {
        wrapper.find('.hamburger').simulate('click');
        expect(wrapper.find('.menu_pane').hasClass('menu_open')).toEqual(true);

        wrapper.find('.general ul a').at(0).simulate('click', { button: 0 });
        expect(wrapper.find('.menu_pane').hasClass('menu_open')).toEqual(false);
    });

    it('should show the appropriate elements when a user is logged in', () => {
        expect(wrapper.exists('.login')).toEqual(false);
        expect(wrapper.exists('.create_account')).toEqual(false);
        expect(wrapper.exists('.student')).toEqual(true);
        expect(wrapper.exists('.logout')).toEqual(true);
    });

    it('should close the menu when the user logs out', () => {
        wrapper.find('.hamburger').simulate('click');
        expect(wrapper.find('.menu_pane').hasClass('menu_open')).toEqual(true);
        wrapper.find('.logout a').simulate('click', { button: 0 });
        expect(wrapper.find('.menu_pane').hasClass('menu_open')).toEqual(false);
    });

    it('should show the appropriate elements when no user is logged in', () => {
        expect(wrapper.exists('.login')).toEqual(true);
        expect(wrapper.exists('.create_account')).toEqual(true);
        expect(wrapper.exists('.student')).toEqual(false);
        expect(wrapper.exists('.logout')).toEqual(false);
    });
    //TODO: Implement this test when the details of sessions have been discussed with the backend team
    // it('should communicate to the server that the session has been', () => { })
});