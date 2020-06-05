import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import 'moment-duration-format';

import Header from '.';
import lang from '../../libs/lang';
import { lockdownStartDate } from '../../libs/constants';

describe('Header', () => {
    it('should render the component', () => {
        const wrapper = mount(<Header />);

        expect(wrapper.find(Header).exists()).toBeTruthy();
    });

    it('should render the correct title', () => {
        const wrapper = mount(<Header />);

        expect(wrapper.find('[data-id="header-title"]').text()).toBe(lang.header.title);
    });

    it('should render the correct timer with a title', () => {
        const wrapper = mount(<Header />);

        const { title, days, hours, minutes, seconds } = lang.header.timer;

        const now = moment();
        const lockdown = moment(lockdownStartDate);
        const diff = moment.duration(now - lockdown);

        expect(wrapper.find('[data-id="header-timer-title"]').text()).toBe(title);
        expect(wrapper.find('[data-id="header-timer"]').text()).toBe(
            diff.format(`dd [${days}] hh[${hours}] mm[${minutes}] ss[${seconds}]`),
        );
    });
});
