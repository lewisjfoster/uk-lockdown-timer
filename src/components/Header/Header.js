import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-duration-format';

import styles from './Header.css';
import lang from '../../libs/lang';
import { lockdownStartDate } from '../../libs/constants';

const useTimer = () => {
    const [now, setNow] = useState(moment());
    const lockdown = moment(lockdownStartDate);
    const diff = moment.duration(now - lockdown);

    const { days, hours, minutes, seconds } = lang.header.timer;

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, [now]);

    return {
        timer: diff.format(`dd [${days}] hh[${hours}] mm[${minutes}] ss[${seconds}]`),
    };
};

const Header = () => {
    const { timer } = useTimer();

    return (
        <div className={styles.header}>
            <div className={styles.headerTitle} data-id="header-title">
                {lang.header.title}
            </div>
            <div className={styles.headerTimer}>
                <div data-id="header-timer-title">{lang.header.timer.title}</div>
                <div data-id="header-timer">{timer}</div>
            </div>
        </div>
    );
};

export default Header;
