import React from 'react';
import { mount } from 'enzyme';

import Timeline from '.';
import lang from '../../libs/lang';

describe('Timeline', () => {
    it('should render the component', () => {
        const wrapper = mount(<Timeline />);

        expect(wrapper.find(Timeline)).toBeTruthy();
    });

    it('should render the TimelineItems', () => {
        const wrapper = mount(<Timeline />);

        const { timeline } = lang;
        const timelineItems = wrapper.find('[data-qa="timeline-item"]');
        expect(timelineItems.length).toBe(timeline.length);

        timelineItems.forEach((item, index) => {
            expect(item.find('[data-qa="timeline-item-date"]').text()).toBe(timeline[index].date);
            expect(item.find('[data-qa="timeline-item-content"]').text()).toBe(timeline[index].content);
            expect(item.find('[data-qa="timeline-item-circle"]')).toBeTruthy();
        });
    });
});
