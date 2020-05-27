/* eslint-disable import/prefer-default-export */
import ReactGA from 'react-ga';
import { googleAnalyticsID } from './constants';

ReactGA.initialize(googleAnalyticsID);

export const trackPageView = () => {
    ReactGA.pageview(window.location.pathname);
};
