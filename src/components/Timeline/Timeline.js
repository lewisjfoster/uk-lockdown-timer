import React from 'react';
import PropTypes from 'prop-types';

import styles from './Timeline.css';
import lang from '../../libs/lang';

const TimeLineItem = ({ date, content }) => (
    <div className={styles.timelineItem} data-qa="timeline-item">
        <div className={styles.timelineItemContent}>
            <div className={styles.date} data-qa="timeline-item-date">
                {date}
            </div>
            <div data-qa="timeline-item-content">{content}</div>
        </div>
        <div className={styles.circle} data-qa="timeline-item-circle" />
    </div>
);

const Timeline = () => (
    <div className={styles.timeline}>
        {lang.timeline.map((event) => (
            <TimeLineItem key={event.content} date={event.date} content={event.content} />
        ))}
    </div>
);

TimeLineItem.propTypes = {
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Timeline;
