import React from 'react';

import './App.css';
import Header from '../Header';
import Timeline from '../Timeline';
import { usePageView } from '../../libs/tracking';

const App = () => {
    usePageView();

    return (
        <>
            <Header />
            <Timeline />
        </>
    );
};

export default App;
