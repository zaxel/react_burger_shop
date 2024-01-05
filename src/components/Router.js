import React from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Landing from './Landing';
import NotFound from './NotFound';

const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path={`/`} element={<Landing />}/>
                <Route path={`/restaurant/:restaurantId`} element={<App />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;