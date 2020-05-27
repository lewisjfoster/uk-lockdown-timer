import React from 'react';
import { mount } from 'enzyme';
import ReactGA from 'react-ga';
import moment from 'moment';
import 'moment-duration-format';

import App from './App';
import lang from '../../libs/lang';
import { lockdownStartDate } from '../../libs/constants';

jest.mock('react-ga');

describe('App', () => {
    it('should render the component', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(App)).toBeTruthy();
    });

    it('should render the correct title', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find('h2').text()).toBe(lang.title);
    });

    it('should render the correct timer', () => {
        const wrapper = mount(<App />);

        const now = moment();
        const lockdown = moment(lockdownStartDate);
        const diff = moment.duration(now - lockdown);

        expect(wrapper.find('h1').text()).toBe(
            diff.format(`dd [${lang.days}] hh [${lang.hours}] mm [${lang.minutes}] ss [${lang.seconds}]`),
        );
    });

    it('should dispatch the correct pageview event', () => {
        mount(<App />);

        expect(ReactGA.initialize).toBeCalled();
        expect(ReactGA.pageview).toHaveBeenCalledWith('/');
    });
});
