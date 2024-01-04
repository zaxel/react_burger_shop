import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Landing from './Landing';
import NotFound from './NotFound';

const Router = () => {
    return(
        <BrowserRouter basename='/react_boorger_shop'>
            <Routes>
                <Route path={`/`} element={<Landing />}/>
                <Route path={`/restaurant/:restaurantId`} element={<App />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;