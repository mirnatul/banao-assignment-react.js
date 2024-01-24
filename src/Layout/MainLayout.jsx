import React from 'react';
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const MainLayout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;