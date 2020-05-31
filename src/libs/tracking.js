/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { googleAnalyticsID } from './constants';

ReactGA.initialize(googleAnalyticsID);

export const usePageView = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);
};
