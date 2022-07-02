import React from 'react';
import ReactDOM from 'react-dom/client';

import MyMain from "./components/Main";
import Page from './components/Page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NasaClass from './components/hw1';
// import  Project from './components/project';
// import YahooFinance from './components/hw4';
// import { GridFunction } from './components/hw2';
// import { Bug } from './components/hw3';
// const data = require('./json/finance.json');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Page />}>
                <Route index element={<MyMain />}/>
                {/* <Route path={"/project"} element={<Project />}/> */}
                <Route path={"/project/1"} element={<NasaClass />}/>
                {/* <Route path={"/project/2"} element={<GridFunction />}/>
                <Route path={"/project/3"} element={<Bug />}/>
                <Route path={"/project/4"} element={<YahooFinance data={data}/>}/> */}
            </Route>
        </Routes>
    </BrowserRouter>
);

