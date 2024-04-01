import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([{
    path : '/',
    element : <MainLayout/>,
    children : [{
        path : "/",
        element : <Home/>
    }]
}])

export default Routes;