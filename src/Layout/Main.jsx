import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-8xl mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;