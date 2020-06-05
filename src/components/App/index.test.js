import React from 'react';
import { mount } from 'enzyme';
import ReactGA from 'react-ga';

import App from '.';
import Header from '../Header';
import Timeline from '../Timeline';

jest.mock('react-ga');

describe('App', () => {
    it('should render the component', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(App).exists()).toBeTruthy();
    });

    it('should render a header', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Header).exists()).toBeTruthy();
    });

    it('should render a timeline', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Timeline).exists()).toBeTruthy();
    });

    it('should dispatch the correct pageview event', () => {
        mount(<App />);

        expect(ReactGA.initialize).toBeCalled();
        expect(ReactGA.pageview).toHaveBeenCalledWith('/');
    });
});
