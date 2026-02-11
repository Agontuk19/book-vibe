import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            
            <div className="grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;