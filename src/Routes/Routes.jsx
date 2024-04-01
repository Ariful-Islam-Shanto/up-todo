import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Dashboard from '../Layouts/Dashboard';

const Routes = createBrowserRouter([{
    path : '/',
    element : <MainLayout/>,
    children : [{
        path : "/",
        element : <Home/>
    }]
}, {
    path : 'dashboard',
    element : <Dashboard/>
}

])

export default Routes;