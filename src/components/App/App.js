import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-duration-format';

import styles from './App.css';
import lang from '../../libs/lang';
import { lockdownStartDate } from '../../libs/constants';

const App = () => {
    const [now, setNow] = useState(moment());
    const lockdown = moment(lockdownStartDate);
    const diff = moment.duration(now - lockdown);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, [now]);

    return (
        <div className={styles.timer}>
            <div>
                <h2>{lang.title}</h2>
                <h1>{diff.format(`dd [${lang.days}] hh [${lang.hours}] mm [${lang.minutes}] ss [${lang.seconds}]`)}</h1>
            </div>
        </div>
    );
};

export default App;
